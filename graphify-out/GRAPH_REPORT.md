# Graph Report - ZENKAI TEEEST  (2026-09-20)

## Corpus Check
- 41 files · ~159,282 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 1 file(s) not represented in the graph (top: (none) 1)

## Summary
- 504 nodes · 776 edges · 37 communities (32 shown, 4 thin omitted)
- Extraction: 84% EXTRACTED · 16% INFERRED · 0% AMBIGUOUS · INFERRED: 127 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c64123e9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Moteur de rendu et personnalisation
- Voie de la Lame Simple
- Cours en attente de validation
- Cours du Sensei Renard
- Propositions de nouveaux cours
- Filtrage des cours (nature, spécialisation, lame)
- Techniques Raiton et Mudras
- Architecture de l'application
- Documentation CLAUDE.md
- Fondation de Konoha et Volonté du Feu
- Manifest PWA
- Interface d'un cours et marqueurs
- Guide multi-sensei et déploiement
- Les cinq clans fondateurs
- Persistance, bilan et historique
- Profil Sensei, citations et onboarding
- Synchronisation, PWA et outillage
- Les 8 Règles d'Or
- Skill projet — ajouter un cours
- Famille des cours Kenjutsu
- Nindo et hiérarchie
- Catalogue des armes ninja
- Logs de sessions Discord
- Page En attente et tirages de sujets
- Techniques Taijutsu
- Les 10 rangs ninja
- Cours de terrain et enquête
- Le Nindo — définition
- Hashirama, Madara et la fondation
- Règles d'Or version Renard
- Directive Yamamoto Jakka
- Auteurs et mentors
- Tobirama et la crise de succession
- Cours La Traque
- Service Worker PWA
- Le Pays du Feu avant Konoha

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

## Communities (37 total, 4 thin omitted)

### Community 0 - "Moteur de rendu et personnalisation"
Cohesion: 0.06
Nodes (67): addCoursGiven(), applySenseiName(), applySkin(), bilanSetMode(), bilanV2Set(), Filtrage par voie de la lame (typeLame), buildDiscordV2(), buildSidebar() (+59 more)

### Community 1 - "Voie de la Lame Simple"
Cohesion: 0.06
Nodes (54): Académie Militaire de Konoha, Bokken, Le Bushidō, Chūgi — La Loyauté, Cible : bambou ou mannequin, Continuité du mouvement (ne jamais interrompre son attaque), Critères de sélection pour les recommandations forgerons, Cycle Zanshin → Kimi (+46 more)

### Community 2 - "Cours en attente de validation"
Cohesion: 0.11
Nodes (39): Module Tactique, Cours — La Bourrasque Ardente (Taijutsu), Bruit vs signal — éviter de noyer l'essentiel, Cours — La Chasse au Sensei, Communiquer sous pression, Confirmer la réception — une info non reçue n'a pas été transmise, CONTENU — guides oraux HTML par cours, COURS_FLAVOR — intros par type + anecdotes nature (+31 more)

### Community 3 - "Cours du Sensei Renard"
Cohesion: 0.09
Nodes (26): 12 Mudras (Hand Signs), 5 Clans Fondateurs (Senju, Uchiha, Hyuga, Nara, Akimichi), 8 Armes Ninja (Kunai, Shuriken, Katana, Senbon, Makibishi, Clochettes, Bombe fumigène, Parchemin explosif), 5 Chakra Natures (Katon, Suiton, Raiton, Doton, Futon), Crise de Succession (post-Tobirama), Cycle des 5 Natures (Katon > Futon > Raiton > Doton > Suiton), Fondation de Konoha (Hashirama & Madara), Jinton – Kekkei Tota (Katon + Futon + Doton) (+18 more)

### Community 4 - "Propositions de nouveaux cours"
Cohesion: 0.14
Nodes (25): Compléments aux cours existants, Cours décalés, Cours originaux, Genjutsu, Infiltration (cours existant), La Traque (cours existant), La chasse au sensei, Le conseil de guerre — Simulation stratégique (+17 more)

