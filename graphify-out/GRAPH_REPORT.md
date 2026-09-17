# Graph Report - ZENKAI TEEEST  (2026-09-17)

## Corpus Check
- 50 files · ~122,147 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 280 nodes · 316 edges · 39 communities (20 shown, 5 thin omitted)
- Extraction: 81% EXTRACTED · 19% INFERRED · 0% AMBIGUOUS · INFERRED: 59 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Configuration Multi-Sensei
- Lore Clans et Fondateurs
- Cours Specialisation et Tactique
- Architecture HTML et Filtrage
- Techniques Ninjutsu et Taijutsu
- Deploiement et Persistence
- Propositions Nouveaux Cours
- Documentation Projet CLAUDE.md
- Manifest PWA
- Systeme Citations et Navigation
- Les 8 Regles d Or
- Natures de Chakra et Kekkei Genkai
- Arsenal Armes Ninja
- Techniques Taijutsu
- Simulations Tactiques
- Cours Sensei Renard HTML
- Mudras et Signes
- Cours Raiton et Ninjutsu
- Infiltration et Espionnage
- Pays du Feu et Orientation
- Icone PWA Konoha
- Singleton Node 22
- Singleton Node 23
- Singleton Node 24
- Singleton Node 38

## God Nodes (most connected - your core abstractions)
1. `Architecture du HTML` - 23 edges
2. `Histoire du Village de Konoha` - 17 edges
3. `Les Règles d'Or du Ninja` - 10 edges
4. `Les 8 Règles d'Or` - 9 edges
5. `Volonté du Feu (Will of Fire)` - 9 edges
6. `Constante D — Données principales (rangs, mudras, natures, kekkei, armes, cours)` - 9 edges
7. `Propositions de nouveaux cours — 8 cours proposés par Eraku Morikawa` - 8 edges
8. `CLAUDE.md — Cours RP Zenkai (Konoha)` - 7 edges
9. `Règles importantes` - 7 edges
10. `Guide de partage — Support de cours Zenkai` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Course d'orientation et analyse du terrain (Akio Fukuro)` --semantically_similar_to--> `Constante D — Données principales (rangs, mudras, natures, kekkei, armes, cours)`  [INFERRED] [semantically similar]
  graphify-out/converted/course d'orientation et d analyse du terrain_6ea013d0.md → gestion_cours_zenkai.html
- `Diagramme Cycle des 5 Natures de Chakra` --shares_data_with--> `Nature de Chakra – Référence`  [INFERRED]
  img_cycle_natures.png → graphify-out/converted/nature de chakra_5dbb4ec8.md
- `5 Chakra Natures Skin System` --semantically_similar_to--> `5 Chakra Natures (Katon, Suiton, Raiton, Doton, Futon)`  [INFERRED] [semantically similar]
  CLAUDE.md → Cours du sensei renard/nature de chakra renard.md
- `Diagramme Kekkei Genkai – Combinaisons de Natures` --shares_data_with--> `Nature de Chakra – Référence`  [INFERRED]
  img_kekkei_genkai.png → graphify-out/converted/nature de chakra_5dbb4ec8.md
- `Diagramme Cycle des 5 Natures de Chakra` --references--> `Cycle des 5 Natures (Katon > Futon > Raiton > Doton > Suiton)`  [EXTRACTED]
  img_cycle_natures.png → graphify-out/converted/nature de chakra_5dbb4ec8.md

## Import Cycles
- None detected.

## Communities (39 total, 5 thin omitted)

### Community 0 - "Configuration Multi-Sensei"
Cohesion: 0.10
Nodes (27): CLAUDE.md — Project Documentation, 16 Sensei Personality Types, 46 Courses Curriculum, 5 Chakra Natures Skin System, Citation System (720 Quotes), Course Filtering by Nature & Specialization, COURS_FLAVOR / SPEC_FLAVOR Adaptation, localStorage Persistence (zenkai_v2) (+19 more)

### Community 1 - "Lore Clans et Fondateurs"
Cohesion: 0.12
Nodes (23): Clan Akimichi, Clan Hyuga, Clan Nara, Clan Senju, Clan Uchiha, Hashirama Senju (Premier Hokage), Hiérarchie Ninja de Konoha (10 rangs), Madara Uchiha (+15 more)

