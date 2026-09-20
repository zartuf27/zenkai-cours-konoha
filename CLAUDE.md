# CLAUDE.md — Cours RP Zenkai (Konoha)

## Contexte du projet

Ce dossier contient les cours RP Naruto du serveur **Zenkai**, village de **Konoha**. L'application HTML principale (`gestion_cours_zenkai.html`) est un outil de gestion **multi-sensei** : chaque professeur personnalise son profil et l'interface s'adapte entièrement (nom, nature, personnalité, annonces, citations, skin visuel).

- **Repo GitHub** : https://github.com/zartuf27/zenkai-cours-konoha (public)
- **App en ligne (GitHub Pages)** : https://zartuf27.github.io/zenkai-cours-konoha/gestion_cours_zenkai.html
- **Lore serveur** : dossier frère `C:\Users\ludov\Desktop\Zenkai-RP` (Vault Obsidian, candidatures, règles)
- **Temporalité** : 1 semaine IRL = 1 an RP / 1 session (18h→4h) = 1 mois IG

## Déploiement & partage

L'app est hébergée via **GitHub Pages**. Pour mettre à jour chez tous les profs :
```bash
git add gestion_cours_zenkai.html
git commit -m "description du changement"
git push
```
Déploiement auto en ~1 min. Chaque prof ouvre le même lien, son profil/progression reste dans **son** localStorage (aucun conflit).

| Partagé (HTML sur GitHub) | Personnel (localStorage du prof) |
|---------------------------|----------------------------------|
| Cours, contenu, techniques, notes | Profil sensei (nom, nature, type, rang...) |
| Citations, annonces, skins | Progression (checkboxes) |
| Design, animations | Historique des cours donnés |
| Références (mudras, armes, natures) | Mode sombre, animations on/off |

## Structure du dossier

```
gestion_cours_zenkai.html  — App principale (~8930 lignes, tout-en-un)
sw.js                      — Service Worker PWA (cache hors-ligne)
manifest.json              — Manifest PWA (installable sur mobile)
icon-192.svg               — Icône PWA (symbole Konoha)
donnees_cours.json         — Données structurées (synchronisé avec le HTML)
img_cycle_natures.png      — Schéma cycle des 5 natures (utilisé dans les cours)
img_kekkei_genkai.png      — Diagramme des Kekkei Genkai (utilisé dans les cours)
CLAUDE.md                  — Ce fichier (instructions pour Claude)
GUIDE-PARTAGE.md           — Guide multi-sensei (déploiement, profil, progression)
.gitignore                 — Exclut images lourdes, .docx sources, .claude/, cache graphify
théorique/                 — Cours théoriques (.docx, .md) + images + directive format + propositions
Pratique/                  — 15 cours pratiques (.docx) dont nature pratique et kenjutsu
Cours du sensei renard/    — Cours d'un autre sensei (7 .md + HTML + script)
Hishiba/                   — Assets visuels (images de référence)
graphify-out/              — Graphe contextuel Graphify (graph.json, rapport, converted/)
.claude/skills/            — Skills projet versionnées (zenkai-cours : procédure d'ajout d'un cours)
```

## Les 54 cours (par module)

| Module | Cours |
|--------|-------|
| Fondamentaux | Règles d'Or, Nindo, Volonté du Feu, Histoire de Konoha, Règlement Intérieur |
| Chakra | Décomposition du Chakra, Mudras, Nature de Chakra |
| Combat | Théorie Taijutsu, Armes Ninja, Kenjutsu — Initiation, Kenjutsu — Lame Simple, Lame Pénétrante, Ruée Acérée, Kenjutsu — Lame Double (Nitōryū) |
| Taijutsu | Bourrasque de Konoha, Pied de l'Aube |
| Ninjutsu | Saut de Chakra, Analyse et Combat par Nature, Permutation |
| Ninjutsu Raiton | Rayon Instantané, Boule Fulgurante, Ruée Foudroyante, Zone Fulgurante |
| Ninjutsu Katon | Boule de Feu, Mur de Feu, Balsamine, Shurikens Pourpres |
| Ninjutsu Futon | Spirale de Vent, Mur de Vent, Spirales Cinglantes, Onde de Choc |
| Ninjutsu Suiton | Crystal Aqueux, Mur Aqueux, Bulles d'Eau, Prison Aqueuse |
| Ninjutsu Doton | Mur de Roche, Expulsion Rocheuse, Terre Mouvante, Prison de Roche |
| Spécialisation | Infiltration (théorie), Infiltration (pratique), La Traque, L'Enquête |
| Terrain | Course d'orientation, Pays du Feu — Visite |
| Tactique | Jeu du Roi, Capture de Drapeau, Simulation de Mission, Simulation d'Escorte |
| 🧪 En attente de validation | L'Éloquence Absurde, Le Cours Inversé, La Chasse au Sensei, Information & Communication en mission |

