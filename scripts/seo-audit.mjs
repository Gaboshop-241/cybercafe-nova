import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const publicDir = resolve("dist/public");
const indexPath = resolve(publicDir, "index.html");
const robotsPath = resolve(publicDir, "robots.txt");
const sitemapPath = resolve(publicDir, "sitemap.xml");

const checks = [];
const check = (label, condition, detail) => checks.push({ label, status: condition ? "OK" : "À corriger", detail });

check("Build HTML", existsSync(indexPath), "Le fichier index.html pré-rendu existe.");
check("robots.txt", existsSync(robotsPath), "Les robots peuvent découvrir les règles d’indexation.");
check("sitemap.xml", existsSync(sitemapPath), "Le sitemap référence les pages publiques.");

const html = existsSync(indexPath) ? readFileSync(indexPath, "utf8") : "";
const robots = existsSync(robotsPath) ? readFileSync(robotsPath, "utf8") : "";
const sitemap = existsSync(sitemapPath) ? readFileSync(sitemapPath, "utf8") : "";

check("Titre SEO", /<title>SMART CYBER PK11 \| Internet, impression & formations au PK11<\/title>/.test(html), "Le titre décrit la marque, la localisation et les services.");
check("Meta description", /<meta name="description" content="[^"]{120,}"/.test(html), "La description est suffisamment explicite pour les moteurs de recherche.");
check("Balise canonique", /<link rel="canonical" href="https:\/\/novacyber-ksxduw4u\.manus\.space\/"/.test(html), "Une URL canonique évite les doublons.");
check("Données structurées", /application\/ld\+json/.test(html) && /"@type": "InternetCafe"/.test(html), "Les données LocalBusiness sont présentes.");
check("Pré-rendu", /<main class="seo-prerender">/.test(html) && /<h1>/.test(html), "Le contenu essentiel est présent avant l’exécution de JavaScript.");
check("Indexation", /User-agent: \*\s+Allow: \//.test(robots), "Les robots sont autorisés à explorer le site.");
check("Sitemap déclaré", /Sitemap: https:\/\/novacyber-ksxduw4u\.manus\.space\/sitemap\.xml/.test(robots) && /<loc>https:\/\/novacyber-ksxduw4u\.manus\.space\/<\/loc>/.test(sitemap), "Le sitemap est déclaré et contient la page d’accueil.");

console.table(checks);
const failures = checks.filter((item) => item.status !== "OK");
if (failures.length) {
  console.error(`SEO audit failed: ${failures.length} point(s) à corriger.`);
  process.exit(1);
}
console.log("SEO audit passed: tous les signaux essentiels sont présents.");
