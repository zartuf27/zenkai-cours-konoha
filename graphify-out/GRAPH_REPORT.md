# Graph Report - ZENKAI TEEEST  (2026-09-23)

## Corpus Check
- 61 files · ~169,756 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 1 file(s) not represented in the graph (top: (none) 1)

## Summary
- 558 nodes · 906 edges · 37 communities (34 shown, 2 thin omitted)
- Extraction: 81% EXTRACTED · 19% INFERRED · 0% AMBIGUOUS · INFERRED: 173 edges (avg confidence: 0.87)
- Token cost: 135,777 input · 0 output

## Community Hubs (Navigation)
- Contenu de l'app et cours en attente
- Voie de la Lame Simple
- Données des cours et personnalisation
- Moteur de rendu et personnalisation
- Cours du Sensei Renard
- Propositions de nouveaux cours
- Techniques Raiton et Mudras
- Vérificateur de l'app
- Architecture du HTML
- Histoire du Village de Konoha
- Documentation du projet
- Pages et persistance de l'app
- Manifest PWA
- Skill projet — ajouter un cours
- Guide multi-sensei et déploiement
- Interface d'un cours (oral, notes)
- Les Règles d'Or du Ninja
- Sources Futon
- package.json
- Les 8 Règles d'Or (détail)
- Catalogue des armes ninja
- Lore : clans, rangs, natures
- Logs de sessions Discord
- Déploiement et PWA
- Techniques Taijutsu
- Tirage de sujets (cours en attente)
- Rôle des grands clans
- Avant Konoha : les clans
- Hiérarchie ninja
- Cours de terrain et enquête
- Le Nindo
- Hashirama, Madara et la fondation
- Directive Yamamoto Jakka
- Tobirama et la succession
- Cours La Traque
- Service Worker PWA

## God Nodes (most connected - your core abstractions)
1. `Architecture du HTML` - 23 edges
2. `Cours — Information & Communication en mission` - 20 edges
3. `const D` - 18 edges
4. `Histoire du Village de Konoha` - 17 edges
5. `applySenseiName()` - 16 edges
6. `render()` - 15 edges
7. `CONTENU` - 15 edges
8. `SENSEI_QUOTES` - 15 edges
9. `renderDetail()` - 14 edges
10. `gestion_cours_zenkai.html — App principale tout-en-un` - 14 edges

## Surprising Connections (you probably didn't know these)
- `Les composants d'un cours (D.cours, CONTENU, NOTES_PROF, SENSEI_QUOTES, COURS_FLAVOR, RESUME, filtrages, JSON)` --semantically_similar_to--> `Procédure pour ajouter un cours (9 étapes)`  [INFERRED] [semantically similar]
  .claude/skills/zenkai-cours/SKILL.md → CLAUDE.md
- `Éviter les redites (renvoi au cours précédent)` --semantically_similar_to--> `Règle anti-redite des cours Kenjutsu`  [INFERRED] [semantically similar]
  .claude/skills/zenkai-cours/SKILL.md → CLAUDE.md
- `Nature de Chakra – Référence` --shares_data_with--> `Diagramme Cycle des 5 Natures de Chakra`  [INFERRED]
  graphify-out/converted/nature de chakra_5dbb4ec8.md → img_cycle_natures.png
- `Discord — Session de cours Shin Tobira (cours 30-37)` --semantically_similar_to--> `Discord — Session de cours Yuki ORITO (cours 13-18)`  [INFERRED] [semantically similar]
  exemple2.png → exemple 1.png