## Architecture du HTML

### Vue d'ensemble des pages (sidebar — 11 vues)

| Page | ID | Fonction |
|------|----|----------|
| 📊 Dashboard | `dashboard` | Carte sensei, stats globales, progression par module, cours en cours |
| 📚 Cours | `cours` | Liste filtrable (texte, catégorie, module, rang, état) |
| *(détail)* | `detail` | Bouton « 📋 Copier pour les élèves » en haut, 2 onglets (🎤 Support oral / 📋 Marqueurs), techniques, checklist, compteur |
| 🤞 Mudras | `mudras` | Référence des 12 mudras |
| 🔥 Natures | `natures` | 5 natures, cycle, kekkei genkai, bannière perso |
| 👑 Hiérarchie | `hierarchie` | 10 rangs ninja |
| 📋 Règlement | `admin` | Directive Yamamoto Jakka |
| 📢 Annonces | `annonces` | Annonces avec sélecteur de lieu (popup) + copie par module |
| 📊 Fin de mois | `bilan` | Sélecteur jour, liste des cours avec heure |
| 📜 Historique | `historique` | Stats sensei, graphiques, classement, journal complet |
| 👤 Sensei | `sensei` | Profil complet (10 champs), aperçu en direct, réglages (parchemin, QR, reset) |
| 🧪 En attente | `brouillons` | Cours non validés (`validated:false`) — jouables mais susceptibles d'évoluer |

Navigation : `VIEWS[]` → `buildSidebar()` → `nav(viewId)` → `render()` → `renderXxx()`

### Profil Sensei (10 axes de personnalisation)

| Champ | Stockage | Impact |
|-------|----------|--------|
| Prénom / Nom | `S.sensei.prenom/nom` | Signatures, contenu, annonces, header, onglet, favicon |
| Signe distinctif | `S.sensei.signe` | Annonces ("cheveux brun") |
| Rang | `S.sensei.rang` | Carte sensei, header, bilan Discord (de Genin Confirmé à Hokage) |
| Phrase signature | `S.sensei.signature` | Override toutes les citations si rempli |
| Type de Sensei | `S.sensei.type` | 720 citations, greeting, animation avatar |
| Nature de Chakra | `S.sensei.nature` | Skin couleurs, particules, filtrage cours, closing lines, favicon |
| Spécialisation combat | `S.sensei.specCombat` | `taijutsu` ou `kenjutsu` |
| Type de lame | `S.sensei.typeLame` | Si kenjutsu : `simple`, `double` ou `lourde` |
| Apparence | `S.darkMode` | Mode clair / sombre |
| Animations | `S.noAnim` | On/off particules, pulsations, transitions |

### Les 16 types de sensei

Sage 🍃, Implacable 🗡️, Guerrier 🔥, Bienveillant 🌸, Énigmatique 🌙, Stratège ♟️, Vétéran 🩸, Grand Frère 🤝, Provocateur 😏, Ermite 🐸, Ombre 🦇, Noble 👑, Rebelle 💢, Mentor spirituel 📿, Chasseur 🐺, Manipulateur 🎭

Chaque type : 1 citation par cours (16 × 45 = 720) + greeting dashboard + animation avatar spécifique.

