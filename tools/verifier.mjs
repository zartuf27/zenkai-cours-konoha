#!/usr/bin/env node
// ============================================================================
// Vérificateur de l'app Zenkai
//
//   node tools/verifier.mjs            audit complet
//   node tools/verifier.mjs --quiet    ne parle qu'en cas de problème (hooks)
//   node tools/verifier.mjs --no-smoke saute le test navigateur
//   node tools/verifier.mjs --hook       lit le JSON d'un hook sur stdin et ne
//                                      verifie que si l'app a ete touchee
//
// Sort en 1 si quelque chose est cassé. Le test de fumée (jsdom) est optionnel :
// s'il n'est pas installé, l'audit statique tourne quand même.
// ============================================================================
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const HTML = join(ROOT, 'gestion_cours_zenkai.html');
const JSONF = join(ROOT, 'donnees_cours.json');

const QUIET = process.argv.includes('--quiet') || process.argv.includes('--hook');
const NO_SMOKE = process.argv.includes('--no-smoke');
const HOOK = process.argv.includes('--hook');

// Mode hook : Claude Code envoie sur stdin le JSON de l'appel d'outil. On ne
// verifie que si le fichier touche est l'app ou ses donnees, et on sort en 2
// quand quelque chose casse (le code 2 remonte stderr au modele).
if (HOOK) {
  const chunks = [];
  for await (const c of process.stdin) chunks.push(c);
  let touched = '';
  try {
    const p = JSON.parse(chunks.join('') || '{}');
    touched = p?.tool_input?.file_path || p?.tool_response?.filePath || '';
  } catch { /* stdin vide ou illisible : on verifie quand meme */ }
  const norm = String(touched).split('\\').join('/');
  const surveille = /(?:gestion_cours_zenkai[.]html|donnees_cours[.]json)$/.test(norm);
  if (touched && !surveille) process.exit(0);
}

const problems = [];
const notes = [];
const fail = m => problems.push(m);
const note = m => notes.push(m);

const TYPES = ['sage', 'dur', 'guerrier', 'bienveillant', 'mysterieux', 'stratege', 'veteran',
  'fraternel', 'ironique', 'ermite', 'ombre', 'sensei_noble', 'rebelle', 'mentor', 'chasseur', 'tacticien'];
const NATURES = ['katon', 'futon', 'raiton', 'doton', 'suiton'];
// Vocabulaire de jeu vidéo : interdit partout où le texte finit collé en jeu.
const HRP = ['professeur', 'joueur', 'hrp', 'clic ', 'pvp', 'dégâts', 'zone d\'effet',
  'cooldown', 'respawn', 'loot', 'pnj', 'buff', 'nerf', 'hitbox'];

const src = readFileSync(HTML, 'utf8');

