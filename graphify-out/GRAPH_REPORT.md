# Graph Report - ZENKAI TEEEST  (2026-09-28)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 564 nodes · 922 edges · 36 communities (34 shown, 1 thin omitted)
- Extraction: 81% EXTRACTED · 19% INFERRED · 0% AMBIGUOUS · INFERRED: 174 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e03d69f5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Contenu des cours et techniques Futon
- Voie de la Lame Simple
- Données des cours (CLAUDE.md)
- Moteur de rendu et Fin de mois
- Natures de chakra et Kekkei Genkai
- Propositions de nouveaux cours
- Techniques Raiton et Mudras
- Vérificateur de l'app
- Architecture du HTML
- Histoire du Village de Konoha
- Documentation du projet
- Page détail et historique des cours
- Manifest PWA
- Skill ajout de cours, PWA et déploiement
- Guide multi-sensei et déploiement
- État, profil et sauvegarde
- Les Règles d'Or du Ninja
- Sources Futon et skins de nature
- package.json
- Navigation, sidebar et onboarding
- Catalogue des armes ninja
- Cours du Sensei Renard
- Types de sensei et libellés
- Citations de clôture
- Techniques Taijutsu
- Cours en attente de validation
- Rôle des grands clans
- Avant Konoha : les clans
- Histoire de Konoha (Renard)
- Cours de terrain et enquête
- Traité diplomatique (Renard)
- Hashirama, Madara et la fondation
- Directive Yamamoto Jakka
- Tobirama et la succession
- Cours La Traque

## God Nodes (most connected - your core abstractions)
1. `Architecture du HTML` - 23 edges
2. `Cours — Information & Communication en mission` - 20 edges
3. `const D` - 18 edges
4. `Histoire du Village de Konoha` - 17 edges
5. `applySenseiName()` - 16 edges
6. `CONTENU` - 15 edges
7. `SENSEI_QUOTES` - 15 edges
8. `render()` - 15 edges
9. `COURS_FLAVOR` - 14 edges
10. `NOTES_PROF` - 14 edges

## Surprising Connections (you probably didn't know these)
- `Les composants d'un cours (D.cours, CONTENU, NOTES_PROF, SENSEI_QUOTES, COURS_FLAVOR, RESUME, filtrages, JSON)` --semantically_similar_to--> `Procédure pour ajouter un cours (9 étapes)`  [INFERRED] [semantically similar]
  .claude/skills/zenkai-cours/SKILL.md → CLAUDE.md
- `Éviter les redites (renvoi au cours précédent)` --semantically_similar_to--> `Règle anti-redite des cours Kenjutsu`  [INFERRED] [semantically similar]
  .claude/skills/zenkai-cours/SKILL.md → CLAUDE.md
- `Nature de Chakra – Référence` --shares_data_with--> `Diagramme Cycle des 5 Natures de Chakra`  [INFERRED]
  graphify-out/converted/nature de chakra_5dbb4ec8.md → img_cycle_natures.png
- `Cycle des 5 Natures (Katon > Futon > Raiton > Doton > Suiton)` --references--> `Diagramme Cycle des 5 Natures de Chakra`  [EXTRACTED]
  graphify-out/converted/nature de chakra_5dbb4ec8.md → img_cycle_natures.png
- `Nature de Chakra – Référence` --shares_data_with--> `Diagramme Kekkei Genkai – Combinaisons de Natures`  [INFERRED]
  graphify-out/converted/nature de chakra_5dbb4ec8.md → img_kekkei_genkai.png

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Sous-système « cours en attente de validation »** — gestion_cours_zenkai_validated_flag, gestion_cours_zenkai_renderbrouillons, gestion_cours_zenkai_views_brouillons, gestion_cours_zenkai_filtre_non_valide, gestion_cours_zenkai_badge_non_valide, gestion_cours_zenkai_bandeau_detail_non_valide [EXTRACTED 0.95]
- **Adaptation du contenu sur 3 axes (personnalité, nature, spécialisation)** — claude_const_cours_flavor, claude_const_spec_flavor, claude_type_de_sensei, claude_nature_de_chakra, claude_specialisation_combat [EXTRACTED 1.00]
- **Assemblage de la citation de clôture (type + nature)** — gestion_cours_zenkai_applysenseiname, gestion_cours_zenkai_sensei_quotes, gestion_cours_zenkai_nature_closing, gestion_cours_zenkai_nature_closing_injection [EXTRACTED 1.00]
- **Composition d'un cours (5-6 composants synchronisés)** — claude_const_d, claude_const_contenu, claude_const_notes_prof, claude_const_sensei_quotes, claude_const_cours_flavor, claude_procedure_ajout_cours [EXTRACTED 1.00]
- **Filtrage de visibilité des cours par sensei** — gestion_cours_zenkai_coursvisibleforsensei, gestion_cours_zenkai_cours_nature, gestion_cours_zenkai_cours_spec, gestion_cours_zenkai_cours_lame [EXTRACTED 1.00]
- **Zanshin → Kimi structure les deux techniques de la voie** — pratique_kenjutsu___voie_de_la_lame_simple__source__zanshin, pratique_kenjutsu___voie_de_la_lame_simple__source__kimi, pratique_kenjutsu___voie_de_la_lame_simple__source__lame_penetrante, pratique_kenjutsu___voie_de_la_lame_simple__source__ruee_aceree [EXTRACTED 1.00]
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

