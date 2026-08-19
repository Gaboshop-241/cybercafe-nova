# Mesures de performance — SMART CYBER PK11

## Mesures disponibles

La dernière compilation de production produit un script JavaScript principal de **590 925 octets** et une feuille de styles de **119 737 octets** avant compression. Les ressources visuelles locales d’origine pèsent entre **5,0 Mo et 5,4 Mo** chacune : façade améliorée (5,4 Mo), scène de services (5,3 Mo), intérieur amélioré (5,1 Mo) et scène d’études (5,0 Mo).

Le relevé dans l’aperçu de développement ne reflète pas les tailles de production : il charge des modules Vite séparés et les transferts sont artificiellement faibles. Les poids de build et des fichiers source sont donc la référence utilisable pour établir le plan.

## Hypothèse principale

La plus grande opportunité est la réduction et le chargement différé des images, puis la diminution du JavaScript initial. Les images de galerie et de sections sous la ligne de flottaison doivent être converties en formats modernes et ne pas bloquer le premier affichage.

## Optimisations appliquées

Les quatre visuels principaux ont été remplacés par huit variantes WebP. Les fichiers vont de **27 Ko à 106 Ko**, contre environ **5,0 à 5,4 Mo** par original. La page active charge huit images WebP : le héros est la seule image prioritaire (`fetchpriority="high"`), tandis que les sept autres sont différées (`loading="lazy"`) et décodées en asynchrone.

Le script JavaScript principal est passé de **590 925 octets** à **514 819 octets** avant compression, soit une baisse d’environ **76 Ko**. Cette réduction provient du retrait de composants globaux de notifications, d’infobulles et de thème qui n’étaient plus utilisés par la vitrine.

## Contrôle final

Les captures desktop et mobile confirment que les huit images affichées sont désormais en WebP et que les sections sous le héros restent visuellement continues. Une première tentative de `content-visibility` sur de grandes sections a été retirée : elle pouvait créer des espaces vides sur une capture complète avant l’activation des zones hors écran. Le chargement différé des images est conservé, car il offre un gain sûr sans dégrader la structure de la page.