### Community 2 - "Cours Specialisation et Tactique"
Cohesion: 0.11
Nodes (18): Le Conseil de guerre — Cours proposé (simulation stratégique), Contre-espionnage — Cours proposé (détecter les taupes), Dilemme moral — Mission vs protection du village, Formations d'équipe et rôles tactiques — Cours proposé, Genjutsu — Cours proposé (théorie + labyrinthe des illusions), Infiltration — Spécialisation ninja (théorie + pratique), Mudras — 12 signes de main pour modeler le chakra, Psychologie de l'ennemi — Cours proposé (lire et tromper) (+10 more)

### Community 3 - "Architecture HTML et Filtrage"
Cohesion: 0.09
Nodes (23): Adaptation du contenu par personnalité + nature + spécialisation, Architecture du HTML, Compteur "Cours donné", Cours Kenjutsu (structure modulaire par type de lame), Filtrage des cours par nature, Filtrage des cours par spécialisation combat, Fonctions clés, Graphify — Mémoire structurelle (+15 more)

### Community 4 - "Techniques Ninjutsu et Taijutsu"
Cohesion: 0.11
Nodes (17): Bourrasque Ardente — Technique taijutsu (coup de pied rotatif 360), Raiton — Nature de chakra Foudre (4 techniques ninjutsu), Eraku Morikawa — Sensei auteur des propositions de cours, Hishiba Zakuto — Mentor d'Eraku Morikawa (décédé), Constante CONTENU — Guides oraux HTML par cours, Constante COURS_NATURE — Mapping cours vers nature pour filtrage, Constante COURS_SPEC — Filtrage par spécialisation combat, 1. Rayon Instantané (+9 more)

### Community 5 - "Deploiement et Persistence"
Cohesion: 0.12
Nodes (15): Déploiement GitHub Pages — git push auto-deploy, Architecture multi-sensei — chaque prof a son propre localStorage, Système de persistence localStorage (load, save, chk, tog), Fonctions profil sensei (getSensei, setSenseiField, senseiFullName), Système de skins par nature de chakra (applySkin, spawnParticles), Ce que chaque sensei doit faire (1 seule fois), Ce qui est partagé vs ce qui est personnel, Comment mettre à jour chez tout le monde (+7 more)

### Community 6 - "Propositions Nouveaux Cours"
Cohesion: 0.12
Nodes (15): Compléments aux cours existants, Contre-espionnage — Protéger les secrets du village, Cours décalés, Cours originaux, Formations d'équipe et rôles tactiques, La chasse au sensei, La voix du ninja — Communication et commandement, Le conseil de guerre — Simulation stratégique (+7 more)

### Community 7 - "Documentation Projet CLAUDE.md"
Cohesion: 0.15
Nodes (12): CLAUDE.md — Cours RP Zenkai (Konoha), Cohérence lore Zenkai-RP, Contexte du projet, Déploiement & partage, Fichiers .docx, Les 45 cours (par module), Les documents sont pour le professeur, PAS pour les élèves, Règles importantes (+4 more)

### Community 8 - "Manifest PWA"
Cohesion: 0.15
Nodes (12): background_color, categories, description, display, icons, lang, name, orientation (+4 more)

### Community 9 - "Systeme Citations et Navigation"
Cohesion: 0.20
Nodes (12): Application principale Zenkai — gestion_cours_zenkai.html, Système de citations (getQuote, applySenseiName), Constante COURS_FLAVOR — Intros personnalité + anecdotes nature, Constante NATURE_CLOSING — Phrases de clôture par nature x module, Fonctions de navigation — nav(), buildSidebar(), render(), openCours(), Constante NOTES_PROF — Notes copiables pour les élèves, Système Onboarding — tuto première visite (ONBOARD_FINAL, TOUR_TIPS_TYPED), Constante SENSEI_QUOTES — 720 citations par cours x 16 types (+4 more)

### Community 10 - "Les 8 Regles d Or"
Cohesion: 0.22
Nodes (9): 1. Loyauté envers le village, 2. Respect de la hiérarchie, 3. Priorité à la mission, 4. Protection des habitants, 5. Secret et discrétion, 6. Respect entre shinobi, 7. Maîtrise de soi, 8. Honneur et responsabilité (+1 more)

### Community 11 - "Natures de Chakra et Kekkei Genkai"
Cohesion: 0.46
Nodes (8): Cycle des 5 Natures (Katon > Futon > Raiton > Doton > Suiton), Jinton – Kekkei Tota (Katon + Futon + Doton), Kekkei Genkai (Hereditary Powers), Test de la Feuille (détection nature chakra), Nature de Chakra – Référence, Natures de Chakra – Analyse et Combat, Diagramme Cycle des 5 Natures de Chakra, Diagramme Kekkei Genkai – Combinaisons de Natures