### Community 5 - "Filtrage des cours (nature, spécialisation, lame)"
Cohesion: 0.24
Nodes (11): const COURS_LAME — mapping cours → voie de la lame, const COURS_NATURE — mapping cours → nature, const COURS_SPEC — mapping cours → spécialisation combat, const D — objet de données principal, coursVisibleForSensei() — filtrage combiné des cours, Module Chakra, Module Fondamentaux, Module Ninjutsu (dont 20 techniques de nature) (+3 more)

### Community 6 - "Techniques Raiton et Mudras"
Cohesion: 0.11
Nodes (15): Bourrasque Ardente — Technique taijutsu (coup de pied rotatif 360), Mudras — 12 signes de main pour modeler le chakra, Raiton — Nature de chakra Foudre (4 techniques ninjutsu), Yumi Amano — Coordinatrice cours, OP des posts Discord, Aide pour construire les cours — Mécaniques pédagogiques (Yumi Amano), 1. Rayon Instantané, 2. Boule Fulgurante, 3. Ruée Foudroyante (+7 more)

### Community 7 - "Architecture de l'application"
Cohesion: 0.12
Nodes (17): Adaptation du contenu par personnalité + nature + spécialisation, Architecture du HTML, Cours Kenjutsu (structure modulaire par type de lame), Filtrage des cours par nature, Filtrage des cours par spécialisation combat, Fonctions clés, Graphify — Mémoire structurelle, Icônes (+9 more)

### Community 8 - "Documentation CLAUDE.md"
Cohesion: 0.15
Nodes (12): CLAUDE.md — Cours RP Zenkai (Konoha), Cohérence lore Zenkai-RP, Contexte du projet, Déploiement & partage, Fichiers .docx, Les 45 cours (par module), Les documents sont pour le professeur, PAS pour les élèves, Règles importantes (+4 more)

### Community 9 - "Fondation de Konoha et Volonté du Feu"
Cohesion: 0.26
Nodes (12): Clan Akimichi, Clan Hyuga, Clan Nara, Clan Senju, Clan Uchiha, Hashirama Senju (Premier Hokage), Madara Uchiha, Tobirama Senju (Second Hokage) (+4 more)

### Community 10 - "Manifest PWA"
Cohesion: 0.15
Nodes (12): background_color, categories, description, display, icons, lang, name, orientation (+4 more)

### Community 11 - "Interface d'un cours et marqueurs"
Cohesion: 0.24
Nodes (13): Bouton « Copier pour les élèves », Compteur « Cours donné » (+1 / Proposé / −1), const CONTENU — guides oraux par cours, const COURS_FLAVOR — intros personnalité + anecdotes nature, const NOTES_PROF — notes pour les élèves (copy + html), const SPEC_FLAVOR — anecdotes spécialisation combat, Interface cours 2 onglets (Support oral / Marqueurs), Mode Présentation (overlay plein écran) (+5 more)

### Community 12 - "Guide multi-sensei et déploiement"
Cohesion: 0.17
Nodes (11): Déploiement GitHub Pages — git push auto-deploy, Ce que chaque sensei doit faire (1 seule fois), Ce qui est partagé vs ce qui est personnel, Comment mettre à jour chez tout le monde, FAQ, Guide de partage — Support de cours Zenkai, Le lien à partager, Résumé en 3 lignes (+3 more)

### Community 13 - "Les cinq clans fondateurs"
Cohesion: 0.33
Nodes (6): 1. Le clan Senju — Architectes du village, 2. Le clan Uchiha — Pilier du village, 3. Le clan Hyūga — Sentinelles silencieuses, 4. Le clan Nara — Cerveaux et archives, 5. Le clan Akimichi — Force logistique et cohésion sociale, III. Rôle des grands clans dans la naissance de Konoha

