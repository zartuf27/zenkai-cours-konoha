# Graph Report - ZENKAI TEEEST  (2026-09-23)

## Corpus Check
- 46 files · ~169,604 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 1 file(s) not represented in the graph (top: (none) 1)

## Summary
- 533 nodes · 801 edges · 26 communities (21 shown, 2 thin omitted)
- Extraction: 84% EXTRACTED · 16% INFERRED · 0% AMBIGUOUS · INFERRED: 127 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0af2f2b0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Moteur de rendu et personnalisation
- Voie de la Lame Simple
- Cours en attente de validation
- Cours du Sensei Renard
- Propositions de nouveaux cours
- Vérificateur de l'app
- Techniques Raiton et Mudras
- package.json
- Documentation du projet
- Histoire du Village de Konoha
- Manifest PWA
- Données des cours et personnalisation
- Guide multi-sensei et déploiement
- Architecture du HTML
- Les Règles d'Or du Ninja
- Skill projet — ajouter un cours
- Catalogue des armes ninja
- Logs de sessions Discord
- Techniques Taijutsu
- Cours de terrain et enquête
- Directive Yamamoto Jakka
- Cours La Traque
- Service Worker PWA

## God Nodes (most connected - your core abstractions)
1. `Architecture du HTML` - 23 edges
2. `Cours — Information & Communication en mission` - 20 edges
3. `Histoire du Village de Konoha` - 17 edges
4. `render()` - 15 edges
5. `applySenseiName()` - 14 edges
6. `gestion_cours_zenkai.html — App principale tout-en-un` - 14 edges
7. `Propositions de nouveaux cours` - 13 edges
8. `getSensei()` - 13 edges
9. `renderDetail()` - 13 edges
10. `D — Catalogue de données (cours, rangs, mudras, natures)` - 11 edges

## Surprising Connections (you probably didn't know these)
- `Nature de Chakra – Référence` --shares_data_with--> `Diagramme Cycle des 5 Natures de Chakra`  [INFERRED]
  graphify-out/converted/nature de chakra_5dbb4ec8.md → img_cycle_natures.png
- `Discord — Session de cours Shin Tobira (cours 30-37)` --semantically_similar_to--> `Discord — Session de cours Yuki ORITO (cours 13-18)`  [INFERRED] [semantically similar]
  exemple2.png → exemple 1.png
- `Cycle des 5 Natures (Katon > Futon > Raiton > Doton > Suiton)` --references--> `Diagramme Cycle des 5 Natures de Chakra`  [EXTRACTED]
  graphify-out/converted/nature de chakra_5dbb4ec8.md → img_cycle_natures.png
- `Nature de Chakra – Référence` --shares_data_with--> `Diagramme Kekkei Genkai – Combinaisons de Natures`  [INFERRED]
  graphify-out/converted/nature de chakra_5dbb4ec8.md → img_kekkei_genkai.png
