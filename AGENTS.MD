# Project Context

## Overview
This is a Next.js web application.
**Goal:**  "A platform for athletes to track performance and manage training schedules."

## Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/UI (inferred from standard stack), Radix UI
- **State Management:** React Context / Server State (Default)
- **Database/ORM:** PostgreSQL (via Prisma)
- **Auth:**  Clerk
- **Testing:** Vitest (Unit), Playwright (E2E)
- **Deployment:** Vercel

## Architecture & Directory Structure
- `src/app`: Application routes and pages.
- `src/components`: Reusable UI components.
    - `/ui`: Primitive components (likely Shadcn/UI).
- `src/lib`: Utility functions and Prisma client instance (`db.ts` or `prisma.ts`).
- `prisma`: Database schema and migrations.
- `tests`: Test suites (Vitest/Playwright).
- `public`: Static assets.

---

# Coding Guidelines

## General Rules
1. **Functional Components:** Use React Functional Components with TypeScript interfaces for props.
2. **TypeScript:** Strict mode is on. Avoid `any`. Use Zod for validation where possible.
3. **Naming:**
    - Components: PascalCase (e.g., `UserCard`).
    - Files: kebab-case (e.g., `user-card.tsx`).
    - Functions/Variables: camelCase.
4. **Exports:** Use named exports.

## Next.js Specifics (App Router)
1. **Server Components:** Default to Server Components. Use `use client` only for interactivity (hooks, event listeners).
2. **Data Fetching:** Fetch data directly in Server Components using Prisma.
   - Example: `const users = await prisma.user.findMany();`
3. **Server Actions:** Use Server Actions (`'use server'`) in `src/app/_actions` or inside component files for form submissions.
4. **Images:** Use `next/image`.

## Database (Prisma)
1. **Schema Changes:** When modifying `prisma/schema.prisma`, always run `npx prisma migrate dev` to update the client.
2. **Access:** Instantiate the Prisma client strictly in `src/lib/prisma.ts` (or similar) to prevent connection exhaustion in dev.

## Styling (Tailwind CSS)
1. Use utility classes.
2. Use `cn()` utility for conditional classes.
3. Keep layout responsive (mobile-first approach).

## Testing
1. **Unit:** Place unit tests next to the file being tested or in `tests/unit`. Use `vitest`.
2. **E2E:** Place end-to-end tests in `tests/e2e` using `playwright`.

---

# Tone & Behavior
- **Concise:** Code solutions should be direct.
- **Modern:** Use the latest Next.js 15 features (e.g., `await params` in dynamic routes).
- **Robust:** Handle loading and error states explicitly using `loading.tsx` and `error.tsx`.

## Placeholder Index (Find/Replace)
| Placeholder token | Exact file path(s) | Usage context |
| --- | --- | --- |
| `[Insert Date]` | `src/app/privacy/page.tsx` | Privacy Policy effective date |
| `[Insert Date]` | `src/app/terms/page.tsx` | Terms of Service effective date |
| `[Insert Date]` | `src/app/cookies/page.tsx` | Cookie Policy last-updated date |
| `[Insert Contact Email]` | `src/app/privacy/page.tsx` | Privacy rights/contact requests |
| `[Insert Contact Email]` | `src/app/terms/page.tsx` | Terms questions/contact |
| `[Insert Contact Email]` | `src/app/cookies/page.tsx` | Cookie policy contact |
| `[Insert Contact Email]` | `src/app/contact/page.tsx` | General support + legal/privacy contact |
| `[Insert Mailing Address]` | `src/app/privacy/page.tsx` | Privacy mailing address |
| `[Insert Mailing Address]` | `src/app/contact/page.tsx` | Legal/privacy mailing address |
| `[Insert Jurisdiction]` | `src/app/terms/page.tsx` | Governing law placeholder |
