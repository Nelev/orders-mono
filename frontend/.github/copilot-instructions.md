# Copilot instructions for orders-frontend

This repository is a Vite + React + TypeScript single-page app that uses MUI for UI, `zustand` for lightweight global state, and `axios` to call a backend API. Use these notes to make focused, safe code edits.

**Architecture & Big Picture**
- **Frontend type:** Vite React app (see package.json `dev`/`build` scripts).
- **Routing & pages:** Top-level pages live in src/pages (e.g. [src/pages/InventoryPage.tsx](src/pages/InventoryPage.tsx#L1)).
- **API layer:** All HTTP calls are in `src/api/*` (e.g. [src/api/orders.ts](src/api/orders.ts#L1), [src/api/products.ts](src/api/products.ts#L1)). Calls read `process.env.REACT_APP_API_URL` supplied by Vite's env handling in `vite.config.ts`.
- **Models:** Types/interfaces are in `src/model` (e.g. `IOrder`, `IProduct`, `IUser`), and should be updated when API shapes change.
- **Global state:** A tiny `zustand` store lives at [src/store.ts](src/store.ts#L1) (currently holds `user`).
- **UI libs & patterns:** MUI components and `@mui/x-data-grid` are used for tables/grids; styles are local CSS files placed alongside components (e.g. components/*/style.css).

**Key conventions & patterns**
- API helpers return typed Promises (e.g. `Promise<IOrder[]>`) and throw errors; callers expect to `await` them.
- Environment variables: Vite exposes env via `define: { 'process.env': env }` in `vite.config.ts`, so code reads `process.env.REACT_APP_API_URL`.
- Use the `src/model` interfaces for typing; prefer updating models before changing consumers.
- Component files are `.tsx`; small presentational CSS files sit next to components.
- Global state is minimal — prefer local `useState`/props unless cross-cutting state is needed; add to `src/store.ts` if it must be global.

**Developer workflows & commands**
- Install: `npm install`
- Dev server: `npm run dev` (Vite)
- Build: `npm run build` (runs `tsc -b && vite build`)
- Preview production bundle: `npm run preview`
- Lint: `npm run lint` (ESLint + TypeScript)
- Format: `npm run format` (Prettier). Husky is prepared (`prepare` script) and `lint-staged` is configured.

**Integration & runtime notes**
- Backend base URL is read from `process.env.REACT_APP_API_URL`. Ensure the environment contains this value when running locally (e.g., create a `.env` with `REACT_APP_API_URL=http://localhost:3000`).
- Some API calls include `withCredentials: true` (see [src/api/orders.ts](src/api/orders.ts#L1)) — the backend must allow credentials/CORS if cookies/auth are used.

**Examples / Quick references**
- Fetch orders: [src/api/orders.ts](src/api/orders.ts#L1) — uses `axios.get(${process.env.REACT_APP_API_URL}/api/orders, { withCredentials: true })`.
- Global user: [src/store.ts](src/store.ts#L1) — `useStore` with `user` and `setUser`.
- Vite env wiring: [vite.config.ts](vite.config.ts#L1) — env loaded with `loadEnv` and set on `process.env`.

**What to avoid / gotchas discovered**
- `getProducts` currently calls `/api/orders` in `src/api/products.ts` — double-check endpoints before changing data logic.
- `addProduct` uses `axios.post` incorrectly by placing payload under `body` inside the config instead of as the request body — follow existing API helper patterns when adding endpoints.

If any section is unclear or you want me to expand examples (e.g., common PR patterns, preferred commit messages, test scaffolding), tell me which area to deepen and I'll iterate.
# Copilot instructions — orders-frontend

This file contains concise, actionable guidance to help AI coding agents be productive in this repository.

- Project overview: Vite + React + TypeScript application (frontend only). UI uses MUI components; global state via `zustand` (`src/store.ts` and `src/model/state.ts`). API calls live in `src/api/*` and use `axios` with typed responses.
- Start & build: run `npm install` then `npm run dev` for development. `npm run build` runs `tsc -b` then `vite build`. See `package.json` scripts.
- Env & runtime: API base is read from the environment variable `REACT_APP_API_URL` (observed in `src/api/orders.ts` and `src/api/products.ts`). Calls sometimes use `withCredentials: true`.

- Key directories/files to inspect when making changes:
  - `src/pages/RootLayout.tsx` — app routing and top-level layout (uses `Outlet`).
  - `src/api/` — network layer (typed, promise-based). Prefer following existing patterns when adding API helpers.
  - `src/store.ts` and `src/model/state.ts` — central global state shape and `useStore` hook.
  - `src/components/*` — feature-grouped components, CSS files colocated with components (e.g., `components/product-card/style.css`).

- Conventions and observable patterns:
  - Components are function components using TypeScript `.tsx` files and MUI for layout/styling.
  - Styling: plain `.css` files colocated with components; no CSS modules or styled-components used in this codebase (except MUI styling usage).
  - API helpers return typed results (e.g., `Promise<IOrder[]>`). Keep axios usage consistent (headers, `withCredentials` when present).
  - Routes and navigation use `react-router-dom` v6 patterns (`useNavigate`, `Outlet`).

- Developer tooling and checks:
  - Linting: `npm run lint` (ESLint + TypeScript rules).
  - Formatting: `npm run format` uses Prettier. `husky` and `lint-staged` are configured in `package.json` for pre-commit hooks.

- Things an AI agent should watch for (observed quirks):
  - The codebase reads env vars via `process.env.REACT_APP_API_URL`, although Vite commonly uses `import.meta.env`; keep the existing pattern unless changing cross-cutting config.
  - Some API helpers show atypical usage (for example `addProduct` composes `axios.post` with a `body` property in the options object). Preserve existing behavior unless fixing in a focused change and adding tests.
  - Endpoints and paths may be inconsistent (e.g., `getProducts` calls `/api/orders`). When editing network code, verify endpoints against backend docs or runtime behavior.

- PR and changelist guidance for AI patches:
  - Keep changes small, focused, and well-typed. Running `npm run build` locally verifies the TypeScript project reference build step.
  - If touching API signatures or global state (`IState`), update `src/model/*` types and ensure all `useStore` selectors remain valid.
  - Respect existing component layout — Sidebar/nav is conditionally rendered in `RootLayout` when `user` is present.

- Quick file examples to reference:
  - `src/api/orders.ts` — axios usage and `withCredentials` example.
  - `src/store.ts` — `useStore` creation and `setUser` pattern.
  - `src/pages/RootLayout.tsx` — routing, navigation, and layout composition.

If anything here is unclear or you want deeper guidance (for example, expanding patterns into unit-test conventions or CI steps), tell me which area to expand and I'll update this file.

**CI / GitHub Actions**
- Minimal CI should run install, lint, and build. Use `node` >= 18 to match project tooling.
- Essential steps:
  - `npm ci` (or `npm install` if no lockfile)
  - `npm run lint` (fail fast on lint errors)
  - `npm run build` (runs `tsc -b && vite build`)
- Recommended caching: cache `~/.npm` and `node_modules` to speed builds.
- Example `.github/workflows/ci.yml` snippet:

```yaml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x]
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Lint
        run: npm run lint
      - name: Build
        run: npm run build

```

If you want I can create the `ci.yml` workflow file for you.
