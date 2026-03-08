# CLAUDE.md

## Project

Static site at agent-dx.com about developer experience patterns for AI agents. Built with Next.js 15 + Nextra 4, static export to GitHub Pages.

## Commands

- `npm run dev` — local dev server (Turbopack)
- `npm run build` — static export to `out/`
- `npm start` — serve production build locally

## Structure

- `content/index.mdx` — all page content as MDX
- `components/landing.tsx` — custom React components (Hero, Contrast, PrincipleGrid, Section, Callout, CodePair, Diagram, Checklist)
- `mdx-components.tsx` — registers custom components for MDX (no imports needed in .mdx files)
- `app/layout.tsx` — root layout with nav and footer
- `app/globals.css` — all styles
- `app/[[...mdxPath]]/page.tsx` — Nextra catch-all route
- `public/CNAME` — custom domain config
- `.github/workflows/deploy.yml` — GitHub Pages deployment

## Conventions

- Content lives in MDX. Structural elements use custom components; prose is plain markdown.
- Styles are plain CSS with custom properties (no Tailwind, no CSS modules).
- Design tokens: `--text`, `--bg`, `--accent`, `--max-width`, `--max-width-wide`.
- Run text through the humanizer skill before publishing. Avoid AI writing patterns.