### Community 14 - "Persistance, bilan et historique"
Cohesion: 0.16
Nodes (18): Clé S.c — checkboxes de progression, Clé S.sensei — champs du profil sensei, S.n.cours_history — journal des cours donnés, Cycle des natures (Katon > Futon > Raiton > Doton > Suiton), gestion_cours_zenkai.html — App principale tout-en-un, Cohérence lore Zenkai-RP (clans, chronologie, rangs), Modèle multi-sensei (HTML partagé / localStorage personnel), Page Fin de mois (bilan) (+10 more)

### Community 15 - "Profil Sensei, citations et onboarding"
Cohesion: 0.12
Nodes (21): const NATURE_CLOSING — closing lines par nature × module, const ONBOARD_FINAL — mots de fin du tuto par type, const SENSEI_QUOTES — citations par cours × 16 types, const SENSEI_TYPES — 16 types (icône, nom, couleur), const SIDEBAR_LABELS — labels sidebar par type (16 × 10), const TOUR_TIPS_TYPED — descriptions d'onglets par type, Flag zenkai_onboarded, Nature de Chakra du sensei (+13 more)

### Community 16 - "Synchronisation, PWA et outillage"
Cohesion: 0.22
Nodes (9): Déploiement GitHub Pages (git add/commit/push), donnees_cours.json — données structurées, Graphify — mémoire structurelle du projet, manifest.json — Manifest PWA, Projet Cours RP Zenkai (Konoha), PWA & Outils, Règle de synchronisation HTML / JSON / sources, sw.js — Service Worker PWA (+1 more)

### Community 17 - "Les 8 Règles d'Or"
Cohesion: 0.22
Nodes (9): 1. Loyauté envers le village, 2. Respect de la hiérarchie, 3. Priorité à la mission, 4. Protection des habitants, 5. Secret et discrétion, 6. Respect entre shinobi, 7. Maîtrise de soi, 8. Honneur et responsabilité (+1 more)

### Community 18 - "Skill projet — ajouter un cours"
Cohesion: 0.20
Nodes (9): 1. Lire la source et décider du cadrage, 2. Les composants à écrire, 3. Les deux règles de contenu à ne jamais enfreindre, 4. Éviter les redites, 5. Vérifier avant de committer, 6. Écriture du HTML : passer par un script Python, 7. Terminer : le « save complet », Ajouter un cours à l'app Zenkai (+1 more)

### Community 19 - "Famille des cours Kenjutsu"
Cohesion: 0.29
Nodes (11): Filtrage par voie de la lame, Kenjutsu — Initiation (Bushidō, Kokyu, Metsuke, Maai), Kenjutsu — Lame Double (Nitōryū), Kenjutsu — Lame Simple (Zanshin / Kimi), Lame Pénétrante (rang D, voie simple), Module Combat, Page Règlement (Directive Yamamoto Jakka), Règle anti-redite des cours Kenjutsu (+3 more)

### Community 20 - "Nindo et hiérarchie"
Cohesion: 0.25
Nodes (6): Dilemme moral — Mission vs protection du village, Hiérarchie Ninja de Konoha (10 rangs), Nindo — Le chemin du ninja, philosophie personnelle, Gromlof — Sensei auteur simulation de mission, Les Règles d'Or du Ninja, Récapitulatif

### Community 21 - "Catalogue des armes ninja"
Cohesion: 0.25
Nodes (7): BOMBE FUMIGÈNE, CLOCHETTES, KUNAI, MAKIBISHI, PARCHEMIN EXPLOSIF, SENBON, SHURIKEN

### Community 22 - "Logs de sessions Discord"
Cohesion: 0.48
Nodes (7): Discord — Format de log de cours, Évaluation pour passer Professeur Confirmé, Discord — Session de cours Shin Tobira (cours 30-37), Discord — Session de cours Yuki ORITO (cours 13-18), Keisuke Kuronami, Shin Tobira, Yuki ORITO

