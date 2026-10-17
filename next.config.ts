import type { NextConfig } from "next";

// Déploiement GitHub Pages : https://amstudioai-lgtm.github.io/Mydata-site/
const basePath = "/Mydata-site";

const nextConfig: NextConfig = {
  // Site 100% statique : next build exporte du HTML dans out/
  output: "export",
  basePath,
  // Émet des dossiers index.html (comportement attendu par GitHub Pages)
  trailingSlash: true,
  // Le loader d'images par défaut exige un serveur Node → images servies telles quelles
  images: { unoptimized: true },
  // cacheComponents/PPR incompatible avec export statique et route-segment-config → désactivés
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
