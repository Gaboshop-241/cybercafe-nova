# Correctif de déploiement Vercel — SMART CYBER PK11

## Diagnostic observé

Le 19 août 2026, l’URL `https://cybercafe-nova.vercel.app/` affichait le contenu compilé de `server/index.ts` au lieu du site React. Le build du projet contient deux sorties : `dist/index.js` pour le serveur Express et `dist/public/` pour les fichiers statiques React. Le comportement indique que Vercel servait le mauvais répertoire de sortie.

## Correctif appliqué

Le fichier `vercel.json` définit maintenant explicitement :

| Réglage | Valeur |
| --- | --- |
| Commande de build | `pnpm build` |
| Répertoire de sortie | `dist/public` |
| URLs propres | Activées |

Le domaine Vercel a aussi été défini comme URL canonique dans les métadonnées, le sitemap, robots.txt et les données structurées SEO.

## Déploiement attendu

Le prochain déploiement GitHub/Vercel doit servir `dist/public/index.html` à la racine et non `dist/index.js`. Si le cache Vercel conserve le comportement précédent, déclencher un nouveau déploiement avec l’option de cache désactivé.
