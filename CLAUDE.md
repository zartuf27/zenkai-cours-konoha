# CLAUDE.md — Cours RP Zenkai (Konoha)

## Contexte du projet

Ce dossier contient les cours RP Naruto du serveur **Zenkai**, village de **Konoha**. L'application HTML principale (`gestion_cours_zenkai.html`) est un outil de gestion **multi-sensei** : chaque professeur personnalise son profil et l'interface s'adapte entièrement (nom, nature, personnalité, annonces, citations, skin visuel).

- **Repo GitHub** : https://github.com/zartuf27/zenkai-cours-konoha (public)
- **App en ligne (GitHub Pages)** : https://zartuf27.github.io/zenkai-cours-konoha/gestion_cours_zenkai.html
- **Lore serveur** : dossier frère `C:\Users\ludov\Desktop\Zenkai-RP` (Vault Obsidian, candidatures, règles)
- **Temporalité** : 1 semaine IRL = 1 an RP / 1 jour IRL = 1 mois IG

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
gestion_cours_zenkai.html  — App principale (~4900 lignes, tout-en-un)
donnees_cours.json         — Données structurées (synchronisé avec le HTML)
CLAUDE.md                  — Ce fichier (instructions pour Claude)
.gitignore                 — Exclut les images lourdes
théorique/                 — Cours théoriques (.docx, .md) + images
Pratique/                  — 13 cours pratiques (.docx)
Cours du sensei renard/    — Cours d'un autre sensei (7 .md + HTML + script)
Hishiba/                   — Fiche personnage (texte, profil)
carnet_sensei_eraku.html   — Carnet personnel d'Eraku
carnet-une-porte.html      — Carnet "une porte"
analyse_croisee.md         — Liens entre cours, prérequis
inventaire_cours.md        — Inventaire des fichiers
Propositions de nouveaux cours.docx
Format tableau.docx        — Directive format annonces (Yamamoto Jakka)
compte rendu.docx
```

## Les 24 cours (par module)

| Module | Cours |
|--------|-------|
| Fondamentaux | Règles d'Or, Nindo, Volonté du Feu, Histoire de Konoha |
| Chakra | Décomposition du Chakra, Mudras, Nature de Chakra |
| Combat | Théorie Taijutsu, Armes Ninja |
| Taijutsu | Bourrasque de Konoha, Pied de l'Aube |
| Ninjutsu | Saut de Chakra, Analyse et Combat par Nature, Techniques Raiton, Permutation |
| Spécialisation | Infiltration (théorie), Infiltration (pratique), La Traque, L'Enquête |
| Terrain | Course d'orientation, Pays du Feu — Visite |
| Tactique | Jeu du Roi, Capture de Drapeau, Simulation de Mission, Simulation d'Escorte |

## Architecture du HTML

### Vue d'ensemble des pages (sidebar — 12 vues)

| Page | ID | Fonction |
|------|----|----------|
| 📊 Dashboard | `dashboard` | Carte sensei, stats globales, progression par module, cours en cours |
| 📚 Cours | `cours` | Liste filtrable (texte, catégorie, module, rang, état) |
| *(détail)* | `detail` | Contenu du cours, techniques, checklist, notes prof, mode présentation, compteur |
| 🤞 Mudras | `mudras` | Référence des 12 mudras |
| 🔥 Natures | `natures` | 5 natures, cycle, kekkei genkai, bannière perso |
| 🗡️ Armes | `armes` | Catalogue des 8 armes ninja |
| 👑 Hiérarchie | `hierarchie` | 10 rangs ninja |
| 📋 Règlement | `admin` | Directive Yamamoto Jakka |
| 📢 Annonces | `annonces` | Annonces copy-to-clipboard + copie par module |
| 📊 Fin de mois | `bilan` | Sélecteur jour, message Discord prêt à copier, reset |
| 📜 Historique | `historique` | Stats sensei, graphiques, classement, journal complet |
| 👤 Sensei | `sensei` | Profil complet (9 champs), aperçu en direct |

Navigation : `VIEWS[]` → `buildSidebar()` → `nav(viewId)` → `render()` → `renderXxx()`

### Profil Sensei (9 axes de personnalisation)

| Champ | Stockage | Impact |
|-------|----------|--------|
| Prénom / Nom | `S.sensei.prenom/nom` | Signatures, contenu, annonces, header, onglet, favicon |
| Signe distinctif | `S.sensei.signe` | Annonces ("cheveux brun") |
| Rang | `S.sensei.rang` | Carte sensei, header, bilan Discord (de Genin Confirmé à Hokage) |
| Lieu de RDV | `S.sensei.lieu` | Toutes les annonces |
| Phrase signature | `S.sensei.signature` | Override toutes les citations si rempli |
| Type de Sensei | `S.sensei.type` | 384 citations, greeting, animation avatar |
| Nature de Chakra | `S.sensei.nature` | Skin couleurs, particules, filtrage cours, closing lines, favicon |
| Apparence | `S.darkMode` | Mode clair / sombre |
| Animations | `S.noAnim` | On/off particules, pulsations, transitions |

### Les 16 types de sensei

Sage 🍃, Implacable 🗡️, Guerrier 🔥, Bienveillant 🌸, Énigmatique 🌙, Stratège ♟️, Vétéran 🩸, Grand Frère 🤝, Provocateur 😏, Ermite 🐸, Ombre 🦇, Noble 👑, Rebelle 💢, Mentor spirituel 📿, Chasseur 🐺, Manipulateur 🎭

Chaque type : 1 citation par cours (16 × 24 = 384) + greeting dashboard + animation avatar spécifique.

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
1. `SENSEI_QUOTES[coursId][type]` — phrase de personnalité (384 entrées)
2. `NATURE_CLOSING[nature][module]` — closing line nature (5 × 8 = 40 entrées)
3. Si `S.sensei.signature` est rempli → override tout par cette phrase unique

### Filtrage des cours par nature

```javascript
const COURS_NATURE={raiton_cours:'raiton'};
// Pour ajouter : katon_cours:'katon', futon_cours:'futon', etc.
```

### Compteur "Cours donné"

Sur chaque page de cours détaillé :
- **✅ +1** — enregistre avec date + heure (arrondie au quart d'heure)
- **📭 Proposé (0 élève)** — flag `noEleve: true`
- **−1** — corrige un miss-clic (retire la dernière entrée)
- Historique : `S.n.cours_history` = JSON array `[{id, titre, date, heure, ts, noEleve?}]`

### Page Fin de mois (📊)

- Sélecteur de jour IRL (= mois IG)
- Message Discord prêt à copier :
  ```
  **- Prénom Nom :** Eraku Morikawa
  **- Rôle :** Jōnin
  **- Date :** 12/09/2026
  **- Cours effectué(s) (Avec l'heure) :**
  • Techniques Raiton — 14:15
  • Les Règles d'Or — 16:00 (proposé, 0 élève présent)
  ```
- Bouton 🗑️ Remettre à zéro

### Page Historique (📜)

- Carte identité sensei
- 4 stat cards (total, jours d'activité, taux de présence, ratio théo/prat)
- Graphe activité par jour (barres horizontales gradient skin)
- Graphe répartition par module (barres + icônes)
- Graphe heures d'enseignement (colonnes 7h→23h)
- Classement des cours (médailles 🥇🥈🥉, cliquable)
- Journal complet (tableau chronologique)

### Mode Présentation (🎤)

Overlay plein écran déclenché depuis la page détail d'un cours. Affiche le contenu + notes prof en grand format pour enseigner en jeu.

### Structure des données (inline dans le HTML)

| Constante | Contenu |
|-----------|---------|
| `const D` | Objet principal : meta, rangs, mudras, natures, kekkei, armes, cours[] |
| `const CONTENU` | Guides oraux (HTML) par cours ID |
| `const INTERACTIF` | Blocs interactifs (Nindo uniquement) |
| `const NOTES_PROF` | Notes copiables in-game (copy + html) par cours ID |
| `const SENSEI_QUOTES` | Citations par cours × 16 types |
| `const SENSEI_TYPES` | 16 types (icône, nom, description, couleur) |
| `const NATURE_CLOSING` | Phrases clôture par nature × module (5 × 8) |
| `const COURS_NATURE` | Mapping cours → nature pour filtrage |
| `const NATURE_PARTICLES` | Emojis par nature pour particules |

### Persistence (localStorage clé `zenkai_v2`)

| Clé | Contenu |
|-----|---------|
| `S.c` | Checkboxes (progression techniques) |
| `S.n` | Notes texte + `cours_history` + `given_count_*` + `given_last_*` |
| `S.sensei` | `{prenom, nom, signe, nature, type, rang, lieu, signature}` |
| `S.darkMode` | Boolean |
| `S.noAnim` | Boolean |

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
| Export | `doExport()`, `doImport()`, `doReset()`, `resetBilan()` |

### Procédure pour ajouter un cours

1. Ajouter dans `D.cours[]` : `{id, titre, cat, mod, rang, cible, auteur, prereq, desc, techs[]}`
2. Ajouter dans `CONTENU[id]` : HTML du guide oral
3. Ajouter dans `NOTES_PROF[id]` : `{copy: '...', html: '...'}`
4. Ajouter dans `SENSEI_QUOTES[id]` : objet avec 16 clés (sage, dur, guerrier, bienveillant, mysterieux, stratege, veteran, fraternel, ironique, ermite, ombre, sensei_noble, rebelle, mentor, chasseur, tacticien)
5. Si nature-spécifique : ajouter dans `COURS_NATURE`
6. Mettre à jour `donnees_cours.json`
7. `git add . && git commit -m "..." && git push`

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
- Senseis auteurs : Akio Fukurō, Jihon Ichirin, Inoshi Baikutai, Gaoh Uragiri, Yumi Amano, Gromlof, Yamamoto Jakka

### Cohérence lore Zenkai-RP
- 5 clans fondateurs : Senju, Uchiha, Hyūga, Nara, Akimichi
- Chronologie : post-Tobirama, crise de succession (pas de 3e Hokage)
- 10 rangs (Apprenti Genin → Hokage), senseis à partir de Genin Confirmé
- Cycle : Katon > Futon > Raiton > Doton > Suiton > Katon
- 12 mudras, 10 Kekkei Genkai + 1 Kekkei Tōta (Jinton)

### Synchronisation
- HTML, JSON et fichiers source doivent rester synchronisés
- Chaque cours = 5 composants : `D.cours[]`, `CONTENU{}`, `NOTES_PROF{}`, `SENSEI_QUOTES{}` (16 types), optionnel `COURS_NATURE`
- Après modif : `git push` pour déployer sur GitHub Pages
