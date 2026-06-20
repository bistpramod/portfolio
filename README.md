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

When you push to `main`, GitHub Actions builds the site and publishes it to the `gh-pages` branch.

### One-time setup (do this once in GitHub)

Go to **https://github.com/bistpramod/portfolio/settings/pages** and set:

1. **Source** → **Deploy from a branch**
2. **Branch** → `gh-pages` → `/ (root)` → Save

That's it. After the first push, wait ~2 minutes, then check the **Actions** tab — green checkmark means it's live.

### If the site shows a blank page or console errors

This usually means GitHub is still serving the **source code** instead of the **built site**. You'll see an error like:

> Failed to load module script: ... main.tsx ... MIME type "application/octet-stream"

That happens because browsers can't run `.tsx` files directly — they need the compiled JavaScript from `npm run build`.

**Fix:** Make sure Pages source is `gh-pages` branch (steps above), not `main`.

### Cloudflare (your domain goes through it)

If you use Cloudflare for `bistpramod.com.np`, also do this:

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your domain → **Speed** → **Optimization**
3. Turn **Rocket Loader** → **Off**

Rocket Loader breaks React/Vite apps. The vite config already adds a bypass tag, but turning it off in Cloudflare is the reliable fix.

### Push your changes

```bash
git add .
git commit -m "Fix GitHub Pages deployment"
git push origin main
```

Site should update at [bistpramod.com.np](https://bistpramod.com.np) after the Action finishes.

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
