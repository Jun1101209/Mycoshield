# MycoShield

Marketing site for **MycoShield** — soil functionality restoration after climate
extreme events, powered by data-driven Arbuscular Mycorrhizal Fungi (AMF) and smart
bio-materials.

A clean, enterprise-grade, science-driven redesign built as a statically-exported
Next.js app.

## Stack

- **Next.js 15** (App Router, React 19) with `output: 'export'` (static site)
- **Tailwind CSS** design system (`tailwind.config.ts`)
- **Framer Motion** for subtle scroll reveals & count-ups
- **Lucide React** icons
- Fonts: **Plus Jakarta Sans** + **JetBrains Mono** via `next/font`

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build (static export)

```bash
npm run build      # outputs to ./out
```

For the GitHub Pages project site (served under `/mycoshield`), build with the base
path set — this is what the deploy workflow does:

```bash
PAGES_BASE_PATH=/mycoshield npm run build
```

## Structure

```
app/                 # routes (home, /privacy, /terms), layout, global CSS
components/ui/        # reusable primitives (Button, Card, Tabs, Toggle, ...)
components/sections/  # page modules (Hero, Metrics, PelletShowcase, DataLayer, ...)
lib/                 # cn() classname helper, asset() base-path helper
public/images/        # field photography slots — see public/images/README.md
```

## Images

Drop field photos into `public/images/` using the filenames documented in
[`public/images/README.md`](public/images/README.md). Slots have gradient
placeholders and locked aspect ratios, so the layout never shifts whether or not
the files are present.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static
export and publishes it to GitHub Pages. Enable Pages (Settings → Pages → Source:
GitHub Actions) once.
