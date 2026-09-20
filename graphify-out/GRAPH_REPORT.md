# Graph Report - ZENKAI TEEEST  (2026-09-20)

## Corpus Check
- 39 files · ~136,360 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 1 file(s) not represented in the graph (top: (none) 1)

## Summary
- 318 nodes · 344 edges · 49 communities (21 shown, 14 thin omitted)
- Extraction: 79% EXTRACTED · 21% INFERRED · 0% AMBIGUOUS · INFERRED: 73 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `69f056f7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Histoire du Village de Konoha
- Propositions de nouveaux cours
- function getSensei() - Get Sensei Profile
- function render() - Main Render
- Architecture du HTML
- Sensei Renard Teaching Style (Forest Metaphors)
- cours raiton_c4b2c82b.md
- Guide de partage — Support de cours Zenkai
- CLAUDE.md — Cours RP Zenkai (Konoha)
- manifest.json
- Nature de Chakra – Référence
- Inoshi Baikutai — Sensei auteur cours La Traque
- Les 8 Règles d'Or
- arme ninja_45a6fc66.md
- Discord — Session de cours Yuki ORITO (cours 13-18)
- Cours Pied de l'Aube
- III. Rôle des grands clans dans la naissance de Konoha
- I. Avant Konoha : un Pays du Feu en guerre
- Hiérarchie Ninja de Konoha
- Onboarding Flow (2-Phase Tour)
- Simulation d'Escorte
- Le Nindo — La Voie du Ninja
- sw.js
- Genjutsu
- PWA (Service Worker + Manifest)
- function celebrate() - Confetti Animation
- const D - Main Data Object
- function esc() - HTML Escape Security
- function exportPDF() - PDF Export
- const INTERACTIF - Interactive Blocks
- const LIEUX_ANNONCE - Announcement Locations
- const RESUME - Course Summaries
- const SUJETS_ELOQUENCE - Eloquence Topics
- function validateSaveData() - Import Sanitization
- Icône PWA Zenkai (SVG Konoha)

## God Nodes (most connected - your core abstractions)
1. `Architecture du HTML` - 23 edges
2. `Histoire du Village de Konoha` - 17 edges
3. `Propositions de nouveaux cours` - 13 edges
4. `function render() - Main Render` - 11 edges
5. `Les Règles d'Or du Ninja` - 10 edges
6. `Les 8 Règles d'Or` - 9 edges
7. `Volonté du Feu (Will of Fire)` - 9 edges
8. `Guide de partage — Support de cours Zenkai` - 7 edges
9. `CLAUDE.md — Cours RP Zenkai (Konoha)` - 7 edges
10. `Règles importantes` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Diagramme Cycle des 5 Natures de Chakra` --shares_data_with--> `Nature de Chakra – Référence`  [INFERRED]
  img_cycle_natures.png → graphify-out/converted/nature de chakra_5dbb4ec8.md
- `Diagramme Cycle des 5 Natures de Chakra` --references--> `Cycle des 5 Natures (Katon > Futon > Raiton > Doton > Suiton)`  [EXTRACTED]
  img_cycle_natures.png → graphify-out/converted/nature de chakra_5dbb4ec8.md
- `Diagramme Kekkei Genkai – Combinaisons de Natures` --shares_data_with--> `Nature de Chakra – Référence`  [INFERRED]
  img_kekkei_genkai.png → graphify-out/converted/nature de chakra_5dbb4ec8.md
- `Discord — Session de cours Yuki ORITO (cours 13-18)` --semantically_similar_to--> `Discord — Session de cours Shin Tobira (cours 30-37)`  [INFERRED] [semantically similar]
  exemple 1.png → exemple2.png
- `Diagramme Kekkei Genkai – Combinaisons de Natures` --references--> `Cycle des 5 Natures (Katon > Futon > Raiton > Doton > Suiton)`  [EXTRACTED]
  img_kekkei_genkai.png → graphify-out/converted/nature de chakra_5dbb4ec8.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Course Content Data Layer** — gestion_cours_zenkai_html_const_d, gestion_cours_zenkai_html_contenu, gestion_cours_zenkai_html_notes_prof, gestion_cours_zenkai_html_resume, gestion_cours_zenkai_html_cours_nature, gestion_cours_zenkai_html_cours_spec [EXTRACTED 1.00]
- **Course Filtering (Nature + Specialization)** — gestion_cours_zenkai_html_coursvisibleforsensei, gestion_cours_zenkai_html_cours_nature, gestion_cours_zenkai_html_cours_spec, concept_course_filtering [EXTRACTED 1.00]
- **Exemples de logging Discord de sessions de cours** — exemple_1, exemple2, concept_discord_cours_log, sensei_yuki_orito, sensei_shin_tobira, sensei_keisuke_kuronami [EXTRACTED 1.00]
- **Navigation Pipeline (VIEWS -> buildSidebar -> nav -> render -> renderXxx)** — gestion_cours_zenkai_html_views, gestion_cours_zenkai_html_buildsidebar, gestion_cours_zenkai_html_nav, gestion_cours_zenkai_html_render, gestion_cours_zenkai_html_renderdash, gestion_cours_zenkai_html_rendercourslist, gestion_cours_zenkai_html_renderdetail, gestion_cours_zenkai_html_renderbilan, gestion_cours_zenkai_html_renderhistorique, gestion_cours_zenkai_html_rendersensei, gestion_cours_zenkai_html_renderannonces, gestion_cours_zenkai_html_rendermudras, gestion_cours_zenkai_html_rendernatures, gestion_cours_zenkai_html_renderadmin [EXTRACTED 1.00]
- **Onboarding & Tour System** — gestion_cours_zenkai_html_showonboarding, gestion_cours_zenkai_html_starttourguide, gestion_cours_zenkai_html_onboard_final, gestion_cours_zenkai_html_tour_tips_typed, concept_onboarding [EXTRACTED 1.00]
- **Sensei Personalization System (Type + Nature + Spec)** — gestion_cours_zenkai_html_sensei_types, gestion_cours_zenkai_html_cours_flavor, gestion_cours_zenkai_html_spec_flavor, gestion_cours_zenkai_html_sensei_quotes, gestion_cours_zenkai_html_nature_closing, gestion_cours_zenkai_html_sidebar_labels, gestion_cours_zenkai_html_applysenseiname, gestion_cours_zenkai_html_getquote, gestion_cours_zenkai_html_getsidebarlabel [EXTRACTED 1.00]
- **Programme Genjutsu proposé (théorie + pratique)** — cours_genjutsu_theorie, cours_genjutsu_pratique_labyrinthe, concept_genjutsu [EXTRACTED 1.00]
- **Nature Skin & Theme System** — gestion_cours_zenkai_html_applyskin, gestion_cours_zenkai_html_spawnparticles, gestion_cours_zenkai_html_nature_particles, concept_skin_system [EXTRACTED 1.00]
- **Cours communication proposés** — cours_voix_du_ninja, cours_tournoi_eloquence_absurde, cours_messager_sous_pression [INFERRED 0.85]
- **Cours infiltration/espionnage proposés** — cours_contre_espionnage, cours_deguisement_ultime, cours_chasse_au_sensei, concept_infiltration, concept_traque [INFERRED 0.85]
- **Cours tactiques proposés** — cours_formations_equipe_roles_tactiques, cours_conseil_de_guerre, cours_psychologie_ennemi [INFERRED 0.85]

## Communities (49 total, 14 thin omitted)

### Community 0 - "Histoire du Village de Konoha"
Cohesion: 0.08
Nodes (29): Les 8 Règles d'Or du Ninja, Clan Akimichi, Clan Hyuga, Clan Nara, Clan Senju, Clan Uchiha, Dilemme moral — Mission vs protection du village, Hashirama Senju (Premier Hokage) (+21 more)

### Community 1 - "Propositions de nouveaux cours"
Cohesion: 0.14
Nodes (24): Compléments aux cours existants, Cours décalés, Cours originaux, Infiltration (cours existant), La Traque (cours existant), La chasse au sensei, Le conseil de guerre — Simulation stratégique, Contre-espionnage — Protéger les secrets du village (+16 more)

### Community 2 - "function getSensei() - Get Sensei Profile"
Cohesion: 0.09
Nodes (25): Citation System (Type + Nature + Signature), Nature-Based Skin/Theme System, function applySenseiName() - Content Personalization, function applySkin() - Apply Nature Skin, function buildSidebar() - Sidebar Builder, function clipCopy() - Clipboard Copy, const CONTENU - Oral Guides HTML, function copyNotes() - Copy Notes for Students (+17 more)

### Community 3 - "function render() - Main Render"
Cohesion: 0.10
Nodes (23): CLAUDE.md - Project Documentation, Course Filtering by Nature & Specialization, Discord Parchemin Report System, Announcement Format Directive, Konoha - Village, Yamamoto Jakka - Responsable Professeur, Zenkai - RP Server, gestion_cours_zenkai.html - Main App (+15 more)

### Community 4 - "Architecture du HTML"
Cohesion: 0.09
Nodes (23): Adaptation du contenu par personnalité + nature + spécialisation, Architecture du HTML, Compteur "Cours donné", Cours Kenjutsu (structure modulaire par type de lame), Filtrage des cours par nature, Filtrage des cours par spécialisation combat, Fonctions clés, Graphify — Mémoire structurelle (+15 more)

### Community 5 - "Sensei Renard Teaching Style (Forest Metaphors)"
Cohesion: 0.14
Nodes (15): 12 Mudras (Hand Signs), 5 Clans Fondateurs (Senju, Uchiha, Hyuga, Nara, Akimichi), 8 Armes Ninja (Kunai, Shuriken, Katana, Senbon, Makibishi, Clochettes, Bombe fumigène, Parchemin explosif), Crise de Succession (post-Tobirama), Fondation de Konoha (Hashirama & Madara), Kokoro (Zone Neutre Diplomatique), Pays des Cerisiers (Neutral Nation), Sensei Renard Teaching Style (Forest Metaphors) (+7 more)

### Community 6 - "cours raiton_c4b2c82b.md"
Cohesion: 0.11
Nodes (15): Bourrasque Ardente — Technique taijutsu (coup de pied rotatif 360), Mudras — 12 signes de main pour modeler le chakra, Raiton — Nature de chakra Foudre (4 techniques ninjutsu), Yumi Amano — Coordinatrice cours, OP des posts Discord, Aide pour construire les cours — Mécaniques pédagogiques (Yumi Amano), 1. Rayon Instantané, 2. Boule Fulgurante, 3. Ruée Foudroyante (+7 more)

### Community 7 - "Guide de partage — Support de cours Zenkai"
Cohesion: 0.12
Nodes (16): Déploiement GitHub Pages — git push auto-deploy, LocalStorage Persistence (zenkai_v2), Multi-Sensei Architecture, function addCoursGiven() - Track Course Given, function load() - LocalStorage Load, function save() - LocalStorage Save, Ce que chaque sensei doit faire (1 seule fois), Ce qui est partagé vs ce qui est personnel (+8 more)

### Community 9 - "CLAUDE.md — Cours RP Zenkai (Konoha)"
Cohesion: 0.15
Nodes (12): CLAUDE.md — Cours RP Zenkai (Konoha), Cohérence lore Zenkai-RP, Contexte du projet, Déploiement & partage, Fichiers .docx, Les 45 cours (par module), Les documents sont pour le professeur, PAS pour les élèves, Règles importantes (+4 more)

### Community 10 - "manifest.json"
Cohesion: 0.15
Nodes (12): background_color, categories, description, display, icons, lang, name, orientation (+4 more)

### Community 11 - "Nature de Chakra – Référence"
Cohesion: 0.29
Nodes (11): 5 Chakra Natures (Katon, Suiton, Raiton, Doton, Futon), Cycle des 5 Natures (Katon > Futon > Raiton > Doton > Suiton), Jinton – Kekkei Tota (Katon + Futon + Doton), Kekkei Genkai (Hereditary Powers), Nature Cycle (Katon > Futon > Raiton > Doton > Suiton > Katon), Test de la Feuille (détection nature chakra), Nature de Chakra Renard (HTML), Nature de Chakra – Référence (+3 more)

### Community 13 - "Les 8 Règles d'Or"
Cohesion: 0.22
Nodes (9): 1. Loyauté envers le village, 2. Respect de la hiérarchie, 3. Priorité à la mission, 4. Protection des habitants, 5. Secret et discrétion, 6. Respect entre shinobi, 7. Maîtrise de soi, 8. Honneur et responsabilité (+1 more)

### Community 14 - "arme ninja_45a6fc66.md"
Cohesion: 0.25
Nodes (7): BOMBE FUMIGÈNE, CLOCHETTES, KUNAI, MAKIBISHI, PARCHEMIN EXPLOSIF, SENBON, SHURIKEN

### Community 15 - "Discord — Session de cours Yuki ORITO (cours 13-18)"
Cohesion: 0.48
Nodes (7): Discord — Format de log de cours, Évaluation pour passer Professeur Confirmé, Discord — Session de cours Shin Tobira (cours 30-37), Discord — Session de cours Yuki ORITO (cours 13-18), Keisuke Kuronami, Shin Tobira, Yuki ORITO

### Community 16 - "Cours Pied de l'Aube"
Cohesion: 0.47
Nodes (6): Pied de l'Aube (technique taijutsu), Saut de Chakra (technique), Taijutsu – Techniques du Corps, Cours Pied de l'Aube, Cours Saut de Chakra, Théorie Taijutsu

### Community 17 - "III. Rôle des grands clans dans la naissance de Konoha"
Cohesion: 0.33
Nodes (6): 1. Le clan Senju — Architectes du village, 2. Le clan Uchiha — Pilier du village, 3. Le clan Hyūga — Sentinelles silencieuses, 4. Le clan Nara — Cerveaux et archives, 5. Le clan Akimichi — Force logistique et cohésion sociale, III. Rôle des grands clans dans la naissance de Konoha

### Community 18 - "I. Avant Konoha : un Pays du Feu en guerre"
Cohesion: 0.33
Nodes (6): I. Avant Konoha : un Pays du Feu en guerre, Les Akimichi — Remparts vivants, Les Hyūga — Sentinelles des montagnes, Les Nara — Cerveaux de l'ombre, Les Senju — Polyvalence et union, Les Uchiha — Fierté ardente

### Community 19 - "Hiérarchie Ninja de Konoha"
Cohesion: 0.33
Nodes (6): Apprenti ninja, Chef du village, Commandement, Haut Commandement, Hiérarchie Ninja de Konoha, Ninja de rang

### Community 20 - "Onboarding Flow (2-Phase Tour)"
Cohesion: 0.40
Nodes (5): Onboarding Flow (2-Phase Tour), const ONBOARD_FINAL - Onboarding Final Words, function showOnboarding() - Onboarding Flow, function startTourGuide() - Tour Guide, const TOUR_TIPS_TYPED - Typed Tour Descriptions

### Community 21 - "Simulation d'Escorte"
Cohesion: 0.60
Nodes (5): Pays du Feu (géographie), Cours L'Enquête, Pays du Feu – Orientation et Visite, Simulation Capture de Drapeau, Simulation d'Escorte

### Community 22 - "Le Nindo — La Voie du Ninja"
Cohesion: 0.40
Nodes (5): Ce que le Nindo EST — une philosophie, Ce que le Nindo N'EST PAS — un objectif, Définition, Le Nindo — La Voie du Ninja, Points clés à transmettre

## Knowledge Gaps
- **153 isolated node(s):** `name`, `short_name`, `description`, `start_url`, `scope` (+148 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 181 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Les Règles d'Or du Ninja` connect `Histoire du Village de Konoha` to `Hiérarchie Ninja de Konoha`, `Les 8 Règles d'Or`, `Le Nindo — La Voie du Ninja`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Why does `Volonté du Feu (Will of Fire)` connect `Histoire du Village de Konoha` to `Sensei Renard Teaching Style (Forest Metaphors)`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Why does `Histoire du Village de Konoha` connect `Histoire du Village de Konoha` to `III. Rôle des grands clans dans la naissance de Konoha`, `I. Avant Konoha : un Pays du Feu en guerre`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `function render() - Main Render` (e.g. with `function renderAdmin() - Admin/Reglement View` and `function renderAnnonces() - Announcements View`) actually correct?**
  _`function render() - Main Render` has 10 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Les Règles d'Or du Ninja` (e.g. with `Histoire du Village de Konoha` and `Cours Volonté du Feu`) actually correct?**
  _`Les Règles d'Or du Ninja` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `short_name`, `description` to the rest of the system?**
  _153 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Histoire du Village de Konoha` be split into smaller, more focused modules?**
  _Cohesion score 0.08199643493761141 - nodes in this community are weakly interconnected._