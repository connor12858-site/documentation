# P2PNetwork Documentation Site

This folder contains the Astro + Starlight documentation site for P2PNetwork.

The site is designed for GitHub Pages and includes live repository data from:

- `https://github.com/connor12858-site/P2PNetwork`

## Site Features

- Docs-first homepage with primary calls to action: Learn More and Downloads.
- Sidebar sections in this order: Downloads, How to Use, Services.
- Live GitHub API panels for:
	- repository summary
	- latest release information
	- open issues and milestones

## Local Development

Run all commands from this `documentation` folder.

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## GitHub Pages Deployment

Deployment workflow:

- `.github/workflows/deploy-pages.yml`

The workflow builds the site and deploys `dist/` to GitHub Pages on pushes to `main` or `master`.

`astro.config.mjs` is configured to support project-site paths in GitHub Actions using:

- `site: https://connor12858-site.github.io`
- `base: /<repo-name>` during CI

## Content Structure

- `src/content/docs/index.mdx` - homepage
- `src/content/docs/downloads/index.mdx` - release + build info
- `src/content/docs/how-to-use/index.mdx` - usage instructions
- `src/content/docs/services/index.mdx` - service behavior + issue tracking
- `src/components/GitHubLivePanel.astro` - reusable live GitHub data component
