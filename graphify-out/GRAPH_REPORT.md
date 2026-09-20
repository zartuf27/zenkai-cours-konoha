# Graph Report - ZENKAI TEEEST  (2026-09-20)

## Corpus Check
- 5 files · ~141,902 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 509 nodes · 763 edges · 56 communities (36 shown, 6 thin omitted)
- Extraction: 83% EXTRACTED · 17% INFERRED · 0% AMBIGUOUS · INFERRED: 127 edges (avg confidence: 0.86)
- Token cost: 391,000 input · 32,000 output

## Community Hubs (Navigation)
- Voie de la Lame Simple
- Cours en attente de validation
- Données et constantes de l'app
- Cours du Sensei Renard
- Propositions de nouveaux cours
- Architecture de l'application
- Techniques Raiton et Mudras
- Profil Sensei et onboarding
- Documentation projet CLAUDE.md
- Fondation de Konoha et Volonté du Feu
- Rendu des pages
- Manifest PWA
- Guide multi-sensei et déploiement
- Persistance et bilan mensuel
- État local et skin
- Les 16 types de sensei
- Filtrage par voie de lame
- Page détail et présentation
- Famille des cours Kenjutsu
- Citations et marqueurs dynamiques
- Les 8 Règles d'Or
- Nindo et hiérarchie
- Compteur de cours et copie
- Catalogue des armes ninja
- Lore : rangs, clans, natures
- Logs de sessions Discord
- Navigation et sidebar
- Techniques Taijutsu
- Les cinq clans fondateurs
- Le Pays du Feu avant Konoha
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
- Genjutsu (non couvert)
- Icône PWA

## God Nodes (most connected - your core abstractions)
1. `Architecture du HTML` - 23 edges
2. `Cours — Information & Communication en mission` - 20 edges
3. `Histoire du Village de Konoha` - 17 edges
4. `render()` - 15 edges
5. `gestion_cours_zenkai.html — App principale tout-en-un` - 14 edges
6. `applySenseiName()` - 14 edges
7. `Propositions de nouveaux cours` - 13 edges
8. `renderDetail()` - 13 edges
9. `getSensei()` - 13 edges
10. `D — Catalogue de données (cours, rangs, mudras, natures)` - 11 edges

## Surprising Connections (you probably didn't know these)
- `Diagramme Cycle des 5 Natures de Chakra` --shares_data_with--> `Nature de Chakra – Référence`  [INFERRED]
  img_cycle_natures.png → graphify-out/converted/nature de chakra_5dbb4ec8.md
- `Discord — Session de cours Yuki ORITO (cours 13-18)` --semantically_similar_to--> `Discord — Session de cours Shin Tobira (cours 30-37)`  [INFERRED] [semantically similar]
  exemple 1.png → exemple2.png
- `Diagramme Cycle des 5 Natures de Chakra` --references--> `Cycle des 5 Natures (Katon > Futon > Raiton > Doton > Suiton)`  [EXTRACTED]
  img_cycle_natures.png → graphify-out/converted/nature de chakra_5dbb4ec8.md
- `Diagramme Kekkei Genkai – Combinaisons de Natures` --shares_data_with--> `Nature de Chakra – Référence`  [INFERRED]
  img_kekkei_genkai.png → graphify-out/converted/nature de chakra_5dbb4ec8.md
- `Les Règles d'Or du Ninja` --conceptually_related_to--> `Cours Volonté du Feu`  [INFERRED]
  théorique/regles d or.md → graphify-out/converted/volonté du feu_03b51271.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Exemples de logging Discord de sessions de cours** — exemple_1, exemple2, concept_discord_cours_log, sensei_yuki_orito, sensei_shin_tobira, sensei_keisuke_kuronami [EXTRACTED 1.00]
