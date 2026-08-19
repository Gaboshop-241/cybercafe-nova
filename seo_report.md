# Validation SEO — SMART CYBER PK11

Le support SEO avancé est configuré pour la page publique du site.

| Élément | État | Validation |
| --- | --- | --- |
| Indexation | Validée | `robots.txt` autorise les robots avec `Allow: /`. |
| Sitemap | Validé | `sitemap.xml` est servi publiquement et contient l’URL canonique de l’accueil. |
| Métadonnées | Validées | Titre, description, URL canonique, Open Graph et Twitter Card sont définis. |
| Données structurées | Validées | Le type `InternetCafe` décrit les services, horaires, téléphone et adresse. |
| Pré-rendu | Validé | Les informations essentielles sont présentes dans le HTML initial. |
| Contrôle automatisé | Validé | `pnpm seo:check` contrôle les signaux avant livraison. |

## Suivi recommandé

À chaque ajout de page publique, il faudra mettre à jour `sitemap.xml`, ajouter une URL canonique et relancer `pnpm seo:check`. Si un nom de domaine personnalisé remplace l’adresse Manus, les URLs canoniques, sitemap, `robots.txt` et données structurées doivent être ajustés vers ce nouveau domaine.
