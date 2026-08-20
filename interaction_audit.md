# Validation des interactions — SMART CYBER PK11

## FAQ

La FAQ est présente avec six questions basées sur les informations commerciales confirmées. Le premier item a été déclenché dans l’aperçu afin de vérifier le comportement de l’accordéon et sa disponibilité comme bouton accessible.

Le test des attributs ARIA confirme que les six déclencheurs sont rendus comme boutons et commencent fermés. La validation se poursuit avec les commandes clavier et la vérification de l’état ouvert, afin de confirmer que chaque question expose bien sa réponse de manière accessible.

Le clic sur la première question ouvre correctement la réponse sur les horaires : lundi, mardi, mercredi et vendredi, de 8h à 20h ; fermeture jeudi, samedi et dimanche. Le contenu devient visible dans le flux de la page, ce qui confirme l’ouverture accessible de l’accordéon.

L’ouverture de la question sur le prix de l’ordinateur ferme la réponse précédente, ce qui correspond au comportement à ouverture unique. La touche Entrée sur le déclencheur actif referme correctement la réponse ; le comportement pointer et clavier est donc validé.

Les contrôles desktop et mobile confirment que la FAQ reste lisible, que les routes visibles ne débordent pas et que les cartes conservent une présentation stable sur les écrans tactiles. Les survols sont volontairement limités aux appareils compatibles avec un pointeur fin.

## Médias publics Vercel

La version WebP de la façade est servie avec succès depuis `/media/` dans l’application. Le favicon orbital `SC` est également disponible depuis `/smart-cyber-mark.svg`. Ces deux ressources seront ainsi incluses dans la sortie statique attendue par Vercel.

Le bouton « Laisser un avis » génère un message WhatsApp prérempli comprenant les champs prénom ou initiales, service utilisé et avis. La section de confiance rappelle que toute publication exige l’accord du client ; aucun témoignage fictif n’est affiché.

## Fondus d’images et avis détaillé

Les images présentes au premier écran se placent dans l’état `is-loaded` après leur chargement et apparaissent avec une transition d’opacité et de déplacement courte. Les images plus bas restent volontairement en chargement différé jusqu’au défilement, ce qui préserve la vitesse de la page. Le message « Laisser un avis » contient maintenant une note sur 5, un commentaire détaillé et l’accord de publication.

## Retour en haut de page

Le bouton flottant « Haut » apparaît après le seuil de défilement prévu, sans gêner le bouton WhatsApp. Depuis le bas de page, son activation déclenche un retour animé vers l’accueil. La préférence de réduction des mouvements désactive cette transition au profit d’un retour immédiat.

## Survols

Les cartes de services et les cartes de confiance possèdent désormais des transitions GPU sur `transform`, `opacity`, couleurs et ombres. Les survols ne sont appliqués qu’aux appareils dotés d’un pointeur fin ; l’expérience tactile reste stable.