- **Programme Genjutsu proposé (théorie + pratique)** — cours_genjutsu_theorie, cours_genjutsu_pratique_labyrinthe, concept_genjutsu [EXTRACTED 1.00]
- **Cours communication proposés** — cours_voix_du_ninja, cours_tournoi_eloquence_absurde, cours_messager_sous_pression [INFERRED 0.85]
- **Cours infiltration/espionnage proposés** — cours_contre_espionnage, cours_deguisement_ultime, cours_chasse_au_sensei, concept_infiltration, concept_traque [INFERRED 0.85]
- **Cours tactiques proposés** — cours_formations_equipe_roles_tactiques, cours_conseil_de_guerre, cours_psychologie_ennemi [INFERRED 0.85]
- **Composition d'un cours (5-6 composants synchronisés)** — claude_const_d, claude_const_contenu, claude_const_notes_prof, claude_const_sensei_quotes, claude_const_cours_flavor, claude_procedure_ajout_cours [EXTRACTED 1.00]
- **Filtrage des cours visibles par profil du sensei** — claude_cours_visible_for_sensei, claude_const_cours_nature, claude_const_cours_spec, claude_const_cours_lame, claude_nature_de_chakra, claude_specialisation_combat, claude_type_de_lame [EXTRACTED 1.00]
- **Adaptation du contenu sur 3 axes (personnalité, nature, spécialisation)** — claude_const_cours_flavor, claude_const_spec_flavor, claude_type_de_sensei, claude_nature_de_chakra, claude_specialisation_combat [EXTRACTED 1.00]
- **Filtrage des cours Kenjutsu par voie de la lame** — gestion_cours_zenkai_coursvisibleforsensei, gestion_cours_zenkai_cours_lame, gestion_cours_zenkai_cours_spec, gestion_cours_zenkai_kenjutsu_simple, gestion_cours_zenkai_kenj_penetrante, gestion_cours_zenkai_kenj_ruee, gestion_cours_zenkai_kenjutsu_double [EXTRACTED 1.00]
- **Composants obligatoires d'un cours (catalogue + contenu + notes + citations + flavor)** — gestion_cours_zenkai_d, gestion_cours_zenkai_contenu, gestion_cours_zenkai_notes_prof, gestion_cours_zenkai_sensei_quotes, gestion_cours_zenkai_cours_flavor, gestion_cours_zenkai_resume [INFERRED 0.85]
- **Flux du compte rendu Discord V2** — gestion_cours_zenkai_renderbilan, gestion_cours_zenkai_bilanv2set, gestion_cours_zenkai_builddiscordv2, gestion_cours_zenkai_copybilanv2, gestion_cours_zenkai_getcourscategorylabel, gestion_cours_zenkai_getcourshistory [EXTRACTED 1.00]
- **Zanshin → Kimi structure les deux techniques de la voie** — pratique_kenjutsu___voie_de_la_lame_simple__source__zanshin, pratique_kenjutsu___voie_de_la_lame_simple__source__kimi, pratique_kenjutsu___voie_de_la_lame_simple__source__lame_penetrante, pratique_kenjutsu___voie_de_la_lame_simple__source__ruee_aceree [EXTRACTED 1.00]
- **Progression des exercices vers la Ruée Acérée** — pratique_kenjutsu___voie_de_la_lame_simple__source__exercice_la_trajectoire, pratique_kenjutsu___voie_de_la_lame_simple__source__exercice_les_frappes_successives, pratique_kenjutsu___voie_de_la_lame_simple__source__exercice_la_synchronisation, pratique_kenjutsu___voie_de_la_lame_simple__source__ruee_aceree [EXTRACTED 1.00]
- **Éthique de la lame : engagement, forgeron, sélection et sécurité** — pratique_kenjutsu___voie_de_la_lame_simple__source__la_lame_extension_de_l_ame, pratique_kenjutsu___voie_de_la_lame_simple__source__responsabilite_et_engagement_du_sabreur, pratique_kenjutsu___voie_de_la_lame_simple__source__respect_du_forgeron, pratique_kenjutsu___voie_de_la_lame_simple__source__criteres_de_selection_forgerons, pratique_kenjutsu___voie_de_la_lame_simple__source__regles_de_securite [INFERRED 0.85]
- **La méthode C.L.A.I.R. structure la transmission d'information** — gestion_cours_zenkai_info_communication, gestion_cours_zenkai_methode_clair, gestion_cours_zenkai_fait_vs_supposition, gestion_cours_zenkai_urgence_avant_detail, gestion_cours_zenkai_confirmation_reception [INFERRED 0.85]
- **Sous-système « cours en attente de validation »** — gestion_cours_zenkai_validated_flag, gestion_cours_zenkai_renderbrouillons, gestion_cours_zenkai_views_brouillons, gestion_cours_zenkai_filtre_non_valide, gestion_cours_zenkai_badge_non_valide, gestion_cours_zenkai_bandeau_detail_non_valide [EXTRACTED 0.95]

