# Agent Instructions

## Project overview

- This repository is a personal portfolio built with Nuxt 4, Vue 3, and TypeScript.
- `app/pages/` contains the home page and other page routes.
- `app/components/` contains portfolio sections and reusable cards.
- `app/layouts/` and `app/assets/` contain the shared layout and styles.
- `app/data/info.ts` contains profile details, work history, projects, and other portfolio content.
- `server/api/` contains API routes; `server/utils/` contains server-side helpers, including GitHub API integration.
- Shared TypeScript types live in `types/`.
- Use pnpm. The project requires Node.js 24.11.1 or newer.

## Working conventions

- Follow existing Vue, Nuxt, and TypeScript patterns in nearby files.
- Keep changes focused on the requested behavior and preserve the existing visual style.
- For portfolio content edits, update the relevant data in `app/data/info.ts` rather than duplicating it in components.
- Keep GitHub credentials server-side. For local development, copy `.env.example` to `.env` and set `NUXT_GITHUB_TOKEN`; never commit `.env` or expose the token in client code.
- Reuse existing components and project dependencies where practical.
- Use the existing ESLint configuration and project formatting conventions.
- Do not add dependencies unless they are needed for the requested change.

## Verification

- `pnpm dev` — start the development server on port 4000.
- After code changes, run the relevant checks: `pnpm lint`, `pnpm typecheck`, and `pnpm build`.
- For a focused change, run the checks most relevant to it; report any check you could not run.
