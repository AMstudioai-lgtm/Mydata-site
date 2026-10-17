/**
 * QA export statique : vérifie que chaque référence interne du HTML exporté
 * suit le basePath (/Mydata-site/...) et pointe vers un fichier existant
 * dans out/. Chaque href absolu non préfixé est signalé comme casse.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const BASE = "/Mydata-site";
const OUT = "out";

const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else files.push(p.replace(new RegExp(`^${OUT}[/\\\\]`), ""));
  }
})(OUT);

const htmlFiles = files.filter((f) => f.endsWith(".html"));
if (!htmlFiles.length || !existsSync(join(OUT, "index.html"))) {
  console.error("check-links: out/ incomplet");
  process.exit(1);
}

let internal = 0;
const errors = [];

for (const f of htmlFiles) {
  const html = readFileSync(join(OUT, f), "utf8");
  for (const m of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    const raw = m[1];
    if (/^(https?:)?\/\//.test(raw) || raw.startsWith("mailto:")) continue;
    if (raw.startsWith(BASE + "/")) {
      const path = raw.slice(BASE.length).split("?")[0];
      const clean = path.replace(/\/$/, "");
      const ok =
        (clean === "" && existsSync(join(OUT, "index.html"))) ||
        existsSync(join(OUT, clean)) ||
        existsSync(join(OUT, clean, "index.html")) ||
        existsSync(join(OUT, clean + ".html"));
      internal++;
      if (!ok) errors.push(` ${f} → ${raw} (fichier manquant)`);
    } else if (raw.startsWith("/")) {
      errors.push(` ${f} → ${raw} (absolu SANS basePath)`);
    }
  }
}

console.log(`check-links: ${htmlFiles.length} HTML, ${internal} liens internes vérifiés`);
if (errors.length) {
  console.error("check-links: LIENS CASSÉS\n" + errors.join("\n"));
  process.exit(1);
}
console.log("check-links: OK");
