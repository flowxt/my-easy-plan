# Guide Google Search Console - My Easy Plan

## 🎯 Pourquoi c'est CRUCIAL pour votre visibilité

Google Search Console est **GRATUIT** et **INDISPENSABLE**. Sans cela, Google ne sait pas :

- Que votre site existe
- Quelles pages indexer en priorité
- Si votre site a des problèmes

## 📋 Étapes d'installation (15 minutes)

### 1. Créer un compte Google Search Console

1. Allez sur : https://search.google.com/search-console
2. Connectez-vous avec votre compte Google (créez-en un si besoin)
3. Cliquez sur "Ajouter une propriété"
4. Choisissez "Préfixe d'URL"
5. Entrez : `https://my-easy-plan.com`

### 2. Vérifier votre propriété du site

Google va vous donner plusieurs méthodes. La plus simple avec Vercel :

**Méthode recommandée : Balise HTML**

1. Google vous donnera un code comme : `<meta name="google-site-verification" content="ABC123XYZ..." />`
2. Copiez uniquement la partie `ABC123XYZ...`
3. Dans votre fichier `src/app/layout.js`, remplacez :
   ```javascript
   verification: {
     google: "votre-code-google-search-console",
   },
   ```
   par :
   ```javascript
   verification: {
     google: "ABC123XYZ...",  // Votre vrai code
   },
   ```
4. Committez et poussez sur GitHub
5. Attendez que Vercel redéploie (2-3 minutes)
6. Retournez sur Google Search Console et cliquez "Vérifier"

### 3. Soumettre votre sitemap

1. Dans Google Search Console, allez dans "Sitemaps" (menu de gauche)
2. Entrez : `sitemap.xml`
3. Cliquez "Envoyer"
4. Statut devrait passer à "Réussi" après quelques heures

### 4. Demander l'indexation des pages importantes

1. Dans la barre de recherche en haut, entrez : `https://my-easy-plan.com`
2. Cliquez "Demander une indexation"
3. Répétez pour : `https://my-easy-plan.com/#services`
4. Répétez pour : `https://my-easy-plan.com/#contact`

---

## 📊 Comment suivre vos performances (après 1 semaine)

### Onglet "Performances"

Vous verrez :

- **Nombre de clics** : combien de personnes ont cliqué sur votre site dans Google
- **Impressions** : combien de fois votre site est apparu dans les résultats
- **CTR** (taux de clic) : % de personnes qui cliquent quand ils voient votre site
- **Position moyenne** : où vous apparaissez en moyenne dans les résultats

### Requêtes les plus performantes

Vous découvrirez quels mots-clés amènent des visiteurs. Exemples attendus :

- "permis de construire haute-savoie"
- "dessinateur projeteur bonneville"
- "plan extension maison 74"

**Action :** Si un mot-clé génère beaucoup d'impressions mais peu de clics, optimisez votre contenu pour ce mot-clé.

### Pages les plus vues

Identifiez quelles sections intéressent le plus les visiteurs.

---

## 🚨 Alertes et erreurs à surveiller

### Onglet "Couverture"

- **Pages indexées** : combien de pages Google a dans son index (devrait être > 0)
- **Pages exclues** : normal d'en avoir quelques-unes (pages techniques)
- **Erreurs** : À CORRIGER IMMÉDIATEMENT si présentes

### Onglet "Expérience"

- **Core Web Vitals** : performance de votre site
- Objectif : tout doit être dans le "Vert"
- Si "Orange" ou "Rouge" : me contacter

### Onglet "Ergonomie mobile"

- Vérifiez que tout est OK sur mobile
- Crucial : 70% des recherches sont sur mobile

---

## 🎁 Bonus : Demander une évaluation manuelle

Après 2-3 semaines d'optimisations :

1. Dans Search Console, allez dans "Paramètres"
2. Cliquez "Demander une exploration"
3. Google reviendra explorer votre site plus rapidement

---

## 📈 Objectifs à atteindre (après 3 mois)

| Métrique         | Objectif conservateur | Objectif ambitieux |
| ---------------- | --------------------- | ------------------ |
| Impressions/mois | 500-1000              | 2000+              |
| Clics/mois       | 20-50                 | 100+               |
| Position moyenne | 15-30                 | 5-15               |
| Pages indexées   | 3-5                   | 5+                 |

---

## ⚡ Actions prioritaires (AUJOURD'HUI)

1. ✅ Créer le compte Google Search Console
2. ✅ Vérifier la propriété avec la balise HTML
3. ✅ Soumettre le sitemap
4. ✅ Demander l'indexation de la page d'accueil

**Temps total : 15-20 minutes**

---

## 💡 Astuces pro

### 1. Vérifiez chaque semaine

- Connectez-vous 1x/semaine pour suivre vos progrès
- Notez vos impressions et clics dans un tableau Excel

### 2. Corrigez immédiatement les erreurs

- Si vous voyez une alerte "Erreur critique" → agissez dans les 24h

### 3. Surveillez la concurrence

- Tapez "permis de construire haute-savoie" dans Google
- Analysez les 3 premiers résultats
- Inspirez-vous de leur contenu (sans copier !)

### 4. Créez du contenu basé sur les données

- Si vous voyez des impressions sur "plan véranda haute-savoie"
- Créez un article de blog dédié aux vérandas
- Améliorez cette section sur votre site

---

## 🆘 Problèmes fréquents

### "Mon site n'apparaît pas dans Google après 2 semaines"

**Solutions :**

1. Vérifiez que le sitemap est bien soumis
2. Demandez manuellement l'indexation
3. Assurez-vous que le site est en production (pas de balise noindex)
4. Patientez : Google peut prendre 4-6 semaines pour un nouveau site

### "J'ai 0 impressions après 1 mois"

**Solutions :**

1. Vérifiez Google Business Profile (plus efficace au début)
2. Créez du contenu blog
3. Obtenez des backlinks (liens depuis d'autres sites)
4. Augmentez votre présence sur les annuaires

### "Mon CTR est très faible (< 2%)"

**Solutions :**

1. Améliorez vos meta descriptions
2. Ajoutez des emojis dans les titres (si approprié)
3. Mettez en avant votre localisation
4. Mentionnez "Devis gratuit" dans la description

---

## 📞 Besoin d'aide ?

Si vous rencontrez des difficultés :

1. Consultez l'aide Google : https://support.google.com/webmasters
2. Demandez sur les forums de webmasters français
3. Contactez-moi si problème technique sur le site

---

**Rappel important :** Google Search Console ne fait PAS de magie. Il faut :

- Du contenu de qualité
- Des mots-clés pertinents
- Du temps (2-3 mois minimum)
- Google Business Profile (encore plus important !)

Mais c'est un outil INDISPENSABLE pour suivre vos progrès et identifier les opportunités d'amélioration.

**Bonne chance ! 🚀**