## Communities (56 total, 6 thin omitted)

### Community 0 - "Voie de la Lame Simple"
Cohesion: 0.06
Nodes (54): Académie Militaire de Konoha, Bokken, Le Bushidō, Chūgi — La Loyauté, Cible : bambou ou mannequin, Continuité du mouvement (ne jamais interrompre son attaque), Critères de sélection pour les recommandations forgerons, Cycle Zanshin → Kimi (+46 more)

### Community 1 - "Cours en attente de validation"
Cohesion: 0.09
Nodes (43): Module Tactique, Badge ⚠ Non validé, Bandeau d'avertissement en page détail, Bruit vs signal — éviter de noyer l'essentiel, Cours — La Chasse au Sensei, Communiquer sous pression, Confirmer la réception — une info non reçue n'a pas été transmise, CONTENU — guides oraux HTML par cours (+35 more)

### Community 2 - "Données et constantes de l'app"
Cohesion: 0.07
Nodes (40): Bouton « Copier pour les élèves », Compteur « Cours donné » (+1 / Proposé / −1), const CONTENU — guides oraux par cours, const COURS_FLAVOR — intros personnalité + anecdotes nature, const COURS_LAME — mapping cours → voie de la lame, const COURS_NATURE — mapping cours → nature, const COURS_SPEC — mapping cours → spécialisation combat, const D — objet de données principal (+32 more)

### Community 3 - "Cours du Sensei Renard"
Cohesion: 0.09
Nodes (26): 12 Mudras (Hand Signs), 5 Clans Fondateurs (Senju, Uchiha, Hyuga, Nara, Akimichi), 8 Armes Ninja (Kunai, Shuriken, Katana, Senbon, Makibishi, Clochettes, Bombe fumigène, Parchemin explosif), 5 Chakra Natures (Katon, Suiton, Raiton, Doton, Futon), Crise de Succession (post-Tobirama), Cycle des 5 Natures (Katon > Futon > Raiton > Doton > Suiton), Fondation de Konoha (Hashirama & Madara), Jinton – Kekkei Tota (Katon + Futon + Doton) (+18 more)

### Community 4 - "Propositions de nouveaux cours"
Cohesion: 0.14
Nodes (24): Compléments aux cours existants, Cours décalés, Cours originaux, Infiltration (cours existant), La Traque (cours existant), La chasse au sensei, Le conseil de guerre — Simulation stratégique, Contre-espionnage — Protéger les secrets du village (+16 more)

### Community 5 - "Architecture de l'application"
Cohesion: 0.10
Nodes (20): Adaptation du contenu par personnalité + nature + spécialisation, Architecture du HTML, Compteur "Cours donné", Cours Kenjutsu (structure modulaire par type de lame), Filtrage des cours par nature, Filtrage des cours par spécialisation combat, Fonctions clés, Graphify — Mémoire structurelle (+12 more)

### Community 6 - "Techniques Raiton et Mudras"
Cohesion: 0.11
Nodes (15): Bourrasque Ardente — Technique taijutsu (coup de pied rotatif 360), Mudras — 12 signes de main pour modeler le chakra, Raiton — Nature de chakra Foudre (4 techniques ninjutsu), Yumi Amano — Coordinatrice cours, OP des posts Discord, Aide pour construire les cours — Mécaniques pédagogiques (Yumi Amano), 1. Rayon Instantané, 2. Boule Fulgurante, 3. Ruée Foudroyante (+7 more)

