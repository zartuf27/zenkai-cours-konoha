---
name: zenkai-cours
description: Ajouter, modifier ou valider un cours dans l'app Zenkai (gestion_cours_zenkai.html). À utiliser dès qu'il s'agit d'intégrer un support de cours (.docx, .md, .txt, texte collé) dans l'application, de personnaliser un cours existant par type de sensei ou nature de chakra, de passer un cours de « en attente de validation » à validé, ou de vérifier la synchronisation HTML / donnees_cours.json.
---

# Ajouter un cours à l'app Zenkai

Un cours n'est **jamais** une seule insertion : il vit dans 5 à 8 constantes du fichier
`gestion_cours_zenkai.html` (~9000 lignes, tout-en-un) **plus** `donnees_cours.json`.
Oublier une constante donne un cours muet (pas de citation, pas de marqueurs) sans aucune erreur JS.

## 1. Lire la source et décider du cadrage

Avant d'écrire quoi que ce soit, déterminer :

| Champ | Valeurs possibles |
|-------|-------------------|
| `cat` | `theorique` ou `pratique` |
| `mod` | Fondamentaux, Chakra, Combat, Taijutsu, Ninjutsu, Tactique, Spécialisation, Terrain |
| `rang` | Apprenti Genin, Genin, Genin Confirmé, Chūnin, Konin, Tokubetsu Jōnin, Jōnin, Commandant Jōnin, Sanin, Hokage |
| `prereq` | ids d'autres cours |
| `auteur` | le sensei qui a écrit le support, ou `null` |
| `validated` | `false` si le cours n'est pas encore approuvé — sinon, ne pas mettre la clé |

Chercher un cours voisin déjà intégré et le prendre pour modèle : un cours de nature
(`rai_rayon`), un cours de voie de lame (`kenjutsu_double`), un brouillon (`eloquence_absurde`).

## 2. Les composants à écrire

Insérer dans cet ordre, en se calant sur le cours modèle :

1. **`D.cours[]`** — l'objet JSON inline (ligne `const D={`, une seule ligne géante).
   Placer le cours à sa place logique dans l'ordre pédagogique, pas à la fin.
   Chaque `techs[]` = une case à cocher pour le sensei : `{id, nom, desc, type, etapes[], mudras[], rang, prereq[]}`.
   `type` ∈ connaissance 📖, mudras 🤞, taijutsu 🥋, chakra 🔥, tactique 🎯, ninjutsu ⚡.
2. **`CONTENU[id]`** — le guide oral (onglet 🎤 Support oral). HTML dans un template literal.
   Structure habituelle : `<h2>` titre, encadré source, OUVERTURE, PARTIE 1..n, FERMETURE.
3. **`NOTES_PROF[id]`** — `{copy, html}`. `copy` est **collé en jeu devant les élèves**.
4. **`SENSEI_QUOTES[id]`** — **les 16 types**, sans exception :
   `sage, dur, guerrier, bienveillant, mysterieux, stratege, veteran, fraternel, ironique, ermite, ombre, sensei_noble, rebelle, mentor, chasseur, tacticien`.
5. **`COURS_FLAVOR[id]`** — `{intro:{16 types}, nature:{katon, futon, raiton, doton, suiton}}`.
6. **`RESUME[id]`** — bullet points « À retenir » (cours théoriques surtout).
7. Filtrages, seulement si pertinent : `COURS_NATURE` (nature), `COURS_SPEC` (taijutsu/kenjutsu),
   `COURS_LAME` (simple/double), `SPEC_FLAVOR` (5 variantes : taijutsu, kenjutsu, simple, double, lourde).
8. **`donnees_cours.json`** — le même objet `D.cours[]`, **au même index**.

### Fallback par nature
Les 20 techniques de nature n'ont pas d'entrée propre : elles retombent sur
`SENSEI_QUOTES['_'+nature]` et `COURS_FLAVOR['_'+nature]`. Une entrée à l'`id` du cours prend le pas.

## 3. Les deux règles de contenu à ne jamais enfreindre

- **Zéro HRP dans tout ce qui est copiable** (`NOTES_PROF.copy`, annonces, bilan Discord, mode
  Présentation, `CONTENU` lu à haute voix). Interdits : « professeur », « joueur », « dégâts »,
  « zone d'effet », « clic », « PvP », « stats ». « Sensei » est RP et reste.
  L'interface (boutons, labels, tooltips, commentaires de code) peut être HRP.
- **Pas de quiz ni d'activité ludique** ajoutés d'office : les supports sont pour le sensei,
  pas pour les élèves. Les annotations pédagogiques (« Question à poser », « Point clé à marteler »)
  sont faites pour être lues par le sensei et sont donc autorisées.

## 4. Éviter les redites

Avant d'écrire une partie, vérifier qu'elle n'est pas déjà traitée par un cours prérequis :
les 8 vertus du Bushidō sont dans `kenjutsu_cours`, l'engagement à vie aussi, l'échauffement
de la voie simple est dans `kenj_penetrante`. Dans le cours qui suit, **renvoyer** au cours
précédent en une ligne grise plutôt que de redérouler.

Détection automatique des phrases dupliquées entre cours :

```bash
node -e "
const m=require('<extrait>/_data.js');
const norm=t=>t.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
const ph={}; for(const id of Object.keys(m.CONTENU)) for(const p of norm(m.CONTENU[id]).split(/(?<=[.!?»])\s+/)){const k=p.trim(); if(k.length<45)continue;(ph[k]=ph[k]||[]).push(id);}
Object.entries(ph).filter(([k,v])=>new Set(v).size>1).forEach(([k,v])=>console.log(v.join('+'),':',k.slice(0,70)));
"
```

## 5. Vérifier avant de committer

Une seule commande couvre tout :

```bash
node tools/verifier.mjs
```

Syntaxe JS, ids et prérequis, les 16 types et les 5 natures, couverture, clés
orphelines, vocabulaire hors-RP dans le copiable, redites entre supports,
synchronisation HTML ↔ JSON, chargement des bibliothèques, et un test de rendu dans
un DOM simulé (11 vues et tous les cours visibles). Environ 1,4 s.

Un hook `PostToolUse` le lance déjà à chaque édition de `gestion_cours_zenkai.html`
ou `donnees_cours.json` et bloque si quelque chose casse — inutile de l'appeler après
chaque modification, mais le relancer avant un commit reste une bonne habitude.

## 6. Écriture du HTML : passer par un script Python

Ne pas éditer à la main une ligne JSON de 60 KB. Écrire un script Python dans le scratchpad qui :
- charge le fichier en `utf-8`, réécrit avec `newline=''` (préserver les fins de ligne),
- insère par **ancres textuelles exactes** et **échoue bruyamment** si une ancre manque
  (`raise SystemExit('ANCRE MANQUANTE: ...')`) — jamais de remplacement silencieux,
- échappe les apostrophes pour les chaînes JS entre quotes simples.

## 7. Terminer : le « save complet »

Dans cet ordre, sans demander confirmation quand l'utilisateur dit « save complet » :

1. Mettre à jour `CLAUDE.md` (nombre de cours, tableau du module, nouvelles constantes, nouveaux écarts).
2. Bumper `CACHE_NAME` dans `sw.js` (`zenkai-vN` → `zenkai-vN+1`) — sinon les profs gardent l'ancienne version en cache.
3. `graphify update .` ; si des fichiers `.md` / `.html` ont changé, l'extraction sémantique passe par la skill `graphify --update`.
4. `git add` des fichiers modifiés, commit descriptif, `git push` (déploiement GitHub Pages ~1 min).
