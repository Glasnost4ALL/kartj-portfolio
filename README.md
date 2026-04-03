# KARTj — Portfolio Photographique

Portfolio photographique minimal et narratif, inspiré du style de Cory Richards.

## 🚀 Démarrage

### Option 1 : Docker (Recommandé)

**Prérequis:** Docker installé ([guide officiel](https://docker.com/get-started/))

```bash
# Vérifier que Docker fonctionne
docker pull node:24-alpine
docker run -it --rm --entrypoint sh node:24-alpine -c "node -v"  # Doit afficher v24.x.x

# Lancer en développement (hot-reload)
docker compose up dev

# Lancer en production (build complet)
docker compose up prod --build
```

Le site sera disponible sur http://localhost:3000

### Option 2 : Installation locale

**Prérequis:** Node.js 18+

```bash
# Installer les dépendances
npm install

# Générer les images placeholder (optionnel)
node generate-placeholders.js

# Lancer en développement
npm run dev
```

Le site sera disponible sur http://localhost:3000

## 📁 Structure

```
src/
├── app/
│   ├── layout.tsx          # Layout racine
│   ├── page.tsx            # Page d'accueil
│   ├── work/page.tsx       # Page Work
│   ├── journal/page.tsx    # Page Journal
│   ├── about/page.tsx      # Page About
│   └── project/[slug]/     # Pages projets dynamiques
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SequenceRenderer.tsx
│   ├── ImageBlock.tsx
│   └── FullBleedImage.tsx
└── lib/
    └── projects.ts         # Data layer des projets

public/images/              # Images des projets
```

## 🎨 Design System

- **Fond**: Noir (#000)
- **Texte**: Blanc (#fff)
- **Typo**: Inter, letter-spacing 0.1em
- **Layout**: Max width 1200px, gap vertical 128px
- **Scroll**: Smooth scroll via Lenis

## 📸 Ajouter un Projet

Modifier `src/lib/projects.ts`:

```typescript
{
  slug: "mon-projet",
  title: "Mon Projet",
  category: "journal",
  cover: "/images/cover.jpg",
  year: "2024",
  description: "Description du projet",
  blocks: [
    { type: "full", src: "/images/01.jpg" },
    { type: "image", src: "/images/02.jpg" },
    { type: "text", content: "Un texte optionnel" },
  ]
}
```

### Types de blocs
- `full`: Image pleine largeur (full bleed)
- `image`: Image centrée avec marges
- `text`: Texte centré

## 🚀 Build & Deploy

```bash
# Build production
npm run build

# Démarrer en production
npm start
```

### Deploy sur Vercel
```bash
npm install -g vercel
vercel
```

## ⚡ Performance

- Images optimisées via next/image
- Lazy loading automatique
- Format WebP automatique
- Smooth scroll via Lenis

## 🎯 Contraintes

- ❌ Pas de grille
- ❌ Pas de carrousel
- ❌ Pas de texte inutile
- ❌ Pas d'UI visible
- ✅ Scroll vertical uniquement
- ✅ Aucun bouton visible
