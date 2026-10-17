# Mydata-site — Site vitrine

## Description du projet

Site vitrine statique pour **Mydata**, application Android de bases de données locales
et de tableaux personnalisés ([AMstudioai-lgtm/Mydata](https://github.com/AMstudioai-lgtm/Mydata)).

- **Audience** : grand public francophone
- **URL en ligne** : https://amstudioai-lgtm.github.io/Mydata-site/
- **Repo du site** : `AMstudioai-lgtm/Mydata-site` (public)
- **Environnement de travail** : Codespace `mydata-site-5vvq7xqqw5jvc4797` (100 % du travail)

## Technologies retenues

| Choix | Rôle |
|---|---|
| Next.js 16.4 (App Router, export statique) | Framework site |
| Tailwind CSS 4 | Styling |
| GitHub Pages (workflow Actions) | Hébergement |
| GitHub Releases | Distribution APK (côté app) |

Palette fidèle à l'app : fond `#1E1E1E`, panneau `#252526`, accent `#007ACC`,
bordure `#2D2D2D`, sélection `#094771`.

## Règles de design validées

- Sombre fidèle à l'app, minimaliste et stylé
- Titres très serrés, air généreux, bordures fines 1px, ombres quasi nulles
- Un seul accent (bleu app) — couleur rare donc visible
- Zéro emoji, zéro tracker, zéro cookie ; mockups CSS (pas de captures)

## Livré (2026-10-17) — tout en ligne

- Export statique : `output: "export"`, `basePath: /Mydata-site`, `trailingSlash`, images non optimisées
- `robots.txt` en `force-static` ; `cacheComponents` désactivé (incompatible export)
- Piège basePath corrigé via constantes de `src/lib/links.ts` (logo, OG absolue)
- Design/sections : `Mockup` (maquette CSS tableau + détail de ligne), `Privacy`,
  `Faq` (accordéons sans box), `Download` avec étapes `<kbd>`, `Reveal` au scroll
  (IntersectionObserver, cascade 80 ms, reduced-motion respecté, fallback `<noscript>`)
- Typographie : DM Sans (app) + JetBrains Mono (labels techniques, `<font-mono>`)
- SEO : canonical, sitemap.xml, favicon, `not-found` custom, OG absolus
- QA : `scripts/check-links.mjs` (bases internes + fichiers manquants) — vert en CI
- Déployé : workflow `deploy.yml` → artefact `out/` → `deploy-pages@v4`

## Vérifications en ligne (curl, 200)

`/`, `/robots.txt`, `/sitemap.xml`, `/404.html`

## Protocole de travail (100 % à distance)

- Tous les édits, builds, tests, commits et pushs passent par le Codespace
- Accès: `gh codespace ssh -c mydata-site-5vvq7xqqw5jvc4797`
- Push: deploy key du Codespace (lecture/écriture) — pas de token exposé
- Réseau de l'appareil instable : réessaies avec 2 tentatives espacées

## Modules en attente (backlog)

1. (polissage) Nettoyage visuel post-retour utilisateur — retours à intégrer
2. (backlog) Badge dynamique "dernière version" via API GitHub fetch côté client
3. (backlog) Version EN complète (sous `/en/`)
4. (app) OpenGraph image générée (1200×630) à la place du logo carré