// ---------------------------------------------------------------- syntaxe JS
const scripts = [...src.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const tmp = join(mkdtempSync(join(tmpdir(), 'zenkai-')), 'app.js');
writeFileSync(tmp, scripts.join('\n'), 'utf8');
try {
  execFileSync(process.execPath, ['--check', tmp], { stdio: 'pipe' });
  note(`syntaxe JS valide (${scripts.length} bloc(s), ${Math.round(scripts.join('').length / 1024)} Ko)`);
} catch (e) {
  fail('syntaxe JS invalide :\n' + (e.stderr?.toString() || e.message).split('\n').slice(0, 6).join('\n'));
}

// ---------------------------------------------------------------- constantes
// On isole le bloc de données (de `const D=` jusqu'à la fin de COURS_LAME) et on
// l'évalue : c'est de la donnée pure, pas du DOM.
let M = null;
try {
  const a = src.indexOf('const D={');
  const b = src.indexOf('\n', src.indexOf('const COURS_LAME='));
  if (a === -1 || b === -1) throw new Error('bornes du bloc de données introuvables');
  const body = src.slice(a, b) +
    '\nreturn {D,CONTENU,NOTES_PROF,SENSEI_QUOTES,COURS_FLAVOR,RESUME,COURS_NATURE,COURS_SPEC,COURS_LAME,SPEC_FLAVOR,NATURE_CLOSING};';
  M = new Function(body)();
} catch (e) {
  fail('impossible de charger les constantes : ' + e.message);
}

if (M) {
  const { D, CONTENU, NOTES_PROF, SENSEI_QUOTES, COURS_FLAVOR, COURS_NATURE,
    COURS_SPEC, COURS_LAME, SPEC_FLAVOR, NATURE_CLOSING } = M;
  const ids = new Set(D.cours.map(c => c.id));

  // doublons, prérequis, rangs
  const seen = new Set();
  for (const c of D.cours) {
    if (seen.has(c.id)) fail(`cours en double : ${c.id}`);
    seen.add(c.id);
    for (const p of c.prereq || []) if (!ids.has(p)) fail(`prérequis inconnu : ${c.id} → ${p}`);
  }
  const rangs = new Set([...D.rangs, 'Tous grades']);
  const techIds = new Map();
  for (const c of D.cours) {
    if (!rangs.has(c.rang)) fail(`rang invalide : ${c.id} = « ${c.rang} »`);
    for (const t of c.techs) {
      if (techIds.has(t.id)) fail(`technique en double : ${t.id} (${techIds.get(t.id)} et ${c.id})`);
      techIds.set(t.id, c.id);
      if (!rangs.has(t.rang)) fail(`rang de technique invalide : ${t.id} = « ${t.rang} »`);
    }
  }
  note(`${D.cours.length} cours, ${techIds.size} techniques, ${new Set(D.cours.map(c => c.mod)).size} modules`);

  // clés orphelines
  for (const [name, obj] of Object.entries({ CONTENU, NOTES_PROF, SENSEI_QUOTES, COURS_FLAVOR,
    COURS_NATURE, COURS_SPEC, COURS_LAME, SPEC_FLAVOR }))
    for (const k of Object.keys(obj))
      if (!ids.has(k) && !k.startsWith('_')) fail(`${name} : clé orpheline « ${k} » (aucun cours de cet id)`);

  // complétude de la personnalisation
  for (const [k, v] of Object.entries(SENSEI_QUOTES)) {
    const miss = TYPES.filter(t => !v[t]);
    if (miss.length) fail(`SENSEI_QUOTES[${k}] : types manquants → ${miss.join(', ')}`);
  }
  for (const [k, v] of Object.entries(COURS_FLAVOR)) {
    const mi = TYPES.filter(t => !(v.intro || {})[t]);
    const mn = NATURES.filter(n => !(v.nature || {})[n]);
    if (mi.length) fail(`COURS_FLAVOR[${k}] : intros manquantes → ${mi.join(', ')}`);
    if (mn.length) fail(`COURS_FLAVOR[${k}] : natures manquantes → ${mn.join(', ')}`);
  }
  for (const [k, v] of Object.entries(SPEC_FLAVOR)) {
    const mv = ['taijutsu', 'kenjutsu', 'simple', 'double', 'lourde'].filter(x => !v[x]);
    if (mv.length) fail(`SPEC_FLAVOR[${k}] : variantes manquantes → ${mv.join(', ')}`);
  }
  for (const n of NATURES)
    for (const mod of new Set(D.cours.map(c => c.mod)))
      if (!NATURE_CLOSING[n]?.[mod]) fail(`NATURE_CLOSING[${n}][${mod}] manquant`);

  // couverture : chaque cours doit parler au sensei
  const sansContenu = D.cours.filter(c => !CONTENU[c.id]).map(c => c.id);
  const sansNotes = D.cours.filter(c => !NOTES_PROF[c.id]).map(c => c.id);
  const sansFlavor = D.cours.filter(c => !COURS_FLAVOR[c.id] && !COURS_NATURE[c.id]).map(c => c.id);
  if (sansContenu.length) fail(`cours sans CONTENU : ${sansContenu.join(', ')}`);
  if (sansNotes.length) fail(`cours sans NOTES_PROF : ${sansNotes.join(', ')}`);
  if (sansFlavor.length) fail(`cours sans marqueurs personnalisés : ${sansFlavor.join(', ')}`);
  note(`couverture : ${D.cours.length}/${D.cours.length} en contenu, notes et marqueurs`);

  // zéro HRP dans ce qui finit collé en jeu
  for (const [k, v] of Object.entries(NOTES_PROF)) {
    const t = (v.copy || '').toLowerCase();
    const found = HRP.filter(w => t.includes(w));
    if (found.length) fail(`NOTES_PROF[${k}].copy contient du vocabulaire hors-RP : ${found.join(', ')}`);
    if (/<[a-z]/i.test(v.copy || '')) fail(`NOTES_PROF[${k}].copy contient du HTML brut`);
  }

  // redites entre cours : une même phrase longue dans deux supports oraux
  const strip = t => t.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const phrases = new Map();
  for (const [id, html] of Object.entries(CONTENU))
    for (const p of strip(html).split(/(?<=[.!?»])\s+/)) {
      const k = p.trim();
      if (k.length < 60) continue;
      if (!phrases.has(k)) phrases.set(k, new Set());
      phrases.get(k).add(id);
    }
  // Les techniques d'une même nature partagent volontairement leur introduction
  // (fallback `_<nature>`) : ce n'est pas une redite, c'est le mécanisme.
  const memeNature = set => {
    const nats = [...set].map(id => COURS_NATURE[id]);
    return nats.every(n => n && n === nats[0]);
  };
  const dup = [...phrases].filter(([, v]) => v.size > 1 && !memeNature(v));
  if (dup.length) {
    note(`${dup.length} phrase(s) répétée(s) entre cours sans lien de nature — à relire :`);
    for (const [p, v] of dup.slice(0, 6)) note(`   ${[...v].join(' + ')} : « ${p.slice(0, 70)}… »`);
  } else note('aucune redite entre supports oraux');

  // synchronisation avec donnees_cours.json
  try {
    const dj = JSON.parse(readFileSync(JSONF, 'utf8'));
    const ih = D.cours.map(c => c.id), ij = dj.cours.map(c => c.id);
    if (ih.length !== ij.length) fail(`désynchronisé : ${ih.length} cours dans le HTML, ${ij.length} dans le JSON`);
    else if (ih.join() !== ij.join()) {
      const manquants = ih.filter(x => !ij.includes(x)), enTrop = ij.filter(x => !ih.includes(x));
      if (manquants.length) fail(`absent de donnees_cours.json : ${manquants.join(', ')}`);
      if (enTrop.length) fail(`absent du HTML : ${enTrop.join(', ')}`);
      if (!manquants.length && !enTrop.length) fail('même cours de part et d\'autre, mais ordre différent');
    } else {
      const diff = ih.filter((id, i) => JSON.stringify(D.cours[i]) !== JSON.stringify(dj.cours[i]));
      if (diff.length) fail(`contenu divergent entre HTML et JSON : ${diff.join(', ')}`);
      else note(`HTML et donnees_cours.json synchronisés (${ih.length} cours)`);
    }
  } catch (e) { fail('lecture de donnees_cours.json : ' + e.message); }
}

// ---------------------------------------------------------------- chargement
const externes = [...src.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m => m[1]);
if (externes.length) fail(`scripts chargés au démarrage (ils bloquent le premier affichage et l'usage hors-ligne) :\n   ${externes.join('\n   ')}`);
const sri = (src.match(/sha384-/g) || []).length;
const libs = (src.match(/cdn\.jsdelivr\.net/g) || []).length;
if (libs && sri < 4) fail(`${libs} référence(s) CDN mais seulement ${sri} empreinte(s) sha384`);
else if (libs) note(`${sri} bibliothèques à la demande, toutes avec empreinte d'intégrité`);
if (src.includes('@import url(')) fail('@import dans le CSS : bloquant, préférer un <link> dans le <head>');

// ---------------------------------------------------------------- cache PWA
try {
  const sw = readFileSync(join(ROOT, 'sw.js'), 'utf8');
  const v = sw.match(/CACHE_NAME\s*=\s*'zenkai-v(\d+)'/);
  if (v) note(`service worker : cache zenkai-v${v[1]}`);
  else fail('CACHE_NAME introuvable dans sw.js');
} catch { fail('sw.js illisible'); }

// ---------------------------------------------------------------- smoke test
if (!NO_SMOKE) {
  try {
    const { JSDOM, VirtualConsole } = await import('jsdom');
    const vc = new VirtualConsole();
    const runtime = [];
    vc.on('jsdomError', e => { const m = e.message || String(e); if (!/Not implemented/i.test(m)) runtime.push(m); });
    vc.on('error', (...a) => runtime.push(a.join(' ')));
    const dom = new JSDOM(src, { runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc,
      url: 'https://zartuf27.github.io/zenkai-cours-konoha/gestion_cours_zenkai.html' });
    const w = dom.window;
    w.scrollTo = () => {};
    if (w.Element) w.Element.prototype.scrollIntoView = function () {};
    await new Promise(r => w.addEventListener('load', r, { once: true }));
    await new Promise(r => setTimeout(r, 400));
    const ev = c => w.eval(c);
    ev(`S.sensei={prenom:'Test',nom:'Sensei',nature:'raiton',type:'stratege',rang:'Jōnin',specCombat:'kenjutsu',typeLame:'simple',signe:'',signature:''};save();buildSidebar();`);
    let vues = 0;
    for (const v of ev('VIEWS.map(v=>v.id)')) {
      ev(`nav('${v}')`);
      if (w.document.getElementById('content').innerHTML.length < 50) fail(`vue « ${v} » : rendu vide`);
      else vues++;
    }
    let cours = 0;
    for (const id of ev('D.cours.filter(c=>coursVisibleForSensei(c)).map(c=>c.id)')) {
      ev(`openCours('${id}')`);
      if (w.document.getElementById('content').innerHTML.length < 200) fail(`cours « ${id} » : rendu vide`);
      else cours++;
    }
    ev('celebrate()'); ev('generateQR()');   // doivent échouer sans casser, hors-ligne
    await new Promise(r => setTimeout(r, 200));
    runtime.forEach(m => fail('erreur à l\'exécution : ' + m));
    note(`test navigateur : ${vues} vues et ${cours} cours rendus sans erreur`);
    dom.window.close();
  } catch (e) {
    if (e.code === 'ERR_MODULE_NOT_FOUND') note('test navigateur ignoré (jsdom non installé — `npm i -D jsdom` pour l\'activer)');
    else fail('test navigateur : ' + e.message);
  }
}

// ---------------------------------------------------------------- verdict
if (problems.length) {
  console.error(`\n✗ ${problems.length} problème(s) dans l'app Zenkai :\n`);
  problems.forEach(p => console.error('  • ' + p));
  console.error('');
  process.exit(HOOK ? 2 : 1);   // 2 en mode hook : remonte l'erreur au modele
}
if (!QUIET) {
  console.log('\n✓ Vérification de l\'app Zenkai\n');
  notes.forEach(n => console.log('  ' + n));
  console.log('');
}