Les **16 types** personnalisent les **10 onglets** de la sidebar (`SIDEBAR_LABELS`). Chaque type a un vocabulaire complet adapté à sa personnalité (HRP assumé) :
- Sage : "Enseignements", "Méditation du mois", "Chroniques"
- Implacable : "Briefing", "Programme", "Chaîne de commandement"
- Guerrier : "QG", "Entraînement", "Victoires du mois"
- Bienveillant : "Nos cours", "Grandir ensemble", "Nos souvenirs"
- Énigmatique : "Les arcanes", "Murmures", "Échos du passé"
- Stratège : "Modules tactiques", "Variables élémentaires", "Base de données"
- Vétéran : "Ce qu'on m'a pas appris", "Encore un mois debout", "Cicatrices"
- Grand Frère : "La maison", "Hey, venez !", "Nos aventures"
- Provocateur : "Le bazar", "Les trucs avec les mains", "Tout ce bordel"
- Ermite : "Le rocher", "Règles... ouais", "Le vagabond"
- Ombre : "Central", "Dossiers classifiés", "Logs"
- Noble : "Le pavillon", "Arts de l'Académie", "Mon blason"
- Rebelle : "Mon bordel organisé", "La hiérarchie (lol)", "Mon casier"
- Mentor : "Le temple", "Gestes de l'âme", "Le chemin parcouru"
- Chasseur : "Le terrier", "Appel de la meute", "L'alpha"
- Manipulateur : "Échiquier", "Pions et stratégies", "Le marionnettiste"

### Skins par nature de chakra

| Nature | Couleurs | Particules | Animation |
|--------|----------|------------|-----------|
| Katon 🔥 | Rouges/orangés | Braises 🔥✦🔸 | `float-up` |
| Futon 🌬️ | Verts/émeraude | Feuilles 🍃🌿✧ | `float-drift` |
| Raiton ⚡ | Dorés/jaunes | Éclairs ⚡✦ | `lightning-flash` |
| Doton 🌍 | Bruns/terre | Pierres 🪨◆🌑 | `earth-pulse` |
| Suiton 💧 | Bleus | Gouttes 💧〰️✦ | `ripple` |

Affecte : header, SVG, sidebar, progress bars, boutons, badges, stat cards, fond ambiant, favicon, onglet.

### Système de citations (encouragements de fin de cours)

Chaque citation combine **type de personnalité + nature de chakra** :
1. `SENSEI_QUOTES[coursId][type]` — phrase de personnalité (480 entrées)
2. `NATURE_CLOSING[nature][module]` — closing line nature (5 × 8 = 40 entrées)
3. Si `S.sensei.signature` est rempli → override tout par cette phrase unique

### Filtrage des cours par nature

```javascript
const COURS_NATURE={rai_rayon:'raiton',rai_boule:'raiton',rai_ruee:'raiton',rai_zone:'raiton',kat_boule:'katon',kat_mur:'katon',kat_balsamine:'katon',kat_shuriken:'katon',fut_spirale:'futon',fut_mur:'futon',fut_cinglantes:'futon',fut_onde:'futon',sui_crystal:'suiton',sui_mur:'suiton',sui_bulles:'suiton',sui_prison:'suiton',dot_mur:'doton',dot_expulsion:'doton',dot_mouvante:'doton',dot_prison:'doton'};
```

Chaque technique de nature est un cours individuel, visible uniquement pour le sensei dont c'est la nature (20 cours, 4 par nature).

**Fallback par nature** : les 20 cours de nature n'ont pas d'entrée propre dans `SENSEI_QUOTES` / `COURS_FLAVOR`. Le code retombe sur une entrée partagée préfixée par `_` :

```javascript
SENSEI_QUOTES[coursId] || (COURS_NATURE[coursId] ? SENSEI_QUOTES['_'+COURS_NATURE[coursId]] : null)
```

Il existe donc `_katon`, `_futon`, `_raiton`, `_doton`, `_suiton` dans `SENSEI_QUOTES` **et** dans `COURS_FLAVOR` : une seule citation et un seul jeu de marqueurs pour les 4 techniques d'une même nature. Pour donner un texte propre à une technique, ajouter une entrée à son `id` — elle prend le pas sur le fallback.