- `Cycle des 5 Natures (Katon > Futon > Raiton > Doton > Suiton)` --references--> `Diagramme Cycle des 5 Natures de Chakra`  [EXTRACTED]
  graphify-out/converted/nature de chakra_5dbb4ec8.md → img_cycle_natures.png

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Sous-système « cours en attente de validation »** — gestion_cours_zenkai_validated_flag, gestion_cours_zenkai_renderbrouillons, gestion_cours_zenkai_views_brouillons, gestion_cours_zenkai_filtre_non_valide, gestion_cours_zenkai_badge_non_valide, gestion_cours_zenkai_bandeau_detail_non_valide [EXTRACTED 0.95]
- **Adaptation du contenu sur 3 axes (personnalité, nature, spécialisation)** — claude_const_cours_flavor, claude_const_spec_flavor, claude_type_de_sensei, claude_nature_de_chakra, claude_specialisation_combat [EXTRACTED 1.00]
- **Assemblage de la citation de clôture (type + nature)** — gestion_cours_zenkai_applysenseiname, gestion_cours_zenkai_sensei_quotes, gestion_cours_zenkai_nature_closing, gestion_cours_zenkai_nature_closing_injection [EXTRACTED 1.00]
- **Composition d'un cours (5-6 composants synchronisés)** — claude_const_d, claude_const_contenu, claude_const_notes_prof, claude_const_sensei_quotes, claude_const_cours_flavor, claude_procedure_ajout_cours [EXTRACTED 1.00]
- **Filtrage de visibilité des cours par sensei** — gestion_cours_zenkai_coursvisibleforsensei, gestion_cours_zenkai_cours_nature, gestion_cours_zenkai_cours_spec, gestion_cours_zenkai_cours_lame [EXTRACTED 1.00]
- **Zanshin → Kimi structure les deux techniques de la voie** — pratique_kenjutsu___voie_de_la_lame_simple__source__zanshin, pratique_kenjutsu___voie_de_la_lame_simple__source__kimi, pratique_kenjutsu___voie_de_la_lame_simple__source__lame_penetrante, pratique_kenjutsu___voie_de_la_lame_simple__source__ruee_aceree [EXTRACTED 1.00]
- **Exemples de logging Discord de sessions de cours** — exemple_1, exemple2, concept_discord_cours_log, sensei_yuki_orito, sensei_shin_tobira, sensei_keisuke_kuronami [EXTRACTED 1.00]
- **Filtrage des cours visibles par profil du sensei** — claude_cours_visible_for_sensei, claude_const_cours_nature, claude_const_cours_spec, claude_const_cours_lame, claude_nature_de_chakra, claude_specialisation_combat, claude_type_de_lame [EXTRACTED 1.00]
- **Lignée des techniques Futon (sphère de vent)** — gestion_cours_zenkai_fut_spirale, gestion_cours_zenkai_fut_mur, gestion_cours_zenkai_fut_cinglantes, gestion_cours_zenkai_fut_onde [EXTRACTED 1.00]
- **Filtrage des cours Kenjutsu par voie de la lame** — gestion_cours_zenkai_coursvisibleforsensei, gestion_cours_zenkai_cours_lame, gestion_cours_zenkai_cours_spec, gestion_cours_zenkai_kenjutsu_simple, gestion_cours_zenkai_kenj_penetrante, gestion_cours_zenkai_kenj_ruee, gestion_cours_zenkai_kenjutsu_double [EXTRACTED 1.00]
- **Flux du compte rendu Discord V2** — gestion_cours_zenkai_renderbilan, gestion_cours_zenkai_bilanv2set, gestion_cours_zenkai_builddiscordv2, gestion_cours_zenkai_copybilanv2, gestion_cours_zenkai_getcourscategorylabel, gestion_cours_zenkai_getcourshistory [EXTRACTED 1.00]
- **Progression des exercices vers la Ruée Acérée** — pratique_kenjutsu___voie_de_la_lame_simple__source__exercice_la_trajectoire, pratique_kenjutsu___voie_de_la_lame_simple__source__exercice_les_frappes_successives, pratique_kenjutsu___voie_de_la_lame_simple__source__exercice_la_synchronisation, pratique_kenjutsu___voie_de_la_lame_simple__source__ruee_aceree [EXTRACTED 1.00]
- **Programme Genjutsu proposé (théorie + pratique)** — cours_genjutsu_theorie, cours_genjutsu_pratique_labyrinthe, concept_genjutsu [EXTRACTED 1.00]
- **Citation de clôture : personnalité + nature dans le parchemin** — claude_affichage_des_citations, claude_const_sensei_quotes, claude_const_nature_closing, gestion_cours_zenkai_applysenseiname [INFERRED 0.85]
- **Composants obligatoires d'un cours (catalogue + contenu + notes + citations + flavor)** — gestion_cours_zenkai_d, gestion_cours_zenkai_contenu, gestion_cours_zenkai_notes_prof, gestion_cours_zenkai_sensei_quotes, gestion_cours_zenkai_cours_flavor, gestion_cours_zenkai_resume [INFERRED 0.85]
- **Éthique de la lame : engagement, forgeron, sélection et sécurité** — pratique_kenjutsu___voie_de_la_lame_simple__source__la_lame_extension_de_l_ame, pratique_kenjutsu___voie_de_la_lame_simple__source__responsabilite_et_engagement_du_sabreur, pratique_kenjutsu___voie_de_la_lame_simple__source__respect_du_forgeron, pratique_kenjutsu___voie_de_la_lame_simple__source__criteres_de_selection_forgerons, pratique_kenjutsu___voie_de_la_lame_simple__source__regles_de_securite [INFERRED 0.85]
- **4 supports FUTON intégrés comme techniques Futon de l'app** — futon_la_spirale_de_vent, futon_mur_de_vent, futon_les_spirales_cinglante, futon_l_onde_de_choc_futo, claude_exception_futon [INFERRED 0.85]
- **La méthode C.L.A.I.R. structure la transmission d'information** — gestion_cours_zenkai_info_communication, gestion_cours_zenkai_methode_clair, gestion_cours_zenkai_fait_vs_supposition, gestion_cours_zenkai_urgence_avant_detail, gestion_cours_zenkai_confirmation_reception [INFERRED 0.85]
- **Cours communication proposés** — cours_voix_du_ninja, cours_tournoi_eloquence_absurde, cours_messager_sous_pression [INFERRED 0.85]
- **Cours infiltration/espionnage proposés** — cours_contre_espionnage, cours_deguisement_ultime, cours_chasse_au_sensei, concept_infiltration, concept_traque [INFERRED 0.85]
- **Cours tactiques proposés** — cours_formations_equipe_roles_tactiques, cours_conseil_de_guerre, cours_psychologie_ennemi [INFERRED 0.85]