### Community 12 - "Arsenal Armes Ninja"
Cohesion: 0.25
Nodes (7): BOMBE FUMIGÈNE, CLOCHETTES, KUNAI, MAKIBISHI, PARCHEMIN EXPLOSIF, SENBON, SHURIKEN

### Community 13 - "Techniques Taijutsu"
Cohesion: 0.47
Nodes (6): Pied de l'Aube (technique taijutsu), Saut de Chakra (technique), Taijutsu – Techniques du Corps, Cours Pied de l'Aube, Cours Saut de Chakra, Théorie Taijutsu

### Community 14 - "Simulations Tactiques"
Cohesion: 0.33
Nodes (6): 1. Le clan Senju — Architectes du village, 2. Le clan Uchiha — Pilier du village, 3. Le clan Hyūga — Sentinelles silencieuses, 4. Le clan Nara — Cerveaux et archives, 5. Le clan Akimichi — Force logistique et cohésion sociale, III. Rôle des grands clans dans la naissance de Konoha

### Community 15 - "Cours Sensei Renard HTML"
Cohesion: 0.33
Nodes (6): I. Avant Konoha : un Pays du Feu en guerre, Les Akimichi — Remparts vivants, Les Hyūga — Sentinelles des montagnes, Les Nara — Cerveaux de l'ombre, Les Senju — Polyvalence et union, Les Uchiha — Fierté ardente

### Community 16 - "Mudras et Signes"
Cohesion: 0.33
Nodes (6): Apprenti ninja, Chef du village, Commandement, Haut Commandement, Hiérarchie Ninja de Konoha, Ninja de rang

### Community 17 - "Cours Raiton et Ninjutsu"
Cohesion: 0.60
Nodes (4): Kokoro (Zone Neutre Diplomatique), Pays des Cerisiers (Neutral Nation), Traité Diplomatique Suna & Konoha, Traité Diplomatique Renard (HTML)

### Community 18 - "Infiltration et Espionnage"
Cohesion: 0.60
Nodes (5): Pays du Feu (géographie), Cours L'Enquête, Pays du Feu – Orientation et Visite, Simulation Capture de Drapeau, Simulation d'Escorte

### Community 19 - "Pays du Feu et Orientation"
Cohesion: 0.40
Nodes (5): Ce que le Nindo EST — une philosophie, Ce que le Nindo N'EST PAS — un objectif, Définition, Le Nindo — La Voie du Ninja, Points clés à transmettre

## Knowledge Gaps
- **149 isolated node(s):** `Adaptation du contenu par personnalité + nature + spécialisation`, `Compteur "Cours donné"`, `Cours Kenjutsu (structure modulaire par type de lame)`, `Filtrage des cours par nature`, `Filtrage des cours par spécialisation combat` (+144 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 170 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Les Règles d'Or du Ninja` connect `Lore Clans et Fondateurs` to `Mudras et Signes`, `Les 8 Regles d Or`, `Pays du Feu et Orientation`?**
  _High betweenness centrality (0.262) - this node is a cross-community bridge._
- **Why does `Nindo — Le chemin du ninja, philosophie personnelle` connect `Lore Clans et Fondateurs` to `Cours Specialisation et Tactique`, `Techniques Ninjutsu et Taijutsu`?**
  _High betweenness centrality (0.213) - this node is a cross-community bridge._
- **Why does `Volonté du Feu (Will of Fire)` connect `Lore Clans et Fondateurs` to `Configuration Multi-Sensei`?**
  _High betweenness centrality (0.163) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Les Règles d'Or du Ninja` (e.g. with `Histoire du Village de Konoha` and `Cours Volonté du Feu`) actually correct?**
  _`Les Règles d'Or du Ninja` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Adaptation du contenu par personnalité + nature + spécialisation`, `Compteur "Cours donné"`, `Cours Kenjutsu (structure modulaire par type de lame)` to the rest of the system?**
  _149 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Configuration Multi-Sensei` be split into smaller, more focused modules?**
  _Cohesion score 0.09659090909090909 - nodes in this community are weakly interconnected._
- **Should `Lore Clans et Fondateurs` be split into smaller, more focused modules?**
  _Cohesion score 0.11666666666666667 - nodes in this community are weakly interconnected._