### Community 7 - "Profil Sensei et onboarding"
Cohesion: 0.19
Nodes (14): const NATURE_CLOSING — closing lines par nature × module, const ONBOARD_FINAL — mots de fin du tuto par type, const SENSEI_QUOTES — citations par cours × 16 types, const SENSEI_TYPES — 16 types (icône, nom, couleur), const SIDEBAR_LABELS — labels sidebar par type (16 × 10), const TOUR_TIPS_TYPED — descriptions d'onglets par type, Flag zenkai_onboarded, Onboarding — tuto première visite (2 phases, 8 étapes) (+6 more)

### Community 8 - "Documentation projet CLAUDE.md"
Cohesion: 0.15
Nodes (12): CLAUDE.md — Cours RP Zenkai (Konoha), Cohérence lore Zenkai-RP, Contexte du projet, Déploiement & partage, Fichiers .docx, Les 45 cours (par module), Les documents sont pour le professeur, PAS pour les élèves, Règles importantes (+4 more)

### Community 9 - "Fondation de Konoha et Volonté du Feu"
Cohesion: 0.26
Nodes (12): Clan Akimichi, Clan Hyuga, Clan Nara, Clan Senju, Clan Uchiha, Hashirama Senju (Premier Hokage), Madara Uchiha, Tobirama Senju (Second Hokage) (+4 more)

### Community 10 - "Rendu des pages"
Cohesion: 0.22
Nodes (11): bilanSetMode(), bilanV2Set(), D — Catalogue de données (cours, rangs, mudras, natures), Cours — Le Nindo, render(), renderAnnonces(), renderBilan(), renderHier() (+3 more)

### Community 11 - "Manifest PWA"
Cohesion: 0.15
Nodes (12): background_color, categories, description, display, icons, lang, name, orientation (+4 more)

### Community 12 - "Guide multi-sensei et déploiement"
Cohesion: 0.17
Nodes (11): Déploiement GitHub Pages — git push auto-deploy, Ce que chaque sensei doit faire (1 seule fois), Ce qui est partagé vs ce qui est personnel, Comment mettre à jour chez tout le monde, FAQ, Guide de partage — Support de cours Zenkai, Le lien à partager, Résumé en 3 lignes (+3 more)

### Community 13 - "Persistance et bilan mensuel"
Cohesion: 0.27
Nodes (11): Clé S.c — checkboxes de progression, Clé S.sensei — champs du profil sensei, S.n.cours_history — journal des cours donnés, gestion_cours_zenkai.html — App principale tout-en-un, Modèle multi-sensei (HTML partagé / localStorage personnel), Page Fin de mois (bilan), Page Dashboard, Page Historique (📜) (+3 more)

### Community 14 - "État local et skin"
Cohesion: 0.24
Nodes (10): applySkin(), celebrate(), getSensei(), État S — persistance localStorage zenkai_v2, NATURE_PARTICLES — emojis de particules par nature, save(), senseiFullName(), senseiProf() (+2 more)

### Community 15 - "Les 16 types de sensei"
Cohesion: 0.22
Nodes (11): Filtrage par voie de la lame (typeLame), generateQR(), ONBOARD_FINAL — mots de fin du tuto par type, renderSensei(), Personnalisation multi-axes du sensei (type × nature × spécialisation), SENSEI_TYPES — 16 personnalités de sensei, senseiTypeInfo(), SIDEBAR_LABELS — labels sidebar par type de sensei (+3 more)