## Communities (37 total, 2 thin omitted)

### Community 0 - "Contenu de l'app et cours en attente"
Cohesion: 0.07
Nodes (78): Les composants d'un cours (D.cours, CONTENU, NOTES_PROF, SENSEI_QUOTES, COURS_FLAVOR, RESUME, filtrages, JSON), Éviter les redites (renvoi au cours précédent), Exception Futon (entrées propres SENSEI_QUOTES / COURS_FLAVOR), Module Tactique, applySenseiName(), Badge ⚠ Non validé, Filtrage par voie de la lame (typeLame), Cours — La Bourrasque Ardente (Taijutsu) (+70 more)

### Community 1 - "Voie de la Lame Simple"
Cohesion: 0.06
Nodes (54): Académie Militaire de Konoha, Bokken, Le Bushidō, Chūgi — La Loyauté, Cible : bambou ou mannequin, Continuité du mouvement (ne jamais interrompre son attaque), Critères de sélection pour les recommandations forgerons, Cycle Zanshin → Kimi (+46 more)

### Community 2 - "Données des cours et personnalisation"
Cohesion: 0.06
Nodes (51): techs[] sans prereq, Affichage des citations (quote remplacée si identique à SENSEI_QUOTES[id].sage ; NATURE_CLOSING en fin du dernier bloc parchemin), const COURS_FLAVOR — intros personnalité + anecdotes nature, const COURS_LAME — mapping cours → voie de la lame, const COURS_NATURE — mapping cours → nature, const COURS_SPEC — mapping cours → spécialisation combat, const D — objet de données principal, const NATURE_CLOSING — closing lines par nature × module (+43 more)

### Community 3 - "Moteur de rendu et personnalisation"
Cohesion: 0.06
Nodes (48): addCoursGiven(), applySkin(), Bandeau d'avertissement en page détail, bilanSetMode(), bilanV2Set(), buildDiscordV2(), buildSidebar(), celebrate() (+40 more)