### Filtrage des cours par spécialisation combat

```javascript
const COURS_SPEC={kenjutsu_cours:'kenjutsu',kenjutsu_simple:'kenjutsu',kenj_penetrante:'kenjutsu',kenj_ruee:'kenjutsu',kenjutsu_double:'kenjutsu',bourrasque:'taijutsu',pied_aube:'taijutsu'};
const COURS_LAME={kenjutsu_simple:'simple',kenj_penetrante:'simple',kenj_ruee:'simple',kenjutsu_double:'double'};
```

Les cours Kenjutsu ne sont visibles que pour les senseis Kenjutsu. Bourrasque et Pied de l'Aube uniquement pour les senseis Taijutsu. Le filtrage utilise `coursVisibleForSensei()` qui combine nature + spécialisation + voie de la lame.

**Filtrage par voie de la lame** (`COURS_LAME`) : un sensei Kenjutsu qui a renseigné son type de lame ne voit que les cours de sa propre voie. Tant que `typeLame` est vide, il voit toutes les voies. L'Initiation reste visible pour tous les senseis Kenjutsu.

### Interface cours simplifié (2 onglets)

Chaque cours dispose de 2 onglets :
- **🎤 Support oral** — Guide RP à lire à haute voix (constante `CONTENU`) + bouton Mode Présentation
- **📋 Marqueurs** — Phrase personnalité + anecdote nature + anecdote combat (dynamiques via `COURS_FLAVOR` / `SPEC_FLAVOR`) + contenu des notes élèves (`NOTES_PROF`)

Le bouton **📋 Copier pour les élèves** est positionné en haut du cours (après les boutons « Cours donné » / « Proposé »). Il copie `NOTES_PROF[id].copy` dans le presse-papier pour coller directement en jeu.

### Adaptation du contenu par personnalité + nature + spécialisation

Le contenu des cours s'adapte dynamiquement sur 3 axes, injectés après le titre via `applySenseiName()` :

1. **`COURS_FLAVOR[coursId].intro[type]`** — Intro personnalisée par type de sensei (16 variantes × 18 cours = 288 textes). Ton, vocabulaire, métaphores adaptés à la personnalité.
2. **`COURS_FLAVOR[coursId].nature[nature]`** — Anecdote/métaphore reliant le thème du cours à l'élément du sensei (5 variantes × 18 cours = 90 textes).
3. **`SPEC_FLAVOR[coursId][spec/lame]`** — Touche combat adaptée à la spécialisation Taijutsu ou Kenjutsu + type de lame (5 variantes × 9 cours = 45 textes).

Logique de sélection `SPEC_FLAVOR` :
- Sensei Taijutsu → variante `taijutsu`
- Sensei Kenjutsu sans type de lame → variante `kenjutsu`
- Sensei Kenjutsu + lame simple/double/lourde → variante `simple`/`double`/`lourde`

Affichage : blocs CSS `.flavor-intro` (bordure skin, italique) et `.flavor-nature` (fond teinté, icône nature/spec).

**Couverture** : les 54 cours ont des marqueurs personnalisés — soit une entrée propre dans `COURS_FLAVOR` (39 entrées), soit le fallback `_<nature>` pour les 20 techniques de nature. Tout nouveau cours doit maintenir cette couverture : 16 intros + 5 natures, sans exception.

### Cours Kenjutsu (structure modulaire par type de lame)

Le Kenjutsu est structuré en cours séparés par voie de la lame :
- **Kenjutsu — Initiation** : base commune (Bushidō, Kokyu, Metsuke, Maai, Engagement)
- **Kenjutsu — Lame Simple** : Zanshin (amorce) / Kimi (impact), la lame extension de l'âme, 3 salutations, respect du forgeron, exercices Shintai / Seishin — source Yaïko Okira & Kazuma Sosochi
- **Kenjutsu — Lame Double (Nitōryū)** : gardes spécifiques double lame, origines, démonstration
- *(à venir)* Kenjutsu — Lame Lourde

Techniques de combat par voie (cours pratiques séparés, comme les techniques de nature) :

