# Guide de partage — Support de cours Zenkai

## Le lien à partager

```
https://zartuf27.github.io/zenkai-cours-konoha/gestion_cours_zenkai.html
```

Envoie ce lien aux autres senseis. C'est tout. Ils ouvrent dans leur navigateur (PC ou téléphone) et c'est prêt.

---

## Ce que chaque sensei doit faire (1 seule fois)

1. Ouvrir le lien
2. Cliquer sur **👤 Sensei** dans la sidebar à gauche
3. Remplir son profil :
   - Prénom / Nom
   - Signe distinctif (ce qui apparaît dans les annonces)
   - Rang
   - Type de sensei (sa personnalité d'enseignement)
   - Nature de chakra (change les couleurs de toute l'app)
4. C'est fait — tout est sauvegardé dans son navigateur

**Chaque prof a son propre profil, sa propre progression, son propre historique.** Rien ne se mélange entre les profs.

---

## Comment mettre à jour chez tout le monde

Quand tu modifies un cours, ajoutes un nouveau cours, ou changes quoi que ce soit :

### Étape 1 — Modifie le fichier sur ton PC
Le fichier principal est :
```
C:\Users\ludov\Desktop\ZENKAI TEEEST\gestion_cours_zenkai.html
```

### Étape 2 — Envoie sur GitHub (3 commandes)
Ouvre un terminal (clic droit dans le dossier → "Ouvrir dans le terminal") et tape :

```bash
git add gestion_cours_zenkai.html
git commit -m "description de ce que tu as changé"
git push
```

Exemples :
```bash
git commit -m "ajout du cours Katon"
git commit -m "correction des notes du cours Mudras"
git commit -m "nouveau type de sensei ajouté"
```

### Étape 3 — C'est tout
En ~1 minute, GitHub met à jour le site. Tous les senseis qui rafraîchissent la page (F5) verront la nouvelle version.

**Les profils et progressions des profs ne sont PAS affectés par les mises à jour.** Tout ce qui est personnel reste dans leur navigateur.

---

## Ce qui est partagé vs ce qui est personnel

| Partagé (tu le mets à jour, tout le monde le voit) | Personnel (chaque prof dans son navigateur) |
|-----------------------------------------------------|---------------------------------------------|
| Les 24 cours et leur contenu | Nom, prénom, signe distinctif |
| Les techniques et étapes | Nature de chakra (skin visuel) |
| Les notes du prof (résumés copiables) | Type de sensei (personnalité) |
| Les annonces | Rang |
| Les mudras, armes, natures, hiérarchie | Progression (checkboxes cochées) |
| Le design et les animations | Historique des cours donnés |
| | Mode sombre / animations on-off |
| | Phrase signature personnalisée |

---

## FAQ

**Q : Un prof perd ses données s'il change de navigateur ?**
Oui. Les données sont dans le navigateur (localStorage). S'il change de navigateur ou vide ses données, il devra reconfigurer son profil. Il peut exporter sa progression (bouton "Exporter" en haut à droite) et la réimporter plus tard.

**Q : Un prof peut casser l'app des autres ?**
Non. Chaque prof travaille dans son propre navigateur. Impossible d'affecter les autres.

**Q : Comment ajouter un nouveau cours ?**
Demande à Claude avec ce prompt : "Ajoute un cours sur [sujet] dans gestion_cours_zenkai.html". Le CLAUDE.md contient toutes les instructions pour que Claude fasse ça proprement.

**Q : Le lien ne marche plus ?**
Vérifie que le repo est public : https://github.com/zartuf27/zenkai-cours-konoha
Si le repo est passé en privé, GitHub Pages ne fonctionne plus.

**Q : Comment voir le repo GitHub ?**
https://github.com/zartuf27/zenkai-cours-konoha

---

## Résumé en 3 lignes

1. **Partager** : envoie le lien, c'est tout
2. **Mettre à jour** : modifie le fichier, `git add` + `git commit` + `git push`
3. **Chaque prof** : configure son profil une fois, tout est dans son navigateur