- `PWA & Outils` --references--> `Icône PWA Zenkai (SVG Konoha)`  [EXTRACTED]
  CLAUDE.md → icon-192.svg

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Sous-système « cours en attente de validation »** — gestion_cours_zenkai_validated_flag, gestion_cours_zenkai_renderbrouillons, gestion_cours_zenkai_views_brouillons, gestion_cours_zenkai_filtre_non_valide, gestion_cours_zenkai_badge_non_valide, gestion_cours_zenkai_bandeau_detail_non_valide [EXTRACTED 0.95]
- **Adaptation du contenu sur 3 axes (personnalité, nature, spécialisation)** — claude_const_cours_flavor, claude_const_spec_flavor, claude_type_de_sensei, claude_nature_de_chakra, claude_specialisation_combat [EXTRACTED 1.00]
- **Composition d'un cours (5-6 composants synchronisés)** — claude_const_d, claude_const_contenu, claude_const_notes_prof, claude_const_sensei_quotes, claude_const_cours_flavor, claude_procedure_ajout_cours [EXTRACTED 1.00]
- **Zanshin → Kimi structure les deux techniques de la voie** — pratique_kenjutsu___voie_de_la_lame_simple__source__zanshin, pratique_kenjutsu___voie_de_la_lame_simple__source__kimi, pratique_kenjutsu___voie_de_la_lame_simple__source__lame_penetrante, pratique_kenjutsu___voie_de_la_lame_simple__source__ruee_aceree [EXTRACTED 1.00]
- **Exemples de logging Discord de sessions de cours** — exemple_1, exemple2, concept_discord_cours_log, sensei_yuki_orito, sensei_shin_tobira, sensei_keisuke_kuronami [EXTRACTED 1.00]
- **Filtrage des cours visibles par profil du sensei** — claude_cours_visible_for_sensei, claude_const_cours_nature, claude_const_cours_spec, claude_const_cours_lame, claude_nature_de_chakra, claude_specialisation_combat, claude_type_de_lame [EXTRACTED 1.00]
- **Filtrage des cours Kenjutsu par voie de la lame** — gestion_cours_zenkai_coursvisibleforsensei, gestion_cours_zenkai_cours_lame, gestion_cours_zenkai_cours_spec, gestion_cours_zenkai_kenjutsu_simple, gestion_cours_zenkai_kenj_penetrante, gestion_cours_zenkai_kenj_ruee, gestion_cours_zenkai_kenjutsu_double [EXTRACTED 1.00]
- **Flux du compte rendu Discord V2** — gestion_cours_zenkai_renderbilan, gestion_cours_zenkai_bilanv2set, gestion_cours_zenkai_builddiscordv2, gestion_cours_zenkai_copybilanv2, gestion_cours_zenkai_getcourscategorylabel, gestion_cours_zenkai_getcourshistory [EXTRACTED 1.00]
- **Progression des exercices vers la Ruée Acérée** — pratique_kenjutsu___voie_de_la_lame_simple__source__exercice_la_trajectoire, pratique_kenjutsu___voie_de_la_lame_simple__source__exercice_les_frappes_successives, pratique_kenjutsu___voie_de_la_lame_simple__source__exercice_la_synchronisation, pratique_kenjutsu___voie_de_la_lame_simple__source__ruee_aceree [EXTRACTED 1.00]
- **Programme Genjutsu proposé (théorie + pratique)** — cours_genjutsu_theorie, cours_genjutsu_pratique_labyrinthe, concept_genjutsu [EXTRACTED 1.00]
- **Composants obligatoires d'un cours (catalogue + contenu + notes + citations + flavor)** — gestion_cours_zenkai_d, gestion_cours_zenkai_contenu, gestion_cours_zenkai_notes_prof, gestion_cours_zenkai_sensei_quotes, gestion_cours_zenkai_cours_flavor, gestion_cours_zenkai_resume [INFERRED 0.85]
- **Éthique de la lame : engagement, forgeron, sélection et sécurité** — pratique_kenjutsu___voie_de_la_lame_simple__source__la_lame_extension_de_l_ame, pratique_kenjutsu___voie_de_la_lame_simple__source__responsabilite_et_engagement_du_sabreur, pratique_kenjutsu___voie_de_la_lame_simple__source__respect_du_forgeron, pratique_kenjutsu___voie_de_la_lame_simple__source__criteres_de_selection_forgerons, pratique_kenjutsu___voie_de_la_lame_simple__source__regles_de_securite [INFERRED 0.85]
- **La méthode C.L.A.I.R. structure la transmission d'information** — gestion_cours_zenkai_info_communication, gestion_cours_zenkai_methode_clair, gestion_cours_zenkai_fait_vs_supposition, gestion_cours_zenkai_urgence_avant_detail, gestion_cours_zenkai_confirmation_reception [INFERRED 0.85]
- **Cours communication proposés** — cours_voix_du_ninja, cours_tournoi_eloquence_absurde, cours_messager_sous_pression [INFERRED 0.85]
- **Cours infiltration/espionnage proposés** — cours_contre_espionnage, cours_deguisement_ultime, cours_chasse_au_sensei, concept_infiltration, concept_traque [INFERRED 0.85]
- **Cours tactiques proposés** — cours_formations_equipe_roles_tactiques, cours_conseil_de_guerre, cours_psychologie_ennemi [INFERRED 0.85]

## Communities (26 total, 2 thin omitted)

### Community 0 - "Moteur de rendu et personnalisation"
Cohesion: 0.06
Nodes (67): addCoursGiven(), applySenseiName(), applySkin(), bilanSetMode(), bilanV2Set(), Filtrage par voie de la lame (typeLame), buildDiscordV2(), buildSidebar() (+59 more)