### Community 4 - "Cours du Sensei Renard"
Cohesion: 0.09
Nodes (26): 12 Mudras (Hand Signs), 5 Clans Fondateurs (Senju, Uchiha, Hyuga, Nara, Akimichi), 8 Armes Ninja (Kunai, Shuriken, Katana, Senbon, Makibishi, Clochettes, Bombe fumigène, Parchemin explosif), 5 Chakra Natures (Katon, Suiton, Raiton, Doton, Futon), Crise de Succession (post-Tobirama), Cycle des 5 Natures (Katon > Futon > Raiton > Doton > Suiton), Fondation de Konoha (Hashirama & Madara), Jinton – Kekkei Tota (Katon + Futon + Doton) (+18 more)

### Community 5 - "Propositions de nouveaux cours"
Cohesion: 0.14
Nodes (25): Compléments aux cours existants, Cours décalés, Cours originaux, Genjutsu, Infiltration (cours existant), La Traque (cours existant), La chasse au sensei, Le conseil de guerre — Simulation stratégique (+17 more)

### Community 6 - "Techniques Raiton et Mudras"
Cohesion: 0.11
Nodes (15): Bourrasque Ardente — Technique taijutsu (coup de pied rotatif 360), Mudras — 12 signes de main pour modeler le chakra, Raiton — Nature de chakra Foudre (4 techniques ninjutsu), Yumi Amano — Coordinatrice cours, OP des posts Discord, Aide pour construire les cours — Mécaniques pédagogiques (Yumi Amano), 1. Rayon Instantané, 2. Boule Fulgurante, 3. Ruée Foudroyante (+7 more)

### Community 7 - "Vérificateur de l'app"
Cohesion: 0.11
Nodes (14): externes, HOOK, HRP, HTML, JSONF, NATURES, NO_SMOKE, notes (+6 more)

### Community 8 - "Architecture du HTML"
Cohesion: 0.12
Nodes (17): Adaptation du contenu par personnalité + nature + spécialisation, Architecture du HTML, Cours Kenjutsu (structure modulaire par type de lame), Filtrage des cours par nature, Filtrage des cours par spécialisation combat, Fonctions clés, Graphify — Mémoire structurelle, Icônes (+9 more)

### Community 9 - "Histoire du Village de Konoha"
Cohesion: 0.20
Nodes (14): Les 8 Règles d'Or du Ninja, Clan Akimichi, Clan Hyuga, Clan Nara, Clan Senju, Clan Uchiha, Hashirama Senju (Premier Hokage), Madara Uchiha (+6 more)

### Community 10 - "Documentation du projet"
Cohesion: 0.15
Nodes (12): CLAUDE.md — Cours RP Zenkai (Konoha), Cohérence lore Zenkai-RP, Contexte du projet, Déploiement & partage, Fichiers .docx, Les 45 cours (par module), Les documents sont pour le professeur, PAS pour les élèves, Règles importantes (+4 more)

### Community 11 - "Pages et persistance de l'app"
Cohesion: 0.22
Nodes (13): Clé S.c — checkboxes de progression, Clé S.sensei — champs du profil sensei, S.n.cours_history — journal des cours donnés, gestion_cours_zenkai.html — App principale tout-en-un, Modèle multi-sensei (HTML partagé / localStorage personnel), Page Règlement (Directive Yamamoto Jakka), Page Fin de mois (bilan), Page Dashboard (+5 more)

### Community 12 - "Manifest PWA"
Cohesion: 0.15
Nodes (12): background_color, categories, description, display, icons, lang, name, orientation (+4 more)

### Community 13 - "Skill projet — ajouter un cours"
Cohesion: 0.18
Nodes (12): Écriture du HTML par script Python à ancres textuelles, tools/verifier.mjs (vérification avant commit + hook PostToolUse), Skill zenkai-cours (ajouter un cours), 1. Lire la source et décider du cadrage, 2. Les composants à écrire, 3. Les deux règles de contenu à ne jamais enfreindre, 4. Éviter les redites, 5. Vérifier avant de committer (+4 more)

### Community 14 - "Guide multi-sensei et déploiement"
Cohesion: 0.17
Nodes (11): Déploiement GitHub Pages — git push auto-deploy, Ce que chaque sensei doit faire (1 seule fois), Ce qui est partagé vs ce qui est personnel, Comment mettre à jour chez tout le monde, FAQ, Guide de partage — Support de cours Zenkai, Le lien à partager, Résumé en 3 lignes (+3 more)

