# CLAUDE.md — Cours RP Zenkai (Konoha)

## Contexte du projet

Ce dossier contient les cours d'un professeur RP Naruto sur le serveur **Zenkai**, village de **Konoha**. L'application HTML principale (`gestion_cours_zenkai.html`) est un outil de gestion multi-sensei : chaque professeur peut personnaliser son profil (nom, nature, personnalité) et l'interface s'adapte entièrement.

Le dossier frère `C:\Users\ludov\Desktop\Zenkai-RP` contient le lore complet du serveur (Vault Obsidian, candidatures, règles, sources). Les cours doivent rester cohérents avec ce lore.

**Temporalité serveur : 1 semaine IRL = 1 an RP / 1 jour IRL = 1 mois IG**

## Structure du dossier

- `théorique/` — Cours théoriques (.docx, .md) : philosophie ninja, histoire, chakra, armes, raiton, infiltration
- `Pratique/` — Cours pratiques (.docx) : 13 exercices de terrain, simulations, techniques de combat
- `gestion_cours_zenkai.html` — Application HTML principale (~4900 lignes, voir section dédiée ci-dessous)
- `donnees_cours.json` — Données structurées des cours (synchronisé avec le HTML)
- `carnet_sensei_eraku.html` — Carnet personnel du sensei Eraku Morikawa
- `carnet-une-porte.html` — Carnet "une porte"
- `analyse_croisee.md` — Analyse des liens entre cours, prérequis, progression pédagogique
- `inventaire_cours.md` — Inventaire complet de tous les fichiers
- `Propositions de nouveaux cours.docx` — Idées de cours détaillées
- `Format tableau.docx` — Directive de Yamamoto Jakka sur le format des annonces
- `compte rendu.docx` — Compte rendu
- `Cours du sensei renard/` — Cours du sensei renard (7 cours .md + HTML + script Python)
- `Hishiba/` — Fiche personnage Hishiba (texte, images, profil)

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

## Architecture du HTML (`gestion_cours_zenkai.html`)

### Système de profil Sensei (page 👤 Sensei)
L'application est **multi-sensei** : chaque professeur personnalise son profil et tout s'adapte.

**Champs du profil (9 axes) :**
- **Prénom / Nom** — remplace dynamiquement "Eraku Morikawa" dans tout le contenu, signatures, annonces, header, onglet navigateur
- **Signe distinctif** — utilisé dans les annonces (ex: "cheveux brun")
- **Rang** — sélectionnable de Genin Confirmé à Hokage, affiché sur la carte sensei et le sous-titre du header
- **Lieu de RDV** — personnalise le lieu dans toutes les annonces
- **Phrase signature** — override optionnel qui remplace toutes les citations auto-générées
- **Type de Sensei** — 16 personnalités (citations, greeting dashboard, animation avatar)
- **Nature de Chakra** — 5 natures (skin visuel complet, particules, filtrage cours, closing lines)
- **Apparence** — Mode clair / sombre
- **Animations** — Toggle on/off (particules, pulsations, transitions)

**Les 16 types de sensei :**
Sage 🍃, Implacable 🗡️, Guerrier 🔥, Bienveillant 🌸, Énigmatique 🌙, Stratège ♟️, Vétéran 🩸, Grand Frère 🤝, Provocateur 😏, Ermite 🐸, Ombre 🦇, Noble 👑, Rebelle 💢, Mentor spirituel 📿, Chasseur 🐺, Manipulateur 🎭

Chaque type possède une citation unique par cours (16 × 24 = 384 citations) + une closing line par nature × module (5 × 8 = 40).

### Système de skins par nature
Quand un sensei choisit sa nature de chakra, l'app entière change :
- **Katon** 🔥 — Rouges/orangés, braises flottantes (animation `float-up`)
- **Futon** 🌬️ — Verts/émeraude, feuilles dérivantes (animation `float-drift`)
- **Raiton** ⚡ — Dorés/jaunes, éclairs flashants (animation `lightning-flash`)
- **Doton** 🌍 — Bruns/terre, pierres pulsantes (animation `earth-pulse`)
- **Suiton** 💧 — Bleus, gouttes ondulantes (animation `ripple`)
- *(aucune)* — Or par défaut (style classique)

