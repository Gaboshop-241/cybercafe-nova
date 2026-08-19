# Plan d’amélioration de vitesse — SMART CYBER PK11

## Objectif

L’objectif est de rendre la première visite nettement plus rapide, en particulier sur les téléphones avec une connexion mobile limitée. La priorité est de montrer immédiatement l’en-tête, le message principal et le bouton WhatsApp, puis de charger progressivement les photos, la galerie et le reste de la page.

## État de départ mesuré

| Élément mesuré | Taille actuelle | Lecture |
| --- | ---: | --- |
| Script JavaScript principal de production | 590 925 octets | Trop important pour une page vitrine simple ; il faut réduire le code initial et différer le non-essentiel. |
| Feuille de styles de production | 119 737 octets | À surveiller, mais moins prioritaire que les images. |
| Photo façade améliorée | 5,4 Mo | Trop lourde pour le premier écran ; c’est la priorité n° 1. |
| Photo intérieure améliorée | 5,1 Mo | À convertir et différer hors du premier écran. |
| Deux scènes de vie générées | 5,0–5,3 Mo chacune | À servir en petites versions WebP/AVIF et en chargement différé. |

> La vitesse réelle sera principalement limitée par le poids des photos actuelles : les quatre visuels principaux représentent environ **20,5 Mo** avant compression de navigateur.

## Plan priorisé

| Priorité | Action | Travail concret | Impact attendu | Effort |
| --- | --- | --- | --- | --- |
| P0 | Optimiser les images | Créer des versions WebP ou AVIF de la façade, des postes et des scènes de vie ; conserver les originaux hors du chargement client. | Très fort : baisse majeure du volume à télécharger. | Moyen |
| P0 | Servir des tailles adaptées | Préparer au minimum une version mobile et une version desktop par photo, avec `srcset` et `sizes`. | Très fort sur mobile : le téléphone ne télécharge plus une grande photo desktop. | Moyen |
| P0 | Charger après le premier écran | Mettre `loading="lazy"` et `decoding="async"` sur la galerie, les scènes de vie et les images sous la ligne de flottaison. Garder uniquement le héros en priorité haute. | Fort : première vue plus rapide et plus fluide. | Faible |
| P0 | Stabiliser les images | Déclarer les dimensions ou `aspect-ratio` de chaque visuel. | Moyen : moins de sauts de mise en page pendant le chargement. | Faible |
| P1 | Réduire le JavaScript initial | Analyser le bundle ; remplacer les animations non critiques par du CSS, charger les composants non essentiels à la demande et ne conserver que les icônes réellement affichées. | Moyen à fort : interaction plus rapide sur les téléphones modestes. | Moyen |
| P1 | Optimiser les polices | Limiter les familles et graisses réellement utilisées, précharger uniquement les polices du héros, puis appliquer `font-display: swap`. | Moyen : texte visible plus tôt. | Faible |
| P1 | Simplifier le chargement du héros | Précharger l’image héro optimisée et n’afficher qu’une animation courte ; éviter les filtres lourds sur les appareils mobiles. | Moyen : meilleur LCP et animation plus stable. | Faible |
| P2 | Mettre en cache les ressources | Vérifier des en-têtes cache longs pour les fichiers versionnés, images WebP/AVIF et polices. | Moyen lors des visites suivantes. | Faible |
| P2 | Installer une surveillance continue | Suivre LCP, INP et CLS dans Analytics ou un outil de mesure, avec une vérification mensuelle sur mobile. | Durable : permet de détecter les régressions. | Faible |

## Ordre d’exécution recommandé

### Étape 1 — Gains immédiats

Traiter d’abord les quatre images principales. Elles doivent être converties dans un format moderne, compressées et proposées en plusieurs largeurs. La façade de l’écran d’accueil doit conserver une belle qualité, mais avec un poids nettement réduit. La galerie et les photos de vie doivent apparaître uniquement lorsque l’utilisateur approche de leurs sections.

### Étape 2 — Rendre l’interface immédiatement utilisable

Ensuite, il faut ajouter les attributs de priorité et de décodage appropriés. Le héros reçoit une priorité élevée ; toutes les images suivantes sont différées. Les dimensions des cadres restent réservées dès le départ afin que le bouton WhatsApp, les tarifs et les cartes ne bougent pas pendant le chargement.

### Étape 3 — Réduire le coût JavaScript

Après l’optimisation des médias, un audit du bundle identifiera les dépendances les plus coûteuses. Le site est une page vitrine : ses animations peuvent rester principalement en CSS et les composants purement secondaires peuvent être séparés du chargement initial. Cette phase doit être conduite après les images, car elle offrira un gain complémentaire, mais moins visible que la réduction de 20 Mo de photos.

### Étape 4 — Mesurer et protéger le résultat

Avant chaque évolution majeure, il faut vérifier la vitesse sur un téléphone milieu de gamme et sur un réseau mobile. Le projet doit conserver un budget de performance : toute nouvelle photo doit être optimisée avant publication et toute nouvelle dépendance doit justifier son poids.

## Cibles de résultat

| Indicateur | Cible pratique |
| --- | --- |
| Image héros optimisée | Environ 250 à 450 Ko selon la qualité retenue |
| Images de galerie | Environ 80 à 200 Ko par image pour l’aperçu mobile |
| Images chargées dès l’ouverture | Une image héro principale, puis le reste en différé |
| JavaScript initial | Réduire sensiblement le bundle actuel de 591 Ko avant compression |
| Expérience mobile | Texte et CTA visibles immédiatement, galerie chargée progressivement |

## Décision recommandée

Commencer par les images est le meilleur investissement. Une fois les WebP/AVIF et le chargement différé en place, la page gardera son design premium, mais demandera beaucoup moins de données aux clients du PK11. La deuxième intervention sera la réduction du JavaScript et des polices.