### Community 1 - "Voie de la Lame Simple"
Cohesion: 0.06
Nodes (54): Académie Militaire de Konoha, Bokken, Le Bushidō, Chūgi — La Loyauté, Cible : bambou ou mannequin, Continuité du mouvement (ne jamais interrompre son attaque), Critères de sélection pour les recommandations forgerons, Cycle Zanshin → Kimi (+46 more)

### Community 2 - "Cours en attente de validation"
Cohesion: 0.07
Nodes (54): Module Tactique, Badge ⚠ Non validé, Bandeau d'avertissement en page détail, Cours — La Bourrasque Ardente (Taijutsu), Bruit vs signal — éviter de noyer l'essentiel, Cours — La Chasse au Sensei, Communiquer sous pression, Confirmer la réception — une info non reçue n'a pas été transmise (+46 more)

### Community 3 - "Cours du Sensei Renard"
Cohesion: 0.09
Nodes (26): 12 Mudras (Hand Signs), 5 Clans Fondateurs (Senju, Uchiha, Hyuga, Nara, Akimichi), 8 Armes Ninja (Kunai, Shuriken, Katana, Senbon, Makibishi, Clochettes, Bombe fumigène, Parchemin explosif), 5 Chakra Natures (Katon, Suiton, Raiton, Doton, Futon), Crise de Succession (post-Tobirama), Cycle des 5 Natures (Katon > Futon > Raiton > Doton > Suiton), Fondation de Konoha (Hashirama & Madara), Jinton – Kekkei Tota (Katon + Futon + Doton) (+18 more)

### Community 4 - "Propositions de nouveaux cours"
Cohesion: 0.14
Nodes (25): Compléments aux cours existants, Cours décalés, Cours originaux, Genjutsu, Infiltration (cours existant), La Traque (cours existant), La chasse au sensei, Le conseil de guerre — Simulation stratégique (+17 more)

### Community 5 - "Vérificateur de l'app"
Cohesion: 0.11
Nodes (14): externes, HOOK, HRP, HTML, JSONF, NATURES, NO_SMOKE, notes (+6 more)

### Community 6 - "Techniques Raiton et Mudras"
Cohesion: 0.11
Nodes (15): Bourrasque Ardente — Technique taijutsu (coup de pied rotatif 360), Mudras — 12 signes de main pour modeler le chakra, Raiton — Nature de chakra Foudre (4 techniques ninjutsu), Yumi Amano — Coordinatrice cours, OP des posts Discord, Aide pour construire les cours — Mécaniques pédagogiques (Yumi Amano), 1. Rayon Instantané, 2. Boule Fulgurante, 3. Ruée Foudroyante (+7 more)

### Community 7 - "package.json"
Cohesion: 0.22
Nodes (8): description, devDependencies, jsdom, name, private, scripts, check, jsdom

### Community 8 - "Documentation du projet"
Cohesion: 0.15
Nodes (12): CLAUDE.md — Cours RP Zenkai (Konoha), Cohérence lore Zenkai-RP, Contexte du projet, Déploiement & partage, Fichiers .docx, Les 45 cours (par module), Les documents sont pour le professeur, PAS pour les élèves, Règles importantes (+4 more)

### Community 9 - "Histoire du Village de Konoha"
Cohesion: 0.07
Nodes (33): Les 8 Règles d'Or du Ninja, Clan Akimichi, Clan Hyuga, Clan Nara, Clan Senju, Clan Uchiha, Hashirama Senju (Premier Hokage), Madara Uchiha (+25 more)

### Community 10 - "Manifest PWA"
Cohesion: 0.15
Nodes (12): background_color, categories, description, display, icons, lang, name, orientation (+4 more)

### Community 11 - "Données des cours et personnalisation"
Cohesion: 0.06
Nodes (49): Bouton « Copier pour les élèves », Compteur « Cours donné » (+1 / Proposé / −1), const CONTENU — guides oraux par cours, const COURS_FLAVOR — intros personnalité + anecdotes nature, const COURS_LAME — mapping cours → voie de la lame, const COURS_NATURE — mapping cours → nature, const COURS_SPEC — mapping cours → spécialisation combat, const D — objet de données principal (+41 more)

### Community 12 - "Guide multi-sensei et déploiement"
Cohesion: 0.17
Nodes (11): Déploiement GitHub Pages — git push auto-deploy, Ce que chaque sensei doit faire (1 seule fois), Ce qui est partagé vs ce qui est personnel, Comment mettre à jour chez tout le monde, FAQ, Guide de partage — Support de cours Zenkai, Le lien à partager, Résumé en 3 lignes (+3 more)

