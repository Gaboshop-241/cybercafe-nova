# Rapport d’audit — SMART CYBER PK11

**Périmètre :** contrôle visuel, responsive, navigation, appels à l’action, menu mobile, animations et accessibilité de mouvement.

## Synthèse

Le site est désormais cohérent avec l’identité **orange, blanc et bleu-charbon** de SMART CYBER PK11. Les photos du lieu réel s’affichent correctement, les services sont faciles à comprendre et le système de signalétique T01–T03 rend le parcours plus structuré. La compilation TypeScript et la génération de production sont valides.

| Zone contrôlée | Résultat | Détail observé ou corrigé |
| --- | --- | --- |
| Rendu desktop | Validé | Les titres, photos, cartes, routes terminal et appels à l’action restent lisibles. |
| Rendu mobile | Validé | Les sections passent en colonne sans débordement ; les pass et la route terminal restent compréhensibles. |
| Navigation Services / Le cyber / Nos pass | Validée | Les ancres atteignent les sections correspondantes avec un espace suffisant sous l’en-tête fixe. |
| Route SMART T01–T03 | Validée | Le bouton « Voir les pass » atteint directement la section des pass. |
| Actions de visite et de pass | Validées | Les boutons affichent un retour immédiat via un toast de confirmation. |
| Menu mobile | Validé | L’ouverture, l’état `aria-expanded`, la fermeture à la navigation et la relation `aria-controls` sont contrôlés. |
| Retour en haut | Validé | Le gestionnaire ramène la page à la position haute ; la bannière locale de prévisualisation peut seulement masquer le clic visuel au footer. |
| Animations | Validées | Entrée du héros, transitions de boutons et zoom discret des images utilisent des propriétés légères. |
| Réduction des mouvements | Validée | Une règle dédiée réduit les animations, transitions et le défilement fluide selon la préférence système. |
| Console et compilation | Validées | Aucune erreur JavaScript observée ; `pnpm check` et `pnpm build` terminent avec succès. |

## Corrections et améliorations appliquées

Le retour en haut utilise maintenant `window.scrollTo`, plus fiable que l’ancre initiale. Chaque section ciblée reçoit une marge de défilement afin que les titres ne passent pas sous l’en-tête fixe. Le menu mobile a été renforcé avec une bascule fonctionnelle et des libellés accessibles.

Le design a également été approfondi : la bande **SMART ROUTE** relie les terminaux Internet, Impression et Assistance ; le monogramme SC reçoit un tracé orbital inspiré de la signalétique ; les panneaux bleu-charbon redonnent du contraste et préservent l’impact de l’orange. Les libellés génériques ont été remplacés par des actions concrètes : « Voir le pass », « Imprimer », « Être aidé » et « Préparer ma visite ».

## Améliorations recommandées avant une campagne réelle

| Priorité | Amélioration | Effet attendu |
| --- | --- | --- |
| Haute | Ajouter un bouton WhatsApp avec le numéro réel | Transformer les visites en demandes immédiates. |
| Haute | Afficher les prix, durées et horaires réels | Réduire les questions répétitives et rassurer les clients. |
| Moyenne | Ajouter une carte ou une indication précise de localisation | Faciliter l’arrivée au PK11. |
| Moyenne | Relier les pass à une demande WhatsApp préremplie | Fluidifier la réservation d’un poste ou d’une impression. |
| Optionnelle | Ajouter une page « Tarifs & services » dédiée | Donner plus de place aux détails d’impression, scan et assistance. |

> **Conclusion :** le site est stable, responsive et prêt à présenter SMART CYBER PK11. Les prochaines améliorations utiles dépendent surtout des informations réelles à publier : numéro WhatsApp, adresse, horaires et tarifs.
