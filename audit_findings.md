# Audit fonctionnel — SMART CYBER PK11

## Constats initiaux

Les liens de navigation desktop « Services » et « Le cyber » effectuent un défilement fluide vers les sections prévues. La barre de navigation reste visible après l’ancre et les titres de section ne sont pas cachés par l’en-tête fixe.

La nouvelle palette orange et blanc est cohérente et les photos de façade ainsi que les postes réels s’affichent correctement. Le prochain contrôle porte sur le lien « Nos pass », les appels à l’action qui déclenchent un message, le menu mobile, les retours vers le haut, l’accessibilité clavier et les préférences de réduction des mouvements.

## Interactions desktop validées

Le lien « Nos pass » mène correctement à la section des pass, avec le titre et les options entièrement visibles sous la barre fixe. Le bouton « Choisir » du Pass Connexion affiche un toast de confirmation clair : « Bienvenue chez SMART CYBER PK11 » avec l’instruction de venir choisir son poste. Ce retour confirme que les appels à l’action de visite fonctionnent sans navigation accidentelle.

## Défaut à corriger

Le bouton « Retour en haut » au footer ne produit pas de défilement vers l’accueil dans le navigateur de test. Ce comportement doit être remplacé par un retour fiable utilisant la position de défilement de la fenêtre, puis être testé à nouveau. Le clic n’a pas généré d’erreur visible à ce stade.

## Console et actions de cartes

La console navigateur ne contient aucune erreur JavaScript. Le contrôle d’une action de carte depuis la vue de test ne permet pas de confirmer son ancre de façon fiable, car le navigateur fait d’abord défiler l’élément hors champ vers la zone visible. Ce parcours sera validé par un déclenchement DOM contrôlé après la correction du retour en haut.

## Menu mobile à renforcer

Le test de clic programmatique du déclencheur mobile ne met pas à jour l’attribut `aria-expanded` dans la fenêtre desktop simulée et ne crée pas le menu. Cette vérification n’est pas équivalente à un véritable tap sur viewport mobile, mais elle justifie un ajustement de robustesse : centraliser la bascule du menu dans un callback fonctionnel et ajouter un état de fermeture explicite au changement de navigation.

## Animations vérifiées

L’entrée du héros utilise l’animation `smart-rise` pendant 0,7 seconde. Les boutons possèdent des transitions ciblées sur la transformation, le fond, la couleur, la bordure et l’ombre ; les visuels de carte ne déplacent que leur transformation au survol. La préférence système de réduction des mouvements n’est pas active dans le navigateur de test. Une règle `prefers-reduced-motion` est présente dans les styles, mais le contrôle final doit vérifier que la règle du site couvre bien tous les éléments animés, pas seulement les composants de notification.

## Correctif appliqué

Le retour vers l’accueil utilise désormais `window.scrollTo` avec un défilement fluide au lieu de s’appuyer sur l’élément `main`. Les sections reçoivent un `scroll-margin-top` afin que leurs titres restent dégagés sous l’en-tête fixe. Le menu mobile utilise une bascule fonctionnelle, un libellé accessible qui change entre ouverture et fermeture, ainsi qu’une relation `aria-controls` explicite.

## Validation du retour en haut

Le clic visuel sur le bouton du footer reste masqué par la bannière fixe de prévisualisation locale. En revanche, l’exécution du gestionnaire réel du bouton depuis le DOM ramène la page à `scrollY = 12`, ce qui valide le comportement dans le site lui-même. La différence provient donc de l’interface de prévisualisation et non du bouton déployé.

## Validation du menu mobile

Après le correctif, le déclencheur mobile expose correctement `aria-controls="smart-mobile-navigation"` et passe à `aria-expanded="true"`. Le menu contient quatre actions. Le choix « Services » ferme immédiatement le menu puis atteint la section cible (`scrollY = 719`), confirmant le parcours mobile.

## Améliorations appliquées après revue visuelle

L’identité a été approfondie sans abandonner le brief orange et blanc : une bande de route SMART relie explicitement les terminaux T01 Internet, T02 Impression et T03 Assistance ; le monogramme SC contient désormais un tracé orbital et diagonal ; les zones bleu-charbon réintroduisent de la profondeur dans les cartes Connexion, l’espace de travail et l’appel final. Les appels à l’action sont devenus concrets : « Voir le pass », « Imprimer », « Être aidé » et « Préparer ma visite ».

## Vérification responsive finale

Les captures finales desktop et mobile confirment la lisibilité des textes, la présence des images réelles, le comportement en colonne des cartes et des pass sur petit écran, ainsi que l’intégrité de la nouvelle bande terminal. Aucune rupture visuelle ou erreur de compilation n’a été observée.

## Test final de la route terminal

Le bouton « Voir les pass » de la bande SMART ROUTE atteint la section des pass (`scrollY = 3085`) et conserve le titre ainsi que les trois actions visibles sous la barre de navigation. Les boutons ont des libellés orientés service : « Voir le pass », « Imprimer » et « Être aidé ».

## Vérification commerciale

Douze liens WhatsApp sont présents. Ils utilisent tous le numéro **24105751036** et contiennent un message prérempli adapté à la visite, à la réservation d’un poste, à l’impression, à l’assistance, aux formations ou aux services numériques. La page affiche également l’adresse « Carrefour du PK11 Marché, Gabon », les horaires d’ouverture confirmés, les jours de fermeture et les tarifs en FCFA.