### Community 23 - "Page En attente et tirages de sujets"
Cohesion: 0.19
Nodes (15): Badge ⚠ Non validé, Bandeau d'avertissement en page détail, _diffOf(), Filtre d'état « non-valide » (renderCours), _getCoursInverse(), openCours(), _pickSujet(), playClick() (+7 more)

### Community 24 - "Techniques Taijutsu"
Cohesion: 0.47
Nodes (6): Pied de l'Aube (technique taijutsu), Saut de Chakra (technique), Taijutsu – Techniques du Corps, Cours Pied de l'Aube, Cours Saut de Chakra, Théorie Taijutsu

### Community 25 - "Les 10 rangs ninja"
Cohesion: 0.33
Nodes (6): Apprenti ninja, Chef du village, Commandement, Haut Commandement, Hiérarchie Ninja de Konoha, Ninja de rang

### Community 26 - "Cours de terrain et enquête"
Cohesion: 0.60
Nodes (5): Pays du Feu (géographie), Cours L'Enquête, Pays du Feu – Orientation et Visite, Simulation Capture de Drapeau, Simulation d'Escorte

### Community 27 - "Le Nindo — définition"
Cohesion: 0.40
Nodes (5): Ce que le Nindo EST — une philosophie, Ce que le Nindo N'EST PAS — un objectif, Définition, Le Nindo — La Voie du Ninja, Points clés à transmettre

### Community 28 - "Hashirama, Madara et la fondation"
Cohesion: 0.50
Nodes (4): II. Hashirama, Madara et la fondation de Konoha, L'alliance impensable, L'amitié brisée, La fondation

### Community 30 - "Directive Yamamoto Jakka"
Cohesion: 0.67
Nodes (3): Announcement Format Directive, Yamamoto Jakka - Responsable Professeur, Format tableau - Directive Yamamoto Jakka

### Community 32 - "Tobirama et la crise de succession"
Cohesion: 0.67
Nodes (3): IV. Tobirama Hokage, l'institutionnalisation et la crise, La crise de succession, Le bâtisseur d'institutions

### Community 36 - "Le Pays du Feu avant Konoha"
Cohesion: 0.33
Nodes (6): I. Avant Konoha : un Pays du Feu en guerre, Les Akimichi — Remparts vivants, Les Hyūga — Sentinelles des montagnes, Les Nara — Cerveaux de l'ombre, Les Senju — Polyvalence et union, Les Uchiha — Fierté ardente

## Ambiguous Edges - Review These
- `Académie Militaire de Konoha` → `Le Bushidō`  [AMBIGUOUS]
  Pratique/Kenjutsu - Voie de la Lame Simple (source).md · relation: conceptually_related_to

## Knowledge Gaps
- **159 isolated node(s):** `name`, `short_name`, `description`, `start_url`, `scope` (+154 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 179 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Académie Militaire de Konoha` and `Le Bushidō`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `const D — objet de données principal` connect `Filtrage des cours (nature, spécialisation, lame)` to `Synchronisation, PWA et outillage`, `Interface d'un cours et marqueurs`, `Cours en attente de validation`, `Famille des cours Kenjutsu`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **Why does `Module Tactique` connect `Cours en attente de validation` to `Filtrage des cours (nature, spécialisation, lame)`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **Why does `Procédure pour ajouter un cours (9 étapes)` connect `Interface d'un cours et marqueurs` to `Synchronisation, PWA et outillage`, `Filtrage des cours (nature, spécialisation, lame)`, `Profil Sensei, citations et onboarding`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Cours — Information & Communication en mission` (e.g. with `Cours — La Chasse au Sensei` and `Communiquer sous pression`) actually correct?**
  _`Cours — Information & Communication en mission` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `applySenseiName()` (e.g. with `getQuote()` and `renderDetail()`) actually correct?**
  _`applySenseiName()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `short_name`, `description` to the rest of the system?**
  _159 weakly-connected nodes found - possible documentation gaps or missing edges._