@AGENTS.md

# Hiveport Labs — Landing Site

## Project Overview

Corporate landing page for Hiveport Labs, a company building decentralized, zero-trust P2P networking infrastructure. This is a public-facing site — treat every change as production-visible.

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (PostCSS plugin, `@theme inline` in `globals.css`)
- **Linting:** ESLint 9 flat config with `eslint-config-next` (core-web-vitals + typescript)
- **Path aliases:** `@/*` → `./src/*`

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build — run this to verify changes compile
npm run lint     # ESLint check — run this before considering work complete
npm run start    # Serve production build locally
```

**Always run `npm run build` and `npm run lint` after making changes** to catch type errors and lint violations before they reach review. Fix all errors before marking work done.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout — metadata, global styles, html/body
│   ├── page.tsx          # Home page — assembles section components
│   └── globals.css       # Tailwind config, theme tokens, global styles
├── components/           # UI components (one component per file)
│   ├── HeroSection.tsx
│   ├── SignetSection.tsx
│   ├── PillarsSection.tsx
│   ├── PillarCard.tsx
│   └── Footer.tsx
└── hooks/                # Custom React hooks
    └── useCipherCycle.ts
public/
├── logo.png
└── signet.png
```

## Code Standards

### TypeScript

- Strict mode is enabled — do not use `any`. Use proper types or `unknown` with type narrowing.
- Prefer `interface` for object shapes, `type` for unions/intersections/mapped types.
- Export types alongside their components when consumers need them.
- Use `as const` for literal arrays and objects that should not be widened.

### React & Next.js

- Components are Server Components by default. Only add `"use client"` when the component uses browser APIs, hooks, or event handlers.
- One exported component per file. File name matches the export name (PascalCase).
- Use named exports, not default exports, for components. Pages and layouts use default exports per Next.js convention.
- Props interfaces are declared in the same file as the component, named `{ComponentName}Props`.
- Keep components focused — extract sub-components when a file exceeds ~150 lines.

### Styling

- Use Tailwind utility classes exclusively. Do not write custom CSS unless there is no Tailwind equivalent.
- Design tokens (colors, fonts) are defined in `globals.css` under `@theme inline`. Reference them via Tailwind classes (e.g., `text-orange`, `font-display`).
- Responsive breakpoints follow mobile-first: base → `md:` → `lg:` → `xl:`.
- Do not use arbitrary values (`[#hex]`) when a theme token exists.

### Brand & Design

- **Primary accent:** `orange` (#F7931A) — used for CTAs, highlighted text, brand emphasis.
- **Typography:** Inter font family for both body (`font-sans`) and display (`font-display`).
- **Tone:** Minimalist, high-contrast, corporate. Generous whitespace. No decorative clutter.
- The site must remain **accessible**: semantic HTML, sufficient color contrast, `aria-` attributes where needed, keyboard navigability.

### Code Quality

- No `console.log` in committed code. Use structured error handling.
- No commented-out code. Remove dead code rather than commenting it.
- No hardcoded strings for content that appears in multiple places — extract to a constant.
- Prefer composition over prop drilling. If data needs to flow more than 2 levels, reconsider the component tree.
- Keep bundle size small — this is a landing page. Do not add heavy dependencies without justification.

### Naming Conventions

| Entity        | Convention         | Example                  |
|---------------|--------------------|--------------------------|
| Components    | PascalCase         | `HeroSection.tsx`        |
| Hooks         | camelCase, `use-`  | `useCipherCycle.ts`      |
| CSS tokens    | kebab-case         | `--color-orange`         |
| Constants     | UPPER_SNAKE_CASE   | `WORDS`                  |
| Props types   | PascalCase + Props | `PillarCardProps`        |

### Git & Workflow

- Write clear, imperative commit messages: `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`.
- Keep commits atomic — one logical change per commit.
- Do not commit `.env` files, secrets, API keys, or build artifacts.

## Performance & SEO

- This is a landing page — **Core Web Vitals matter**. Minimize client-side JS.
- Use Next.js `<Image>` for raster images (auto-optimization, lazy loading, proper sizing).
- Metadata is defined in `layout.tsx`. Keep Open Graph and meta descriptions accurate when page content changes.
- Prefer static rendering. Avoid `"use client"` unless interactive behavior requires it.

## Security

- All external links must have `rel="noopener noreferrer"`.
- Do not interpolate user input into HTML without sanitization.
- Do not add third-party scripts without explicit approval.
- Keep dependencies minimal and up to date.