**Éléments affectés :** header (gradient + SVG), sidebar, progress bars, boutons, badges, stat cards, particules (20 éléments), fond ambiant, favicon dynamique, onglet navigateur, sous-titre header.

### Animations par type de sensei
Chaque type a une animation spécifique sur l'avatar de la carte sensei (dashboard) :
- Guerrier → flammes pulsantes, Implacable/Rebelle → shake, Bienveillant/Mentor → respiration
- Énigmatique/Tacticien → flottement, Ombre → crépitement, Noble → glow doré, etc.
- Greeting personnalisé sur le dashboard (ex: Ermite: "Yo ! On fait quoi de beau ?")

### Filtrage des cours par nature
```javascript
const COURS_NATURE={raiton_cours:'raiton'};
// Ajouter : katon_cours:'katon', futon_cours:'futon', etc.
```
Quand un sensei a une nature, seuls les cours de sa nature s'affichent (liste + annonces).

### Système de vues (sidebar — 11 pages)
Dashboard 📊, Cours 📚, Mudras 🤞, Natures 🔥, Armes 🗡️, Hiérarchie 👑, Règlement 📋, Annonces 📢, Fin de mois 📊, Historique 📜, Sensei 👤

Navigation : `VIEWS[]` → `buildSidebar()` → `nav(viewId)` → `render()` → `renderXxx()`

