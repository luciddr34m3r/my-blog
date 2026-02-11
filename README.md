# Security Research Blog

A minimal, high-performance static blog built with [Astro](https://astro.build), [TailwindCSS](https://tailwindcss.com), and [TypeScript](https://www.typescriptlang.org/). Designed for security researchers and technical writers.

## Features

- **Performance**: 100/100 Lighthouse score, zero-JS by default (except for islands).
- **Aesthetic**: Hacker-professional dark mode theme.
- **Content**: MDX support for robust content authoring.
- **SEO**: Auto-generated sitemap, RSS feed, and Open Graph tags.
- **Developer Experience**: Type-safe content collections.

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
npm install
```

### Local Development

Start the dev server:

```bash
npm run dev
```

Visit `http://localhost:4321` to view the site.

## Adding Content

1. Create a new file in `src/content/blog/`.
2. Use the standard frontmatter format:

```markdown
---
title: "Your Post Title"
description: "Brief summary for SEO and cards."
pubDate: 2023-11-28
tags: ["tag1", "tag2"]
draft: false
---

Your content here...
```

### Drafts

Set `draft: true` in the frontmatter to prevent the post from being built in production. It will still be visible in dev mode if you adjust the content collection filter (default filter excludes drafts).

## Deployment

This repository is configured to deploy automatically to **GitHub Pages** via GitHub Actions.

1. Go to your repository **Settings** > **Pages**.
2. Under "Build and deployment", set **Source** to **GitHub Actions**.
3. Push changes to the `main` branch.

The workflow defined in `.github/workflows/deploy.yml` will automatically build and deploy the site.

## Customization

- **Styling**: Edit `src/styles/global.css` for theme colors and Tailwind configuration.
- **Config**: Update `astro.config.mjs` with your production `site` URL.
- **Metadata**: Update `src/components/BaseHead.astro` and `src/components/Footer.astro` with your details.