### Community 16 - "Filtrage par voie de lame"
Cohesion: 0.29
Nodes (11): Cours — La Bourrasque Ardente (Taijutsu), COURS_LAME — mapping cours → voie de la lame, COURS_SPEC — mapping cours → spécialisation combat, coursSpec(), Cours — Lame Pénétrante (pratique, Genin), Cours — Ruée Acérée (pratique, Genin Confirmé), Cours — Kenjutsu — Initiation, Cours — Kenjutsu — Lame Double (Nitōryū) (+3 more)

### Community 17 - "Page détail et présentation"
Cohesion: 0.29
Nodes (11): coursNature(), coursProg(), coursState(), coursVisibleForSensei(), esc() — échappement HTML, INTERACTIF — blocs interactifs (Nindo), openPresentation(), renderCoursList() (+3 more)

### Community 18 - "Famille des cours Kenjutsu"
Cohesion: 0.39
Nodes (9): Kenjutsu — Initiation (Bushidō, Kokyu, Metsuke, Maai), Kenjutsu — Lame Double (Nitōryū), Kenjutsu — Lame Simple (Zanshin / Kimi), Lame Pénétrante (rang D, voie simple), Module Combat, Page Règlement (Directive Yamamoto Jakka), Règle anti-redite des cours Kenjutsu, Ruée Acérée (rang C, voie simple) (+1 more)

### Community 19 - "Citations et marqueurs dynamiques"
Cohesion: 0.36
Nodes (9): applySenseiName(), buildDiscordV2(), cours(id) — lookup dans D.cours, COURS_NATURE — mapping cours → nature, getCoursCategoryLabel(), getQuote(), NATURE_CLOSING — phrases de clôture nature × module, Parchemin Discord V2 — compte rendu détaillé (+1 more)

### Community 20 - "Les 8 Règles d'Or"
Cohesion: 0.22
Nodes (9): 1. Loyauté envers le village, 2. Respect de la hiérarchie, 3. Priorité à la mission, 4. Protection des habitants, 5. Secret et discrétion, 6. Respect entre shinobi, 7. Maîtrise de soi, 8. Honneur et responsabilité (+1 more)

### Community 21 - "Nindo et hiérarchie"
Cohesion: 0.25
Nodes (6): Dilemme moral — Mission vs protection du village, Hiérarchie Ninja de Konoha (10 rangs), Nindo — Le chemin du ninja, philosophie personnelle, Gromlof — Sensei auteur simulation de mission, Les Règles d'Or du Ninja, Récapitulatif

### Community 22 - "Compteur de cours et copie"
Cohesion: 0.32
Nodes (8): addCoursGiven(), clipCopy(), copyBilanV2(), copyNotes(), getCoursHistory(), removeCoursGiven(), saveCoursHistory(), Règle de session 18h→4h = 1 mois IG (décalage de date avant 5h)

### Community 23 - "Catalogue des armes ninja"
Cohesion: 0.25
Nodes (7): BOMBE FUMIGÈNE, CLOCHETTES, KUNAI, MAKIBISHI, PARCHEMIN EXPLOSIF, SENBON, SHURIKEN

### Community 24 - "Lore : rangs, clans, natures"
Cohesion: 0.29
Nodes (7): Cycle des natures (Katon > Futon > Raiton > Doton > Suiton), Cohérence lore Zenkai-RP (clans, chronologie, rangs), Page Hiérarchie (10 rangs ninja), Page Natures (5 natures, cycle, kekkei genkai), Parchemin — canal Discord de rapport de l'Académie, Parchemin V2 — compte rendu détaillé, Rang du sensei (Genin Confirmé → Hokage)

### Community 25 - "Logs de sessions Discord"
Cohesion: 0.48
Nodes (7): Discord — Format de log de cours, Évaluation pour passer Professeur Confirmé, Discord — Session de cours Shin Tobira (cours 30-37), Discord — Session de cours Yuki ORITO (cours 13-18), Keisuke Kuronami, Shin Tobira, Yuki ORITO

### Community 26 - "Navigation et sidebar"
Cohesion: 0.38
Nodes (7): buildSidebar(), finishOnboarding(), getSidebarLabel(), modIcons — icônes de module, nav(), showOnboarding(), VIEWS — 11 vues de la sidebar