## Communities (36 total, 1 thin omitted)

### Community 0 - "Contenu des cours et techniques Futon"
Cohesion: 0.11
Nodes (49): Les composants d'un cours (D.cours, CONTENU, NOTES_PROF, SENSEI_QUOTES, COURS_FLAVOR, RESUME, filtrages, JSON), Éviter les redites (renvoi au cours précédent), Exception Futon (entrées propres SENSEI_QUOTES / COURS_FLAVOR), Module Tactique, Bruit vs signal — éviter de noyer l'essentiel, Cours — La Chasse au Sensei, Communiquer sous pression, Confirmer la réception — une info non reçue n'a pas été transmise (+41 more)

### Community 1 - "Voie de la Lame Simple"
Cohesion: 0.06
Nodes (54): Académie Militaire de Konoha, Bokken, Le Bushidō, Chūgi — La Loyauté, Cible : bambou ou mannequin, Continuité du mouvement (ne jamais interrompre son attaque), Critères de sélection pour les recommandations forgerons, Cycle Zanshin → Kimi (+46 more)

### Community 2 - "Données des cours (CLAUDE.md)"
Cohesion: 0.08
Nodes (38): techs[] sans prereq, const CONTENU — guides oraux par cours, const COURS_FLAVOR — intros personnalité + anecdotes nature, const COURS_LAME — mapping cours → voie de la lame, const COURS_NATURE — mapping cours → nature, const COURS_SPEC — mapping cours → spécialisation combat, const D — objet de données principal, const NOTES_PROF — notes pour les élèves (copy + html) (+30 more)

### Community 3 - "Moteur de rendu et Fin de mois"
Cohesion: 0.14
Nodes (16): bilanSetMode(), bilanV2Set(), .btn-v3-pulse — bouton V3 en pulsation de zoom, esc(), Parchemin Discord V2 — compte rendu détaillé, Parchemin V3 — aide au formulaire de primes (compte Théorique / Pratique / Nature), render(), renderBilan() (+8 more)

### Community 4 - "Natures de chakra et Kekkei Genkai"
Cohesion: 0.29
Nodes (11): 5 Chakra Natures (Katon, Suiton, Raiton, Doton, Futon), Cycle des 5 Natures (Katon > Futon > Raiton > Doton > Suiton), Jinton – Kekkei Tota (Katon + Futon + Doton), Kekkei Genkai (Hereditary Powers), Nature Cycle (Katon > Futon > Raiton > Doton > Suiton > Katon), Test de la Feuille (détection nature chakra), Nature de Chakra Renard (HTML), Nature de Chakra – Référence (+3 more)

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
Cohesion: 0.05
Nodes (53): Adaptation du contenu par personnalité + nature + spécialisation, Architecture du HTML, Clé S.c — checkboxes de progression, Clé S.sensei — champs du profil sensei, Compteur « Cours donné » (+1 / Proposé / −1), const ONBOARD_FINAL — mots de fin du tuto par type, const SENSEI_TYPES — 16 types (icône, nom, couleur), const SIDEBAR_LABELS — labels sidebar par type (16 × 10) (+45 more)

### Community 9 - "Histoire du Village de Konoha"
Cohesion: 0.26
Nodes (12): Clan Akimichi, Clan Hyuga, Clan Nara, Clan Senju, Clan Uchiha, Hashirama Senju (Premier Hokage), Madara Uchiha, Tobirama Senju (Second Hokage) (+4 more)

### Community 10 - "Documentation du projet"
Cohesion: 0.14
Nodes (13): CDN : fichiers statiques uniquement (pas de .min.js généré par jsDelivr avec SRI), CLAUDE.md — Cours RP Zenkai (Konoha), Cohérence lore Zenkai-RP, Contexte du projet, Déploiement & partage, Fichiers .docx, Les 45 cours (par module), Les documents sont pour le professeur, PAS pour les élèves (+5 more)