| Cours | Rang | Voie | Prérequis | Structure |
|-------|------|------|-----------|-----------|
| Lame Pénétrante | D (Genin) | simple | `kenjutsu_simple` | Zanshin → Kimi → Zanshin → Kimi |
| Ruée Acérée | C (Genin Confirmé) | simple | `kenj_penetrante` | Zanshin → Kimi / Zanshi → Kimi / … / Zanshi → Kimi |

**Non documenté à ce jour** (aucune source disponible) : les techniques de rang **B** et **A** de la voie simple, et les « enchaînements classiques » cités dans la démonstration finale de l'Initiation. Le cours Lame Simple le signale explicitement au sensei.

**Anti-redite** : les 8 vertus du Bushidō et l'engagement à vie sont traités dans `kenjutsu_cours` uniquement ; `kenjutsu_simple` y renvoie au lieu de les redérouler, et `kenj_ruee` renvoie à `kenj_penetrante` pour l'échauffement commun. Garder cette règle en ajoutant les voies Lame Lourde et rangs B/A.

Chaque cours de voie a `kenjutsu_cours` comme prérequis.

### Rangs hors échelle

`nindo` porte le rang **« Tous grades »**, qui ne figure pas dans `D.rangs`. C'est volontaire : `_getCoursInverse()` l'accepte explicitement et le classe en difficulté « facile ». Le filtre Rang de la page Cours laisse passer ce rang quel que soit le filtre choisi (`c.rang!=='Tous grades'`), sinon le Nindo disparaîtrait de toutes les vues filtrées.

### Cours en attente de validation (`validated: false`)

Un cours peut porter `validated: false` dans `D.cours[]`. Il reste **jouable** mais :
- il apparaît dans la page 🧪 **En attente de validation** (`renderBrouillons()`), pas seulement dans la liste des cours ;
- il porte un badge ⚠ **Non validé** dans la liste et un bandeau d'avertissement sur sa page détail ;
- il est **exclu du tirage aléatoire** de cours (`D.cours.filter(c=>...&&c.validated!==false)`) ;
- le filtre d'état `non-valide` de la page Cours permet de les isoler.

| Cours | Module | Rang | Source |
|-------|--------|------|--------|
| L'Éloquence Absurde | Tactique | Apprenti Genin | interne (tirage de sujets intégré) |
| Le Cours Inversé | Tactique | Genin | interne |
| La Chasse au Sensei | Tactique | Apprenti Genin | interne |
| Information & Communication en mission | Tactique | Genin | Yaïko Okira |

Ces cours reçoivent **la personnalisation complète** au même titre que les cours validés : `COURS_FLAVOR` (16 intros + 5 natures), `SENSEI_QUOTES` (16 types), `CONTENU`, `NOTES_PROF`. Pour valider un cours, retirer la clé `validated` (ou la passer à `true`) dans le HTML **et** dans `donnees_cours.json`.

### Compteur "Cours donné"

