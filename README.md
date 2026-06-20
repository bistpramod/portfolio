# Pramod Bist — Portfolio

A modern personal portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons)
- Vite

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

The `dist/` folder contains the static output ready for deployment.

## Deploy to GitHub Pages

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and deploys automatically.

**One-time setup** (GitHub repo → Settings → Pages):

1. Set **Source** to **GitHub Actions** (not “Deploy from branch”).
2. Confirm custom domain **bistpramod.com.np** is still set (from `public/CNAME`).

Then push:

```bash
git add .
git commit -m "Convert portfolio to React + TypeScript + Tailwind"
git push origin main
```

Check the **Actions** tab on GitHub — when the workflow finishes, your site updates at [bistpramod.com.np](https://bistpramod.com.np).

## Project Structure

```
src/
├── components/   # UI sections (Hero, About, Services, etc.)
├── data/         # Site content & configuration
├── hooks/        # Custom React hooks (typewriter, scroll spy)
└── index.css     # Tailwind + global styles
public/           # Static assets (images, CNAME)
legacy/           # Original HTML/CSS/JS files (archived)
```

## Custom Domain

The `public/CNAME` file is preserved for GitHub Pages deployment at **bistpramod.com.np**.