### Community 11 - "Page détail et historique des cours"
Cohesion: 0.14
Nodes (23): addCoursGiven(), Filtrage par voie de la lame (typeLame), Cours — La Bourrasque Ardente (Taijutsu), buildDiscordV2(), clipCopy(), copyBilanV2(), copyNotes(), cours(id) — lookup dans D.cours (+15 more)

### Community 12 - "Manifest PWA"
Cohesion: 0.15
Nodes (12): background_color, categories, description, display, icons, lang, name, orientation (+4 more)

### Community 13 - "Skill ajout de cours, PWA et déploiement"
Cohesion: 0.09
Nodes (22): Save complet (CLAUDE.md, CACHE_NAME, graphify, git push), Écriture du HTML par script Python à ancres textuelles, tools/verifier.mjs (vérification avant commit + hook PostToolUse), Zéro HRP dans le copiable, Bouton « Copier pour les élèves », CORE_ASSETS : fichiers existants uniquement, précache cache:'reload', Déploiement GitHub Pages (git add/commit/push), manifest.json — Manifest PWA (+14 more)

### Community 14 - "Guide multi-sensei et déploiement"
Cohesion: 0.17
Nodes (11): Déploiement GitHub Pages — git push auto-deploy, Ce que chaque sensei doit faire (1 seule fois), Ce qui est partagé vs ce qui est personnel, Comment mettre à jour chez tout le monde, FAQ, Guide de partage — Support de cours Zenkai, Le lien à partager, Résumé en 3 lignes (+3 more)

### Community 15 - "État, profil et sauvegarde"
Cohesion: 0.21
Nodes (11): applySkin(), celebrate(), generateQR(), getSensei(), État S — persistance localStorage zenkai_v2, NATURE_PARTICLES — emojis de particules par nature, restoreSaveCode(), save() (+3 more)

### Community 16 - "Les Règles d'Or du Ninja"
Cohesion: 0.07
Nodes (28): Dilemme moral — Mission vs protection du village, Hiérarchie Ninja de Konoha (10 rangs), Nindo — Le chemin du ninja, philosophie personnelle, Eraku Morikawa — Sensei auteur des propositions de cours, Gromlof — Sensei auteur simulation de mission, Hishiba Zakuto — Mentor d'Eraku Morikawa (décédé), 1. Loyauté envers le village, 2. Respect de la hiérarchie (+20 more)

### Community 17 - "Sources Futon et skins de nature"
Cohesion: 0.16
Nodes (14): Nature de Chakra du sensei, Skin Doton (bruns/terre, pierres, earth-pulse), Skin Futon (verts/émeraude, feuilles, float-drift), Skin Katon (rouges/orangés, braises, float-up), Skin Raiton (dorés/jaunes, éclairs, lightning-flash), Skin Suiton (bleus, gouttes, ripple), L'Onde de Choc Futon (support source), Grande sphère de vent comprimé qui repousse l'ennemi (+6 more)

### Community 18 - "package.json"
Cohesion: 0.22
Nodes (8): description, devDependencies, jsdom, name, private, scripts, check, jsdom

### Community 19 - "Navigation, sidebar et onboarding"
Cohesion: 0.23
Nodes (13): Bandeau d'avertissement en page détail, buildSidebar(), coursProg(), coursState(), finishOnboarding(), getSidebarLabel(), INTERACTIF — blocs interactifs (Nindo), modIcons — icônes de module (+5 more)

### Community 20 - "Catalogue des armes ninja"
Cohesion: 0.25
Nodes (7): BOMBE FUMIGÈNE, CLOCHETTES, KUNAI, MAKIBISHI, PARCHEMIN EXPLOSIF, SENBON, SHURIKEN

### Community 21 - "Cours du Sensei Renard"
Cohesion: 0.18
Nodes (8): 12 Mudras (Hand Signs), 8 Armes Ninja (Kunai, Shuriken, Katana, Senbon, Makibishi, Clochettes, Bombe fumigène, Parchemin explosif), Les 8 Règles d'Or du Ninja, Sensei Renard Teaching Style (Forest Metaphors), Armes Ninja Renard (HTML), Volonté du Feu Renard (HTML), Les Mudras Renard (HTML), Règles d'Or Renard (HTML)

### Community 22 - "Types de sensei et libellés"
Cohesion: 0.36
Nodes (9): ONBOARD_FINAL, renderSensei(), Personnalisation sensei, SENSEI_TYPES, senseiTypeInfo(), SIDEBAR_LABELS, SIDEBAR_TIPS — descriptions génériques d'onglets, startTourGuide() (+1 more)