Sur chaque page de cours détaillé :
- **✅ +1** — enregistre avec date + heure (arrondie au quart d'heure)
- **📭 Proposé (0 élève)** — flag `noEleve: true`
- **−1** — corrige un miss-clic (retire la dernière entrée)
- Historique : `S.n.cours_history` = JSON array `[{id, titre, date, heure, ts, noEleve?}]`

### Onboarding (tuto première visite)

Flow en 2 phases :
1. **Pop-up d'accueil** → redirige vers la page Sensei pour configurer le profil
2. **Guide des onglets** — lancé via le bouton "✅ Profil configuré — Découvrir l'app"
   - 8 étapes (Dashboard, Cours, Notes de cours, Mudras, Natures, Annonces, Bilan, Historique)
   - Descriptions **personnalisées par type** (`TOUR_TIPS_TYPED`) : 8 types ont des textes uniques
   - Mot de fin personnalisé par type + nature + prénom (`ONBOARD_FINAL`)
   - Sons : tick au clic (`playClick`), accord Do-Mi-Sol en fin (`playSuccess`)
   - Animations : slide, pulse, fade

Le flag `zenkai_onboarded` dans localStorage empêche de relancer le tuto. Bouton "🎓 Relancer" dans la page Sensei.

### Graphify — Mémoire structurelle

Le projet utilise **Graphify** comme carte contextuelle et mémoire structurelle. Fichiers dans `graphify-out/` :
- `graph.json` — graphe du projet (509 nœuds, 763 arêtes, 56 communautés nommées)
- `graph.html` — visualisation interactive
- `GRAPH_REPORT.md` — rapport d'analyse (hubs, communautés, gaps)
- `converted/*.md` — sources .docx converties (contenu original des cours)
- `manifest.json` — index des fichiers sources avec hash
- `cache/` et `2026-*/` — exclus du repo (.gitignore)
- Mise à jour : `graphify update .` après chaque modification significative

**Hubs principaux** (nœuds les plus connectés) :
- Architecture du HTML (23 edges) — cœur technique
- Information & Communication en mission (20) — le cours le plus relié du corpus
- Histoire du Village de Konoha (17) — lore fondamental
- `render()` (15) et `applySenseiName()` (14) — cœur du rendu et de la personnalisation
- gestion_cours_zenkai.html (14) — l'app elle-même

**Extraction** : le code est extrait sans LLM (AST). Les `.md` / `.html` / `.docx` passent par l'extraction sémantique (skill `graphify --update`, sous-agents) — un `graphify update .` seul ne met à jour que la partie code et l'annonce explicitement.

**Usage en contexte** : consulter `GRAPH_REPORT.md` avant toute modification pour identifier les communautés impactées. Comparer `converted/*.md` (sources) avec le HTML (implémentation) pour vérifier la cohérence.

### Page Fin de mois (📊) — Rapport pour le Parchemin

Le **Parchemin** = le canal Discord de l'Académie où les senseis postent leur rapport.

- 3 stat cards (total global, jours actifs, cours du jour)
- Sélecteur de jour IRL (= mois IG) avec compteur donnés/proposés
- Timeline visuelle du jour (ligne skin, dots vert/orange, cliquable)
- Parchemin Discord — 2 modes (toggle `bilanMode`) :
  - **V1 — Résumé** : `• Titre — HH:MM`, déduplique les heures (+15min si collision)
  - **V2 — Compte rendu** : formulaire par cours avec champs éditables (Organisateur pré-rempli, Intervenant, Nb d'élèves). Numérotation séquentielle globale, type de cours auto (titre + nature/spec/module). Bouton « Copier le compte rendu » génère le format Discord officiel :
    ```
    Cours 13
    Organisateur du cours : NomSensei
    Intervenant : @pseudo1 @pseudo2
    Type de cours : Rayon Instantané - Raiton
    nombre d'élève : 3
    ```
- Bouton 🗑️ Supprimer ce jour (supprime uniquement le jour sélectionné, pas l'historique global)
- Lien vers la page Historique

Variables : `bilanDate` (jour sélectionné), `bilanMode` ('v1'/'v2'), `bilanV2Data` (champs saisis par ts).
Fonctions : `bilanSetMode()`, `bilanV2Set()`, `buildDiscordV2()`, `copyBilanV2()`, `getCoursCategoryLabel()`.

### Page Historique (📜)

- Carte identité sensei
- 4 stat cards (total, jours d'activité, taux de présence, ratio théo/prat)
- Graphe activité par jour (barres horizontales gradient skin)
- Graphe répartition par module (barres + icônes)
- Graphe heures d'enseignement (colonnes 7h→23h)
- Classement des cours (médailles 🥇🥈🥉, cliquable)
- Journal complet (tableau chronologique)

### Mode Présentation (🎤)

Overlay plein écran déclenché depuis la page détail d'un cours. Affiche le contenu + notes pour les élèves en grand format pour enseigner en jeu.

### Structure des données (inline dans le HTML)

| Constante | Contenu |
|-----------|---------|
| `const D` | Objet principal : meta, rangs, mudras, natures, kekkei, armes, cours[] |
| `const COURS_FLAVOR` | Intros personnalité + anecdotes nature par cours (18 cours × 21 variantes) |
| `const SPEC_FLAVOR` | Anecdotes spécialisation combat par cours (9 cours × 5 variantes) |
| `const RESUME` | Bullet points "À retenir" par cours théorique (11 entrées) |
| `const CONTENU` | Guides oraux (HTML) par cours ID |
| `const INTERACTIF` | Blocs interactifs (Nindo uniquement) |
| `const NOTES_PROF` | Notes pour les élèves (copy + html) — bouton « Copier pour les élèves » |
| `const SENSEI_QUOTES` | Citations par cours × 16 types (720 entrées) |
| `const SENSEI_TYPES` | 16 types (icône, nom, description, couleur) |
| `const NATURE_CLOSING` | Phrases clôture par nature × module (5 × 8) |
| `const COURS_NATURE` | Mapping cours → nature pour filtrage |
| `const COURS_LAME` | Mapping cours → voie de la lame (simple/double) pour filtrage |
| `const NATURE_PARTICLES` | Emojis par nature pour particules |
| `const ONBOARD_FINAL` | Mots de fin du tuto par type (16 entrées) |
| `const TOUR_TIPS_TYPED` | Descriptions d'onglets par type (8 types × 4 onglets) |
| `const SIDEBAR_TIPS` | Descriptions d'onglets génériques (11 vues) |
| `const SIDEBAR_LABELS` | Labels sidebar personnalisés par type (16 types × 10 onglets) |

### Persistence (localStorage clé `zenkai_v2`)

| Clé | Contenu |
|-----|---------|
| `S.c` | Checkboxes (progression techniques) + états onglets contenu |
| `S.n` | Notes texte + `cours_history` + `given_count_*` + `given_last_*` |
| `S.sensei` | `{prenom, nom, signe, nature, type, rang, signature, specCombat, typeLame}` |
| `S.darkMode` | Boolean |
| `S.noAnim` | Boolean |

### PWA & Outils

| Outil | Fichier / CDN | Fonction |
|-------|---------------|----------|
| Service Worker | `sw.js` | Cache hors-ligne, cache-first strategy. Version dans `CACHE_NAME` |
| Manifest | `manifest.json` | App installable sur mobile (standalone) |
| QR Code | CDN `qrcode-generator` | Transfert profil par QR (Réglages → Générer QR) |
| Export PDF | CDN `html2canvas` + `jsPDF` | Export Historique et cours en PDF |
| Auto-restore | Hash URL `#restore=...` | Scan QR → profil restauré automatiquement |

Pour mettre à jour le cache PWA : incrémenter la version dans `sw.js` (ex: `zenkai-v7` → `zenkai-v8`).

### Fonctions clés

| Action | Fonctions impliquées |
|--------|---------------------|
| Naviguer | `nav()`, `openCours()`, `render()`, `buildSidebar()` |
| Profil | `getSensei()`, `setSenseiField()`, `senseiFullName()`, `senseiProf()` |
| Skin/thème | `applySkin()`, `toggleTheme()`, `spawnParticles()`, `applyThemeOnLoad()` |
| Citations | `getQuote()`, `applySenseiName()`, `senseiTypeInfo()` |
| Cours donné | `addCoursGiven()`, `removeCoursGiven()`, `getCoursHistory()` |
| Copie | `clipCopy()`, `copyNotes()`, `copyAndOpen()`, `copyModuleAnnonces()` |
| Présentation | `openPresentation()` |
| Persistence | `load()`, `save()`, `chk()`, `tog()`, `getNote()`, `setNote()` |
| Onboarding | `showOnboarding()`, `startTourGuide()`, `finishOnboarding()`, `isFirstVisit()` |
| Sons | `playClick()`, `playSuccess()` |
| Sidebar | `getSidebarLabel()`, `getTourTip()` |
| Export | `doExport()`, `doImport()`, `doReset()`, `resetBilanJour()` |
| QR Code | `generateQR()`, auto-restore via hash URL `#restore=` |
| PDF | `exportPDF()` (html2canvas + jsPDF) |
| Confetti | `celebrate()` — déclenché quand un cours atteint 100% |
| Raccourcis | 1-9 = onglets, Échap = retour/fermer, P = présentation |

### Procédure pour ajouter un cours

1. Ajouter dans `D.cours[]` : `{id, titre, cat, mod, rang, cible, auteur, prereq, desc, techs[]}`
2. Ajouter dans `CONTENU[id]` : HTML du guide oral (onglet 🎤 Support oral)
3. Ajouter dans `NOTES_PROF[id]` : `{copy: '...', html: '...'}` (bouton « Copier pour les élèves » + onglet 📋 Marqueurs)
4. Ajouter dans `SENSEI_QUOTES[id]` : objet avec 16 clés (sage, dur, guerrier, bienveillant, mysterieux, stratege, veteran, fraternel, ironique, ermite, ombre, sensei_noble, rebelle, mentor, chasseur, tacticien)
5. Ajouter dans `COURS_FLAVOR[id]` : `{intro: {16 types}, nature: {5 natures}}` (marqueurs dynamiques)
6. Si nature-spécifique : ajouter dans `COURS_NATURE`
7. Si spéc combat : ajouter dans `COURS_SPEC` + `SPEC_FLAVOR[id]` ; si voie de la lame : ajouter dans `COURS_LAME`
8. Mettre à jour `donnees_cours.json`
9. `graphify update .` puis `git add . && git commit -m "..." && git push`

### Icônes

**Modules** : Fondamentaux 🏛️, Chakra 🔮, Combat ⚔️, Taijutsu 🥋, Ninjutsu ⚡, Tactique 🎯, Spécialisation 🕵️, Terrain 🗺️

**Techniques** : connaissance 📖, mudras 🤞, taijutsu 🥋, chakra 🔥, tactique 🎯, ninjutsu ⚡

## Règles importantes

### Les documents sont pour le professeur, PAS pour les élèves
- Tous les fichiers sont des **supports personnels du sensei**
- Ne jamais ajouter de quizz, activités ludiques, jeux ou exercices interactifs
- Pas de mode INTERACTIF dans les cours sauf demande explicite

### Style et ton
- Registre immersif RP, pas scolaire
- Référence qualité : `théorique/Nindo.docx`
- Langue : français

### Fichiers .docx
- Certains proviennent de copier-coller Discord (nettoyer emojis Discord, timestamps, réactions)
- Senseis auteurs : Akio Fukurō, Jihon Ichirin, Inoshi Baikutai, Gaoh Uragiri, Yumi Amano, Gromlof, Yamamoto Jakka, Tetsuya Fubetsu, Nagi Kinzetsu, Yaïko Okira, Kazuma Sosochi

### Cohérence lore Zenkai-RP
- 5 clans fondateurs : Senju, Uchiha, Hyūga, Nara, Akimichi
- Chronologie : post-Tobirama, crise de succession (pas de 3e Hokage)
- 10 rangs (Apprenti Genin → Hokage), senseis à partir de Genin Confirmé
- Cycle : Katon > Futon > Raiton > Doton > Suiton > Katon
- 12 mudras, 9 Kekkei Genkai (2 natures) + 6 Kekkei Genkai spéciaux (chakra pur) + 1 Kekkei Tōta (Jinton = 3 natures)
- Kenjutsu : Nitōryū inventé par Myosashi Shinmen (Pays du Fer)
- Images de référence : `img_cycle_natures.png` (cycle), `img_kekkei_genkai.png` (diagramme KG)

### Synchronisation
- HTML, JSON et fichiers source doivent rester synchronisés
- Chaque cours = 5-6 composants : `D.cours[]`, `CONTENU{}`, `NOTES_PROF{}`, `SENSEI_QUOTES{}` (16 types), `COURS_FLAVOR{}`, optionnel `COURS_NATURE`
- Après modif : bumper `CACHE_NAME` dans `sw.js` + `git push` pour déployer sur GitHub Pages

### Sécurité
- `esc()` échappe `& < > " '` — l'utiliser pour tout contenu utilisateur dans innerHTML
- `safeAvatar()` valide que les DataURL commencent par `data:image/`
- `validateSaveData()` sanitize les champs sensei importés (longueur, HTML strippé)
- CDN chargés sans SRI (à ajouter si besoin de durcissement)
