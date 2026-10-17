# Mydata-site — Site vitrine

## Description du projet

Site vitrine statique pour **Mydata**, application Android de bases de données locales
et de tableaux personnalisés (repo : [AMstudioai-lgtm/Mydata](https://github.com/AMstudioai-lgtm/Mydata)).

- **Audience** : grand public francophone
- **Objectif** : découverte de l'app + téléchargement de l'APK via GitHub Releases
- **URL cible** : `https://amstudioai-lgtm.github.io/Mydata-site/`
- **Repo du site** : `AMstudioai-lgtm/Mydata-site` (public)
- **Environnement de travail** : Codespace `mydata-site-5vvq7xqqw5jvc4797`

## Technologies retenues

| Choix | Rôle |
|---|---|
| Next.js 16.4 (App Router, export statique) | Framework site |
| Tailwind CSS 4 | Styling |
| GitHub Pages | Hébergement (gratuit) |
| GitHub Releases | Distribution APK (déjà en place côté app) |

Palette fidèle à l'app (`ui/theme/Color.kt`) :
fond `#1E1E1E`, panneau `#252526`, accent `#007ACC`, bordure `#2D2D2D`, sélection `#094771`.

## Règles de design validées (consolidées)

- Sombre fidèle à l'app, minimaliste et stylé (sans skill imposé)
- Titres sans-serif très serrés, air généreux, bordures fines 1px, ombres quasi nulles
- Un seul accent (bleu app) — couleur rare donc visible
- Zéro emoji, zéro tracker, zéro cookie
- Mockups CSS du tableau Mydata (pas de captures d'écran)

## Cas limites traités

- Aucun numéro de version affiché en dur → lien `releases/latest`
- basePath `/Mydata-site` pour tous les liens internes
- Guide d'installation APK (Android bloque le hors-Play-Store)
- `cacheComponents` incompatible export statique → à vérifier contre la doc locale Next 16.4

## Module / étape en cours

**Étape 1 — Initialisation : TERMINÉE**
- Sauvegarde Git du travail existant (16 fichiers, commit `e11df58`)
- Repo GitHub `AMstudioai-lgtm/Mydata-site` (public, branche `main`)
- Codespace `mydata-site-5vvq7xqqw5jvc4797` (Node 20, npm 10)
- `npm ci` + `npm run build` exécutés et verts DANS le Codespace

**Étape 2 — Export statique Next.js → GitHub Pages : EN COURS**

## Modules en attente (roadmap)

1. Export statique (`output: "export"`, basePath, trailingSlash, images unoptimized) + build vert
2. Fidélité typographique & tokens (tracking, mono, kbd)
3. Mockups CSS : tableau + détail de ligne
4. Sections manquantes : Installation, Confidentialité, FAQ
5. Micro-animations (reveal, cascade, reduced-motion)
6. SEO : metadata, OG, sitemap, favicon, 404
7. QA : `next build` + script de vérification des liens de l'HTML exporté
8. Déploiement : workflow GitHub Pages → test URL en ligne
9. (Backlog) Version EN, badge dynamique releases via API GitHub