### Community 15 - "Interface d'un cours (oral, notes)"
Cohesion: 0.25
Nodes (11): Zéro HRP dans le copiable, Bouton « Copier pour les élèves », Compteur « Cours donné » (+1 / Proposé / −1), const CONTENU — guides oraux par cours, const NOTES_PROF — notes pour les élèves (copy + html), Interface cours 2 onglets (Support oral / Marqueurs), Mode Présentation (overlay plein écran), Page Cours (liste filtrable) (+3 more)

### Community 16 - "Les Règles d'Or du Ninja"
Cohesion: 0.20
Nodes (8): Dilemme moral — Mission vs protection du village, Hiérarchie Ninja de Konoha (10 rangs), Nindo — Le chemin du ninja, philosophie personnelle, Eraku Morikawa — Sensei auteur des propositions de cours, Gromlof — Sensei auteur simulation de mission, Hishiba Zakuto — Mentor d'Eraku Morikawa (décédé), Les Règles d'Or du Ninja, Récapitulatif

### Community 17 - "Sources Futon"
Cohesion: 0.28
Nodes (9): Skin Futon (verts/émeraude, feuilles, float-drift), L'Onde de Choc Futon (support source), Grande sphère de vent comprimé qui repousse l'ennemi, La Spirale de Vent (support source), Accumulation du chakra Futon dans les poumons → canalisation → formation → projection, Les Spirales Cinglantes (support source), Trois petites sphères de vent projetées simultanément, Mur de Vent (support source) (+1 more)

### Community 18 - "package.json"
Cohesion: 0.22
Nodes (8): description, devDependencies, jsdom, name, private, scripts, check, jsdom

### Community 19 - "Les 8 Règles d'Or (détail)"
Cohesion: 0.22
Nodes (9): 1. Loyauté envers le village, 2. Respect de la hiérarchie, 3. Priorité à la mission, 4. Protection des habitants, 5. Secret et discrétion, 6. Respect entre shinobi, 7. Maîtrise de soi, 8. Honneur et responsabilité (+1 more)

### Community 20 - "Catalogue des armes ninja"
Cohesion: 0.25
Nodes (7): BOMBE FUMIGÈNE, CLOCHETTES, KUNAI, MAKIBISHI, PARCHEMIN EXPLOSIF, SENBON, SHURIKEN

### Community 21 - "Lore : clans, rangs, natures"
Cohesion: 0.29
Nodes (7): Cycle des natures (Katon > Futon > Raiton > Doton > Suiton), Cohérence lore Zenkai-RP (clans, chronologie, rangs), Page Hiérarchie (10 rangs ninja), Page Natures (5 natures, cycle, kekkei genkai), Parchemin — canal Discord de rapport de l'Académie, Parchemin V2 — compte rendu détaillé, Rang du sensei (Genin Confirmé → Hokage)

### Community 22 - "Logs de sessions Discord"
Cohesion: 0.48
Nodes (7): Discord — Format de log de cours, Évaluation pour passer Professeur Confirmé, Discord — Session de cours Shin Tobira (cours 30-37), Discord — Session de cours Yuki ORITO (cours 13-18), Keisuke Kuronami, Shin Tobira, Yuki ORITO

### Community 23 - "Déploiement et PWA"
Cohesion: 0.40
Nodes (6): Save complet (CLAUDE.md, CACHE_NAME, graphify, git push), Déploiement GitHub Pages (git add/commit/push), manifest.json — Manifest PWA, PWA & Outils, sw.js — Service Worker PWA, Icône PWA Zenkai (SVG Konoha)

### Community 24 - "Techniques Taijutsu"
Cohesion: 0.47
Nodes (6): Pied de l'Aube (technique taijutsu), Saut de Chakra (technique), Taijutsu – Techniques du Corps, Cours Pied de l'Aube, Cours Saut de Chakra, Théorie Taijutsu

### Community 25 - "Tirage de sujets (cours en attente)"
Cohesion: 0.47
Nodes (6): _diffOf(), _pickSujet(), playClick(), SUJETS_ELOQUENCE (facile / moyen / difficile), tirerSujetEloquence(), tirerSujetInverse()