### Compteur "Cours donné" (sur chaque cours)
- **✅ +1** — enregistre le cours avec date + heure (arrondie au quart d'heure) dans l'historique
- **📭 Proposé (0 élève)** — enregistre avec flag `noEleve: true`
- **−1** — retire la dernière entrée (corrige les miss-clics)
- Historique stocké dans `S.n.cours_history` (JSON array d'entrées `{id, titre, date, heure, ts, noEleve?}`)

### Page Fin de mois (📊 Bilan)
- Sélecteur de jour IRL (= mois IG) avec boutons cliquables
- Message Discord prêt à copier au format : `**- Prénom Nom :** / **- Rôle :** / **- Date :** / **- Cours effectué(s) (Avec l'heure) :**`
- Cours proposés sans élève marqués `(proposé, 0 élève présent)`
- Bouton 🗑️ Remettre à zéro (avec confirmation)

### Page Historique (📜 Stats du sensei)
- Carte identité sensei (rang, type, nature, dates d'activité)
- 4 stat cards (total cours, jours d'activité, taux de présence, ratio théo/prat)
- Graphe **📅 Activité par jour** — barres horizontales gradient skin
- Graphe **🏯 Répartition par module** — barres avec icônes module
- Graphe **⏰ Heures d'enseignement** — colonnes 7h→23h
- **🏆 Classement des cours** — top avec médailles 🥇🥈🥉, barres, cliquable
- **📋 Journal complet** — tableau chronologique avec date, heure, cours, module, statut

### Mode Présentation (🎤)
Overlay plein écran pour donner un cours en jeu : titre en Cinzel, contenu en grand format, notes du prof, bouton fermer.

### Annonces
- Format : `Cours — Rang — Lieu — Prénom Nom - signe`
- Clic = copie + ouverture du cours
- Bouton **📋 Copier le module** — copie toutes les annonces d'un module
- Filtrées par nature du sensei

### Navigation dans les cours
- **← → Cours précédent / suivant** dans le même module
- Retour à la liste des cours

### Structure des données (inline dans le HTML)
- `const D` — Objet principal : meta, rangs, mudras, natures, kekkei, armes, cours[]
- `const CONTENU` — Guides oraux du prof (HTML) par cours ID
- `const INTERACTIF` — Blocs interactifs (Nindo uniquement)
- `const NOTES_PROF` — Notes copiables in-game (copy + html) par cours ID
- `const SENSEI_QUOTES` — Citations par cours ID × par type de personnalité (16 types)
- `const SENSEI_TYPES` — 16 types de personnalité avec icône, nom, description, couleur
- `const NATURE_CLOSING` — Phrases de clôture par nature × module (5 × 8)
- `const COURS_NATURE` — Mapping cours → nature pour le filtrage
- `const NATURE_PARTICLES` — Emojis par nature pour les particules

### Persistence (localStorage)
- Clé : `zenkai_v2`
- `S.c` — États des checkboxes (progression)
- `S.n` — Notes texte (réflexions, synthèses, `cours_history`, `given_count_*`, `given_last_*`)
- `S.sensei` — Profil : `{prenom, nom, signe, nature, type, rang, lieu, signature}`
- `S.darkMode` — Boolean mode sombre
- `S.noAnim` — Boolean animations désactivées

### Fonctions clés pour ajouter un cours
1. Ajouter l'entrée dans `D.cours[]` (id, titre, cat, mod, rang, cible, auteur, prereq, desc, techs[])
2. Ajouter le contenu HTML dans `CONTENU[id]`
3. Ajouter les notes dans `NOTES_PROF[id]` (copy + html)
4. Ajouter les 16 citations dans `SENSEI_QUOTES[id]` (sage, dur, guerrier, bienveillant, mysterieux, stratege, veteran, fraternel, ironique, ermite, ombre, sensei_noble, rebelle, mentor, chasseur, tacticien)
5. Si cours nature-spécifique : ajouter dans `COURS_NATURE`
6. Mettre à jour `donnees_cours.json`

### Icônes de module
`const modIcons` — Fondamentaux 🏛️, Chakra 🔮, Combat ⚔️, Taijutsu 🥋, Ninjutsu ⚡, Tactique 🎯, Spécialisation 🕵️, Terrain 🗺️

### Types de technique
connaissance 📖, mudras 🤞, taijutsu 🥋, chakra 🔥, tactique 🎯, ninjutsu ⚡

## Règles importantes

### Les documents sont pour le professeur, PAS pour les élèves
- Tous les fichiers (cours, HTML, JSON) sont des **supports personnels du sensei**
- Ne jamais ajouter de quizz, activités ludiques, jeux ou exercices interactifs
- Le HTML est un outil de suivi/référence, pas un outil interactif pour les élèves
- Pas de mode INTERACTIF dans les cours sauf demande explicite

### Style et ton des cours
- S'inspirer du cours `théorique/Nindo.docx` comme référence de qualité (style, ton, structure)
- Écrire dans un registre immersif RP, pas scolaire
- Langue : français

### Fichiers .docx
- Certains cours proviennent de copier-coller Discord (peuvent contenir du bruit : emojis Discord, timestamps, réactions) — nettoyer si nécessaire
- Les cours sont proposés par différents senseis : Akio Fukurō, Jihon Ichirin, Inoshi Baikutai, Gaoh Uragiri, Yumi Amano, Gromlof, Yamamoto Jakka

### Cohérence avec le lore Zenkai-RP
- Les 5 clans fondateurs : Senju, Uchiha, Hyūga, Nara, Akimichi
- Chronologie : post-Tobirama, crise de succession (pas de 3e Hokage encore)
- Hiérarchie : 10 rangs (Apprenti Genin → Hokage), senseis à partir de Genin Confirmé
- Cycle des natures : Katon > Futon > Raiton > Doton > Suiton > Katon
- 12 mudras, 10 Kekkei Genkai + 1 Kekkei Tōta (Jinton)
- Temporalité serveur : 1 semaine IRL = 1 an RP / 1 jour IRL = 1 mois IG

### Synchronisation
- Le HTML, le JSON et les fichiers source doivent rester synchronisés
- Chaque cours dans le HTML a 5 composants : `D.cours[]`, `CONTENU{}`, `NOTES_PROF{}`, `SENSEI_QUOTES{}` (16 types), et optionnellement `COURS_NATURE`
