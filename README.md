# Herbert Nikolajewski — Portfolio

Personal portfolio site built with [Astro](https://astro.build). Statically generated and deployed to GitHub Pages.

## Live site

https://herbertnikolajewskidci.github.io

## Tech stack

- [Astro](https://astro.build) v7
- TypeScript
- CSS custom properties
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Pushes to `main` trigger the GitHub Action in `.github/workflows/deploy.yml`, which builds the site with `withastro/action@v6` and deploys it to GitHub Pages.