### Community 26 - "Rôle des grands clans"
Cohesion: 0.33
Nodes (6): 1. Le clan Senju — Architectes du village, 2. Le clan Uchiha — Pilier du village, 3. Le clan Hyūga — Sentinelles silencieuses, 4. Le clan Nara — Cerveaux et archives, 5. Le clan Akimichi — Force logistique et cohésion sociale, III. Rôle des grands clans dans la naissance de Konoha

### Community 27 - "Avant Konoha : les clans"
Cohesion: 0.33
Nodes (6): I. Avant Konoha : un Pays du Feu en guerre, Les Akimichi — Remparts vivants, Les Hyūga — Sentinelles des montagnes, Les Nara — Cerveaux de l'ombre, Les Senju — Polyvalence et union, Les Uchiha — Fierté ardente

### Community 28 - "Hiérarchie ninja"
Cohesion: 0.33
Nodes (6): Apprenti ninja, Chef du village, Commandement, Haut Commandement, Hiérarchie Ninja de Konoha, Ninja de rang

### Community 29 - "Cours de terrain et enquête"
Cohesion: 0.60
Nodes (5): Pays du Feu (géographie), Cours L'Enquête, Pays du Feu – Orientation et Visite, Simulation Capture de Drapeau, Simulation d'Escorte

### Community 30 - "Le Nindo"
Cohesion: 0.40
Nodes (5): Ce que le Nindo EST — une philosophie, Ce que le Nindo N'EST PAS — un objectif, Définition, Le Nindo — La Voie du Ninja, Points clés à transmettre

### Community 31 - "Hashirama, Madara et la fondation"
Cohesion: 0.50
Nodes (4): II. Hashirama, Madara et la fondation de Konoha, L'alliance impensable, L'amitié brisée, La fondation

### Community 32 - "Directive Yamamoto Jakka"
Cohesion: 0.67
Nodes (3): Announcement Format Directive, Yamamoto Jakka - Responsable Professeur, Format tableau - Directive Yamamoto Jakka

### Community 33 - "Tobirama et la succession"
Cohesion: 0.67
Nodes (3): IV. Tobirama Hokage, l'institutionnalisation et la crise, La crise de succession, Le bâtisseur d'institutions

## Ambiguous Edges - Review These
- `Académie Militaire de Konoha` → `Le Bushidō`  [AMBIGUOUS]
  Pratique/Kenjutsu - Voie de la Lame Simple (source).md · relation: conceptually_related_to

## Knowledge Gaps
- **180 isolated node(s):** `background_color`, `categories`, `description`, `display`, `icons` (+175 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 204 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Académie Militaire de Konoha` and `Le Bushidō`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Architecture du HTML` connect `Architecture du HTML` to `Données des cours et personnalisation`, `Documentation du projet`, `Pages et persistance de l'app`, `Interface d'un cours (oral, notes)`, `Déploiement et PWA`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Why does `Exception Futon (entrées propres SENSEI_QUOTES / COURS_FLAVOR)` connect `Contenu de l'app et cours en attente` to `Architecture du HTML`, `Données des cours et personnalisation`, `Skill projet — ajouter un cours`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Why does `Les composants d'un cours (D.cours, CONTENU, NOTES_PROF, SENSEI_QUOTES, COURS_FLAVOR, RESUME, filtrages, JSON)` connect `Contenu de l'app et cours en attente` to `Données des cours et personnalisation`, `Skill projet — ajouter un cours`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Cours — Information & Communication en mission` (e.g. with `Cours — La Chasse au Sensei` and `Communiquer sous pression`) actually correct?**
  _`Cours — Information & Communication en mission` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `const D` (e.g. with `renderHier()` and `renderMudras()`) actually correct?**
  _`const D` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `applySenseiName()` (e.g. with `Affichage des citations (quote remplacée si identique à SENSEI_QUOTES[id].sage ; NATURE_CLOSING en fin du dernier bloc parchemin)` and `getQuote()`) actually correct?**
  _`applySenseiName()` has 3 INFERRED edges - model-reasoned connections that need verification._