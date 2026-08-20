# Correctif du flash de chargement

## Cause identifiée

Le contenu SEO pré-rendu présent dans le document initial était visible avec les styles par défaut avant l’initialisation de React. Il provoquait brièvement un écran blanc avec du texte noir.

## Correctif appliqué

Un style minimal est désormais injecté dans le document initial : il fixe immédiatement le fond ivoire ou charbon selon le thème mémorisé et masque visuellement le contenu SEO pré-rendu sans le retirer du HTML. Un script très court lit la préférence claire/sombre avant le chargement de l’application.

## Résultats de test

Le test automatisé confirme le fond initial correct en clair et en sombre, le masquage du contenu SEO et le rendu complet du site après chargement. Les captures desktop et mobile confirment aussi que les nouvelles balises SC et le traitement renforcé de la route n’ont pas créé de collision ou de débordement sur l’écran d’accueil.