### Community 27 - "Techniques Taijutsu"
Cohesion: 0.47
Nodes (6): Pied de l'Aube (technique taijutsu), Saut de Chakra (technique), Taijutsu – Techniques du Corps, Cours Pied de l'Aube, Cours Saut de Chakra, Théorie Taijutsu

### Community 28 - "Les cinq clans fondateurs"
Cohesion: 0.33
Nodes (6): 1. Le clan Senju — Architectes du village, 2. Le clan Uchiha — Pilier du village, 3. Le clan Hyūga — Sentinelles silencieuses, 4. Le clan Nara — Cerveaux et archives, 5. Le clan Akimichi — Force logistique et cohésion sociale, III. Rôle des grands clans dans la naissance de Konoha

### Community 29 - "Le Pays du Feu avant Konoha"
Cohesion: 0.33
Nodes (6): I. Avant Konoha : un Pays du Feu en guerre, Les Akimichi — Remparts vivants, Les Hyūga — Sentinelles des montagnes, Les Nara — Cerveaux de l'ombre, Les Senju — Polyvalence et union, Les Uchiha — Fierté ardente

### Community 30 - "Les 10 rangs ninja"
Cohesion: 0.33
Nodes (6): Apprenti ninja, Chef du village, Commandement, Haut Commandement, Hiérarchie Ninja de Konoha, Ninja de rang

### Community 31 - "Cours de terrain et enquête"
Cohesion: 0.60
Nodes (5): Pays du Feu (géographie), Cours L'Enquête, Pays du Feu – Orientation et Visite, Simulation Capture de Drapeau, Simulation d'Escorte

### Community 32 - "Le Nindo — définition"
Cohesion: 0.40
Nodes (5): Ce que le Nindo EST — une philosophie, Ce que le Nindo N'EST PAS — un objectif, Définition, Le Nindo — La Voie du Ninja, Points clés à transmettre

### Community 33 - "Hashirama, Madara et la fondation"
Cohesion: 0.50
Nodes (4): II. Hashirama, Madara et la fondation de Konoha, L'alliance impensable, L'amitié brisée, La fondation

### Community 35 - "Directive Yamamoto Jakka"
Cohesion: 0.67
Nodes (3): Announcement Format Directive, Yamamoto Jakka - Responsable Professeur, Format tableau - Directive Yamamoto Jakka

### Community 37 - "Tobirama et la crise de succession"
Cohesion: 0.67
Nodes (3): IV. Tobirama Hokage, l'institutionnalisation et la crise, La crise de succession, Le bâtisseur d'institutions

## Ambiguous Edges - Review These
- `Le Bushidō` → `Académie Militaire de Konoha`  [AMBIGUOUS]
  Pratique/Kenjutsu - Voie de la Lame Simple (source).md · relation: conceptually_related_to

## Knowledge Gaps
- **158 isolated node(s):** `L'alliance impensable`, `L'amitié brisée`, `La crise de succession`, `La fondation`, `Le bâtisseur d'institutions` (+153 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 190 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Le Bushidō` and `Académie Militaire de Konoha`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `const D — objet de données principal` connect `Données et constantes de l'app` to `Cours en attente de validation`, `Famille des cours Kenjutsu`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **Why does `Module Tactique` connect `Cours en attente de validation` to `Données et constantes de l'app`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **Why does `Procédure pour ajouter un cours (9 étapes)` connect `Données et constantes de l'app` to `Profil Sensei et onboarding`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Cours — Information & Communication en mission` (e.g. with `Cours — La Chasse au Sensei` and `Communiquer sous pression`) actually correct?**
  _`Cours — Information & Communication en mission` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `L'alliance impensable`, `L'amitié brisée`, `La crise de succession` to the rest of the system?**
  _158 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Voie de la Lame Simple` be split into smaller, more focused modules?**
  _Cohesion score 0.06079664570230608 - nodes in this community are weakly interconnected._