# felipeguimaraesesilva.github.io

Personal portfolio and professional CV — statically generated with Next.js and deployed via GitHub Pages.

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.4 |
| Language | TypeScript | 5.9.3 |
| UI Library | Material UI (MUI) | 9.0.0 |
| Styling | MUI `sx` prop + Emotion | 11.x |
| Animations | Framer Motion | 12.38.0 |
| Font | Geist Sans / Geist Mono | via `next/font` |
| Runtime | React | 19.2.4 |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — ThemeRegistry + ContentProvider + metadata
│   └── page.tsx            # Entry point — composes all sections
├── components/
│   ├── Navbar.tsx          # Fixed AppBar with mobile Drawer
│   ├── Footer.tsx          # Minimal footer with social links
│   ├── ThemeRegistry.tsx   # MUI + Next.js App Router SSR bridge
│   ├── ui/
│   │   ├── Section.tsx     # Animated section wrapper + SectionHeading
│   │   └── SocialIcons.tsx # Custom GitHub / LinkedIn SVG icons
│   └── sections/
│       ├── AboutSection.tsx      # Hero with full-bleed photo + bio panel
│       ├── ExperienceSection.tsx # Staircase timeline layout
│       ├── SkillsSection.tsx     # Chip grid grouped by category
│       └── ContactSection.tsx    # LinkedIn + GitHub buttons
├── context/
│   └── ContentContext.tsx  # Fetches content.json + React Context + useContent() hook
├── data/
│   └── portfolio.ts        # TypeScript type definitions only (no data)
└── lib/
    └── theme.ts            # MUI dark theme (blue palette)

public/
├── content.json            # ← All page content lives here
└── images/                 # Background and profile photos
```

## Content Management

All text content is stored in **`public/content.json`** and loaded at runtime via a single `fetch()` call. No rebuild is required to update copy.

```json
{
  "personal": { "greeting", "name", "role", "email", "github", "linkedin", "competencies" },
  "band":     { "name", "genre", "description", "since", "instagram" },
  "skillCategories": [{ "category", "items": [] }],
  "experiences":     [{ "period", "company", "role", "description" }],
  "ui": {
    "logo": "FGS",
    "nav": [{ "href", "label" }],
    "sections": { "beyondTheCode", "experience", "skills", "contact" },
    "meta": { "title", "description" }
  }
}
```

To update the portfolio content, **edit only `public/content.json`** — no component changes needed.

> **Note:** `src/app/layout.tsx` metadata (used for SEO/OG tags) must be kept in sync with `ui.meta` in `content.json` manually, as Next.js metadata is resolved at build time.

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export
npm run lint      # ESLint
```

## Architecture Notes

- **Static generation** — the page is fully pre-rendered as static HTML (`○` route). `content.json` is fetched client-side after hydration.
- **MUI + App Router** — requires `AppRouterCacheProvider` from `@mui/material-nextjs` to prevent style duplication. All client components that use MUI are wrapped with `"use client"`.
- **Hydration safety** — components using `useContent()` render with `null` content on the server and populate after the JSON fetch. No SSR mismatch because all content-dependent components are Client Components.
- **Tooltip + hydration** — any component using MUI `<Tooltip>` must be a Client Component (`"use client"`) to avoid a `cloneElement` hydration mismatch.
- **Version pinning** — all dependencies use exact versions (no `^` or `~`) to prevent unexpected updates.

## Security Headers

Configured in `next.config.ts` for all routes:

| Header | Value |
|---|---|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |

## Deployment

Deployed automatically to GitHub Pages via the repository name `felipeguimaraesesilva.github.io`.