### Community 23 - "Citations de clôture"
Cohesion: 0.43
Nodes (8): Affichage des citations (quote remplacée si identique à SENSEI_QUOTES[id].sage ; NATURE_CLOSING en fin du dernier bloc parchemin), const NATURE_CLOSING — closing lines par nature × module, const SENSEI_QUOTES — citations par cours × 16 types, Système de citations (type + nature + override), applySenseiName(), getQuote(), NATURE_CLOSING, Injection NATURE_CLOSING en fin du dernier bloc bg-parchment

### Community 24 - "Techniques Taijutsu"
Cohesion: 0.47
Nodes (6): Pied de l'Aube (technique taijutsu), Saut de Chakra (technique), Taijutsu – Techniques du Corps, Cours Pied de l'Aube, Cours Saut de Chakra, Théorie Taijutsu

### Community 25 - "Cours en attente de validation"
Cohesion: 0.22
Nodes (13): Badge ⚠ Non validé, _diffOf(), Filtre d'état « non-valide » (renderCours), _getCoursInverse(), _pickSujet(), playClick(), renderBrouillons(), SIDEBAR_LABELS — libellés brouillons par type de sensei (+5 more)

### Community 26 - "Rôle des grands clans"
Cohesion: 0.33
Nodes (6): 1. Le clan Senju — Architectes du village, 2. Le clan Uchiha — Pilier du village, 3. Le clan Hyūga — Sentinelles silencieuses, 4. Le clan Nara — Cerveaux et archives, 5. Le clan Akimichi — Force logistique et cohésion sociale, III. Rôle des grands clans dans la naissance de Konoha

### Community 27 - "Avant Konoha : les clans"
Cohesion: 0.33
Nodes (6): I. Avant Konoha : un Pays du Feu en guerre, Les Akimichi — Remparts vivants, Les Hyūga — Sentinelles des montagnes, Les Nara — Cerveaux de l'ombre, Les Senju — Polyvalence et union, Les Uchiha — Fierté ardente

### Community 28 - "Histoire de Konoha (Renard)"
Cohesion: 0.53
Nodes (5): 5 Clans Fondateurs (Senju, Uchiha, Hyuga, Nara, Akimichi), Crise de Succession (post-Tobirama), Fondation de Konoha (Hashirama & Madara), Tobirama's Institutions (Académie, ANBU, Missions), Histoire de Konoha Renard (HTML)

### Community 29 - "Cours de terrain et enquête"
Cohesion: 0.60
Nodes (5): Pays du Feu (géographie), Cours L'Enquête, Pays du Feu – Orientation et Visite, Simulation Capture de Drapeau, Simulation d'Escorte

### Community 30 - "Traité diplomatique (Renard)"
Cohesion: 0.60
Nodes (4): Kokoro (Zone Neutre Diplomatique), Pays des Cerisiers (Neutral Nation), Traité Diplomatique Suna & Konoha, Traité Diplomatique Renard (HTML)

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
- **180 isolated node(s):** `Cohérence lore Zenkai-RP`, `Contexte du projet`, `Déploiement & partage`, `Fichiers .docx`, `Les 45 cours (par module)` (+175 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 206 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Académie Militaire de Konoha` and `Le Bushidō`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Architecture du HTML` connect `Architecture du HTML` to `Documentation du projet`, `Skill ajout de cours, PWA et déploiement`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Why does `Exception Futon (entrées propres SENSEI_QUOTES / COURS_FLAVOR)` connect `Contenu des cours et techniques Futon` to `Architecture du HTML`, `Données des cours (CLAUDE.md)`, `Skill ajout de cours, PWA et déploiement`, `Citations de clôture`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `Les composants d'un cours (D.cours, CONTENU, NOTES_PROF, SENSEI_QUOTES, COURS_FLAVOR, RESUME, filtrages, JSON)` connect `Contenu des cours et techniques Futon` to `Données des cours (CLAUDE.md)`, `Skill ajout de cours, PWA et déploiement`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Cours — Information & Communication en mission` (e.g. with `Cours — La Chasse au Sensei` and `Communiquer sous pression`) actually correct?**
  _`Cours — Information & Communication en mission` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `const D` (e.g. with `renderHier()` and `renderMudras()`) actually correct?**
  _`const D` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `applySenseiName()` (e.g. with `Affichage des citations (quote remplacée si identique à SENSEI_QUOTES[id].sage ; NATURE_CLOSING en fin du dernier bloc parchemin)` and `getQuote()`) actually correct?**
  _`applySenseiName()` has 3 INFERRED edges - model-reasoned connections that need verification._