### Community 14 - "Architecture du HTML"
Cohesion: 0.05
Nodes (51): Adaptation du contenu par personnalité + nature + spécialisation, Architecture du HTML, Clé S.c — checkboxes de progression, Clé S.sensei — champs du profil sensei, const ONBOARD_FINAL — mots de fin du tuto par type, const SENSEI_TYPES — 16 types (icône, nom, couleur), const SIDEBAR_LABELS — labels sidebar par type (16 × 10), const TOUR_TIPS_TYPED — descriptions d'onglets par type (+43 more)

### Community 17 - "Les Règles d'Or du Ninja"
Cohesion: 0.07
Nodes (28): Dilemme moral — Mission vs protection du village, Hiérarchie Ninja de Konoha (10 rangs), Nindo — Le chemin du ninja, philosophie personnelle, Eraku Morikawa — Sensei auteur des propositions de cours, Gromlof — Sensei auteur simulation de mission, Hishiba Zakuto — Mentor d'Eraku Morikawa (décédé), 1. Loyauté envers le village, 2. Respect de la hiérarchie (+20 more)

### Community 18 - "Skill projet — ajouter un cours"
Cohesion: 0.20
Nodes (9): 1. Lire la source et décider du cadrage, 2. Les composants à écrire, 3. Les deux règles de contenu à ne jamais enfreindre, 4. Éviter les redites, 5. Vérifier avant de committer, 6. Écriture du HTML : passer par un script Python, 7. Terminer : le « save complet », Ajouter un cours à l'app Zenkai (+1 more)

### Community 21 - "Catalogue des armes ninja"
Cohesion: 0.25
Nodes (7): BOMBE FUMIGÈNE, CLOCHETTES, KUNAI, MAKIBISHI, PARCHEMIN EXPLOSIF, SENBON, SHURIKEN

### Community 22 - "Logs de sessions Discord"
Cohesion: 0.48
Nodes (7): Discord — Format de log de cours, Évaluation pour passer Professeur Confirmé, Discord — Session de cours Shin Tobira (cours 30-37), Discord — Session de cours Yuki ORITO (cours 13-18), Keisuke Kuronami, Shin Tobira, Yuki ORITO

### Community 24 - "Techniques Taijutsu"
Cohesion: 0.47
Nodes (6): Pied de l'Aube (technique taijutsu), Saut de Chakra (technique), Taijutsu – Techniques du Corps, Cours Pied de l'Aube, Cours Saut de Chakra, Théorie Taijutsu

### Community 26 - "Cours de terrain et enquête"
Cohesion: 0.60
Nodes (5): Pays du Feu (géographie), Cours L'Enquête, Pays du Feu – Orientation et Visite, Simulation Capture de Drapeau, Simulation d'Escorte

### Community 30 - "Directive Yamamoto Jakka"
Cohesion: 0.67
Nodes (3): Announcement Format Directive, Yamamoto Jakka - Responsable Professeur, Format tableau - Directive Yamamoto Jakka

## Ambiguous Edges - Review These
- `Académie Militaire de Konoha` → `Le Bushidō`  [AMBIGUOUS]
  Pratique/Kenjutsu - Voie de la Lame Simple (source).md · relation: conceptually_related_to

## Knowledge Gaps
- **179 isolated node(s):** `name`, `short_name`, `description`, `start_url`, `scope` (+174 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 204 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Académie Militaire de Konoha` and `Le Bushidō`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `const D — objet de données principal` connect `Données des cours et personnalisation` to `Cours en attente de validation`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Why does `Module Tactique` connect `Cours en attente de validation` to `Données des cours et personnalisation`?**
  _High betweenness centrality (0.099) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Cours — Information & Communication en mission` (e.g. with `Cours — La Chasse au Sensei` and `Communiquer sous pression`) actually correct?**
  _`Cours — Information & Communication en mission` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `applySenseiName()` (e.g. with `getQuote()` and `renderDetail()`) actually correct?**
  _`applySenseiName()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `short_name`, `description` to the rest of the system?**
  _179 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Moteur de rendu et personnalisation` be split into smaller, more focused modules?**
  _Cohesion score 0.05548654244306418 - nodes in this community are weakly interconnected._