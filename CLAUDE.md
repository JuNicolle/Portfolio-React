# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (exposed on all network interfaces via --host)
npm run build     # Production build to dist/
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

There are no tests in this project.

## Architecture

This is a personal portfolio SPA built with React 18 + Vite + React Bootstrap.

**Routing** (`src/App.jsx`): React Router v6 with `BrowserRouter`. Four routes:
- `/` → `HomePage`
- `/SideProjects` → `SideProjectsPage`
- `/CVPage` → `CVPage`
- `/contact` → `ContactPage`

**Page structure**: Each page composes `HomeText` + `NavbarComponent` in a `<header>`, then its own content below. The navbar uses `react-router-dom`'s `<Link>` (not `<a>` tags).

**Components** (`src/Components/`):
- `NavbarComponent` — navigation bar with links to all routes
- `HomeText` — header text used on every page
- `DynamicName` — animated gradient text "JULIEN NICOLLE" that reacts to mouse position via a `mousemove` event listener
- `TechnoCard` — reusable card for displaying a technology

**Styling**: All styles in `src/App.css`. Bootstrap 5 is imported globally in `App.jsx`. Pages use a mix of Bootstrap classes and custom CSS classes.

**Assets** (`src/assets/`): Images (PNG, JPG, SVG) imported directly in JSX files.

**Note**: `ContactPage.jsx` mixes JSX (`className`) and HTML attributes (`class`) — this is a known inconsistency.
