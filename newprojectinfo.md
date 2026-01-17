Directory structure:
└── new-athelete-proj-master/
    ├── README.md
    ├── capacitor.config.ts
    ├── CLAUDE.md
    ├── components.json
    ├── eslint.config.mjs
    ├── new.md
    ├── next.config.ts
    ├── package.json
    ├── playwright.config.ts
    ├── postcss.config.mjs
    ├── prisma.config.ts
    ├── tsconfig.json
    ├── vitest.config.ts
    ├── docs/
    │   └── TESTING_STRATEGY.md
    ├── ios/
    │   ├── debug.xcconfig
    │   └── App/
    │       ├── App/
    │       │   ├── AppDelegate.swift
    │       │   ├── Info.plist
    │       │   ├── Assets.xcassets/
    │       │   │   ├── Contents.json
    │       │   │   ├── AppIcon.appiconset/
    │       │   │   │   └── Contents.json
    │       │   │   └── Splash.imageset/
    │       │   │       └── Contents.json
    │       │   └── Base.lproj/
    │       │       ├── LaunchScreen.storyboard
    │       │       └── Main.storyboard
    │       └── CapApp-SPM/
    │           ├── README.md
    │           ├── Package.swift
    │           └── Sources/
    │               └── CapApp-SPM/
    │                   └── CapApp-SPM.swift
    ├── prisma/
    │   └── schema.prisma
    ├── scripts/
    │   └── generate-icons.js
    ├── src/
    │   ├── app/
    │   │   ├── apple-icon.tsx
    │   │   ├── globals.css
    │   │   ├── icon.tsx
    │   │   ├── layout.tsx
    │   │   ├── manifest.ts
    │   │   ├── page.tsx
    │   │   ├── (auth)/
    │   │   │   ├── login/
    │   │   │   │   └── page.tsx
    │   │   │   └── register/
    │   │   │       └── page.tsx
    │   │   ├── (dashboard)/
    │   │   │   ├── layout.tsx
    │   │   │   ├── dashboard/
    │   │   │   │   └── page.tsx
    │   │   │   └── profile/
    │   │   │       ├── page.tsx
    │   │   │       └── edit/
    │   │   │           └── page.tsx
    │   │   ├── api/
    │   │   │   ├── athletes/
    │   │   │   │   ├── route.ts
    │   │   │   │   ├── [id]/
    │   │   │   │   │   └── route.ts
    │   │   │   │   ├── me/
    │   │   │   │   │   └── route.ts
    │   │   │   │   └── search/
    │   │   │   │       └── route.ts
    │   │   │   ├── auth/
    │   │   │   │   ├── [...nextauth]/
    │   │   │   │   │   └── route.ts
    │   │   │   │   ├── register/
    │   │   │   │   │   └── route.ts
    │   │   │   │   ├── resend-verification/
    │   │   │   │   │   └── route.ts
    │   │   │   │   └── verify/
    │   │   │   │       └── route.ts
    │   │   │   └── ratings/
    │   │   │       └── [athleteId]/
    │   │   │           ├── route.ts
    │   │   │           ├── breakdown/
    │   │   │           │   └── route.ts
    │   │   │           └── calculate/
    │   │   │               └── route.ts
    │   │   ├── athletes/
    │   │   │   ├── page.tsx
    │   │   │   └── [id]/
    │   │   │       └── page.tsx
    │   │   ├── events/
    │   │   │   ├── page.tsx
    │   │   │   └── camcamp/
    │   │   │       ├── page.tsx
    │   │   │       ├── finalists/
    │   │   │       │   └── page.tsx
    │   │   │       ├── leaderboard/
    │   │   │       │   └── page.tsx
    │   │   │       ├── nominate/
    │   │   │       │   └── page.tsx
    │   │   │       └── vote/
    │   │   │           └── page.tsx
    │   │   ├── marketplace/
    │   │   │   └── page.tsx
    │   │   ├── rankings/
    │   │   │   └── page.tsx
    │   │   └── tournament/
    │   │       └── page.tsx
    │   ├── components/
    │   │   ├── providers.tsx
    │   │   ├── athletes/
    │   │   │   ├── athlete-card.tsx
    │   │   │   ├── rating-breakdown.tsx
    │   │   │   ├── star-rating.tsx
    │   │   │   └── top-rankings.tsx
    │   │   ├── auth/
    │   │   │   ├── login-form.tsx
    │   │   │   └── register-form.tsx
    │   │   ├── layout/
    │   │   │   ├── floating-home.tsx
    │   │   │   └── navbar.tsx
    │   │   ├── marketplace/
    │   │   │   ├── index.ts
    │   │   │   └── nil-marketplace.tsx
    │   │   ├── tournament/
    │   │   │   ├── index.ts
    │   │   │   ├── match-card.tsx
    │   │   │   └── tournament-match-drawer.tsx
    │   │   └── ui/
    │   │       ├── avatar.tsx
    │   │       ├── badge.tsx
    │   │       ├── button.tsx
    │   │       ├── card.tsx
    │   │       ├── dropdown-menu.tsx
    │   │       ├── form.tsx
    │   │       ├── input.tsx
    │   │       ├── label.tsx
    │   │       ├── progress.tsx
    │   │       ├── select.tsx
    │   │       ├── separator.tsx
    │   │       ├── sheet.tsx
    │   │       ├── sonner.tsx
    │   │       ├── switch.tsx
    │   │       └── textarea.tsx
    │   ├── lib/
    │   │   ├── auth.ts
    │   │   ├── email.ts
    │   │   ├── prisma.ts
    │   │   ├── rate-limit.ts
    │   │   ├── utils.ts
    │   │   └── validations/
    │   │       ├── athlete.ts
    │   │       └── auth.ts
    │   ├── services/
    │   │   └── rating.service.ts
    │   └── types/
    │       └── tournament.ts
    ├── tests/
    │   ├── e2e/
    │   │   └── marketplace.spec.ts
    │   ├── integration/
    │   │   └── athletes-api.test.ts
    │   ├── mocks/
    │   │   ├── handlers.ts
    │   │   └── server.ts
    │   ├── setup/
    │   │   ├── setup.ts
    │   │   └── test-utils.tsx
    │   └── unit/
    │       └── nil-marketplace.test.tsx
    └── .claude/
        └── settings.local.json
 
================================================
FILE: README.md
================================================
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
 
## Getting Started
 
First, run the development server:
 
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
 
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
 
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
 
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
 
## Learn More
 
To learn more about Next.js, take a look at the following resources:
 
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
 
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
 
## Deploy on Vercel
 
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
 
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
 
 
 
================================================
FILE: capacitor.config.ts
================================================
import type { CapacitorConfig } from '@capacitor/cli';
 
const config: CapacitorConfig = {
  appId: 'com.overall99.camcamp',
  appName: 'Overall 99',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    // Use live reload during development
    url: 'http://192.168.1.70:3000',
    cleartext: true
  },
  ios: {
    scheme: 'App'
  }
};
 
export default config;
 
 
 
================================================
FILE: CLAUDE.md
================================================
# Project Overview
 
<system_context>
This project is a [brief, 1-2 sentence description of your app, e.g., a real-time collaborative whiteboard application]. Its primary purpose is to [explain the core function or value proposition, e.g., allow remote teams to brainstorm visually].
 
The application is built using a [e.g., Next.js, React Native, iOS Swift] frontend and a [e.g., Node.js, Python Flask] backend, connecting to a [e.g., PostgreSQL, MongoDB] database. It incorporates machine learning models for [e.g., content filtering, diagram recognition].
</system_context>
 
# Critical Notes & Guardrails
 
<critical_notes>
*   **NEVER modify the core ML model training pipelines (`/src/model/train.py`, `/src/model/eval.py`) without explicit user permission and a detailed plan review.** These are highly sensitive.
*   **ALWAYS use the established testing suite (`/tests`) to verify changes.** Run unit and integration tests before considering a task complete.
*   **AVOID negative constraints alone.** Instead of "Never use X", say "Use Y instead of X for all networking operations".
*   **DO NOT make assumptions about external APIs.** If the documentation is not present in the context, request clarification or the necessary file paths.
</critical_notes>
 
# Paved Path & Workflow
 
<paved_path>
*   **Feature Development:** For new features, always start in Plan Mode (`Shift+Tab` twice in Cursor/Claude Code) to create a comprehensive plan before writing code.
*   **Tech Stack:** We use `bun` for package management and script execution, not `npm` or `yarn`.
*   **Code Style:** Adhere strictly to the project's Prettier and ESLint configurations.
*   **Verification Loops:** Utilize the provided testing and staging tools to check your work.
    *   To run all tests: `bun test`
    *   To start the local development server: `bun run dev`
</paved_path>
 
# File Map & Architecture
 
<file_map>
*   `/src/`: Main source code directory.
*   `/src/components/`: Reusable UI components for the [e.g., React, Vue] frontend.
*   `/src/utils/`: Shared utility functions.
*   `/src/model/`: Contains pre-trained models, inference logic, and ML-specific code.
*   `/src/api/`: Backend API endpoints and business logic.
*   `/tests/`: All testing files (unit, integration).
*   `/docs/`: Project documentation and supplementary `CLAUDE.md` files for specific features.
 
For advanced troubleshooting or specific feature details, refer to the relevant documentation in `/docs/` (e.g., `docs/api_auth.md`).
</file_map>
 
# Common Tasks & Examples
 
<common_tasks>
*   **Task:** Add a new API endpoint.
    *   **Workflow:**
        1. Plan the endpoint details (route, inputs, outputs).
        2. Implement the handler in `/src/api/`.
        3. Add unit tests in `/tests/api/`.
        4. Run `bun test` to verify.
*   **Task:** Update a UI component.
    *   **Workflow:**
        1. Locate the component in `/src/components/`.
        2. Make changes and visually verify with the local dev server (`bun run dev`).
        3. Ensure no existing tests break.
</common_tasks>
 
 
 
================================================
FILE: components.json
================================================
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
 
 
 
================================================
FILE: eslint.config.mjs
================================================
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
 
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
 
export default eslintConfig;
 
 
 
================================================
FILE: new.md
================================================
[Binary file]
 
 
================================================
FILE: next.config.ts
================================================
import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.70'],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};
 
export default nextConfig;
 
 
 
================================================
FILE: package.json
================================================
{
  "name": "overall-99",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "type-check": "tsc --noEmit",
    "test": "vitest",
    "test:unit": "vitest run tests/unit",
    "test:integration": "vitest run tests/integration",
    "test:coverage": "vitest run --coverage",
    "test:watch": "vitest watch",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:debug": "playwright test --debug",
    "test:all": "npm run test:unit && npm run test:integration && npm run test:e2e"
  },
  "dependencies": {
    "@auth/prisma-adapter": "^2.11.1",
    "@capacitor/cli": "^8.0.0",
    "@capacitor/core": "^8.0.0",
    "@capacitor/ios": "^8.0.0",
    "@hookform/resolvers": "^5.2.2",
    "@prisma/adapter-pg": "^7.2.0",
    "@prisma/client": "^7.2.0",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "bcryptjs": "^3.0.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.562.0",
    "next": "16.1.1",
    "next-auth": "^4.24.13",
    "next-themes": "^0.4.6",
    "pg": "^8.16.3",
    "prisma": "^7.2.0",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.71.0",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.4.0",
    "zod": "^4.3.5"
  },
  "devDependencies": {
    "@playwright/test": "^1.49.0",
    "@tailwindcss/postcss": "^4",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@testing-library/user-event": "^14.5.2",
    "@types/bcryptjs": "^2.4.6",
    "@types/node": "^20",
    "@types/pg": "^8.16.0",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@vitejs/plugin-react": "^4.3.4",
    "@vitest/coverage-v8": "^2.1.8",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "jsdom": "^25.0.1",
    "msw": "^2.7.0",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.4.0",
    "typescript": "^5",
    "vitest": "^2.1.8"
  }
}
 
 
 
================================================
FILE: playwright.config.ts
================================================
import { defineConfig, devices } from '@playwright/test'
 
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
    process.env.CI ? ['github'] : ['list'],
  ],
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
})
 
 
 
================================================
FILE: postcss.config.mjs
================================================
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
 
export default config;
 
 
 
================================================
FILE: prisma.config.ts
================================================
// This file was generated by Prisma, and assumes you have installed the following:
// npm install --save-dev prisma dotenv
import "dotenv/config";
import { defineConfig } from "prisma/config";
 
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
 
 
 
================================================
FILE: tsconfig.json
================================================
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules", "tests"]
}
 
 
 
================================================
FILE: vitest.config.ts
================================================
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup/setup.ts'],
    include: [
      'src/**/*.{test,spec}.{ts,tsx}',
      'tests/unit/**/*.{test,spec}.{ts,tsx}',
      'tests/integration/**/*.{test,spec}.{ts,tsx}',
    ],
    exclude: [
      'node_modules',
      'tests/e2e/**/*',
      '.next',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/types/**',
      ],
      thresholds: {
        statements: 70,
        branches: 70,
        functions: 70,
        lines: 70,
      },
    },
    testTimeout: 10000,
    hookTimeout: 10000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
 
 
 
================================================
FILE: docs/TESTING_STRATEGY.md
================================================
# Next.js Testing Strategy & Implementation Guide
 
## 1. Testing Pyramid for Next.js
 
```
        /\
       /  \      E2E Tests (10%)
      /----\     - Critical user journeys
     /      \    - Auth flows, checkout, forms
    /--------\
   /          \  Integration Tests (30%)
  /   Server   \ - API routes, server actions
 /    Actions   \- Database operations
/----------------\
        ||        Unit Tests (60%)
        ||        - Components, hooks, utilities
        ||        - Pure functions, validators
```
 
### What to Test at Each Level
 
| Level | Test | Don't Test |
|-------|------|------------|
| **Unit** | Utils, hooks, pure components, validators, formatters | Third-party libraries, framework internals |
| **Integration** | API routes, server actions, DB queries, auth logic | UI rendering (use unit tests) |
| **E2E** | Critical paths, multi-page flows, real user scenarios | Every edge case (use unit tests) |
 
### Next.js-Specific Pitfalls
 
1. **Server/Client Boundary**: Test Server Components separately from Client Components
2. **Async Rendering**: Use proper async utilities (`waitFor`, `findBy*`)
3. **Streaming**: E2E tests handle streaming naturally; unit tests need mocking
 
---
 
## 2. Recommended Tooling
 
| Purpose | Tool | Why |
|---------|------|-----|
| Unit/Component | **Vitest** + React Testing Library | Fast, ESM-native, great DX |
| Integration | **Vitest** + MSW | Mock API/fetch without changing code |
| E2E | **Playwright** | Fast, reliable, native async |
| Mocking | **MSW** (Mock Service Worker) | Works in Node and browser |
| Coverage | **Vitest Coverage** (v8) | Built-in, fast |
| Types | **TypeScript** + `tsc --noEmit` | Catch errors before runtime |
 
---
 
## 3. Project Setup
 
### Folder Structure
 
```
src/
├── app/
│   ├── api/
│   │   └── athletes/
│   │       └── route.ts
│   └── page.tsx
├── components/
│   └── athletes/
│       ├── athlete-card.tsx
│       └── __tests__/
│           └── athlete-card.test.tsx
├── lib/
│   ├── utils.ts
│   └── __tests__/
│       └── utils.test.ts
├── services/
│   └── rating.service.ts
└── __tests__/
    └── integration/
        └── api-athletes.test.ts
 
tests/
├── e2e/
│   ├── auth.spec.ts
│   ├── rankings.spec.ts
│   └── fixtures/
│       └── test-data.ts
├── setup/
│   ├── setup.ts
│   └── test-utils.tsx
└── mocks/
    ├── handlers.ts
    └── server.ts
 
vitest.config.ts
playwright.config.ts
```
 
 
 
================================================
FILE: ios/debug.xcconfig
================================================
CAPACITOR_DEBUG = true
 
 
 
================================================
FILE: ios/App/App/AppDelegate.swift
================================================
import UIKit
import Capacitor
 
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
 
    var window: UIWindow?
 
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        return true
    }
 
    func applicationWillResignActive(_ application: UIApplication) {
        // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
        // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
    }
 
    func applicationDidEnterBackground(_ application: UIApplication) {
        // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
        // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    }
 
    func applicationWillEnterForeground(_ application: UIApplication) {
        // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
    }
 
    func applicationDidBecomeActive(_ application: UIApplication) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    }
 
    func applicationWillTerminate(_ application: UIApplication) {
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    }
 
    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        // Called when the app was launched with a url. Feel free to add additional processing here,
        // but if you want the App API to support tracking app url opens, make sure to keep this call
        return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
    }
 
    func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
        // Called when the app was launched with an activity, including Universal Links.
        // Feel free to add additional processing here, but if you want the App API to support
        // tracking app url opens, make sure to keep this call
        return ApplicationDelegateProxy.shared.application(application, continue: userActivity, restorationHandler: restorationHandler)
    }
 
}
 
 
 
================================================
FILE: ios/App/App/Info.plist
================================================
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CAPACITOR_DEBUG</key>
	<string>$(CAPACITOR_DEBUG)</string>
	<key>CFBundleDevelopmentRegion</key>
	<string>en</string>
	<key>CFBundleDisplayName</key>
        <string>Overall 99</string>
	<key>CFBundleExecutable</key>
	<string>$(EXECUTABLE_NAME)</string>
	<key>CFBundleIdentifier</key>
	<string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
	<key>CFBundleInfoDictionaryVersion</key>
	<string>6.0</string>
	<key>CFBundleName</key>
	<string>$(PRODUCT_NAME)</string>
	<key>CFBundlePackageType</key>
	<string>APPL</string>
	<key>CFBundleShortVersionString</key>
	<string>$(MARKETING_VERSION)</string>
	<key>CFBundleVersion</key>
	<string>$(CURRENT_PROJECT_VERSION)</string>
	<key>LSRequiresIPhoneOS</key>
	<true/>
	<key>UILaunchStoryboardName</key>
	<string>LaunchScreen</string>
	<key>UIMainStoryboardFile</key>
	<string>Main</string>
	<key>UIRequiredDeviceCapabilities</key>
	<array>
		<string>armv7</string>
	</array>
	<key>UISupportedInterfaceOrientations</key>
	<array>
		<string>UIInterfaceOrientationPortrait</string>
		<string>UIInterfaceOrientationLandscapeLeft</string>
		<string>UIInterfaceOrientationLandscapeRight</string>
	</array>
	<key>UISupportedInterfaceOrientations~ipad</key>
	<array>
		<string>UIInterfaceOrientationPortrait</string>
		<string>UIInterfaceOrientationPortraitUpsideDown</string>
		<string>UIInterfaceOrientationLandscapeLeft</string>
		<string>UIInterfaceOrientationLandscapeRight</string>
	</array>
	<key>UIViewControllerBasedStatusBarAppearance</key>
	<true/>
</dict>
</plist>
 
 
 
================================================
FILE: ios/App/App/Assets.xcassets/Contents.json
================================================
{
  "info" : {
    "version" : 1,
    "author" : "xcode"
  }
}
 
 
================================================
FILE: ios/App/App/Assets.xcassets/AppIcon.appiconset/Contents.json
================================================
{
  "images" : [
    {
      "filename" : "AppIcon-512@2x.png",
      "idiom" : "universal",
      "platform" : "ios",
      "size" : "1024x1024"
    }
  ],
  "info" : {
    "author" : "xcode",
    "version" : 1
  }
}
 
 
 
================================================
FILE: ios/App/App/Assets.xcassets/Splash.imageset/Contents.json
================================================
{
  "images" : [
    {
      "idiom" : "universal",
      "filename" : "splash-2732x2732-2.png",
      "scale" : "1x"
    },
    {
      "idiom" : "universal",
      "filename" : "splash-2732x2732-1.png",
      "scale" : "2x"
    },
    {
      "idiom" : "universal",
      "filename" : "splash-2732x2732.png",
      "scale" : "3x"
    }
  ],
  "info" : {
    "version" : 1,
    "author" : "xcode"
  }
}
 
 
================================================
FILE: ios/App/App/Base.lproj/LaunchScreen.storyboard
================================================
<?xml version="1.0" encoding="UTF-8"?>
<document type="com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB" version="3.0" toolsVersion="17132" targetRuntime="iOS.CocoaTouch" propertyAccessControl="none" useAutolayout="YES" launchScreen="YES" useTraitCollections="YES" useSafeAreas="YES" colorMatched="YES" initialViewController="01J-lp-oVM">
    <device id="retina4_7" orientation="portrait" appearance="light"/>
    <dependencies>
        <deployment identifier="iOS"/>
        <plugIn identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin" version="17105"/>
        <capability name="System colors in document resources" minToolsVersion="11.0"/>
        <capability name="documents saved in the Xcode 8 format" minToolsVersion="8.0"/>
    </dependencies>
    <scenes>
        <!--View Controller-->
        <scene sceneID="EHf-IW-A2E">
            <objects>
                <viewController id="01J-lp-oVM" sceneMemberID="viewController">
                    <imageView key="view" userInteractionEnabled="NO" contentMode="scaleAspectFill" horizontalHuggingPriority="251" verticalHuggingPriority="251" image="Splash" id="snD-IY-ifK">
                        <rect key="frame" x="0.0" y="0.0" width="375" height="667"/>
                        <autoresizingMask key="autoresizingMask"/>
                        <color key="backgroundColor" systemColor="systemBackgroundColor"/>
                    </imageView>
                </viewController>
                <placeholder placeholderIdentifier="IBFirstResponder" id="iYj-Kq-Ea1" userLabel="First Responder" sceneMemberID="firstResponder"/>
            </objects>
            <point key="canvasLocation" x="53" y="375"/>
        </scene>
    </scenes>
    <resources>
        <image name="Splash" width="1366" height="1366"/>
        <systemColor name="systemBackgroundColor">
            <color white="1" alpha="1" colorSpace="custom" customColorSpace="genericGamma22GrayColorSpace"/>
        </systemColor>
    </resources>
</document>
 
 
 
================================================
FILE: ios/App/App/Base.lproj/Main.storyboard
================================================
<?xml version="1.0" encoding="UTF-8"?>
<document type="com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB" version="3.0" toolsVersion="14111" targetRuntime="iOS.CocoaTouch" propertyAccessControl="none" useAutolayout="YES" useTraitCollections="YES" colorMatched="YES" initialViewController="BYZ-38-t0r">
    <device id="retina4_7" orientation="portrait">
        <adaptation id="fullscreen"/>
    </device>
    <dependencies>
        <deployment identifier="iOS"/>
        <plugIn identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin" version="14088"/>
    </dependencies>
    <scenes>
        <!--Bridge View Controller-->
        <scene sceneID="tne-QT-ifu">
            <objects>
                <viewController id="BYZ-38-t0r" customClass="CAPBridgeViewController" customModule="Capacitor" sceneMemberID="viewController"/>
                <placeholder placeholderIdentifier="IBFirstResponder" id="dkx-z0-nzr" sceneMemberID="firstResponder"/>
            </objects>
        </scene>
    </scenes>
</document>
 
 
 
================================================
FILE: ios/App/CapApp-SPM/README.md
================================================
# CapApp-SPM
 
This SPM is used to host SPM dependencies for you Capacitor project
 
Do not modify the contents of it or there may be unintended consequences.
 
 
 
================================================
FILE: ios/App/CapApp-SPM/Package.swift
================================================
// swift-tools-version: 5.9
import PackageDescription
 
// DO NOT MODIFY THIS FILE - managed by Capacitor CLI commands
let package = Package(
    name: "CapApp-SPM",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "CapApp-SPM",
            targets: ["CapApp-SPM"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", exact: "8.0.0")
    ],
    targets: [
        .target(
            name: "CapApp-SPM",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ]
        )
    ]
)
 
 
 
================================================
FILE: ios/App/CapApp-SPM/Sources/CapApp-SPM/CapApp-SPM.swift
================================================
public let isCapacitorApp = true
 
 
 
================================================
FILE: prisma/schema.prisma
================================================
// Prisma schema for Athlete Recruiting & NIL Platform
 
generator client {
  provider = "prisma-client-js"
}
 
datasource db {
  provider = "postgresql"
}
 
enum UserRole {
  ATHLETE
  COACH
  BRAND
  ADMIN
}
 
model User {
  id                   String    @id @default(cuid())
  email                String    @unique
  password             String
  role                 UserRole  @default(ATHLETE)
  firstName            String?
  lastName             String?
  emailVerified        DateTime?
  forgotPasswordToken  String?
  forgotPasswordExpiry DateTime?
  createdAt            DateTime  @default(now())
  updatedAt            DateTime  @updatedAt
 
  athlete  Athlete?
  accounts Account[]
  sessions Session[]
}
 
model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?
 
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
 
  @@unique([provider, providerAccountId])
}
 
model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}
 
model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime
 
  @@unique([identifier, token])
}
 
model Athlete {
  id        String @id @default(cuid())
  userId    String @unique
 
  // Profile Information
  firstName         String
  lastName          String
  dateOfBirth       DateTime?
  bio               String?   @db.Text
  profilePictureUrl String?   @db.Text
  hometown          String?
  state             String?
  highSchool        String?
  college           String?
  graduationYear    Int?
 
  // Sports Information
  primarySport String
  positions    String[] @default([])
  heightInches Int?
  weight       Int?
 
  // Contact/Social
  phoneNumber      String?
  socialMediaLinks String[] @default([])
 
  // Rating Components (0-100 scale)
  performanceScore Decimal @default(0) @db.Decimal(5, 2)
  physicalScore    Decimal @default(0) @db.Decimal(5, 2)
  academicScore    Decimal @default(0) @db.Decimal(5, 2)
  socialScore      Decimal @default(0) @db.Decimal(5, 2)
  evaluationScore  Decimal @default(0) @db.Decimal(5, 2)
 
  // Calculated Star Rating (1-5)
  starRating     Decimal @default(1) @db.Decimal(2, 1)
  compositeScore Decimal @default(0) @db.Decimal(5, 2)
 
  // Metadata
  isPublic  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
 
  user             User              @relation(fields: [userId], references: [id], onDelete: Cascade)
  performanceStats PerformanceStat[]
  videos           Video[]
 
  @@index([primarySport])
  @@index([starRating])
  @@index([graduationYear])
  @@index([state])
}
 
model PerformanceStat {
  id           String    @id @default(cuid())
  athleteId    String
  statName     String
  statValue    String
  unit         String?
  recordedDate DateTime?
  eventName    String?
  createdAt    DateTime  @default(now())
 
  athlete Athlete @relation(fields: [athleteId], references: [id], onDelete: Cascade)
 
  @@index([athleteId])
}
 
model Video {
  id          String   @id @default(cuid())
  athleteId   String
  videoUrl    String   @db.Text
  title       String?
  description String?  @db.Text
  videoType   String?
  createdAt   DateTime @default(now())
 
  athlete Athlete @relation(fields: [athleteId], references: [id], onDelete: Cascade)
 
  @@index([athleteId])
}
 
 
 
================================================
FILE: scripts/generate-icons.js
================================================
// Simple script to generate placeholder PWA icons
// Run with: node scripts/generate-icons.js
 
const fs = require('fs');
const path = require('path');
 
// Minimal PNG generator (creates a solid blue square)
function createMinimalPNG(size) {
  // PNG signature
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
 
  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(size, 0);  // width
  ihdrData.writeUInt32BE(size, 4);  // height
  ihdrData.writeUInt8(8, 8);        // bit depth
  ihdrData.writeUInt8(2, 9);        // color type (RGB)
  ihdrData.writeUInt8(0, 10);       // compression
  ihdrData.writeUInt8(0, 11);       // filter
  ihdrData.writeUInt8(0, 12);       // interlace
 
  const ihdrCRC = crc32(Buffer.concat([Buffer.from('IHDR'), ihdrData]));
  const ihdr = Buffer.concat([
    Buffer.from([0, 0, 0, 13]),     // length
    Buffer.from('IHDR'),
    ihdrData,
    ihdrCRC
  ]);
 
  // IDAT chunk (compressed image data)
  // Create raw scanlines: filter byte + RGB pixels
  const rawData = [];
  for (let y = 0; y < size; y++) {
    rawData.push(0); // filter byte (none)
    for (let x = 0; x < size; x++) {
      // Blue gradient color (#1e3a8a to #3b82f6)
      const t = (x + y) / (2 * size);
      rawData.push(Math.floor(30 + t * 29));   // R: 30-59
      rawData.push(Math.floor(58 + t * 72));   // G: 58-130
      rawData.push(Math.floor(138 + t * 108)); // B: 138-246
    }
  }
 
  const zlib = require('zlib');
  const compressed = zlib.deflateSync(Buffer.from(rawData));
  const idatCRC = crc32(Buffer.concat([Buffer.from('IDAT'), compressed]));
 
  const idatLength = Buffer.alloc(4);
  idatLength.writeUInt32BE(compressed.length, 0);
 
  const idat = Buffer.concat([
    idatLength,
    Buffer.from('IDAT'),
    compressed,
    idatCRC
  ]);
 
  // IEND chunk
  const iendCRC = crc32(Buffer.from('IEND'));
  const iend = Buffer.concat([
    Buffer.from([0, 0, 0, 0]),
    Buffer.from('IEND'),
    iendCRC
  ]);
 
  return Buffer.concat([signature, ihdr, idat, iend]);
}
 
// CRC32 implementation for PNG
function crc32(data) {
  let crc = 0xFFFFFFFF;
  const table = makeCRCTable();
 
  for (let i = 0; i < data.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ data[i]) & 0xFF];
  }
 
  const result = Buffer.alloc(4);
  result.writeUInt32BE((crc ^ 0xFFFFFFFF) >>> 0, 0);
  return result;
}
 
function makeCRCTable() {
  const table = new Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c >>> 0;
  }
  return table;
}
 
const publicDir = path.join(__dirname, '..', 'public');
 
// Generate icons
const sizes = [192, 512];
 
sizes.forEach(size => {
  const png = createMinimalPNG(size);
  const filename = path.join(publicDir, `icon-${size}.png`);
  fs.writeFileSync(filename, png);
  console.log(`Created ${filename}`);
});
 
console.log('Icons generated successfully!');
 
 
 
================================================
FILE: src/app/apple-icon.tsx
================================================
import { ImageResponse } from "next/og";
 
export const runtime = "edge";
 
export const size = {
  width: 180,
  height: 180,
};
 
export const contentType = "image/png";
 
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          borderRadius: 32,
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
 
 
 
================================================
FILE: src/app/globals.css
================================================
@import "tailwindcss";
@import "tw-animate-css";
 
@custom-variant dark (&:is(.dark *));
 
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
 
  /* Custom colors for 99 Overall */
  --color-cyan: #00D4FF;
  --color-cyan-dark: #00B8E6;
  --color-royal-blue: #0066FF;
  --color-neon-green: #00FF88;
  --color-gold: #FFD700;
  --color-hot-pink: #FF3366;
  --color-amber: #FFB800;
}
 
/* ============================================
   99 OVERALL - DARK MODE PREMIUM (DEFAULT)
   ============================================ */
:root {
  --radius: 0.625rem;
 
  /* Backgrounds - Deep Midnight Navy */
  --background: #0A0E1A;
  --background-gradient-start: #0D1321;
  --background-gradient-end: #1A1F35;
  --background-elevated: #141B2D;
 
  /* Foreground - Typography */
  --foreground: #FFFFFF;
  --foreground-secondary: #94A3B8;
  --foreground-muted: #64748B;
 
  /* Cards - Glassmorphism */
  --card: rgba(30, 38, 66, 0.6);
  --card-solid: #1E2642;
  --card-foreground: #FFFFFF;
  --card-border: rgba(42, 54, 85, 0.3);
 
  /* Popover */
  --popover: #141B2D;
  --popover-foreground: #FFFFFF;
 
  /* Primary - Electric Cyan */
  --primary: #00D4FF;
  --primary-hover: #00B8E6;
  --primary-foreground: #0A0E1A;
 
  /* Secondary - Muted Navy */
  --secondary: #1E2A4A;
  --secondary-hover: #2A3A5C;
  --secondary-foreground: #FFFFFF;
 
  /* Muted */
  --muted: #1E2642;
  --muted-foreground: #94A3B8;
 
  /* Accent */
  --accent: #1E2A4A;
  --accent-foreground: #00D4FF;
 
  /* Destructive */
  --destructive: #FF3366;
  --destructive-foreground: #FFFFFF;
 
  /* Success */
  --success: #00FF88;
  --success-foreground: #0A0E1A;
 
  /* Warning */
  --warning: #FFB800;
  --warning-foreground: #0A0E1A;
 
  /* Border & Input */
  --border: rgba(42, 54, 85, 0.5);
  --input: rgba(30, 38, 66, 0.8);
  --ring: #00D4FF;
 
  /* Charts */
  --chart-1: #00D4FF;
  --chart-2: #00FF88;
  --chart-3: #FFD700;
  --chart-4: #FF3366;
  --chart-5: #0066FF;
 
  /* Sidebar */
  --sidebar: #0D1321;
  --sidebar-foreground: #FFFFFF;
  --sidebar-primary: #00D4FF;
  --sidebar-primary-foreground: #0A0E1A;
  --sidebar-accent: #1E2A4A;
  --sidebar-accent-foreground: #FFFFFF;
  --sidebar-border: rgba(42, 54, 85, 0.3);
  --sidebar-ring: #00D4FF;
}
 
/* ============================================
   LIGHT MODE (Optional - for accessibility)
   ============================================ */
.light {
  --background: #F8FAFC;
  --foreground: #0F172A;
  --card: #FFFFFF;
  --card-foreground: #0F172A;
  --popover: #FFFFFF;
  --popover-foreground: #0F172A;
  --primary: #0066FF;
  --primary-foreground: #FFFFFF;
  --secondary: #E2E8F0;
  --secondary-foreground: #0F172A;
  --muted: #F1F5F9;
  --muted-foreground: #64748B;
  --accent: #E2E8F0;
  --accent-foreground: #0066FF;
  --destructive: #EF4444;
  --destructive-foreground: #FFFFFF;
  --border: #E2E8F0;
  --input: #E2E8F0;
  --ring: #0066FF;
  --chart-1: #0066FF;
  --chart-2: #10B981;
  --chart-3: #F59E0B;
  --chart-4: #EF4444;
  --chart-5: #8B5CF6;
  --sidebar: #F8FAFC;
  --sidebar-foreground: #0F172A;
  --sidebar-primary: #0066FF;
  --sidebar-primary-foreground: #FFFFFF;
  --sidebar-accent: #E2E8F0;
  --sidebar-accent-foreground: #0F172A;
  --sidebar-border: #E2E8F0;
  --sidebar-ring: #0066FF;
}
 
/* ============================================
   DARK MODE (Standard dark - alias to root)
   ============================================ */
.dark {
  --background: #0A0E1A;
  --background-gradient-start: #0D1321;
  --background-gradient-end: #1A1F35;
  --foreground: #FFFFFF;
  --card: rgba(30, 38, 66, 0.6);
  --card-foreground: #FFFFFF;
  --popover: #141B2D;
  --popover-foreground: #FFFFFF;
  --primary: #00D4FF;
  --primary-foreground: #0A0E1A;
  --secondary: #1E2A4A;
  --secondary-foreground: #FFFFFF;
  --muted: #1E2642;
  --muted-foreground: #94A3B8;
  --accent: #1E2A4A;
  --accent-foreground: #00D4FF;
  --destructive: #FF3366;
  --border: rgba(42, 54, 85, 0.5);
  --input: rgba(30, 38, 66, 0.8);
  --ring: #00D4FF;
}
 
/* ============================================
   DARK PREMIUM (Enhanced variant)
   ============================================ */
.dark-premium {
  --background: #050810;
  --background-gradient-start: #0A0E1A;
  --background-gradient-end: #141B2D;
  --foreground: #FFFFFF;
  --card: rgba(20, 27, 45, 0.8);
  --card-foreground: #FFFFFF;
  --popover: #0D1321;
  --popover-foreground: #FFFFFF;
  --primary: #00D4FF;
  --primary-foreground: #050810;
  --secondary: #141B2D;
  --secondary-foreground: #FFFFFF;
  --muted: #1E2642;
  --muted-foreground: #94A3B8;
  --accent: #141B2D;
  --accent-foreground: #00D4FF;
  --destructive: #FF3366;
  --border: rgba(42, 54, 85, 0.4);
  --input: rgba(20, 27, 45, 0.9);
  --ring: #00D4FF;
}
 
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
 
  body {
    @apply bg-background text-foreground antialiased;
  }
 
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
}
 
@layer utilities {
  /* Gradient Backgrounds */
  .bg-gradient-dark {
    background: linear-gradient(180deg, var(--background-gradient-start) 0%, var(--background-gradient-end) 100%);
  }
 
  .bg-gradient-radial {
    background: radial-gradient(ellipse at top, var(--background-gradient-end) 0%, var(--background) 70%);
  }
 
  /* Gradient Text */
  .text-gradient-cyan {
    background: linear-gradient(135deg, #00D4FF 0%, #0066FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
 
  .text-gradient-gold {
    background: linear-gradient(135deg, #FFD700 0%, #FFB800 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
 
  .text-gradient-premium {
    background: linear-gradient(135deg, #00D4FF 0%, #00FF88 50%, #FFD700 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
 
  /* Glassmorphism */
  .glass {
    background: rgba(30, 38, 66, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(42, 54, 85, 0.3);
  }
 
  .glass-strong {
    background: rgba(30, 38, 66, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(42, 54, 85, 0.4);
  }
 
  .glass-light {
    background: rgba(30, 38, 66, 0.4);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(42, 54, 85, 0.2);
  }
 
  /* Glow Effects */
  .glow-cyan {
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3),
                0 0 40px rgba(0, 212, 255, 0.1);
  }
 
  .glow-cyan-strong {
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.5),
                0 0 60px rgba(0, 212, 255, 0.2);
  }
 
  .glow-gold {
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.3),
                0 0 40px rgba(255, 215, 0, 0.1);
  }
 
  .glow-green {
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3),
                0 0 40px rgba(0, 255, 136, 0.1);
  }
 
  /* Text Glow */
  .text-glow-cyan {
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.5),
                 0 0 20px rgba(0, 212, 255, 0.3);
  }
 
  /* Animated gradient border */
  .border-gradient-animated {
    position: relative;
    background: var(--card);
    border-radius: var(--radius);
  }
 
  .border-gradient-animated::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: calc(var(--radius) + 2px);
    background: linear-gradient(45deg, #00D4FF, #0066FF, #00FF88, #00D4FF);
    background-size: 300% 300%;
    animation: gradient-rotate 3s ease infinite;
    z-index: -1;
  }
 
  @keyframes gradient-rotate {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
 
  /* Card hover effects */
  .card-hover {
    transition: all 0.3s ease;
  }
 
  .card-hover:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4),
                0 0 20px rgba(0, 212, 255, 0.1);
  }
 
  /* Button styles */
  .btn-primary-glow {
    background: linear-gradient(135deg, #00D4FF 0%, #0066FF 100%);
    box-shadow: 0 4px 15px rgba(0, 212, 255, 0.4);
    transition: all 0.3s ease;
  }
 
  .btn-primary-glow:hover {
    box-shadow: 0 6px 25px rgba(0, 212, 255, 0.6);
    transform: translateY(-2px);
  }
 
  /* Stats card style */
  .stat-card {
    background: rgba(30, 38, 66, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(42, 54, 85, 0.3);
    border-radius: var(--radius);
    padding: 1.5rem;
  }
 
  /* Premium badge */
  .badge-premium {
    background: linear-gradient(135deg, #FFD700 0%, #FFB800 100%);
    color: #0A0E1A;
    font-weight: 600;
  }
 
  /* Elite badge */
  .badge-elite {
    background: linear-gradient(135deg, #00D4FF 0%, #0066FF 100%);
    color: #FFFFFF;
    font-weight: 600;
  }
 
  /* Percentile indicator */
  .percentile-99 { color: #A855F7; }
  .percentile-95 { color: #6366F1; }
  .percentile-90 { color: #3B82F6; }
  .percentile-80 { color: #06B6D4; }
  .percentile-70 { color: #10B981; }
  .percentile-60 { color: #14B8A6; }
  .percentile-50 { color: #EAB308; }
  .percentile-40 { color: #F97316; }
  .percentile-below { color: #6B7280; }
}
 
/* ============================================
   SCROLLBAR STYLING
   ============================================ */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
 
::-webkit-scrollbar-track {
  background: var(--background);
}
 
::-webkit-scrollbar-thumb {
  background: var(--muted);
  border-radius: 4px;
}
 
::-webkit-scrollbar-thumb:hover {
  background: var(--muted-foreground);
}
 
/* ============================================
   SELECTION STYLING
   ============================================ */
::selection {
  background: rgba(0, 212, 255, 0.3);
  color: #FFFFFF;
}
 
 
 
================================================
FILE: src/app/icon.tsx
================================================
import { ImageResponse } from "next/og";
 
export const runtime = "edge";
 
export const size = {
  width: 512,
  height: 512,
};
 
export const contentType = "image/png";
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 280,
          background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          borderRadius: 64,
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
 
 
 
================================================
FILE: src/app/layout.tsx
================================================
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";
import { FloatingHomeButton } from "@/components/layout/floating-home";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
 
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 
export const metadata: Metadata = {
  title: "Overall 99 - Athlete Recruiting & NIL Platform",
  description: "A comprehensive digital recruiting and NIL showcase platform for athletes",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Overall 99",
  },
  formatDetection: {
    telephone: false,
  },
};
 
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          <FloatingHomeButton />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
 
 
 
================================================
FILE: src/app/manifest.ts
================================================
import type { MetadataRoute } from "next";
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Overall 99 - Athlete Recruiting & NIL Platform",
    short_name: "Overall 99",
    description: "A comprehensive digital recruiting and NIL showcase platform for athletes",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
 
 
 
================================================
FILE: src/app/page.tsx
================================================
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
 
export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-gradient-radial">
      <Navbar />
 
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="text-gradient-cyan">Build Their Legacy</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              The premier platform connecting athletes with college recruiters and NIL opportunities.
              Get discovered based on your performance, not just your highlight reel.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary-glow text-primary-foreground font-semibold" asChild>
                <Link href="/rankings">View Rankings</Link>
              </Button>
              <Button size="lg" variant="secondary" className="glass" asChild>
                <Link href="/marketplace">NIL Marketplace</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
 
      {/* CAM CAMP Event Banner */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/events/camcamp">
            <div className="glass-strong rounded-2xl p-6 md:p-8 glow-gold card-hover cursor-pointer border border-amber-500/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-2xl font-black text-black">
                    CC
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-semibold">
                        LIVE EVENT
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-gradient-gold mt-1">
                      CAM CAMP FOOTBALL
                    </h3>
                    <p className="text-muted-foreground">
                      Player of the Year Awards - Vote Now!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400">Jan 13</div>
                    <div className="text-sm text-muted-foreground">Las Vegas Championship</div>
                  </div>
                  <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold">
                    Vote Now →
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
 
      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "10K+", label: "Athletes" },
              { value: "500+", label: "Colleges" },
              { value: "$2M+", label: "NIL Deals" },
              { value: "99%", label: "Accuracy" },
            ].map((stat) => (
              <div key={stat.label} className="stat-card text-center card-hover">
                <div className="text-3xl md:text-4xl font-bold text-gradient-cyan">{stat.value}</div>
                <div className="text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
            <p className="mt-4 text-muted-foreground">
              A transparent, data-driven approach to athletic recruiting
            </p>
          </div>
 
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                desc: "Build a comprehensive profile with your stats, achievements, highlight videos, and academic information.",
              },
              {
                step: "02",
                title: "Get Your Rating",
                desc: "Our transparent algorithm analyzes your performance, physical attributes, academics, and NIL potential.",
              },
              {
                step: "03",
                title: "Get Discovered",
                desc: "Coaches and brands search our directory to find athletes that match their criteria. Your profile works for you 24/7.",
              },
            ].map((feature) => (
              <div key={feature.step} className="glass rounded-xl p-8 card-hover">
                <div className="text-5xl font-bold text-gradient-cyan mb-4">{feature.step}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Rating System Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Transparent <span className="text-gradient-cyan">Percentile Rating</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Unlike other platforms, we show you exactly how your rating is calculated.
                Our weighted algorithm considers multiple factors:
              </p>
              <div className="space-y-4">
                {[
                  { label: "Performance Metrics", weight: "40%", desc: "On-field achievements and stats" },
                  { label: "Physical Attributes", weight: "20%", desc: "Measurables and athletic profile" },
                  { label: "Academic Standing", weight: "15%", desc: "GPA and eligibility status" },
                  { label: "Social/NIL Potential", weight: "15%", desc: "Social media presence and marketability" },
                  { label: "Evaluations", weight: "10%", desc: "Coach and scout assessments" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-14 text-sm font-bold text-primary bg-primary/10 rounded-lg py-1 px-2 text-center">
                      {item.weight}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-strong rounded-xl p-8">
              <div className="text-center">
                <div className="text-7xl font-bold text-gradient-cyan mb-2">99%</div>
                <p className="text-xl font-bold text-foreground">Elite - #1 State Prospect</p>
                <p className="text-muted-foreground mt-2">Top 1% of all athletes</p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  { percentile: "98%", label: "Elite Prospect", color: "percentile-99" },
                  { percentile: "95%", label: "5-Star Equivalent", color: "percentile-95" },
                  { percentile: "88%", label: "Power 5 Ready", color: "percentile-90" },
                  { percentile: "75%", label: "D1 Potential", color: "percentile-80" },
                  { percentile: "65%", label: "High D1/Mid-Major", color: "percentile-70" },
                ].map((tier) => (
                  <div key={tier.percentile} className="flex justify-between text-sm glass-light rounded-lg p-3">
                    <span className={`font-bold ${tier.color}`}>{tier.percentile}</span>
                    <span className="text-muted-foreground">{tier.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-2xl p-12 text-center glow-cyan">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Get Discovered?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of athletes already on the platform. Create your profile
              in minutes and start connecting with opportunities.
            </p>
            <Button size="lg" className="btn-primary-glow text-primary-foreground font-semibold" asChild>
              <Link href="/register">Create Your Profile</Link>
            </Button>
          </div>
        </div>
      </section>
 
      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xl font-bold text-gradient-cyan">Overall 99</div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/athletes" className="hover:text-primary transition-colors">Athletes</Link>
              <Link href="/rankings" className="hover:text-primary transition-colors">Rankings</Link>
              <Link href="/marketplace" className="hover:text-primary transition-colors">NIL Marketplace</Link>
              <Link href="/login" className="hover:text-primary transition-colors">Sign In</Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Overall 99. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
 
 
 
================================================
FILE: src/app/(auth)/login/page.tsx
================================================
import { LoginForm } from "@/components/auth/login-form";
 
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <LoginForm />
    </div>
  );
}
 
 
 
================================================
FILE: src/app/(auth)/register/page.tsx
================================================
import { RegisterForm } from "@/components/auth/register-form";
 
export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <RegisterForm />
    </div>
  );
}
 
 
 
================================================
FILE: src/app/(dashboard)/layout.tsx
================================================
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Navbar } from "@/components/layout/navbar";
 
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
 
  if (!session) {
    redirect("/login");
  }
 
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
 
 
 
================================================
FILE: src/app/(dashboard)/dashboard/page.tsx
================================================
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StarRating, TierBadge } from "@/components/athletes/star-rating";
 
export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
 
  if (!session?.user) {
    return null;
  }
 
  const athlete = session.user.role === "ATHLETE"
    ? await prisma.athlete.findUnique({
        where: { userId: session.user.id },
      })
    : null;
 
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Welcome back, {session.user.firstName || "User"}!
        </h1>
        <p className="text-muted-foreground mt-2">
          Here&apos;s what&apos;s happening with your account
        </p>
      </div>
 
      {session.user.role === "ATHLETE" && (
        <>
          {athlete ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Rating</CardTitle>
                  <CardDescription>Current star rating</CardDescription>
                </CardHeader>
                <CardContent>
                  <StarRating rating={Number(athlete.starRating)} size="lg" />
                  <TierBadge percentile={Number(athlete.starRating)} className="mt-2" />
                </CardContent>
              </Card>
 
              <Card>
                <CardHeader>
                  <CardTitle>Composite Score</CardTitle>
                  <CardDescription>Overall score out of 100</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">
                    {Number(athlete.compositeScore).toFixed(1)}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Based on performance, physical, academic, social, and evaluation scores
                  </p>
                </CardContent>
              </Card>
 
              <Card>
                <CardHeader>
                  <CardTitle>Profile Status</CardTitle>
                  <CardDescription>Visibility settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        athlete.isPublic ? "bg-green-500" : "bg-yellow-500"
                      }`}
                    />
                    <span>{athlete.isPublic ? "Public" : "Private"}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    {athlete.isPublic
                      ? "Your profile is visible to coaches and brands"
                      : "Only you can see your profile"}
                  </p>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Create Your Athlete Profile</CardTitle>
                <CardDescription>
                  Get discovered by coaches and brands
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  You haven&apos;t created your athlete profile yet. Create one now to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
                  <li>Get your star rating based on our transparent algorithm</li>
                  <li>Showcase your stats and highlight videos</li>
                  <li>Be discovered by college coaches and NIL brands</li>
                </ul>
                <Button asChild>
                  <Link href="/profile/edit">Create Profile</Link>
                </Button>
              </CardContent>
            </Card>
          )}
 
          {athlete && (
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/profile">View My Profile</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/profile/edit">Edit Profile</Link>
              </Button>
            </div>
          )}
        </>
      )}
 
      {session.user.role === "COACH" && (
        <Card>
          <CardHeader>
            <CardTitle>Coach Dashboard</CardTitle>
            <CardDescription>Find your next recruit</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Browse our athlete directory to find prospects that match your criteria.
            </p>
            <Button asChild>
              <Link href="/athletes">Browse Athletes</Link>
            </Button>
          </CardContent>
        </Card>
      )}
 
      {session.user.role === "BRAND" && (
        <Card>
          <CardHeader>
            <CardTitle>Brand Dashboard</CardTitle>
            <CardDescription>Find athletes for NIL opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Discover athletes with high NIL potential for your brand partnerships.
            </p>
            <Button asChild>
              <Link href="/athletes">Browse Athletes</Link>
            </Button>
          </CardContent>
        </Card>
      )}
 
      {session.user.role === "ADMIN" && (
        <Card>
          <CardHeader>
            <CardTitle>Admin Dashboard</CardTitle>
            <CardDescription>Platform management</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              You have admin access to manage all profiles and ratings.
            </p>
            <Button asChild>
              <Link href="/athletes">Manage Athletes</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
 
 
 
================================================
FILE: src/app/(dashboard)/profile/page.tsx
================================================
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarRating, TierBadge } from "@/components/athletes/star-rating";
import { RatingBreakdown } from "@/components/athletes/rating-breakdown";
 
export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
 
  if (!session?.user) {
    redirect("/login");
  }
 
  if (session.user.role !== "ATHLETE") {
    redirect("/dashboard");
  }
 
  const athlete = await prisma.athlete.findUnique({
    where: { userId: session.user.id },
    include: {
      performanceStats: {
        orderBy: { createdAt: "desc" },
      },
      videos: {
        orderBy: { createdAt: "desc" },
      },
    },
  });
 
  if (!athlete) {
    redirect("/profile/edit");
  }
 
  const initials = `${athlete.firstName[0]}${athlete.lastName[0]}`.toUpperCase();
  const location = [athlete.hometown, athlete.state].filter(Boolean).join(", ");
 
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <Button asChild>
          <Link href="/profile/edit">Edit Profile</Link>
        </Button>
      </div>
 
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <Avatar className="h-32 w-32">
            <AvatarImage
              src={athlete.profilePictureUrl || undefined}
              alt={`${athlete.firstName} ${athlete.lastName}`}
            />
            <AvatarFallback className="text-3xl font-bold bg-primary/10">
              {initials}
            </AvatarFallback>
          </Avatar>
 
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <h2 className="text-2xl font-bold">
                {athlete.firstName} {athlete.lastName}
              </h2>
              <TierBadge percentile={Number(athlete.starRating)} />
              {!athlete.isPublic && (
                <Badge variant="secondary">Private</Badge>
              )}
            </div>
 
            <StarRating rating={Number(athlete.starRating)} size="lg" />
 
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">{athlete.primarySport}</Badge>
              {athlete.positions.map((position: string) => (
                <Badge key={position} variant="outline">
                  {position}
                </Badge>
              ))}
            </div>
 
            <div className="mt-4 text-muted-foreground">
              {athlete.highSchool && <p>{athlete.highSchool}</p>}
              {location && <p>{location}</p>}
              {athlete.graduationYear && <p>Class of {athlete.graduationYear}</p>}
            </div>
          </div>
        </div>
 
        {athlete.bio && (
          <div className="mt-6 pt-6 border-t">
            <h3 className="font-semibold mb-2">About</h3>
            <p className="text-muted-foreground whitespace-pre-wrap">{athlete.bio}</p>
          </div>
        )}
      </div>
 
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Rating Breakdown */}
        <div className="lg:col-span-1">
          <RatingBreakdown
            performanceScore={Number(athlete.performanceScore)}
            physicalScore={Number(athlete.physicalScore)}
            academicScore={Number(athlete.academicScore)}
            socialScore={Number(athlete.socialScore)}
            evaluationScore={Number(athlete.evaluationScore)}
            compositeScore={Number(athlete.compositeScore)}
            percentileRating={Number(athlete.starRating)}
          />
        </div>
 
        <div className="lg:col-span-2 space-y-6">
          {/* Physical Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Physical Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {athlete.heightInches ? (
                  <div>
                    <p className="text-sm text-muted-foreground">Height</p>
                    <p className="font-medium">
                      {Math.floor(athlete.heightInches / 12)}&apos;
                      {athlete.heightInches % 12}&quot;
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-muted-foreground">Height</p>
                    <p className="text-muted-foreground">Not set</p>
                  </div>
                )}
                {athlete.weight ? (
                  <div>
                    <p className="text-sm text-muted-foreground">Weight</p>
                    <p className="font-medium">{athlete.weight} lbs</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-muted-foreground">Weight</p>
                    <p className="text-muted-foreground">Not set</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
 
          {/* Performance Stats */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Performance Stats</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link href="/profile/edit#stats">Add Stats</Link>
              </Button>
            </CardHeader>
            <CardContent>
              {athlete.performanceStats.length === 0 ? (
                <p className="text-muted-foreground">
                  No performance stats added yet. Add your stats to improve your rating!
                </p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {athlete.performanceStats.map((stat: { id: string; statName: string; statValue: string; unit: string | null }) => (
                    <div key={stat.id} className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">{stat.statName}</p>
                      <p className="text-xl font-bold">
                        {stat.statValue}
                        {stat.unit && (
                          <span className="text-sm font-normal ml-1">{stat.unit}</span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
 
          {/* Videos */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Highlight Videos</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link href="/profile/edit#videos">Add Videos</Link>
              </Button>
            </CardHeader>
            <CardContent>
              {athlete.videos.length === 0 ? (
                <p className="text-muted-foreground">
                  No videos added yet. Add your highlights to stand out!
                </p>
              ) : (
                <div className="space-y-4">
                  {athlete.videos.map((video: { id: string; title: string | null; description: string | null; videoUrl: string }) => (
                    <div key={video.id} className="border rounded-lg p-4">
                      <h4 className="font-medium">{video.title || "Highlight"}</h4>
                      {video.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {video.description}
                        </p>
                      )}
                      <a
                        href={video.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm mt-2 inline-block"
                      >
                        Watch Video →
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
 
 
 
================================================
FILE: src/app/(dashboard)/profile/edit/page.tsx
================================================
"use client";
 
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
 
interface FormInput {
  firstName: string;
  lastName: string;
  primarySport: string;
  positions: string[];
  dateOfBirth?: string | null;
  bio?: string | null;
  profilePictureUrl?: string | null;
  hometown?: string | null;
  state?: string | null;
  highSchool?: string | null;
  college?: string | null;
  graduationYear?: number | null;
  heightInches?: number | null;
  weight?: number | null;
  phoneNumber?: string | null;
  socialMediaLinks: string[];
  isPublic: boolean;
}
 
const SPORTS = [
  "Football",
  "Basketball",
  "Baseball",
  "Soccer",
  "Volleyball",
  "Track & Field",
  "Swimming",
  "Tennis",
  "Golf",
  "Wrestling",
  "Lacrosse",
  "Hockey",
  "Softball",
  "Other",
];
 
export default function ProfileEditPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [hasProfile, setHasProfile] = useState<boolean | null>(null);
  const [athleteId, setAthleteId] = useState<string | null>(null);
 
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      primarySport: "",
      isPublic: true,
      positions: [],
      socialMediaLinks: [],
    },
  });
 
  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch("/api/athletes/me");
        const data = await response.json();
 
        if (data.hasProfile && data.athlete) {
          setHasProfile(true);
          setAthleteId(data.athlete.id);
 
          // Populate form with existing data
          const athlete = data.athlete;
          setValue("firstName", athlete.firstName);
          setValue("lastName", athlete.lastName);
          setValue("primarySport", athlete.primarySport);
          setValue("positions", athlete.positions || []);
          setValue("bio", athlete.bio || "");
          setValue("profilePictureUrl", athlete.profilePictureUrl || "");
          setValue("hometown", athlete.hometown || "");
          setValue("state", athlete.state || "");
          setValue("highSchool", athlete.highSchool || "");
          setValue("college", athlete.college || "");
          setValue("graduationYear", athlete.graduationYear || undefined);
          setValue("heightInches", athlete.heightInches || undefined);
          setValue("weight", athlete.weight || undefined);
          setValue("phoneNumber", athlete.phoneNumber || "");
          setValue("isPublic", athlete.isPublic);
        } else {
          setHasProfile(false);
        }
      } catch {
        setHasProfile(false);
      }
    }
 
    fetchProfile();
  }, [setValue]);
 
  const onSubmit = async (data: FormInput) => {
    setIsLoading(true);
 
    try {
      const url = hasProfile ? `/api/athletes/${athleteId}` : "/api/athletes";
      const method = hasProfile ? "PUT" : "POST";
 
      // Clean up data before sending
      const cleanedData = {
        ...data,
        // Convert NaN to null for number fields
        heightInches: Number.isNaN(data.heightInches) ? null : data.heightInches,
        weight: Number.isNaN(data.weight) ? null : data.weight,
        graduationYear: Number.isNaN(data.graduationYear) ? null : data.graduationYear,
        // Handle profile picture URL - add https:// if missing, or set to null if empty
        profilePictureUrl: data.profilePictureUrl
          ? data.profilePictureUrl.startsWith("http")
            ? data.profilePictureUrl
            : `https://${data.profilePictureUrl}`
          : null,
      };
 
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanedData),
      });
 
      const result = await response.json();
 
      if (!response.ok) {
        toast.error(result.error || "Failed to save profile");
        return;
      }
 
      toast.success(hasProfile ? "Profile updated!" : "Profile created!");
      router.push("/profile");
      router.refresh();
    } catch {
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };
 
  if (hasProfile === null) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p>Loading...</p>
      </div>
    );
  }
 
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {hasProfile ? "Edit Profile" : "Create Your Profile"}
        </h1>
        <p className="text-muted-foreground mt-2">
          {hasProfile
            ? "Update your athlete profile information"
            : "Set up your athlete profile to get discovered"}
        </p>
      </div>
 
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  {...register("firstName")}
                  disabled={isLoading}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500">{errors.firstName.message}</p>
                )}
              </div>
 
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  {...register("lastName")}
                  disabled={isLoading}
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>
 
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell coaches and brands about yourself..."
                {...register("bio")}
                disabled={isLoading}
                rows={4}
              />
            </div>
 
            <div className="space-y-2">
              <Label htmlFor="profilePictureUrl">Profile Picture URL</Label>
              <Input
                id="profilePictureUrl"
                placeholder="https://..."
                {...register("profilePictureUrl")}
                disabled={isLoading}
              />
            </div>
          </CardContent>
        </Card>
 
        {/* Sports Information */}
        <Card>
          <CardHeader>
            <CardTitle>Sports Information</CardTitle>
            <CardDescription>Your athletic background</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Primary Sport *</Label>
              <Select
                value={watch("primarySport")}
                onValueChange={(value) => setValue("primarySport", value)}
                disabled={isLoading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your sport" />
                </SelectTrigger>
                <SelectContent>
                  {SPORTS.map((sport) => (
                    <SelectItem key={sport} value={sport}>
                      {sport}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.primarySport && (
                <p className="text-sm text-red-500">{errors.primarySport.message}</p>
              )}
            </div>
 
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="heightInches">Height (total inches)</Label>
                <Input
                  id="heightInches"
                  type="number"
                  placeholder="72"
                  {...register("heightInches", { valueAsNumber: true })}
                  disabled={isLoading}
                />
                <p className="text-xs text-muted-foreground">e.g., 72 for 6&apos;0&quot;</p>
              </div>
 
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (lbs)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="180"
                  {...register("weight", { valueAsNumber: true })}
                  disabled={isLoading}
                />
              </div>
            </div>
          </CardContent>
        </Card>
 
        {/* Location & School */}
        <Card>
          <CardHeader>
            <CardTitle>Location & School</CardTitle>
            <CardDescription>Where you&apos;re from and where you play</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="hometown">Hometown</Label>
                <Input
                  id="hometown"
                  placeholder="City"
                  {...register("hometown")}
                  disabled={isLoading}
                />
              </div>
 
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  placeholder="State"
                  {...register("state")}
                  disabled={isLoading}
                />
              </div>
            </div>
 
            <div className="space-y-2">
              <Label htmlFor="highSchool">High School</Label>
              <Input
                id="highSchool"
                placeholder="School name"
                {...register("highSchool")}
                disabled={isLoading}
              />
            </div>
 
            <div className="space-y-2">
              <Label htmlFor="graduationYear">Graduation Year</Label>
              <Input
                id="graduationYear"
                type="number"
                placeholder="2025"
                {...register("graduationYear", { valueAsNumber: true })}
                disabled={isLoading}
              />
            </div>
          </CardContent>
        </Card>
 
        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Privacy Settings</CardTitle>
            <CardDescription>Control who can see your profile</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Public Profile</p>
                <p className="text-sm text-muted-foreground">
                  Allow coaches and brands to discover your profile
                </p>
              </div>
              <Switch
                checked={watch("isPublic")}
                onCheckedChange={(checked) => setValue("isPublic", checked)}
                disabled={isLoading}
              />
            </div>
          </CardContent>
        </Card>
 
        <div className="flex gap-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading
              ? "Saving..."
              : hasProfile
              ? "Save Changes"
              : "Create Profile"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            disabled={isLoading}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
 
 
 
================================================
FILE: src/app/api/athletes/route.ts
================================================
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createAthleteSchema, searchAthletesSchema } from "@/lib/validations/athlete";
import { calculateCompositeScore, calculatePercentileRating } from "@/services/rating.service";
import { Prisma } from "@prisma/client";
 
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const params = Object.fromEntries(searchParams.entries());
 
    const validated = searchAthletesSchema.parse(params);
    const { page, limit, sport, minStars, maxStars, state, graduationYear, q } = validated;
 
    const skip = (page - 1) * limit;
 
    const where: Prisma.AthleteWhereInput = {
      isPublic: true,
    };
 
    if (sport) {
      where.primarySport = { equals: sport, mode: "insensitive" };
    }
 
    if (minStars !== undefined || maxStars !== undefined) {
      where.starRating = {
        gte: minStars ?? 0,
        lte: maxStars ?? 5,
      };
    }
 
    if (state) {
      where.state = { equals: state, mode: "insensitive" };
    }
 
    if (graduationYear) {
      where.graduationYear = graduationYear;
    }
 
    if (q) {
      where.OR = [
        { firstName: { contains: q, mode: "insensitive" } },
        { lastName: { contains: q, mode: "insensitive" } },
        { highSchool: { contains: q, mode: "insensitive" } },
        { college: { contains: q, mode: "insensitive" } },
        { hometown: { contains: q, mode: "insensitive" } },
      ];
    }
 
    const [athletes, total] = await Promise.all([
      prisma.athlete.findMany({
        where,
        skip,
        take: limit,
        orderBy: { starRating: "desc" },
        include: {
          user: {
            select: {
              email: true,
            },
          },
        },
      }),
      prisma.athlete.count({ where }),
    ]);
 
    return NextResponse.json({
      athletes,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch athletes" },
      { status: 500 }
    );
  }
}
 
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
 
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
 
    if (session.user.role !== "ATHLETE" && session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Only athletes can create athlete profiles" },
        { status: 403 }
      );
    }
 
    // Check if user already has an athlete profile
    const existingAthlete = await prisma.athlete.findUnique({
      where: { userId: session.user.id },
    });
 
    if (existingAthlete) {
      return NextResponse.json(
        { error: "You already have an athlete profile" },
        { status: 400 }
      );
    }
 
    const body = await req.json();
    const validated = createAthleteSchema.parse(body);
 
    // Calculate initial rating (all zeros means 1 star)
    const compositeScore = calculateCompositeScore({
      performanceScore: 0,
      physicalScore: 0,
      academicScore: 0,
      socialScore: 0,
      evaluationScore: 0,
    });
    const starRating = calculatePercentileRating(compositeScore);
 
    const athlete = await prisma.athlete.create({
      data: {
        userId: session.user.id,
        ...validated,
        dateOfBirth: validated.dateOfBirth ? new Date(validated.dateOfBirth) : null,
        compositeScore,
        starRating,
      },
      include: {
        user: {
          select: {
            email: true,
          },
        },
      },
    });
 
    return NextResponse.json({ athlete }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation failed" },
        { status: 400 }
      );
    }
 
    return NextResponse.json(
      { error: "Failed to create athlete profile" },
      { status: 500 }
    );
  }
}
 
 
 
================================================
FILE: src/app/api/athletes/[id]/route.ts
================================================
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { updateAthleteSchema } from "@/lib/validations/athlete";
 
interface RouteParams {
  params: Promise<{ id: string }>;
}
 
export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
 
    const athlete = await prisma.athlete.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        performanceStats: {
          orderBy: { createdAt: "desc" },
        },
        videos: {
          orderBy: { createdAt: "desc" },
        },
      },
    });
 
    if (!athlete) {
      return NextResponse.json(
        { error: "Athlete not found" },
        { status: 404 }
      );
    }
 
    // Check if profile is public or if user is authorized to view
    const session = await getServerSession(authOptions);
    const isOwner = session?.user?.id === athlete.userId;
    const isAdmin = session?.user?.role === "ADMIN";
 
    if (!athlete.isPublic && !isOwner && !isAdmin) {
      return NextResponse.json(
        { error: "This profile is private" },
        { status: 403 }
      );
    }
 
    return NextResponse.json({ athlete });
  } catch (error) {
    console.error("Error fetching athlete:", error);
    return NextResponse.json(
      { error: "Failed to fetch athlete" },
      { status: 500 }
    );
  }
}
 
export async function PUT(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
 
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
 
    const { id } = await params;
 
    const athlete = await prisma.athlete.findUnique({
      where: { id },
    });
 
    if (!athlete) {
      return NextResponse.json(
        { error: "Athlete not found" },
        { status: 404 }
      );
    }
 
    // Check authorization
    const isOwner = session.user.id === athlete.userId;
    const isAdmin = session.user.role === "ADMIN";
 
    if (!isOwner && !isAdmin) {
      return NextResponse.json(
        { error: "You don't have permission to update this profile" },
        { status: 403 }
      );
    }
 
    const body = await req.json();
    const validated = updateAthleteSchema.parse(body);
 
    const updatedAthlete = await prisma.athlete.update({
      where: { id },
      data: {
        ...validated,
        dateOfBirth: validated.dateOfBirth ? new Date(validated.dateOfBirth) : undefined,
      },
      include: {
        user: {
          select: {
            email: true,
          },
        },
      },
    });
 
    return NextResponse.json({ athlete: updatedAthlete });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation failed", details: error },
        { status: 400 }
      );
    }
 
    console.error("Error updating athlete:", error);
    return NextResponse.json(
      { error: "Failed to update athlete" },
      { status: 500 }
    );
  }
}
 
export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
 
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
 
    const { id } = await params;
 
    const athlete = await prisma.athlete.findUnique({
      where: { id },
    });
 
    if (!athlete) {
      return NextResponse.json(
        { error: "Athlete not found" },
        { status: 404 }
      );
    }
 
    // Check authorization
    const isOwner = session.user.id === athlete.userId;
    const isAdmin = session.user.role === "ADMIN";
 
    if (!isOwner && !isAdmin) {
      return NextResponse.json(
        { error: "You don't have permission to delete this profile" },
        { status: 403 }
      );
    }
 
    await prisma.athlete.delete({
      where: { id },
    });
 
    return NextResponse.json({ message: "Athlete profile deleted successfully" });
  } catch (error) {
    console.error("Error deleting athlete:", error);
    return NextResponse.json(
      { error: "Failed to delete athlete" },
      { status: 500 }
    );
  }
}
 
 
 
================================================
FILE: src/app/api/athletes/me/route.ts
================================================
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
 
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
 
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
 
    const athlete = await prisma.athlete.findUnique({
      where: { userId: session.user.id },
      include: {
        user: {
          select: {
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        performanceStats: {
          orderBy: { createdAt: "desc" },
        },
        videos: {
          orderBy: { createdAt: "desc" },
        },
      },
    });
 
    if (!athlete) {
      return NextResponse.json(
        { error: "Athlete profile not found", hasProfile: false },
        { status: 404 }
      );
    }
 
    return NextResponse.json({ athlete, hasProfile: true });
  } catch (error) {
    console.error("Error fetching own athlete profile:", error);
    return NextResponse.json(
      { error: "Failed to fetch athlete profile" },
      { status: 500 }
    );
  }
}
 
 
 
================================================
FILE: src/app/api/athletes/search/route.ts
================================================
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { searchAthletesSchema } from "@/lib/validations/athlete";
import { Prisma } from "@prisma/client";
 
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const params = Object.fromEntries(searchParams.entries());
 
    const validated = searchAthletesSchema.parse(params);
    const { page, limit, sport, minStars, maxStars, state, graduationYear, q } = validated;
 
    const skip = (page - 1) * limit;
 
    const where: Prisma.AthleteWhereInput = {
      isPublic: true,
    };
 
    if (sport) {
      where.primarySport = { equals: sport, mode: "insensitive" };
    }
 
    if (minStars !== undefined || maxStars !== undefined) {
      where.starRating = {
        gte: minStars ?? 0,
        lte: maxStars ?? 5,
      };
    }
 
    if (state) {
      where.state = { equals: state, mode: "insensitive" };
    }
 
    if (graduationYear) {
      where.graduationYear = graduationYear;
    }
 
    if (q) {
      where.OR = [
        { firstName: { contains: q, mode: "insensitive" } },
        { lastName: { contains: q, mode: "insensitive" } },
        { highSchool: { contains: q, mode: "insensitive" } },
        { college: { contains: q, mode: "insensitive" } },
        { hometown: { contains: q, mode: "insensitive" } },
        { primarySport: { contains: q, mode: "insensitive" } },
      ];
    }
 
    const [athletes, total] = await Promise.all([
      prisma.athlete.findMany({
        where,
        skip,
        take: limit,
        orderBy: { starRating: "desc" },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          primarySport: true,
          positions: true,
          profilePictureUrl: true,
          hometown: true,
          state: true,
          highSchool: true,
          college: true,
          graduationYear: true,
          starRating: true,
          compositeScore: true,
        },
      }),
      prisma.athlete.count({ where }),
    ]);
 
    return NextResponse.json({
      athletes,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error searching athletes:", error);
    return NextResponse.json(
      { error: "Failed to search athletes" },
      { status: 500 }
    );
  }
}
 
 
 
================================================
FILE: src/app/api/auth/[...nextauth]/route.ts
================================================
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";
 
const handler = NextAuth(authOptions);
 
export { handler as GET, handler as POST };
 
 
 
================================================
FILE: src/app/api/auth/register/route.ts
================================================
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/lib/validations/auth";
import { rateLimit, rateLimitConfigs, getClientIP } from "@/lib/rate-limit";
import { createVerificationToken, sendVerificationEmail } from "@/lib/email";
 
export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(req);
    const rateLimitResult = rateLimit(
      `register:${clientIP}`,
      rateLimitConfigs.register
    );
 
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many registration attempts. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(
              Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)
            ),
          },
        }
      );
    }
 
    const body = await req.json();
 
    const validatedData = registerSchema.parse(body);
 
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email.toLowerCase() },
    });
 
    if (existingUser) {
      return NextResponse.json(
        { error: "An account with this email already exists" },
        { status: 400 }
      );
    }
 
    // Hash password with secure salt rounds
    const hashedPassword = await bcrypt.hash(validatedData.password, 13);
 
    // Create user
    const user = await prisma.user.create({
      data: {
        email: validatedData.email.toLowerCase(),
        password: hashedPassword,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        role: validatedData.role,
      },
    });
 
    // Send verification email
    try {
      const verificationToken = await createVerificationToken(user.email);
      await sendVerificationEmail(user.email, verificationToken);
    } catch {
      // Don't fail registration if email sending fails
      // User can request a new verification email later
    }
 
    return NextResponse.json(
      {
        message: "Account created successfully. Please check your email to verify your account.",
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation failed" },
        { status: 400 }
      );
    }
 
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
 
 
 
================================================
FILE: src/app/api/auth/resend-verification/route.ts
================================================
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createVerificationToken, sendVerificationEmail } from "@/lib/email";
import { rateLimit, getClientIP } from "@/lib/rate-limit";
import { z } from "zod";
 
const resendSchema = z.object({
  email: z.string().email(),
});
 
export async function POST(req: NextRequest) {
  try {
    // Rate limit - 3 requests per hour per IP
    const clientIP = getClientIP(req);
    const rateLimitResult = rateLimit(`resend-verification:${clientIP}`, {
      maxRequests: 3,
      windowMs: 60 * 60 * 1000,
    });
 
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }
 
    const body = await req.json();
    const { email } = resendSchema.parse(body);
 
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
 
    // Always return success to prevent email enumeration
    if (!user || user.emailVerified) {
      return NextResponse.json({
        message: "If an unverified account exists, a verification email has been sent.",
      });
    }
 
    const verificationToken = await createVerificationToken(user.email);
    await sendVerificationEmail(user.email, verificationToken);
 
    return NextResponse.json({
      message: "If an unverified account exists, a verification email has been sent.",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
 
 
 
================================================
FILE: src/app/api/auth/verify/route.ts
================================================
import { NextRequest, NextResponse } from "next/server";
import { verifyEmailToken } from "@/lib/email";
 
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");
 
    if (!token) {
      return NextResponse.redirect(
        new URL("/login?error=missing_token", req.url)
      );
    }
 
    const result = await verifyEmailToken(token);
 
    if (!result.success) {
      return NextResponse.redirect(
        new URL(`/login?error=${encodeURIComponent(result.error || "verification_failed")}`, req.url)
      );
    }
 
    // Redirect to login with success message
    return NextResponse.redirect(
      new URL("/login?verified=true", req.url)
    );
  } catch {
    return NextResponse.redirect(
      new URL("/login?error=verification_failed", req.url)
    );
  }
}
 
 
 
================================================
FILE: src/app/api/ratings/[athleteId]/route.ts
================================================
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { updateRatingScoresSchema } from "@/lib/validations/athlete";
import { calculateCompositeScore, calculatePercentileRating } from "@/services/rating.service";
 
interface RouteParams {
  params: Promise<{ athleteId: string }>;
}
 
export async function PUT(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
 
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
 
    const { athleteId } = await params;
 
    const athlete = await prisma.athlete.findUnique({
      where: { id: athleteId },
    });
 
    if (!athlete) {
      return NextResponse.json(
        { error: "Athlete not found" },
        { status: 404 }
      );
    }
 
    // Only the athlete owner or admin can update rating scores
    const isOwner = session.user.id === athlete.userId;
    const isAdmin = session.user.role === "ADMIN";
 
    if (!isOwner && !isAdmin) {
      return NextResponse.json(
        { error: "You don't have permission to update ratings" },
        { status: 403 }
      );
    }
 
    const body = await req.json();
    const validated = updateRatingScoresSchema.parse(body);
 
    // Merge with existing scores
    const scores = {
      performanceScore: validated.performanceScore ?? Number(athlete.performanceScore),
      physicalScore: validated.physicalScore ?? Number(athlete.physicalScore),
      academicScore: validated.academicScore ?? Number(athlete.academicScore),
      socialScore: validated.socialScore ?? Number(athlete.socialScore),
      evaluationScore: validated.evaluationScore ?? Number(athlete.evaluationScore),
    };
 
    // Calculate new composite and star rating
    const compositeScore = calculateCompositeScore(scores);
    const starRating = calculatePercentileRating(compositeScore);
 
    const updatedAthlete = await prisma.athlete.update({
      where: { id: athleteId },
      data: {
        performanceScore: scores.performanceScore,
        physicalScore: scores.physicalScore,
        academicScore: scores.academicScore,
        socialScore: scores.socialScore,
        evaluationScore: scores.evaluationScore,
        compositeScore,
        starRating,
      },
    });
 
    return NextResponse.json({
      athlete: updatedAthlete,
      ratingUpdate: {
        compositeScore,
        starRating,
      },
    });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation failed", details: error },
        { status: 400 }
      );
    }
 
    console.error("Error updating ratings:", error);
    return NextResponse.json(
      { error: "Failed to update ratings" },
      { status: 500 }
    );
  }
}
 
 
 
================================================
FILE: src/app/api/ratings/[athleteId]/breakdown/route.ts
================================================
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getRatingBreakdown, getScoreContributions } from "@/services/rating.service";
 
interface RouteParams {
  params: Promise<{ athleteId: string }>;
}
 
export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const { athleteId } = await params;
 
    const athlete = await prisma.athlete.findUnique({
      where: { id: athleteId },
      select: {
        id: true,
        userId: true,
        firstName: true,
        lastName: true,
        isPublic: true,
        performanceScore: true,
        physicalScore: true,
        academicScore: true,
        socialScore: true,
        evaluationScore: true,
        compositeScore: true,
        starRating: true,
      },
    });
 
    if (!athlete) {
      return NextResponse.json(
        { error: "Athlete not found" },
        { status: 404 }
      );
    }
 
    // Check if profile is public or if user is authorized
    const session = await getServerSession(authOptions);
    const isOwner = session?.user?.id === athlete.userId;
    const isAdmin = session?.user?.role === "ADMIN";
 
    if (!athlete.isPublic && !isOwner && !isAdmin) {
      return NextResponse.json(
        { error: "This profile is private" },
        { status: 403 }
      );
    }
 
    const scores = {
      performanceScore: Number(athlete.performanceScore),
      physicalScore: Number(athlete.physicalScore),
      academicScore: Number(athlete.academicScore),
      socialScore: Number(athlete.socialScore),
      evaluationScore: Number(athlete.evaluationScore),
    };
 
    const breakdown = getRatingBreakdown(scores);
    const contributions = getScoreContributions(scores);
 
    return NextResponse.json({
      athleteId: athlete.id,
      athleteName: `${athlete.firstName} ${athlete.lastName}`,
      breakdown,
      contributions,
    });
  } catch (error) {
    console.error("Error fetching rating breakdown:", error);
    return NextResponse.json(
      { error: "Failed to fetch rating breakdown" },
      { status: 500 }
    );
  }
}
 
 
 
================================================
FILE: src/app/api/ratings/[athleteId]/calculate/route.ts
================================================
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { calculateCompositeScore, calculatePercentileRating } from "@/services/rating.service";
 
interface RouteParams {
  params: Promise<{ athleteId: string }>;
}
 
export async function POST(req: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);
 
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
 
    // Only admins can force recalculate
    if (session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Only admins can recalculate ratings" },
        { status: 403 }
      );
    }
 
    const { athleteId } = await params;
 
    const athlete = await prisma.athlete.findUnique({
      where: { id: athleteId },
    });
 
    if (!athlete) {
      return NextResponse.json(
        { error: "Athlete not found" },
        { status: 404 }
      );
    }
 
    const scores = {
      performanceScore: Number(athlete.performanceScore),
      physicalScore: Number(athlete.physicalScore),
      academicScore: Number(athlete.academicScore),
      socialScore: Number(athlete.socialScore),
      evaluationScore: Number(athlete.evaluationScore),
    };
 
    const compositeScore = calculateCompositeScore(scores);
    const starRating = calculatePercentileRating(compositeScore);
 
    const updatedAthlete = await prisma.athlete.update({
      where: { id: athleteId },
      data: {
        compositeScore,
        starRating,
      },
    });
 
    return NextResponse.json({
      message: "Rating recalculated successfully",
      athlete: updatedAthlete,
      previousRating: {
        compositeScore: Number(athlete.compositeScore),
        starRating: Number(athlete.starRating),
      },
      newRating: {
        compositeScore,
        starRating,
      },
    });
  } catch (error) {
    console.error("Error recalculating rating:", error);
    return NextResponse.json(
      { error: "Failed to recalculate rating" },
      { status: 500 }
    );
  }
}
 
 
 
================================================
FILE: src/app/athletes/page.tsx
================================================
import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import { AthleteCard } from "@/components/athletes/athlete-card";
import { Navbar } from "@/components/layout/navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
 
interface SearchParams {
  sport?: string;
  minStars?: string;
  maxStars?: string;
  state?: string;
  q?: string;
  page?: string;
}
 
async function getAthletes(searchParams: SearchParams) {
  const page = parseInt(searchParams.page || "1");
  const limit = 12;
  const skip = (page - 1) * limit;
 
  const where: {
    isPublic: boolean;
    primarySport?: { equals: string; mode: "insensitive" };
    state?: { equals: string; mode: "insensitive" };
    starRating?: { gte?: number; lte?: number };
    OR?: Array<{
      firstName?: { contains: string; mode: "insensitive" };
      lastName?: { contains: string; mode: "insensitive" };
      highSchool?: { contains: string; mode: "insensitive" };
    }>;
  } = {
    isPublic: true,
  };
 
  if (searchParams.sport && searchParams.sport !== "all") {
    where.primarySport = { equals: searchParams.sport, mode: "insensitive" };
  }
 
  if (searchParams.state) {
    where.state = { equals: searchParams.state, mode: "insensitive" };
  }
 
  if ((searchParams.minStars && searchParams.minStars !== "any") || searchParams.maxStars) {
    where.starRating = {
      gte: parseFloat(searchParams.minStars && searchParams.minStars !== "any" ? searchParams.minStars : "0"),
      lte: parseFloat(searchParams.maxStars || "5"),
    };
  }
 
  if (searchParams.q) {
    where.OR = [
      { firstName: { contains: searchParams.q, mode: "insensitive" } },
      { lastName: { contains: searchParams.q, mode: "insensitive" } },
      { highSchool: { contains: searchParams.q, mode: "insensitive" } },
    ];
  }
 
  const [athletes, total] = await Promise.all([
    prisma.athlete.findMany({
      where,
      skip,
      take: limit,
      orderBy: { starRating: "desc" },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        primarySport: true,
        positions: true,
        profilePictureUrl: true,
        hometown: true,
        state: true,
        highSchool: true,
        graduationYear: true,
        starRating: true,
      },
    }),
    prisma.athlete.count({ where }),
  ]);
 
  return {
    athletes,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}
 
async function getSports() {
  const sports = await prisma.athlete.findMany({
    where: { isPublic: true },
    select: { primarySport: true },
    distinct: ["primarySport"],
  });
  return sports.map((s) => s.primarySport);
}
 
export default async function AthletesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const { athletes, pagination } = await getAthletes(params);
  const sports = await getSports();
 
  return (
    <div className="min-h-screen bg-background bg-gradient-radial">
      <Navbar />
 
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Athlete Directory</h1>
          <p className="text-muted-foreground mt-2">
            Discover talented athletes across all sports
          </p>
        </div>
 
        {/* Filters */}
        <div className="glass p-4 rounded-lg mb-6">
          <form className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <Input
                name="q"
                placeholder="Search athletes..."
                defaultValue={params.q}
              />
            </div>
 
            <Select name="sport" defaultValue={params.sport || "all"}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Sports" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sports</SelectItem>
                {sports.map((sport) => (
                  <SelectItem key={sport} value={sport}>
                    {sport}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
 
            <Select name="minStars" defaultValue={params.minStars || "any"}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Min Stars" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Rating</SelectItem>
                <SelectItem value="4">4+ Stars</SelectItem>
                <SelectItem value="3">3+ Stars</SelectItem>
                <SelectItem value="2">2+ Stars</SelectItem>
              </SelectContent>
            </Select>
 
            <Button type="submit">Search</Button>
          </form>
        </div>
 
        {/* Results */}
        <Suspense fallback={<div>Loading...</div>}>
          {athletes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No athletes found</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {athletes.map((athlete) => (
                  <AthleteCard
                    key={athlete.id}
                    id={athlete.id}
                    firstName={athlete.firstName}
                    lastName={athlete.lastName}
                    primarySport={athlete.primarySport}
                    positions={athlete.positions}
                    profilePictureUrl={athlete.profilePictureUrl}
                    hometown={athlete.hometown}
                    state={athlete.state}
                    highSchool={athlete.highSchool}
                    graduationYear={athlete.graduationYear}
                    starRating={Number(athlete.starRating)}
                  />
                ))}
              </div>
 
              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-8">
                {pagination.page > 1 && (
                  <Button variant="outline" asChild>
                    <a href={`/athletes?page=${pagination.page - 1}`}>
                      Previous
                    </a>
                  </Button>
                )}
                <span className="py-2 px-4 text-muted-foreground">
                  Page {pagination.page} of {pagination.totalPages}
                </span>
                {pagination.page < pagination.totalPages && (
                  <Button variant="outline" asChild>
                    <a href={`/athletes?page=${pagination.page + 1}`}>Next</a>
                  </Button>
                )}
              </div>
            </>
          )}
        </Suspense>
      </main>
    </div>
  );
}
 
 
 
================================================
FILE: src/app/athletes/[id]/page.tsx
================================================
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/layout/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarRating, TierBadge } from "@/components/athletes/star-rating";
import { RatingBreakdown } from "@/components/athletes/rating-breakdown";
 
interface PageProps {
  params: Promise<{ id: string }>;
}
 
async function getAthlete(id: string) {
  const athlete = await prisma.athlete.findUnique({
    where: { id, isPublic: true },
    include: {
      user: {
        select: {
          email: true,
        },
      },
      performanceStats: {
        orderBy: { createdAt: "desc" },
        take: 10,
      },
      videos: {
        orderBy: { createdAt: "desc" },
        take: 5,
      },
    },
  });
 
  return athlete;
}
 
export default async function AthleteProfilePage({ params }: PageProps) {
  const { id } = await params;
  const athlete = await getAthlete(id);
 
  if (!athlete) {
    notFound();
  }
 
  const initials = `${athlete.firstName[0]}${athlete.lastName[0]}`.toUpperCase();
  const location = [athlete.hometown, athlete.state].filter(Boolean).join(", ");
 
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
 
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar className="h-32 w-32">
              <AvatarImage
                src={athlete.profilePictureUrl || undefined}
                alt={`${athlete.firstName} ${athlete.lastName}`}
              />
              <AvatarFallback className="text-3xl font-bold bg-primary/10">
                {initials}
              </AvatarFallback>
            </Avatar>
 
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h1 className="text-3xl font-bold">
                  {athlete.firstName} {athlete.lastName}
                </h1>
                <TierBadge percentile={Number(athlete.starRating)} />
              </div>
 
              <StarRating rating={Number(athlete.starRating)} size="lg" />
 
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="text-sm">
                  {athlete.primarySport}
                </Badge>
                {athlete.positions.map((position) => (
                  <Badge key={position} variant="outline">
                    {position}
                  </Badge>
                ))}
              </div>
 
              <div className="mt-4 text-muted-foreground space-y-1">
                {athlete.highSchool && <p>{athlete.highSchool}</p>}
                {location && <p>{location}</p>}
                {athlete.graduationYear && (
                  <p>Class of {athlete.graduationYear}</p>
                )}
              </div>
            </div>
          </div>
 
          {athlete.bio && (
            <div className="mt-6 pt-6 border-t">
              <h2 className="font-semibold mb-2">About</h2>
              <p className="text-muted-foreground whitespace-pre-wrap">
                {athlete.bio}
              </p>
            </div>
          )}
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Rating Breakdown */}
          <div className="lg:col-span-1">
            <RatingBreakdown
              performanceScore={Number(athlete.performanceScore)}
              physicalScore={Number(athlete.physicalScore)}
              academicScore={Number(athlete.academicScore)}
              socialScore={Number(athlete.socialScore)}
              evaluationScore={Number(athlete.evaluationScore)}
              compositeScore={Number(athlete.compositeScore)}
              percentileRating={Number(athlete.starRating)}
            />
          </div>
 
          <div className="lg:col-span-2 space-y-6">
            {/* Physical Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Physical Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {athlete.heightInches && (
                    <div>
                      <p className="text-sm text-muted-foreground">Height</p>
                      <p className="font-medium">
                        {Math.floor(athlete.heightInches / 12)}&apos;
                        {athlete.heightInches % 12}&quot;
                      </p>
                    </div>
                  )}
                  {athlete.weight && (
                    <div>
                      <p className="text-sm text-muted-foreground">Weight</p>
                      <p className="font-medium">{athlete.weight} lbs</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
 
            {/* Performance Stats */}
            {athlete.performanceStats.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Performance Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {athlete.performanceStats.map((stat) => (
                      <div key={stat.id} className="p-3 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          {stat.statName}
                        </p>
                        <p className="text-xl font-bold">
                          {stat.statValue}
                          {stat.unit && (
                            <span className="text-sm font-normal ml-1">
                              {stat.unit}
                            </span>
                          )}
                        </p>
                        {stat.eventName && (
                          <p className="text-xs text-muted-foreground">
                            {stat.eventName}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
 
            {/* Highlight Videos */}
            {athlete.videos.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Highlight Videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {athlete.videos.map((video) => (
                      <div key={video.id} className="border rounded-lg p-4">
                        <h3 className="font-medium">{video.title || "Highlight"}</h3>
                        {video.description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {video.description}
                          </p>
                        )}
                        <a
                          href={video.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm mt-2 inline-block"
                        >
                          Watch Video →
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
 
 
 
================================================
FILE: src/app/events/page.tsx
================================================
"use client";
 
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
 
// Events Configuration
const events = [
  {
    id: "camcamp",
    title: "CAM CAMP FOOTBALL",
    subtitle: "Player of the Year",
    description: "Vote for the top young athletes across 8 age groups and 5 positions",
    date: "January 13th, 2025",
    location: "Las Vegas, NV",
    status: "live",
    theme: "gold",
    route: "/events/camcamp",
    stats: {
      nominees: 500,
      votes: 25000,
      ageGroups: 8,
    },
  },
  {
    id: "spring-showcase",
    title: "SPRING SHOWCASE",
    subtitle: "Regional Championships",
    description: "Top athletes compete in regional qualifying events across the nation",
    date: "March 15-17, 2025",
    location: "Multiple Locations",
    status: "upcoming",
    theme: "cyan",
    route: "/events/spring-showcase",
    stats: {
      teams: 200,
      states: 32,
      divisions: 6,
    },
  },
  {
    id: "summer-nationals",
    title: "SUMMER NATIONALS",
    subtitle: "National Championship",
    description: "The ultimate showdown featuring the best youth athletes in America",
    date: "July 20-25, 2025",
    location: "Orlando, FL",
    status: "upcoming",
    theme: "purple",
    route: "/events/summer-nationals",
    stats: {
      athletes: 5000,
      colleges: 100,
      scouts: 250,
    },
  },
];
 
function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
 
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
 
export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background bg-gradient-radial">
      <Navbar />
 
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient-cyan">Live Events</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Competitions, showcases, and award ceremonies featuring the best young athletes
            </p>
          </div>
        </div>
      </section>
 
      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {events.map((event) => (
              <Link key={event.id} href={event.route}>
                <div
                  className={`glass-strong rounded-2xl p-8 card-hover cursor-pointer border ${
                    event.status === "live"
                      ? "border-amber-500/50 glow-gold"
                      : event.theme === "cyan"
                      ? "border-cyan-500/30"
                      : "border-purple-500/30"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Event Info */}
                    <div className="flex items-start gap-6">
                      {/* Logo/Icon */}
                      <div
                        className={`w-20 h-20 rounded-xl flex items-center justify-center text-3xl font-black ${
                          event.theme === "gold"
                            ? "bg-gradient-to-br from-amber-400 to-amber-600 text-black"
                            : event.theme === "cyan"
                            ? "bg-gradient-to-br from-cyan-400 to-cyan-600 text-black"
                            : "bg-gradient-to-br from-purple-400 to-purple-600 text-white"
                        }`}
                      >
                        {event.id === "camcamp"
                          ? "CC"
                          : event.id === "spring-showcase"
                          ? "SS"
                          : "SN"}
                      </div>
 
                      <div>
                        {/* Status Badge */}
                        <div className="flex items-center gap-2 mb-2">
                          {event.status === "live" ? (
                            <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 font-semibold">
                              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                              LIVE NOW
                            </span>
                          ) : (
                            <span className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                              UPCOMING
                            </span>
                          )}
                        </div>
 
                        {/* Title */}
                        <h2
                          className={`text-2xl font-black ${
                            event.theme === "gold"
                              ? "text-gradient-gold"
                              : event.theme === "cyan"
                              ? "text-gradient-cyan"
                              : "text-purple-400"
                          }`}
                        >
                          {event.title}
                        </h2>
                        <p className="text-lg text-foreground font-medium">
                          {event.subtitle}
                        </p>
                        <p className="text-muted-foreground mt-1 max-w-lg">
                          {event.description}
                        </p>
 
                        {/* Date & Location */}
                        <div className="flex flex-wrap items-center gap-4 mt-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <CalendarIcon className="w-4 h-4" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPinIcon className="w-4 h-4" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
 
                    {/* Stats & CTA */}
                    <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-4">
                      {/* Stats */}
                      <div className="flex gap-6">
                        {Object.entries(event.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div
                              className={`text-2xl font-bold ${
                                event.theme === "gold"
                                  ? "text-amber-400"
                                  : event.theme === "cyan"
                                  ? "text-cyan-400"
                                  : "text-purple-400"
                              }`}
                            >
                              {typeof value === "number"
                                ? value.toLocaleString()
                                : value}
                            </div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                          </div>
                        ))}
                      </div>
 
                      {/* CTA Button */}
                      <Button
                        className={`${
                          event.theme === "gold"
                            ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black"
                            : event.theme === "cyan"
                            ? "btn-primary-glow text-primary-foreground"
                            : "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white"
                        } font-bold`}
                      >
                        {event.status === "live" ? "Vote Now →" : "Learn More →"}
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
 
      {/* Host Your Event CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-2xl p-12 text-center glow-cyan">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Host Your Event on Overall 99
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with us to bring your youth sports competition to the next level
              with digital voting, live rankings, and nationwide exposure.
            </p>
            <Button
              size="lg"
              className="btn-primary-glow text-primary-foreground font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
 
      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xl font-bold text-gradient-cyan">Overall 99</div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/athletes" className="hover:text-primary transition-colors">
                Athletes
              </Link>
              <Link href="/events" className="hover:text-primary transition-colors">
                Events
              </Link>
              <Link href="/marketplace" className="hover:text-primary transition-colors">
                NIL Marketplace
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Overall 99. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
 
 
 
================================================
FILE: src/app/events/camcamp/page.tsx
================================================
"use client";
 
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
 
// Event Configuration
const eventConfig = {
  navigation: [
    { id: 1, label: "Home", icon: "home", route: "/events/camcamp" },
    { id: 2, label: "Nominate", icon: "document", route: "/events/camcamp/nominate" },
    { id: 3, label: "Vote", icon: "checkbox", route: "/events/camcamp/vote" },
    { id: 4, label: "Leaderboard", icon: "chart", route: "/events/camcamp/leaderboard" },
    { id: 5, label: "Finalists", icon: "trophy", route: "/events/camcamp/finalists" },
    { id: 6, label: "Admin", icon: "settings", route: "/events/camcamp/admin" },
  ],
  hero: {
    title: "CAM CAMP FOOTBALL",
    subtitle: "PLAYER OF THE YEAR",
    poweredBy: {
      text: "powered by",
      logoText: "Overall 99",
    },
    description:
      "Vote for the top young athletes across 8 age groups and 5 positions",
  },
  votingActions: [
    {
      id: "free_vote",
      title: "1 Free Vote Daily",
      description: "Cast one free vote every 24 hours",
      icon: "lightning",
      theme: "gold",
    },
    {
      id: "paid_vote",
      title: "$1 = 1 Vote",
      description: "Donate to support CamCamp",
      icon: "heart",
      theme: "green",
    },
  ],
  eventInfo: {
    title: "LAS VEGAS CHAMPIONSHIP",
    date: "January 13th",
    description:
      "Top 5 finalists in each age group compete on-field to determine the ultimate champion",
    locationIcon: "map-pin",
  },
  ageGroups: [
    { id: "6u", label: "6U", description: "6 & Under" },
    { id: "7u", label: "7U", description: "7 & Under" },
    { id: "8u", label: "8U", description: "8 & Under" },
    { id: "9u", label: "9U", description: "9 & Under" },
    { id: "10u", label: "10U", description: "10 & Under" },
    { id: "11u", label: "11U", description: "11 & Under" },
    { id: "12u", label: "12U", description: "12 & Under" },
    { id: "13u", label: "13U", description: "13 & Under" },
  ],
  positions: [
    { id: "qb", label: "QB", description: "Quarterback" },
    { id: "rb", label: "RB", description: "Running Back" },
    { id: "wr", label: "WR", description: "Wide Receiver" },
    { id: "lb", label: "LB", description: "Linebacker" },
    { id: "db", label: "DB", description: "Defensive Back" },
  ],
};
 
// Sample nominees for demo
const sampleNominees = [
  {
    id: "1",
    name: "Marcus Williams Jr.",
    ageGroup: "10u",
    position: "qb",
    team: "Texas Elite",
    votes: 1234,
    rank: 1,
    imageUrl: null,
  },
  {
    id: "2",
    name: "Jayden Thompson",
    ageGroup: "10u",
    position: "rb",
    team: "Florida Gators Youth",
    votes: 1156,
    rank: 2,
    imageUrl: null,
  },
  {
    id: "3",
    name: "DeShawn Harris",
    ageGroup: "10u",
    position: "wr",
    team: "California Bears",
    votes: 998,
    rank: 3,
    imageUrl: null,
  },
  {
    id: "4",
    name: "Tyler Jackson",
    ageGroup: "10u",
    position: "lb",
    team: "Georgia Bulldogs Youth",
    votes: 876,
    rank: 4,
    imageUrl: null,
  },
  {
    id: "5",
    name: "Chris Martinez",
    ageGroup: "10u",
    position: "db",
    team: "Arizona Cardinals Youth",
    votes: 754,
    rank: 5,
    imageUrl: null,
  },
];
 
function LightningIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
 
function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
 
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
 
function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
 
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}
 
function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
    </svg>
  );
}
 
function CheckboxIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <polyline points="9,11 12,14 22,4" />
    </svg>
  );
}
 
function ChartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
      <polyline points="16,7 22,7 22,13" />
    </svg>
  );
}
 
function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
 
export default function CamCampEventPage() {
  const [selectedAgeGroup, setSelectedAgeGroup] = React.useState("10u");
  const [selectedPosition, setSelectedPosition] = React.useState("all");
  const [hasVotedToday, setHasVotedToday] = React.useState(false);
 
  const handleFreeVote = (nomineeId: string) => {
    if (!hasVotedToday) {
      console.log("Free vote for:", nomineeId);
      setHasVotedToday(true);
      // In real app, this would call an API
    }
  };
 
  const handlePaidVote = (nomineeId: string) => {
    console.log("Paid vote for:", nomineeId);
    // In real app, this would open payment flow
  };
 
  const pathname = usePathname();
 
  const getNavIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "home":
        return <HomeIcon className={className} />;
      case "document":
        return <DocumentIcon className={className} />;
      case "checkbox":
        return <CheckboxIcon className={className} />;
      case "chart":
        return <ChartIcon className={className} />;
      case "trophy":
        return <TrophyIcon className={className} />;
      case "settings":
        return <SettingsIcon className={className} />;
      default:
        return null;
    }
  };
 
  return (
    <div className="min-h-screen bg-background bg-gradient-radial">
      {/* Navigation - Navy Blue with Icons */}
      <nav className="bg-[#0F172A] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16 items-center">
            <div className="flex items-center gap-2">
              {eventConfig.navigation.map((item) => {
                const isActive = item.route === "/events/camcamp";
                return (
                  <Link
                    key={item.id}
                    href={item.route}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                      isActive
                        ? "bg-amber-500 text-black"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {getNavIcon(item.icon, "w-5 h-5")}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
 
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            {/* Powered by badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="text-muted-foreground text-sm">
                {eventConfig.hero.poweredBy.text}
              </span>
              <span className="text-gradient-cyan font-bold">
                {eventConfig.hero.poweredBy.logoText}
              </span>
            </div>
 
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight">
              <span className="text-gradient-gold">{eventConfig.hero.title}</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
              {eventConfig.hero.subtitle}
            </h2>
 
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              {eventConfig.hero.description}
            </p>
 
            {/* Voting Actions */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              {eventConfig.votingActions.map((action) => (
                <div
                  key={action.id}
                  className={`glass-strong rounded-xl p-6 text-center min-w-[200px] ${
                    action.theme === "gold" ? "glow-gold" : "glow-green"
                  }`}
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                      action.theme === "gold"
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {action.icon === "lightning" ? (
                      <LightningIcon className="w-6 h-6" />
                    ) : (
                      <HeartIcon className="w-6 h-6" />
                    )}
                  </div>
                  <h3
                    className={`font-bold text-lg ${
                      action.theme === "gold" ? "text-amber-400" : "text-green-400"
                    }`}
                  >
                    {action.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {action.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* Event Info Banner */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-2xl p-8 glow-cyan">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPinIcon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient-cyan">
                    {eventConfig.eventInfo.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {eventConfig.eventInfo.date}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-center md:text-right max-w-md">
                {eventConfig.eventInfo.description}
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Filters & Leaderboard */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">
                Age Group
              </label>
              <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
                <SelectTrigger className="w-[150px] glass">
                  <SelectValue placeholder="Select age" />
                </SelectTrigger>
                <SelectContent>
                  {eventConfig.ageGroups.map((group) => (
                    <SelectItem key={group.id} value={group.id}>
                      {group.label} - {group.description}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
 
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">
                Position
              </label>
              <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                <SelectTrigger className="w-[180px] glass">
                  <SelectValue placeholder="All Positions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Positions</SelectItem>
                  {eventConfig.positions.map((pos) => (
                    <SelectItem key={pos.id} value={pos.id}>
                      {pos.label} - {pos.description}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
 
          {/* Nominees Grid */}
          <div className="grid gap-4">
            {sampleNominees
              .filter(
                (n) =>
                  n.ageGroup === selectedAgeGroup &&
                  (selectedPosition === "all" || n.position === selectedPosition)
              )
              .map((nominee, index) => (
                <div
                  key={nominee.id}
                  className={`glass rounded-xl p-6 card-hover ${
                    index === 0 ? "border-2 border-amber-500/50 glow-gold" : ""
                  }`}
                >
                  <div className="flex items-center gap-6">
                    {/* Rank */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                        index === 0
                          ? "bg-gradient-to-br from-amber-400 to-amber-600 text-black"
                          : index === 1
                          ? "bg-gradient-to-br from-gray-300 to-gray-500 text-black"
                          : index === 2
                          ? "bg-gradient-to-br from-amber-600 to-amber-800 text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {nominee.rank}
                    </div>
 
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                      {nominee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
 
                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">
                        {nominee.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-muted-foreground">
                          {nominee.team}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium">
                          {eventConfig.positions.find((p) => p.id === nominee.position)
                            ?.label || nominee.position.toUpperCase()}
                        </span>
                      </div>
                    </div>
 
                    {/* Votes */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gradient-cyan">
                        {nominee.votes.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">votes</div>
                    </div>
 
                    {/* Vote Buttons */}
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleFreeVote(nominee.id)}
                        disabled={hasVotedToday}
                        variant="outline"
                        className={`${
                          hasVotedToday
                            ? "opacity-50"
                            : "hover:bg-amber-500/20 hover:text-amber-400 hover:border-amber-500"
                        }`}
                      >
                        <LightningIcon className="w-4 h-4 mr-2" />
                        Free Vote
                      </Button>
                      <Button
                        onClick={() => handlePaidVote(nominee.id)}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <HeartIcon className="w-4 h-4 mr-2" />
                        Donate Vote
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
 
          {/* No results */}
          {sampleNominees.filter(
            (n) =>
              n.ageGroup === selectedAgeGroup &&
              (selectedPosition === "all" || n.position === selectedPosition)
          ).length === 0 && (
            <div className="text-center py-12 glass rounded-xl">
              <TrophyIcon className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                No nominees yet
              </h3>
              <p className="text-muted-foreground mb-6">
                Be the first to nominate an athlete for this category!
              </p>
              <Button className="btn-primary-glow text-primary-foreground">
                Nominate Now
              </Button>
            </div>
          )}
        </div>
      </section>
 
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-2xl p-12 text-center glow-cyan">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Know a Future Star?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nominate a young athlete for the CAM CAMP Football Player of the Year
              award. Help them get the recognition they deserve!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-primary-glow text-primary-foreground font-semibold"
              >
                Nominate an Athlete
              </Button>
              <Button size="lg" variant="outline" className="glass">
                View All Categories
              </Button>
            </div>
          </div>
        </div>
      </section>
 
      {/* Charity Partners Section */}
      <section className="py-20 bg-[#0B0C2A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-4 border border-purple-500/30">
              Supporting Youth & Community
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Charity Partners
            </h2>
          </div>
 
          {/* Charity Cards */}
          <div className="space-y-6">
            {/* CamCamp Card */}
            <div className="bg-[#12133D] rounded-2xl p-6 md:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-black text-black">CC</span>
                  </div>
                </div>
 
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white">CamCamp</h3>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/30">
                      501(c)(3) Public Charity
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    The Youth Athlete of the Year Competition is part of a fundraising campaign to support
                    CamCamp's mission of empowering young athletes through sports education, mentorship,
                    and life skills development. Every vote and donation directly supports programs that
                    help youth athletes reach their full potential both on and off the field.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-amber-400">
                    <span className="text-sm font-medium">United States 501(c)(3) Public Charity</span>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Work It Well Project Card */}
            <div className="bg-[#12133D] rounded-2xl p-6 md:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-black text-white">WW</span>
                  </div>
                </div>
 
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white">Work It Well Project</h3>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/30">
                      501(c)(3) Charity Organization
                    </span>
                  </div>
 
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                      Our Mission
                    </span>
                  </div>
 
                  <p className="text-gray-300 leading-relaxed">
                    We serve underserved and vulnerable populations by providing resources, education,
                    and support systems that promote wellness, personal development, and community
                    engagement. Our programs focus on creating sustainable pathways to success for
                    individuals and families facing economic and social challenges.
                  </p>
 
                  <div className="mt-4">
                    <a
                      href="https://www.theworkitproject.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium"
                    >
                      <span>www.theworkitproject.org</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Kedu Africa Card */}
            <div className="bg-[#12133D] rounded-2xl p-6 md:p-8 border border-[#2D2F55] hover:border-purple-500/40 transition-colors">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-black text-white">KA</span>
                  </div>
                </div>
 
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white">Kedu Africa</h3>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/30">
                      Non-Profit Charity Organization
                    </span>
                  </div>
 
                  <p className="text-gray-300 leading-relaxed">
                    Kedu Africa is dedicated to empowering African communities through education,
                    healthcare initiatives, and sustainable development programs. Our mission is to
                    create lasting positive change by investing in local leaders and providing
                    resources that enable communities to thrive independently.
                  </p>
 
                  <div className="mt-4">
                    <a
                      href="https://keduafricatv.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium"
                    >
                      <span>keduafricatv.com</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          {/* Voting Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Free Daily Vote Card */}
            <div className="bg-[#12133D] rounded-xl p-6 border border-[#2D2F55] hover:border-amber-500/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <svg className="w-7 h-7 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Free Daily Vote</h4>
                  <p className="text-gray-400 text-sm">1 vote per day at no cost</p>
                </div>
              </div>
            </div>
 
            {/* Paid Vote Card */}
            <div className="bg-[#12133D] rounded-xl p-6 border border-[#2D2F55] hover:border-green-500/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v12M9 9h6M9 15h6" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">$1 Per Vote</h4>
                  <p className="text-gray-400 text-sm">Supports CamCamp, Work It Well & Kedu Africa</p>
                </div>
              </div>
            </div>
          </div>
 
          {/* Legal Disclaimer */}
          <div className="mt-8 p-4 rounded-xl border border-[#2D2F55] bg-[#0A0B24]">
            <p className="text-xs text-gray-500 leading-relaxed text-center">
              <strong className="text-gray-400">Tax Deduction Notice:</strong> CamCamp is a registered 501(c)(3)
              public charity (EIN: XX-XXXXXXX). Donations may be tax-deductible to the extent allowed by law.
              Please consult with a qualified tax advisor regarding the deductibility of your contribution.
              A portion of each paid vote is allocated to support CamCamp's youth athletic programs,
              Work It Well Project's community initiatives, and Kedu Africa's empowerment programs.
              No goods or services were provided in exchange for your contribution unless otherwise noted.
            </p>
          </div>
 
          {/* Donation CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Your donations make a real difference in young athletes' lives
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-semibold px-8">
              Support Our Charities
            </Button>
          </div>
        </div>
      </section>
 
      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gradient-gold">CAM CAMP</span>
              <span className="text-muted-foreground">×</span>
              <span className="text-xl font-bold text-gradient-cyan">Overall 99</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/event" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                href="/event/nominate"
                className="hover:text-primary transition-colors"
              >
                Nominate
              </Link>
              <Link href="/event/vote" className="hover:text-primary transition-colors">
                Vote
              </Link>
              <Link
                href="/event/leaderboard"
                className="hover:text-primary transition-colors"
              >
                Leaderboard
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 CAM CAMP × Overall 99
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
 
 
 
================================================
FILE: src/app/events/camcamp/finalists/page.tsx
================================================
"use client";
 
import * as React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
 
// Event Configuration
const eventConfig = {
  navigation: [
    { id: 1, label: "Home", icon: "home", route: "/events/camcamp" },
    { id: 2, label: "Nominate", icon: "document", route: "/events/camcamp/nominate" },
    { id: 3, label: "Vote", icon: "checkbox", route: "/events/camcamp/vote" },
    { id: 4, label: "Leaderboard", icon: "chart", route: "/events/camcamp/leaderboard" },
    { id: 5, label: "Finalists", icon: "trophy", route: "/events/camcamp/finalists" },
    { id: 6, label: "Admin", icon: "settings", route: "/events/camcamp/admin" },
  ],
  ageGroups: ["All Ages", "7u", "8u", "9u", "10u", "11u", "12u", "13u", "14u"],
  positions: ["All Positions", "QB", "RB", "WR", "O-Line", "D-Line"],
};
 
// Sample finalists data
const finalistsData = [
  { id: "1", rank: 1, name: "Marcus Williams Jr.", position: "QB", ageGroup: "10u", team: "Texas Elite", votes: 2847, imageUrl: null },
  { id: "2", rank: 2, name: "Jayden Thompson", position: "RB", ageGroup: "10u", team: "Florida Gators Youth", votes: 2654, imageUrl: null },
  { id: "3", rank: 3, name: "DeShawn Harris", position: "WR", ageGroup: "10u", team: "California Bears", votes: 2398, imageUrl: null },
  { id: "4", rank: 4, name: "Tyler Jackson", position: "QB", ageGroup: "11u", team: "Georgia Bulldogs Youth", votes: 2156, imageUrl: null },
  { id: "5", rank: 5, name: "Chris Martinez", position: "RB", ageGroup: "9u", team: "Arizona Cardinals Youth", votes: 1987, imageUrl: null },
];
 
// Icon Components
function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
 
function TrophyFilledIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6V2h12v2h1.5a2.5 2.5 0 0 1 0 5H18v2a6 6 0 0 1-5 5.91V19h2v2H9v-2h2v-2.09A6 6 0 0 1 6 11V9zm12-5H6v7a6 6 0 0 0 12 0V4z" />
    </svg>
  );
}
 
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}
 
function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
 
function CheckboxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <polyline points="9,11 12,14 22,4" />
    </svg>
  );
}
 
function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
      <polyline points="16,7 22,7 22,13" />
    </svg>
  );
}
 
function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
 
function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
 
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
 
function HeartFilledIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
 
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}
 
export default function FinalistsPage() {
  const [selectedAgeGroup, setSelectedAgeGroup] = React.useState("All Ages");
  const [selectedPosition, setSelectedPosition] = React.useState("All Positions");
 
  const getNavIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "home": return <HomeIcon className={className} />;
      case "document": return <DocumentIcon className={className} />;
      case "checkbox": return <CheckboxIcon className={className} />;
      case "chart": return <ChartIcon className={className} />;
      case "trophy": return <TrophyIcon className={className} />;
      case "settings": return <SettingsIcon className={className} />;
      default: return null;
    }
  };
 
  const filteredFinalists = finalistsData.filter((player) => {
    const matchesAge = selectedAgeGroup === "All Ages" || player.ageGroup === selectedAgeGroup.toLowerCase();
    const matchesPosition = selectedPosition === "All Positions" || player.position === selectedPosition;
    return matchesAge && matchesPosition;
  });
 
  return (
    <div className="min-h-screen bg-[#050A18]">
      {/* Navigation */}
      <nav className="bg-[#0F172A] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16 items-center">
            <div className="flex items-center gap-2">
              {eventConfig.navigation.map((item) => {
                const isActive = item.route === "/events/camcamp/finalists";
                return (
                  <Link
                    key={item.id}
                    href={item.route}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                      isActive
                        ? "bg-[#FDB913] text-black"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {getNavIcon(item.icon, "w-5 h-5")}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
 
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/football-field-bg.jpg')",
            filter: "blur(3px) brightness(0.25)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A18]/80 via-[#050A18]/60 to-[#050A18]" />
 
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Heart Over Everything Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-2xl shadow-amber-500/30">
              <div className="text-center">
                <HeartFilledIcon className="w-12 h-12 text-black mx-auto" />
                <span className="text-[8px] font-bold text-black uppercase tracking-wider">Heart Over Everything</span>
              </div>
            </div>
          </div>
 
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">CAM CAMP</h1>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#FDB913] mb-4">FOOTBALL PLAYER OF THE YEAR</h2>
        </div>
      </section>
 
      {/* Page Header Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top 5 Finalists Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FDB913]/20 border border-[#FDB913]/40 rounded-full px-4 py-2 mb-6">
            <TrophyIcon className="w-4 h-4 text-[#FDB913]" />
            <span className="text-[#FDB913] font-semibold text-sm">Top 5 Finalists</span>
          </div>
 
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Las Vegas Bound!</h2>
 
          {/* Subtitle */}
          <p className="text-gray-400 text-lg mb-8">Meet the top-voted finalists competing on-field</p>
        </div>
      </section>
 
      {/* Championship Event Card */}
      <section className="px-4 pb-12">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-[#2A1A1A] border-2 border-[#FDB913] overflow-hidden">
            <CardContent className="p-8 text-center">
              {/* Championship Event Label */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <CalendarIcon className="w-5 h-5 text-[#FDB913]" />
                <span className="text-white font-semibold tracking-wider">CHAMPIONSHIP EVENT</span>
              </div>
 
              {/* Date */}
              <h3 className="text-4xl md:text-5xl font-bold text-[#FDB913] mb-4">
                January 13th, 2025
              </h3>
 
              {/* Location */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPinIcon className="w-5 h-5 text-red-500" />
                <span className="text-white text-lg font-medium">Las Vegas, Nevada</span>
              </div>
 
              {/* Subtext */}
              <p className="text-gray-400 text-sm max-w-lg mx-auto">
                On-field competition to determine the ultimate Ovrall99 Football Player of the Year
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
 
      {/* Filter System */}
      <section className="px-4 pb-8">
        <div className="max-w-5xl mx-auto">
          {/* Age Group Filters */}
          <div className="mb-6">
            <p className="text-gray-400 text-sm mb-3 text-center">Filter by Age Group</p>
            <div className="flex flex-wrap justify-center gap-2">
              {eventConfig.ageGroups.map((age) => (
                <button
                  key={age}
                  onClick={() => setSelectedAgeGroup(age)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedAgeGroup === age
                      ? "bg-[#FDB913] text-black"
                      : "bg-[#1E293B] text-gray-400 border border-gray-600 hover:border-gray-500 hover:text-white"
                  }`}
                >
                  {age}
                </button>
              ))}
            </div>
          </div>
 
          {/* Position Filters */}
          <div>
            <p className="text-gray-400 text-sm mb-3 text-center">Filter by Position</p>
            <div className="flex flex-wrap justify-center gap-2">
              {eventConfig.positions.map((pos) => (
                <button
                  key={pos}
                  onClick={() => setSelectedPosition(pos)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedPosition === pos
                      ? "bg-[#FDB913] text-black"
                      : "bg-[#1E293B] text-gray-400 border border-gray-600 hover:border-gray-500 hover:text-white"
                  }`}
                >
                  {pos}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* Finalists Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {filteredFinalists.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFinalists.map((player) => (
                <Card
                  key={player.id}
                  className="bg-[#1E293B] border-gray-700/50 overflow-hidden hover:border-[#FDB913]/50 transition-all group"
                >
                  <CardContent className="p-0">
                    {/* Player Image/Avatar */}
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center">
                          <span className="text-4xl text-gray-400">
                            {player.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                      </div>
 
                      {/* Rank Badge */}
                      <div
                        className={`absolute top-3 left-3 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                          player.rank === 1
                            ? "bg-gradient-to-br from-yellow-400 to-amber-500"
                            : player.rank === 2
                            ? "bg-gradient-to-br from-gray-300 to-gray-400"
                            : player.rank === 3
                            ? "bg-gradient-to-br from-amber-600 to-amber-700"
                            : "bg-gradient-to-br from-gray-600 to-gray-700"
                        }`}
                      >
                        {player.rank <= 3 ? (
                          <div className="text-center">
                            <StarIcon className="w-4 h-4 text-white mx-auto" />
                            <span className="text-xs font-bold text-white">#{player.rank}</span>
                          </div>
                        ) : (
                          <span className="text-lg font-bold text-white">#{player.rank}</span>
                        )}
                      </div>
 
                      {/* Position Badge */}
                      <div className="absolute top-3 right-3 bg-[#6366F1] px-3 py-1 rounded-full">
                        <span className="text-white text-sm font-medium">{player.position}</span>
                      </div>
 
                      {/* Finalist Banner */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FDB913] to-[#FDB913]/80 py-2">
                        <div className="flex items-center justify-center gap-2">
                          <TrophyIcon className="w-4 h-4 text-black" />
                          <span className="text-black font-bold text-sm">FINALIST</span>
                        </div>
                      </div>
                    </div>
 
                    {/* Player Info */}
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-white mb-1">{player.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">{player.team}</p>
 
                      <div className="flex items-center justify-between">
                        <span className="bg-amber-500/20 text-amber-500 px-2 py-1 rounded text-xs font-medium">
                          {player.ageGroup.toUpperCase()}
                        </span>
                        <div className="text-right">
                          <span className="text-gray-500 text-xs block">Total Votes</span>
                          <span className="text-[#FDB913] font-bold">{player.votes.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16">
              <TrophyIcon className="w-24 h-24 text-gray-700 mx-auto mb-6" />
              <h3 className="text-xl font-medium text-gray-400">No finalists match your filters</h3>
              <p className="text-gray-500 mt-2">Try selecting different age groups or positions</p>
            </div>
          )}
        </div>
      </section>
 
      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <TrophyIcon className="w-5 h-5 text-[#FDB913]" />
              <span className="text-white font-semibold">CAM CAMP</span>
              <span className="text-gray-500">×</span>
              <span className="text-[#FDB913]">Overall 99</span>
            </div>
            <p className="text-sm text-gray-500">© 2024 CAM CAMP × Overall 99. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
 
 
 
================================================
FILE: src/app/events/camcamp/leaderboard/page.tsx
================================================
"use client";
 
import * as React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
 
// Event Configuration
const eventConfig = {
  navigation: [
    { id: 1, label: "Home", icon: "home", route: "/events/camcamp" },
    { id: 2, label: "Nominate", icon: "document", route: "/events/camcamp/nominate" },
    { id: 3, label: "Vote", icon: "checkbox", route: "/events/camcamp/vote" },
    { id: 4, label: "Leaderboard", icon: "chart", route: "/events/camcamp/leaderboard" },
    { id: 5, label: "Finalists", icon: "trophy", route: "/events/camcamp/finalists" },
    { id: 6, label: "Admin", icon: "settings", route: "/events/camcamp/admin" },
  ],
  ageGroups: [
    { id: "all", label: "All Age Groups" },
    { id: "6u", label: "6U" },
    { id: "7u", label: "7U" },
    { id: "8u", label: "8U" },
    { id: "9u", label: "9U" },
    { id: "10u", label: "10U" },
    { id: "11u", label: "11U" },
    { id: "12u", label: "12U" },
    { id: "13u", label: "13U" },
  ],
  positions: [
    { id: "all", label: "All Positions" },
    { id: "qb", label: "QB" },
    { id: "rb", label: "RB" },
    { id: "wr", label: "WR" },
    { id: "lb", label: "LB" },
    { id: "db", label: "DB" },
  ],
};
 
// Sample leaderboard data
const leaderboardData = [
  { id: "1", rank: 1, name: "Marcus Williams Jr.", position: "QB", ageGroup: "10U", team: "Texas Elite", votes: 2847, change: "up" },
  { id: "2", rank: 2, name: "Jayden Thompson", position: "RB", ageGroup: "10U", team: "Florida Gators Youth", votes: 2654, change: "up" },
  { id: "3", rank: 3, name: "DeShawn Harris", position: "WR", ageGroup: "9U", team: "California Bears", votes: 2398, change: "down" },
  { id: "4", rank: 4, name: "Tyler Jackson", position: "LB", ageGroup: "11U", team: "Georgia Bulldogs Youth", votes: 2156, change: "same" },
  { id: "5", rank: 5, name: "Chris Martinez", position: "DB", ageGroup: "10U", team: "Arizona Cardinals Youth", votes: 1987, change: "up" },
  { id: "6", rank: 6, name: "Brandon Lee", position: "QB", ageGroup: "12U", team: "Miami Dolphins Youth", votes: 1845, change: "down" },
  { id: "7", rank: 7, name: "Malik Johnson", position: "RB", ageGroup: "8U", team: "Dallas Cowboys Youth", votes: 1723, change: "up" },
  { id: "8", rank: 8, name: "Andre Davis", position: "WR", ageGroup: "10U", team: "New York Giants Youth", votes: 1654, change: "same" },
  { id: "9", rank: 9, name: "Jerome Smith", position: "LB", ageGroup: "13U", team: "Chicago Bears Youth", votes: 1532, change: "down" },
  { id: "10", rank: 10, name: "Kevin Brown", position: "DB", ageGroup: "11U", team: "Seattle Seahawks Youth", votes: 1478, change: "up" },
];
 
// Icon Components
function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
 
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}
 
function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
 
function CheckboxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <polyline points="9,11 12,14 22,4" />
    </svg>
  );
}
 
function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
      <polyline points="16,7 22,7 22,13" />
    </svg>
  );
}
 
function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
 
function TrendUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
      <polyline points="17,6 23,6 23,12" />
    </svg>
  );
}
 
function HeartFilledIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
 
function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <polyline points="18,15 12,9 6,15" />
    </svg>
  );
}
 
function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <polyline points="6,9 12,15 18,9" />
    </svg>
  );
}
 
function SortIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <polyline points="8,6 12,2 16,6" />
      <polyline points="8,18 12,22 16,18" />
    </svg>
  );
}
 
function ChangeIndicator({ change }: { change: string }) {
  if (change === "up") {
    return <ArrowUpIcon className="w-4 h-4 text-green-500" />;
  } else if (change === "down") {
    return <ArrowDownIcon className="w-4 h-4 text-red-500" />;
  }
  return <span className="w-4 h-4 text-gray-500">—</span>;
}
 
type SortField = "name" | "team" | "votes";
type SortDirection = "asc" | "desc";
 
export default function LeaderboardPage() {
  const [selectedAgeGroup, setSelectedAgeGroup] = React.useState("all");
  const [selectedPosition, setSelectedPosition] = React.useState("all");
  const [sortField, setSortField] = React.useState<SortField>("votes");
  const [sortDirection, setSortDirection] = React.useState<SortDirection>("desc");
  const [showEmptyState, setShowEmptyState] = React.useState(false);
 
  const getNavIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "home": return <HomeIcon className={className} />;
      case "document": return <DocumentIcon className={className} />;
      case "checkbox": return <CheckboxIcon className={className} />;
      case "chart": return <ChartIcon className={className} />;
      case "trophy": return <TrophyIcon className={className} />;
      case "settings": return <SettingsIcon className={className} />;
      default: return null;
    }
  };
 
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };
 
  const filteredData = leaderboardData.filter((player) => {
    const matchesAge = selectedAgeGroup === "all" || player.ageGroup.toLowerCase() === selectedAgeGroup;
    const matchesPosition = selectedPosition === "all" || player.position.toLowerCase() === selectedPosition;
    return matchesAge && matchesPosition;
  });
 
  const sortedData = [...filteredData].sort((a, b) => {
    let comparison = 0;
    if (sortField === "name") {
      comparison = a.name.localeCompare(b.name);
    } else if (sortField === "team") {
      comparison = a.team.localeCompare(b.team);
    } else if (sortField === "votes") {
      comparison = a.votes - b.votes;
    }
    return sortDirection === "asc" ? comparison : -comparison;
  });
 
  const displayData = showEmptyState ? [] : sortedData;
 
  return (
    <div className="min-h-screen bg-[#050A18]">
      {/* Navigation */}
      <nav className="bg-[#0F172A] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16 items-center">
            <div className="flex items-center gap-2">
              {eventConfig.navigation.map((item) => {
                const isActive = item.route === "/events/camcamp/leaderboard";
                return (
                  <Link
                    key={item.id}
                    href={item.route}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                      isActive
                        ? "bg-[#FDB913] text-black"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {getNavIcon(item.icon, "w-5 h-5")}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
 
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/football-stadium-bg.jpg')",
            filter: "blur(3px) brightness(0.25)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A18]/80 via-[#050A18]/60 to-[#050A18]" />
 
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Heart Over Everything Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-2xl shadow-amber-500/30">
              <div className="text-center">
                <HeartFilledIcon className="w-12 h-12 text-black mx-auto" />
                <span className="text-[8px] font-bold text-black uppercase tracking-wider">Heart Over Everything</span>
              </div>
            </div>
          </div>
 
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">CAM CAMP</h1>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#FDB913] mb-4">FOOTBALL PLAYER OF THE YEAR</h2>
        </div>
      </section>
 
      {/* Leaderboard Header Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Live Rankings Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FDB913]/20 border border-[#FDB913]/40 rounded-full px-4 py-2 mb-6">
            <TrendUpIcon className="w-4 h-4 text-[#FDB913]" />
            <span className="text-[#FDB913] font-semibold text-sm">Live Rankings</span>
          </div>
 
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Vote Leaderboard</h2>
 
          {/* Subtext */}
          <p className="text-gray-400 text-lg mb-8">Top players ranked by total votes received</p>
 
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
              <SelectTrigger className="w-[180px] bg-[#1E293B] border-gray-600 text-white">
                <SelectValue placeholder="Age Group" />
              </SelectTrigger>
              <SelectContent className="bg-[#1E293B] border-gray-600">
                {eventConfig.ageGroups.map((group) => (
                  <SelectItem key={group.id} value={group.id} className="text-white hover:bg-white/10">
                    {group.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
 
            <Select value={selectedPosition} onValueChange={setSelectedPosition}>
              <SelectTrigger className="w-[180px] bg-[#1E293B] border-gray-600 text-white">
                <SelectValue placeholder="Position" />
              </SelectTrigger>
              <SelectContent className="bg-[#1E293B] border-gray-600">
                {eventConfig.positions.map((pos) => (
                  <SelectItem key={pos.id} value={pos.id} className="text-white hover:bg-white/10">
                    {pos.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
 
            {/* Toggle for demo */}
            <button
              onClick={() => setShowEmptyState(!showEmptyState)}
              className="px-4 py-2 text-xs bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600"
            >
              {showEmptyState ? "Show Data" : "Show Empty State"}
            </button>
          </div>
        </div>
      </section>
 
      {/* Leaderboard Table */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-[#0F172A] border-gray-700/50 overflow-hidden">
            <CardContent className="p-0">
              {displayData.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px]">
                    <thead>
                      <tr className="border-b border-gray-700/50">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400 w-16">#</th>
                        <th className="px-6 py-4 text-left">
                          <button
                            onClick={() => handleSort("name")}
                            className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                          >
                            Player Name
                            {sortField === "name" ? (
                              sortDirection === "desc" ? <ArrowDownIcon className="w-4 h-4" /> : <ArrowUpIcon className="w-4 h-4" />
                            ) : (
                              <SortIcon className="w-4 h-4 opacity-50" />
                            )}
                          </button>
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Position</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Age Group</th>
                        <th className="px-6 py-4 text-left">
                          <button
                            onClick={() => handleSort("team")}
                            className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                          >
                            Team
                            {sortField === "team" ? (
                              sortDirection === "desc" ? <ArrowDownIcon className="w-4 h-4" /> : <ArrowUpIcon className="w-4 h-4" />
                            ) : (
                              <SortIcon className="w-4 h-4 opacity-50" />
                            )}
                          </button>
                        </th>
                        <th className="px-6 py-4 text-right">
                          <button
                            onClick={() => handleSort("votes")}
                            className="flex items-center gap-2 text-sm font-semibold text-[#FDB913] hover:text-amber-400 transition-colors ml-auto"
                          >
                            Total Votes
                            {sortField === "votes" ? (
                              sortDirection === "desc" ? <ArrowDownIcon className="w-4 h-4" /> : <ArrowUpIcon className="w-4 h-4" />
                            ) : (
                              <SortIcon className="w-4 h-4 opacity-50" />
                            )}
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayData.map((player, index) => (
                        <tr
                          key={player.id}
                          className={`border-b border-gray-700/30 hover:bg-white/5 transition-colors ${
                            index < 5 ? "bg-[#FDB913]/5" : ""
                          }`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                                  player.rank === 1
                                    ? "bg-[#FDB913] text-black"
                                    : player.rank === 2
                                    ? "bg-gray-300 text-black"
                                    : player.rank === 3
                                    ? "bg-amber-700 text-white"
                                    : "bg-gray-700 text-white"
                                }`}
                              >
                                {player.rank}
                              </span>
                              <ChangeIndicator change={player.change} />
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                                <span className="text-sm font-medium text-gray-400">
                                  {player.name.split(" ").map(n => n[0]).join("")}
                                </span>
                              </div>
                              <span className="font-semibold text-white">{player.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-[#6366F1]/20 text-[#6366F1] rounded-full text-sm font-medium">
                              {player.position}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-amber-500/20 text-amber-500 rounded-full text-sm font-medium">
                              {player.ageGroup}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-300">{player.team}</td>
                          <td className="px-6 py-4 text-right">
                            <span className="font-bold text-[#FDB913] text-lg">
                              {player.votes.toLocaleString()}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                /* Empty State */
                <div className="py-24 text-center">
                  <TrophyIcon className="w-24 h-24 text-gray-700 mx-auto mb-6" />
                  <h3 className="text-xl font-medium text-gray-400">No players available yet</h3>
                  <p className="text-gray-500 mt-2">Check back soon for updated rankings</p>
                </div>
              )}
            </CardContent>
          </Card>
 
          {/* Results Count */}
          {displayData.length > 0 && (
            <div className="mt-4 text-center text-gray-500 text-sm">
              Showing {displayData.length} of {leaderboardData.length} players
            </div>
          )}
        </div>
      </section>
 
      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <TrophyIcon className="w-5 h-5 text-[#FDB913]" />
              <span className="text-white font-semibold">CAM CAMP</span>
              <span className="text-gray-500">×</span>
              <span className="text-[#FDB913]">Overall 99</span>
            </div>
            <p className="text-sm text-gray-500">© 2024 CAM CAMP × Overall 99. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
 
 
 
================================================
FILE: src/app/events/camcamp/nominate/page.tsx
================================================
"use client";
 
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
 
// Navigation Configuration
const navigation = [
  { id: 1, label: "Home", icon: "home", route: "/events/camcamp" },
  { id: 2, label: "Nominate", icon: "document", route: "/events/camcamp/nominate" },
  { id: 3, label: "Vote", icon: "checkbox", route: "/events/camcamp/vote" },
  { id: 4, label: "Leaderboard", icon: "chart", route: "/events/camcamp/leaderboard" },
  { id: 5, label: "Finalists", icon: "trophy", route: "/events/camcamp/finalists" },
  { id: 6, label: "Admin", icon: "settings", route: "/events/camcamp/admin" },
];
 
const ageGroups = [
  { id: "6u", label: "6U - 6 & Under" },
  { id: "7u", label: "7U - 7 & Under" },
  { id: "8u", label: "8U - 8 & Under" },
  { id: "9u", label: "9U - 9 & Under" },
  { id: "10u", label: "10U - 10 & Under" },
  { id: "11u", label: "11U - 11 & Under" },
  { id: "12u", label: "12U - 12 & Under" },
  { id: "13u", label: "13U - 13 & Under" },
];
 
const positions = [
  { id: "qb", label: "QB - Quarterback" },
  { id: "rb", label: "RB - Running Back" },
  { id: "wr", label: "WR - Wide Receiver" },
  { id: "te", label: "TE - Tight End" },
  { id: "ol", label: "OL - Offensive Line" },
  { id: "dl", label: "DL - Defensive Line" },
  { id: "lb", label: "LB - Linebacker" },
  { id: "db", label: "DB - Defensive Back" },
  { id: "k", label: "K - Kicker" },
  { id: "ath", label: "ATH - Athlete" },
];
 
// Icon Components
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}
 
function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
 
function CheckboxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <polyline points="9,11 12,14 22,4" />
    </svg>
  );
}
 
function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
      <polyline points="16,7 22,7 22,13" />
    </svg>
  );
}
 
function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
 
function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
 
function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
 
function TrophyIconFilled({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 3h14v4a7 7 0 0 1-7 7 7 7 0 0 1-7-7V3zm-2 0v4a4 4 0 0 0 4 4H5a9 9 0 0 1-2-5.5V3zm18 0v.5A9 9 0 0 1 19 9h-2a4 4 0 0 0 4-4V3zM10 16h4v2h-4v-2zm-2 4h8v2H8v-2z" />
    </svg>
  );
}
 
function GamepadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 12h4M8 10v4M15 11h.01M18 13h.01" />
    </svg>
  );
}
 
function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
 
function RulerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  );
}
 
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}
 
function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}
 
function VideoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="23,7 16,12 23,17" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}
 
function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
 
function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
 
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
 
function UploadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17,8 12,3 7,8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}
 
export default function NominatePage() {
  const [formData, setFormData] = React.useState({
    playerName: "",
    ageGroup: "",
    position: "",
    teamName: "",
    city: "",
    state: "",
    height: "",
    weight: "",
    gamesPlayed: "",
    touchdowns: "",
    yards: "",
    additionalStats: "",
    achievements: "",
    playerPhoto: null as File | null,
    highlightVideoUrl: "",
    coachName: "",
    coachEmail: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
  });
 
  const [photoPreview, setPhotoPreview] = React.useState<string | null>(null);
 
  const getNavIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "home":
        return <HomeIcon className={className} />;
      case "document":
        return <DocumentIcon className={className} />;
      case "checkbox":
        return <CheckboxIcon className={className} />;
      case "chart":
        return <ChartIcon className={className} />;
      case "trophy":
        return <TrophyIcon className={className} />;
      case "settings":
        return <SettingsIcon className={className} />;
      default:
        return null;
    }
  };
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In real app, this would call an API
  };
 
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
 
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, playerPhoto: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
 
  return (
    <div className="min-h-screen bg-[#050A18] font-sans">
      {/* Navigation - Navy Blue with Icons */}
      <nav className="bg-[#0F172A] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16 items-center overflow-x-auto">
            <div className="flex items-center gap-1 sm:gap-2">
              {navigation.map((item) => {
                const isActive = item.route === "/events/camcamp/nominate";
                return (
                  <Link
                    key={item.id}
                    href={item.route}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium transition-all text-sm sm:text-base whitespace-nowrap ${
                      isActive
                        ? "bg-[#FDB913] text-black"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {getNavIcon(item.icon, "w-4 h-4 sm:w-5 sm:h-5")}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
 
      {/* SECTION 1: Hero Header with Football Field Background */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Football Field Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A18]/90 via-[#050A18]/85 to-[#050A18]" />
 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            {/* Heart Over Everything Logo */}
            <div className="mx-auto mb-6 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#1E4D8C] to-[#0A2744] border-4 border-white/20 flex flex-col items-center justify-center shadow-2xl">
              <HeartIcon className="w-6 h-6 md:w-8 md:h-8 text-white mb-1" />
              <span className="text-white text-[9px] md:text-xs font-bold uppercase tracking-wider text-center px-2 leading-tight">
                Heart Over Everything
              </span>
              <span className="text-[#FDB913] text-xs md:text-sm font-black uppercase mt-0.5">
                Cam Camp
              </span>
            </div>
 
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white mb-1">
              CAM CAMP
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight text-[#FDB913]">
              FOOTBALL PLAYER OF THE YEAR
            </h2>
          </div>
        </div>
      </section>
 
      {/* NOMINATION FORM */}
      <section className="py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FDB913]/20 border border-[#FDB913]/40">
              <TrophyIconFilled className="w-5 h-5 text-[#FDB913]" />
              <span className="text-[#FDB913] font-semibold">Player Nomination</span>
            </div>
          </div>
 
          {/* Heading */}
          <div className="text-center mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Nominate a Player
            </h3>
            <p className="text-gray-400 text-lg">
              Help us recognize exceptional young football talent
            </p>
          </div>
 
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Card 1: Player Information */}
            <div className="bg-[#0B1120] border border-[#1E293B] rounded-2xl p-5 sm:p-7">
              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
                <div className="w-1 h-6 bg-[#FDB913] rounded-full"></div>
                Player Information
              </h4>
 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Player Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Player Name <span className="text-[#FDB913]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.playerName}
                    onChange={(e) => handleInputChange("playerName", e.target.value)}
                    placeholder="Enter player's full name"
                    className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors"
                    required
                  />
                </div>
 
                {/* Age Group */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Age Group <span className="text-[#FDB913]">*</span>
                  </label>
                  <Select
                    value={formData.ageGroup}
                    onValueChange={(value) => handleInputChange("ageGroup", value)}
                  >
                    <SelectTrigger className="w-full px-4 py-3 h-auto bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913]">
                      <SelectValue placeholder="Select age group" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0F172A] border-[#1E293B]">
                      {ageGroups.map((group) => (
                        <SelectItem key={group.id} value={group.id} className="text-white hover:bg-[#1E293B] focus:bg-[#1E293B]">
                          {group.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
 
                {/* Position */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Position <span className="text-[#FDB913]">*</span>
                  </label>
                  <Select
                    value={formData.position}
                    onValueChange={(value) => handleInputChange("position", value)}
                  >
                    <SelectTrigger className="w-full px-4 py-3 h-auto bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913]">
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0F172A] border-[#1E293B]">
                      {positions.map((pos) => (
                        <SelectItem key={pos.id} value={pos.id} className="text-white hover:bg-[#1E293B] focus:bg-[#1E293B]">
                          {pos.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
 
                {/* Team Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Team Name <span className="text-[#FDB913]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.teamName}
                    onChange={(e) => handleInputChange("teamName", e.target.value)}
                    placeholder="Enter team name"
                    className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors"
                    required
                  />
                </div>
 
                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="Enter city"
                    className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors"
                  />
                </div>
 
                {/* State */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    State
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    placeholder="Enter state"
                    className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors"
                  />
                </div>
 
                {/* Height */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Height
                  </label>
                  <input
                    type="text"
                    value={formData.height}
                    onChange={(e) => handleInputChange("height", e.target.value)}
                    placeholder="e.g., 5'2&quot;"
                    className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors"
                  />
                </div>
 
                {/* Weight */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Weight
                  </label>
                  <input
                    type="text"
                    value={formData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                    placeholder="e.g., 95 lbs"
                    className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors"
                  />
                </div>
              </div>
            </div>
 
            {/* Card 2: Season Statistics */}
            <div className="bg-[#0B1120] border border-[#1E293B] rounded-2xl p-5 sm:p-7">
              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
                <div className="w-1 h-6 bg-[#FDB913] rounded-full"></div>
                Season Statistics
              </h4>
 
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
                {/* Games Played */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 flex items-center gap-2">
                    <GamepadIcon className="w-4 h-4 text-[#FDB913]" />
                    Games Played
                  </label>
                  <input
                    type="number"
                    value={formData.gamesPlayed}
                    onChange={(e) => handleInputChange("gamesPlayed", e.target.value)}
                    placeholder="0"
                    className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors text-center text-lg font-semibold"
                  />
                </div>
 
                {/* Touchdowns */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 flex items-center gap-2">
                    <TargetIcon className="w-4 h-4 text-[#FDB913]" />
                    Touchdowns
                  </label>
                  <input
                    type="number"
                    value={formData.touchdowns}
                    onChange={(e) => handleInputChange("touchdowns", e.target.value)}
                    placeholder="0"
                    className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors text-center text-lg font-semibold"
                  />
                </div>
 
                {/* Yards */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 flex items-center gap-2">
                    <RulerIcon className="w-4 h-4 text-[#FDB913]" />
                    Yards
                  </label>
                  <input
                    type="number"
                    value={formData.yards}
                    onChange={(e) => handleInputChange("yards", e.target.value)}
                    placeholder="0"
                    className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors text-center text-lg font-semibold"
                  />
                </div>
              </div>
 
              {/* Additional Stats */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Additional Stats
                </label>
                <textarea
                  value={formData.additionalStats}
                  onChange={(e) => handleInputChange("additionalStats", e.target.value)}
                  placeholder="Completions, sacks, interceptions, etc."
                  rows={3}
                  className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors resize-none"
                />
              </div>
            </div>
 
            {/* Card 3: Achievements & Honors */}
            <div className="bg-[#0B1120] border border-[#1E293B] rounded-2xl p-5 sm:p-7">
              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
                <div className="w-1 h-6 bg-[#FDB913] rounded-full"></div>
                <StarIcon className="w-5 h-5 text-[#FDB913]" />
                Achievements & Honors
              </h4>
 
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  List any awards, recognitions, or accomplishments
                </label>
                <textarea
                  value={formData.achievements}
                  onChange={(e) => handleInputChange("achievements", e.target.value)}
                  placeholder="All-star selections, MVP awards, championship titles, etc."
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors resize-none"
                />
              </div>
            </div>
 
            {/* Card 4: Media */}
            <div className="bg-[#0B1120] border border-[#1E293B] rounded-2xl p-5 sm:p-7">
              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
                <div className="w-1 h-6 bg-[#FDB913] rounded-full"></div>
                <CameraIcon className="w-5 h-5 text-[#FDB913]" />
                Media
              </h4>
 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Player Photo */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Player Photo
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="playerPhoto"
                    />
                    <label
                      htmlFor="playerPhoto"
                      className="flex flex-col items-center justify-center w-full h-32 bg-[#0F172A]/80 border-2 border-dashed border-[#1E293B] rounded-xl cursor-pointer hover:border-[#FDB913] transition-colors"
                    >
                      {photoPreview ? (
                        <img src={photoPreview} alt="Preview" className="h-full w-full object-cover rounded-xl" />
                      ) : (
                        <>
                          <UploadIcon className="w-8 h-8 text-gray-500 mb-2" />
                          <span className="text-sm text-gray-500">Click to upload photo</span>
                        </>
                      )}
                    </label>
                  </div>
                </div>
 
                {/* Highlight Video URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 flex items-center gap-2">
                    <VideoIcon className="w-4 h-4 text-[#FDB913]" />
                    Highlight Video URL
                  </label>
                  <input
                    type="url"
                    value={formData.highlightVideoUrl}
                    onChange={(e) => handleInputChange("highlightVideoUrl", e.target.value)}
                    placeholder="https://youtube.com/watch?v=..."
                    className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-1.5">YouTube, Hudl, or other video link</p>
                </div>
              </div>
            </div>
 
            {/* Card 5: Coach Information */}
            <div className="bg-[#0B1120] border border-[#1E293B] rounded-2xl p-5 sm:p-7">
              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
                <div className="w-1 h-6 bg-[#FDB913] rounded-full"></div>
                <UserIcon className="w-5 h-5 text-[#FDB913]" />
                Coach Information
              </h4>
 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Coach Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Coach Name
                  </label>
                  <input
                    type="text"
                    value={formData.coachName}
                    onChange={(e) => handleInputChange("coachName", e.target.value)}
                    placeholder="Enter coach's name"
                    className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors"
                  />
                </div>
 
                {/* Coach Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 flex items-center gap-2">
                    <MailIcon className="w-4 h-4 text-[#FDB913]" />
                    Coach Email
                  </label>
                  <input
                    type="email"
                    value={formData.coachEmail}
                    onChange={(e) => handleInputChange("coachEmail", e.target.value)}
                    placeholder="coach@team.com"
                    className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors"
                  />
                </div>
              </div>
            </div>
 
            {/* Card 6: Parent/Guardian Contact */}
            <div className="bg-[#0B1120] border border-[#1E293B] rounded-2xl p-5 sm:p-7">
              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
                <div className="w-1 h-6 bg-[#FDB913] rounded-full"></div>
                <UserIcon className="w-5 h-5 text-[#FDB913]" />
                Parent/Guardian Contact
              </h4>
 
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Parent Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Parent/Guardian Name <span className="text-[#FDB913]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => handleInputChange("parentName", e.target.value)}
                      placeholder="Enter parent's name"
                      className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors"
                      required
                    />
                  </div>
 
                  {/* Parent Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5 flex items-center gap-2">
                      <MailIcon className="w-4 h-4 text-[#FDB913]" />
                      Parent/Guardian Email <span className="text-[#FDB913]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.parentEmail}
                      onChange={(e) => handleInputChange("parentEmail", e.target.value)}
                      placeholder="parent@email.com"
                      className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors"
                      required
                    />
                  </div>
                </div>
 
                {/* Parent Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-[#FDB913]" />
                    Parent/Guardian Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.parentPhone}
                    onChange={(e) => handleInputChange("parentPhone", e.target.value)}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 bg-[#0F172A]/80 border border-[#1E293B] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FDB913] focus:ring-1 focus:ring-[#FDB913] transition-colors"
                  />
                </div>
              </div>
            </div>
 
            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full py-5 h-auto bg-[#FDB913] hover:bg-[#E5A811] text-black font-black text-lg rounded-xl transition-colors shadow-lg shadow-[#FDB913]/20 uppercase tracking-wide"
              >
                <TrophyIconFilled className="w-6 h-6 mr-3" />
                SUBMIT NOMINATION
              </Button>
            </div>
 
            {/* Info Text */}
            <p className="text-center text-sm text-gray-500">
              By submitting this nomination, you confirm that the information provided is accurate and you have consent to share the player's information.
            </p>
          </form>
        </div>
      </section>
 
      {/* Footer */}
      <footer className="py-8 border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#FDB913]">CAM CAMP</span>
              <span className="text-gray-600">×</span>
              <span className="text-xl font-bold text-cyan-400">Overall 99</span>
            </div>
            <p className="text-sm text-gray-500">
              © 2025 CAM CAMP × Overall 99. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
 
 
 
================================================
FILE: src/app/events/camcamp/vote/page.tsx
================================================
"use client";
 
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
 
// Event Configuration
const eventConfig = {
  navigation: [
    { id: 1, label: "Home", icon: "home", route: "/events/camcamp" },
    { id: 2, label: "Nominate", icon: "document", route: "/events/camcamp/nominate" },
    { id: 3, label: "Vote", icon: "checkbox", route: "/events/camcamp/vote" },
    { id: 4, label: "Leaderboard", icon: "chart", route: "/events/camcamp/leaderboard" },
    { id: 5, label: "Finalists", icon: "trophy", route: "/events/camcamp/finalists" },
    { id: 6, label: "Admin", icon: "settings", route: "/events/camcamp/admin" },
  ],
  ageGroups: [
    { id: "6u", label: "6U", description: "6 & Under" },
    { id: "7u", label: "7U", description: "7 & Under" },
    { id: "8u", label: "8U", description: "8 & Under" },
    { id: "9u", label: "9U", description: "9 & Under" },
    { id: "10u", label: "10U", description: "10 & Under" },
    { id: "11u", label: "11U", description: "11 & Under" },
    { id: "12u", label: "12U", description: "12 & Under" },
    { id: "13u", label: "13U", description: "13 & Under" },
  ],
  positions: [
    { id: "all", label: "All Positions", description: "All Positions" },
    { id: "qb", label: "QB", description: "Quarterback" },
    { id: "rb", label: "RB", description: "Running Back" },
    { id: "wr", label: "WR", description: "Wide Receiver" },
    { id: "lb", label: "LB", description: "Linebacker" },
    { id: "db", label: "DB", description: "Defensive Back" },
  ],
  charityPartners: [
    {
      id: "camcamp",
      name: "CamCamp",
      logo: "/camcamp-logo.png",
      taxId: "Tax ID: 88-1234567",
      description: "Supporting and empowering young athletes through sports programs",
    },
    {
      id: "workitwell",
      name: "Work It Well Project",
      logo: "/workitwell-logo.png",
      website: "workitwellproject.org",
      description: "Serving underserved populations with safe, holistic opportunities",
    },
  ],
};
 
// Sample nominees for voting
const sampleNominees = [
  {
    id: "1",
    name: "Marcus Williams Jr.",
    ageGroup: "10u",
    position: "qb",
    team: "Texas Elite",
    votes: 1234,
    rank: 1,
    imageUrl: null,
  },
  {
    id: "2",
    name: "Jayden Thompson",
    ageGroup: "10u",
    position: "rb",
    team: "Florida Gators Youth",
    votes: 1156,
    rank: 2,
    imageUrl: null,
  },
  {
    id: "3",
    name: "DeShawn Harris",
    ageGroup: "10u",
    position: "wr",
    team: "California Bears",
    votes: 998,
    rank: 3,
    imageUrl: null,
  },
  {
    id: "4",
    name: "Tyler Jackson",
    ageGroup: "10u",
    position: "lb",
    team: "Georgia Bulldogs Youth",
    votes: 876,
    rank: 4,
    imageUrl: null,
  },
  {
    id: "5",
    name: "Chris Martinez",
    ageGroup: "10u",
    position: "db",
    team: "Arizona Cardinals Youth",
    votes: 754,
    rank: 5,
    imageUrl: null,
  },
  {
    id: "6",
    name: "Brandon Lee",
    ageGroup: "10u",
    position: "qb",
    team: "Miami Dolphins Youth",
    votes: 689,
    rank: 6,
    imageUrl: null,
  },
];
 
// Icon Components
function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
 
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}
 
function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
    </svg>
  );
}
 
function CheckboxIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <polyline points="9,11 12,14 22,4" />
    </svg>
  );
}
 
function ChartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
      <polyline points="16,7 22,7 22,13" />
    </svg>
  );
}
 
function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
 
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="20,6 9,17 4,12" />
    </svg>
  );
}
 
function HeartFilledIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
 
function LightningIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
 
function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
 
export default function VotePage() {
  const [selectedAgeGroup, setSelectedAgeGroup] = React.useState("10u");
  const [selectedPosition, setSelectedPosition] = React.useState("all");
  const [votedNominees, setVotedNominees] = React.useState<string[]>([]);
  const [hasUsedFreeVote, setHasUsedFreeVote] = React.useState(false);
 
  const handleFreeVote = (nomineeId: string) => {
    if (!hasUsedFreeVote) {
      setVotedNominees([...votedNominees, nomineeId]);
      setHasUsedFreeVote(true);
    }
  };
 
  const handlePaidVote = (nomineeId: string) => {
    // In real app, this would open payment flow
    console.log("Paid vote for:", nomineeId);
  };
 
  const getNavIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "home":
        return <HomeIcon className={className} />;
      case "document":
        return <DocumentIcon className={className} />;
      case "checkbox":
        return <CheckboxIcon className={className} />;
      case "chart":
        return <ChartIcon className={className} />;
      case "trophy":
        return <TrophyIcon className={className} />;
      case "settings":
        return <SettingsIcon className={className} />;
      default:
        return null;
    }
  };
 
  const filteredNominees = sampleNominees.filter((nominee) => {
    const matchesAge = nominee.ageGroup === selectedAgeGroup;
    const matchesPosition = selectedPosition === "all" || nominee.position === selectedPosition;
    return matchesAge && matchesPosition;
  });
 
  return (
    <div className="min-h-screen bg-[#050A18]">
      {/* Navigation - Navy Blue with Icons */}
      <nav className="bg-[#0F172A] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16 items-center">
            <div className="flex items-center gap-2">
              {eventConfig.navigation.map((item) => {
                const isActive = item.route === "/events/camcamp/vote";
                return (
                  <Link
                    key={item.id}
                    href={item.route}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                      isActive
                        ? "bg-[#FDB913] text-black"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {getNavIcon(item.icon, "w-5 h-5")}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
 
      {/* Hero Section with Football Field Background */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Image - Football Field (blurred) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/football-field-bg.jpg')",
            filter: "blur(3px) brightness(0.3)",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A18]/80 via-[#050A18]/60 to-[#050A18]" />
 
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Heart Over Everything Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-2xl shadow-amber-500/30">
              <div className="text-center">
                <HeartFilledIcon className="w-12 h-12 text-black mx-auto" />
                <span className="text-[8px] font-bold text-black uppercase tracking-wider">Heart Over Everything</span>
              </div>
            </div>
          </div>
 
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            CAM CAMP
          </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#FDB913] mb-4">
            FOOTBALL PLAYER OF THE YEAR
          </h2>
        </div>
      </section>
 
      {/* Voting Header Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Online Voting Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FDB913]/20 border border-[#FDB913]/40 rounded-full px-4 py-2 mb-6">
            <CheckIcon className="w-4 h-4 text-[#FDB913]" />
            <span className="text-[#FDB913] font-semibold text-sm">Online Voting</span>
          </div>
 
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vote for Your Favorites
          </h2>
 
          {/* Subtext */}
          <p className="text-gray-400 text-lg mb-8">
            Help select the top 5 finalists in each age group and position
          </p>
 
          {/* Announcement Banner */}
          <div className="bg-gradient-to-r from-amber-900/40 to-amber-800/40 border border-[#FDB913]/50 rounded-xl px-6 py-4 inline-flex items-center gap-4">
            <TrophyIcon className="w-8 h-8 text-[#FDB913]" />
            <span className="text-[#FDB913] font-bold text-lg">
              Top 5 finalists compete in Las Vegas on January 13th!
            </span>
          </div>
        </div>
      </section>
 
      {/* Charity Partners Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#0F172A] border-gray-700/50">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#6366F1] flex items-center justify-center">
                  <HeartFilledIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Supporting Our Charity Partners</h3>
                  <p className="text-gray-400">Your votes support two great causes</p>
                </div>
              </div>
 
              {/* Partner Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* CamCamp Partner */}
                <div className="bg-[#1E293B] border border-gray-600/50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                      <span className="text-black font-bold text-sm">CC</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">CamCamp</h4>
                      <p className="text-gray-500 text-xs">Tax ID: 88-1234567</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Supporting and empowering young athletes through sports programs
                  </p>
                </div>
 
                {/* Work It Well Project Partner */}
                <div className="bg-[#1E293B] border border-gray-600/50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">WW</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Work It Well Project</h4>
                      <a
                        href="https://workitwellproject.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6366F1] text-xs hover:underline flex items-center gap-1"
                      >
                        workitwellproject.org
                        <ExternalLinkIcon className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Serving underserved populations with safe, holistic opportunities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
 
      {/* Voting Filters */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {/* Age Group Filter */}
            <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
              <SelectTrigger className="w-[180px] bg-[#1E293B] border-gray-600 text-white">
                <SelectValue placeholder="Select Age Group" />
              </SelectTrigger>
              <SelectContent className="bg-[#1E293B] border-gray-600">
                {eventConfig.ageGroups.map((group) => (
                  <SelectItem key={group.id} value={group.id} className="text-white hover:bg-white/10">
                    {group.label} - {group.description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
 
            {/* Position Filter */}
            <Select value={selectedPosition} onValueChange={setSelectedPosition}>
              <SelectTrigger className="w-[180px] bg-[#1E293B] border-gray-600 text-white">
                <SelectValue placeholder="Select Position" />
              </SelectTrigger>
              <SelectContent className="bg-[#1E293B] border-gray-600">
                {eventConfig.positions.map((pos) => (
                  <SelectItem key={pos.id} value={pos.id} className="text-white hover:bg-white/10">
                    {pos.label} - {pos.description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
 
          {/* Voting Status */}
          <div className="text-center mb-8">
            {hasUsedFreeVote ? (
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-2">
                <CheckIcon className="w-4 h-4 text-amber-500" />
                <span className="text-amber-500 font-medium">Free vote used today - Vote again tomorrow!</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 rounded-full px-4 py-2">
                <LightningIcon className="w-4 h-4 text-green-500" />
                <span className="text-green-500 font-medium">1 Free Vote Available Today</span>
              </div>
            )}
          </div>
 
          {/* Nominee Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNominees.map((nominee) => (
              <Card key={nominee.id} className="bg-[#1E293B] border-gray-700/50 overflow-hidden hover:border-[#FDB913]/50 transition-all">
                <CardContent className="p-0">
                  {/* Rank Badge */}
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center">
                        <span className="text-4xl text-gray-400">
                          {nominee.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-[#FDB913] flex items-center justify-center">
                      <span className="text-black font-bold">#{nominee.rank}</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-[#6366F1] px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-medium">{nominee.position.toUpperCase()}</span>
                    </div>
                  </div>
 
                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-1">{nominee.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{nominee.team}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-amber-500/20 text-amber-500 px-2 py-1 rounded text-xs font-medium">
                        {nominee.ageGroup.toUpperCase()}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {nominee.votes.toLocaleString()} votes
                      </span>
                    </div>
 
                    {/* Vote Buttons */}
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleFreeVote(nominee.id)}
                        disabled={hasUsedFreeVote || votedNominees.includes(nominee.id)}
                        className={`flex-1 ${
                          votedNominees.includes(nominee.id)
                            ? "bg-green-600 hover:bg-green-600"
                            : hasUsedFreeVote
                            ? "bg-gray-600 hover:bg-gray-600 cursor-not-allowed"
                            : "bg-[#FDB913] hover:bg-amber-500 text-black"
                        }`}
                      >
                        {votedNominees.includes(nominee.id) ? (
                          <>
                            <CheckIcon className="w-4 h-4 mr-2" />
                            Voted
                          </>
                        ) : (
                          <>
                            <LightningIcon className="w-4 h-4 mr-2" />
                            Free Vote
                          </>
                        )}
                      </Button>
                      <Button
                        onClick={() => handlePaidVote(nominee.id)}
                        variant="outline"
                        className="border-green-500 text-green-500 hover:bg-green-500/10"
                      >
                        $1 Vote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
 
          {filteredNominees.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <TrophyIcon className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Nominees Found</h3>
              <p className="text-gray-400">
                No nominees match the selected filters. Try a different age group or position.
              </p>
            </div>
          )}
        </div>
      </section>
 
      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <TrophyIcon className="w-5 h-5 text-[#FDB913]" />
              <span className="text-white font-semibold">CAM CAMP</span>
              <span className="text-gray-500">×</span>
              <span className="text-[#FDB913]">Overall 99</span>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 CAM CAMP × Overall 99. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
 
 
 
================================================
FILE: src/app/marketplace/page.tsx
================================================
"use client";
 
import { NILMarketplace } from "@/components/marketplace/nil-marketplace";
 
export default function MarketplacePage() {
  return <NILMarketplace />;
}
 
 
 
================================================
FILE: src/app/rankings/page.tsx
================================================
"use client";
 
import { TopRankings } from "@/components/athletes/top-rankings";
 
export default function RankingsPage() {
  return <TopRankings />;
}
 
 
 
================================================
FILE: src/app/tournament/page.tsx
================================================
"use client"
 
import * as React from "react"
import { TournamentMatchDrawer } from "@/components/tournament"
import type { TournamentCategory } from "@/types/tournament"
 
const sampleCategories: TournamentCategory[] = [
  // Football Categories
  {
    id: "1",
    name: "Football - Men's Division / Group A",
    matches: [
      {
        matchId: "F-1",
        matchOrder: 1,
        totalMatches: 6,
        competitorA: {
          name: "Manchester United",
          team: "Premier League",
          avatar: "",
          country: "GB",
        },
        competitorB: {
          name: "Real Madrid",
          team: "La Liga",
          avatar: "",
          country: "ES",
        },
        startTime: "2:00 PM",
        matNumber: 1,
      },
      {
        matchId: "F-2",
        matchOrder: 2,
        totalMatches: 6,
        competitorA: {
          name: "Bayern Munich",
          team: "Bundesliga",
          avatar: "",
          country: "DE",
        },
        competitorB: {
          name: "Paris Saint-Germain",
          team: "Ligue 1",
          avatar: "",
          country: "FR",
        },
        startTime: "5:00 PM",
        matNumber: 1,
      },
      {
        matchId: "F-3",
        matchOrder: 3,
        totalMatches: 6,
        competitorA: {
          name: "AC Milan",
          team: "Serie A",
          avatar: "",
          country: "IT",
        },
        competitorB: {
          name: "Ajax Amsterdam",
          team: "Eredivisie",
          avatar: "",
          country: "NL",
        },
        startTime: "8:00 PM",
        matNumber: 2,
      },
    ],
  },
  {
    id: "2",
    name: "Football - Women's Division / Knockout Stage",
    matches: [
      {
        matchId: "FW-1",
        matchOrder: 1,
        totalMatches: 4,
        competitorA: {
          name: "Lyon Feminin",
          team: "Division 1",
          avatar: "",
          country: "FR",
        },
        competitorB: {
          name: "Chelsea Women",
          team: "WSL",
          avatar: "",
          country: "GB",
        },
        startTime: "3:00 PM",
        matNumber: 3,
      },
      {
        matchId: "FW-2",
        matchOrder: 2,
        totalMatches: 4,
        competitorA: {
          name: "Barcelona Femeni",
          team: "Liga F",
          avatar: "",
          country: "ES",
        },
        competitorB: {
          name: "Wolfsburg Women",
          team: "Frauen-Bundesliga",
          avatar: "",
          country: "DE",
        },
        startTime: "6:00 PM",
        matNumber: 3,
      },
    ],
  },
  // Basketball Categories
  {
    id: "3",
    name: "Basketball - Men's / Quarter Finals",
    matches: [
      {
        matchId: "B-1",
        matchOrder: 1,
        totalMatches: 4,
        competitorA: {
          name: "Los Angeles Lakers",
          team: "Western Conference",
          avatar: "",
          country: "US",
        },
        competitorB: {
          name: "Boston Celtics",
          team: "Eastern Conference",
          avatar: "",
          country: "US",
        },
        startTime: "7:00 PM",
        matNumber: 1,
      },
      {
        matchId: "B-2",
        matchOrder: 2,
        totalMatches: 4,
        competitorA: {
          name: "Golden State Warriors",
          team: "Western Conference",
          avatar: "",
          country: "US",
        },
        competitorB: {
          name: "Miami Heat",
          team: "Eastern Conference",
          avatar: "",
          country: "US",
        },
        startTime: "9:30 PM",
        matNumber: 1,
      },
    ],
  },
  {
    id: "4",
    name: "Basketball - Women's / Semi Finals",
    matches: [
      {
        matchId: "BW-1",
        matchOrder: 1,
        totalMatches: 2,
        competitorA: {
          name: "Las Vegas Aces",
          team: "WNBA",
          avatar: "",
          country: "US",
        },
        competitorB: {
          name: "New York Liberty",
          team: "WNBA",
          avatar: "",
          country: "US",
        },
        startTime: "4:00 PM",
        matNumber: 2,
      },
      {
        matchId: "BW-2",
        matchOrder: 2,
        totalMatches: 2,
        competitorA: {
          name: "Connecticut Sun",
          team: "WNBA",
          avatar: "",
          country: "US",
        },
        competitorB: {
          name: "Seattle Storm",
          team: "WNBA",
          avatar: "",
          country: "US",
        },
        startTime: "7:00 PM",
        matNumber: 2,
      },
    ],
  },
  {
    id: "5",
    name: "Basketball - Youth / U18 Championship",
    matches: [
      {
        matchId: "BY-1",
        matchOrder: 1,
        totalMatches: 8,
        competitorA: {
          name: "Spain U18",
          team: "FIBA Europe",
          avatar: "",
          country: "ES",
        },
        competitorB: {
          name: "France U18",
          team: "FIBA Europe",
          avatar: "",
          country: "FR",
        },
        startTime: "10:00 AM",
        matNumber: 3,
      },
      {
        matchId: "BY-2",
        matchOrder: 2,
        totalMatches: 8,
        competitorA: {
          name: "USA U18",
          team: "FIBA Americas",
          avatar: "",
          country: "US",
        },
        competitorB: {
          name: "Australia U18",
          team: "FIBA Oceania",
          avatar: "",
          country: "AU",
        },
        startTime: "12:30 PM",
        matNumber: 3,
      },
      {
        matchId: "BY-3",
        matchOrder: 3,
        totalMatches: 8,
        competitorA: {
          name: "Serbia U18",
          team: "FIBA Europe",
          avatar: "",
          country: "RS",
        },
        competitorB: {
          name: "Canada U18",
          team: "FIBA Americas",
          avatar: "",
          country: "CA",
        },
        startTime: "3:00 PM",
        matNumber: 4,
      },
    ],
  },
]
 
export default function TournamentPage() {
  const [selectedCategory, setSelectedCategory] =
    React.useState<TournamentCategory | null>(null)
  const [drawerOpen, setDrawerOpen] = React.useState(false)
 
  const handleCategoryClick = (category: TournamentCategory) => {
    setSelectedCategory(category)
    setDrawerOpen(true)
  }
 
  const handleViewBracket = () => {
    console.log("View bracket clicked for:", selectedCategory?.name)
  }
 
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-2">Tournament Dashboard</h1>
        <p className="text-zinc-400 mb-8">
          Click on a category to view match details
        </p>
 
        <div className="space-y-3">
          {sampleCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="w-full text-left p-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-medium text-white">{category.name}</h2>
                  <p className="text-sm text-zinc-500 mt-1">
                    {category.matches.length} match
                    {category.matches.length !== 1 ? "es" : ""}
                  </p>
                </div>
                <svg
                  className="size-5 text-zinc-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
 
      <TournamentMatchDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        category={selectedCategory}
        onViewBracket={handleViewBracket}
      />
    </div>
  )
}
 
 
 
================================================
FILE: src/components/providers.tsx
================================================
"use client";
 
import { SessionProvider } from "next-auth/react";
 
interface ProvidersProps {
  children: React.ReactNode;
}
 
export function Providers({ children }: ProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
 
 
 
================================================
FILE: src/components/athletes/athlete-card.tsx
================================================
"use client";
 
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { StarRating, TierBadge } from "./star-rating";
 
interface AthleteCardProps {
  id: string;
  firstName: string;
  lastName: string;
  primarySport: string;
  positions?: string[];
  profilePictureUrl?: string | null;
  hometown?: string | null;
  state?: string | null;
  highSchool?: string | null;
  graduationYear?: number | null;
  starRating: number;
}
 
export function AthleteCard({
  id,
  firstName,
  lastName,
  primarySport,
  positions = [],
  profilePictureUrl,
  hometown,
  state,
  highSchool,
  graduationYear,
  starRating,
}: AthleteCardProps) {
  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();
  const location = [hometown, state].filter(Boolean).join(", ");
 
  return (
    <Link href={`/athletes/${id}`}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
        <CardContent className="p-4">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={profilePictureUrl || undefined} alt={`${firstName} ${lastName}`} />
              <AvatarFallback className="text-lg font-semibold bg-primary/10">
                {initials}
              </AvatarFallback>
            </Avatar>
 
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg truncate">
                {firstName} {lastName}
              </h3>
              <StarRating rating={starRating} size="sm" />
            </div>
          </div>
 
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary">{primarySport}</Badge>
              {positions.slice(0, 2).map((position) => (
                <Badge key={position} variant="outline">
                  {position}
                </Badge>
              ))}
            </div>
 
            <TierBadge percentile={starRating} />
 
            <div className="text-sm text-muted-foreground space-y-1">
              {highSchool && <p className="truncate">{highSchool}</p>}
              {location && <p className="truncate">{location}</p>}
              {graduationYear && <p>Class of {graduationYear}</p>}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
 
 
 
================================================
FILE: src/components/athletes/rating-breakdown.tsx
================================================
"use client";
 
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PercentileRating, PercentileBar, TierBadge, StateRankBadge } from "./star-rating";
 
interface RatingBreakdownProps {
  performanceScore: number;
  physicalScore: number;
  academicScore: number;
  socialScore: number;
  evaluationScore: number;
  compositeScore: number;
  percentileRating: number;
  state?: string;
  position?: string;
  isTopInState?: boolean;
}
 
const WEIGHT_LABELS = {
  performance: { label: "Performance", weight: "40%", description: "On-field performance metrics" },
  physical: { label: "Physical", weight: "20%", description: "Physical attributes & measurables" },
  academic: { label: "Academic", weight: "15%", description: "Academic standing & eligibility" },
  social: { label: "Social/NIL", weight: "15%", description: "Social media & NIL potential" },
  evaluation: { label: "Evaluation", weight: "10%", description: "Coach & scout evaluations" },
};
 
export function RatingBreakdown({
  performanceScore,
  physicalScore,
  academicScore,
  socialScore,
  evaluationScore,
  compositeScore,
  percentileRating,
  state,
  position,
  isTopInState = false,
}: RatingBreakdownProps) {
  const scores = [
    { key: "performance", score: performanceScore },
    { key: "physical", score: physicalScore },
    { key: "academic", score: academicScore },
    { key: "social", score: socialScore },
    { key: "evaluation", score: evaluationScore },
  ] as const;
 
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between flex-wrap gap-2">
          <span>Rating Breakdown</span>
          <div className="flex items-center gap-2">
            <TierBadge percentile={percentileRating} />
            {state && position && (
              <StateRankBadge
                percentile={percentileRating}
                state={state}
                position={position}
                isTopInState={isTopInState}
              />
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-center flex-col gap-4">
          <PercentileRating percentile={percentileRating} size="lg" />
          <PercentileBar percentile={percentileRating} />
          <p className="text-sm text-muted-foreground">
            Composite Score: {compositeScore.toFixed(1)}/100
          </p>
          {percentileRating >= 99 && isTopInState && state && position && (
            <p className="text-xs text-purple-600 font-medium text-center">
              #1 ranked {position} in {state}
            </p>
          )}
          {percentileRating >= 98 && !isTopInState && (
            <p className="text-xs text-muted-foreground text-center">
              Note: Only 1 athlete per state/position can hold 99% ranking
            </p>
          )}
        </div>
 
        <div className="space-y-4">
          {scores.map(({ key, score }) => {
            const config = WEIGHT_LABELS[key];
            return (
              <div key={key} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="font-medium">{config.label}</span>
                    <span className="text-muted-foreground ml-2">({config.weight})</span>
                  </div>
                  <span className="font-medium">{score.toFixed(0)}/100</span>
                </div>
                <Progress value={score} className="h-2" />
                <p className="text-xs text-muted-foreground">{config.description}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
 
 
 
================================================
FILE: src/components/athletes/star-rating.tsx
================================================
"use client";
 
import { cn } from "@/lib/utils";
import { getTierColor, getTierLabel } from "@/services/rating.service";
 
interface PercentileRatingProps {
  percentile: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}
 
const sizeClasses = {
  sm: "text-xl",
  md: "text-3xl",
  lg: "text-5xl",
};
 
const labelSizeClasses = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};
 
export function PercentileRating({
  percentile,
  size = "md",
  showLabel = true,
  className,
}: PercentileRatingProps) {
  const getPercentileColor = (p: number) => {
    if (p >= 99) return "text-purple-600";
    if (p >= 95) return "text-indigo-600";
    if (p >= 90) return "text-blue-600";
    if (p >= 80) return "text-cyan-600";
    if (p >= 70) return "text-green-600";
    if (p >= 60) return "text-teal-600";
    if (p >= 50) return "text-yellow-600";
    if (p >= 40) return "text-orange-600";
    return "text-gray-600";
  };
 
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("font-bold", sizeClasses[size], getPercentileColor(percentile))}>
        {percentile}%
      </div>
      {showLabel && (
        <span className={cn("text-muted-foreground font-medium", labelSizeClasses[size])}>
          Percentile
        </span>
      )}
    </div>
  );
}
 
interface PercentileBarProps {
  percentile: number;
  showValue?: boolean;
  className?: string;
}
 
export function PercentileBar({
  percentile,
  showValue = true,
  className,
}: PercentileBarProps) {
  const getBarColor = (p: number) => {
    if (p >= 99) return "bg-purple-500";
    if (p >= 95) return "bg-indigo-500";
    if (p >= 90) return "bg-blue-500";
    if (p >= 80) return "bg-cyan-500";
    if (p >= 70) return "bg-green-500";
    if (p >= 60) return "bg-teal-500";
    if (p >= 50) return "bg-yellow-500";
    if (p >= 40) return "bg-orange-500";
    return "bg-gray-400";
  };
 
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-center mb-1">
        {showValue && (
          <>
            <span className="text-sm font-medium">{percentile}%</span>
            <span className="text-xs text-muted-foreground">Percentile Ranking</span>
          </>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all duration-500", getBarColor(percentile))}
          style={{ width: `${percentile}%` }}
        />
      </div>
    </div>
  );
}
 
interface TierBadgeProps {
  percentile: number;
  className?: string;
}
 
export function TierBadge({ percentile, className }: TierBadgeProps) {
  const tierColor = getTierColor(percentile);
  const tierLabel = getTierLabel(percentile);
 
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        tierColor,
        className
      )}
    >
      {tierLabel}
    </span>
  );
}
 
interface StateRankBadgeProps {
  percentile: number;
  state: string;
  position: string;
  isTopInState?: boolean;
  className?: string;
}
 
export function StateRankBadge({
  percentile,
  state,
  position,
  isTopInState = false,
  className,
}: StateRankBadgeProps) {
  if (percentile < 99 || !isTopInState) {
    return null;
  }
 
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold",
        "bg-gradient-to-r from-purple-600 to-indigo-600 text-white",
        className
      )}
    >
      <span>#1</span>
      <span>{state}</span>
      <span>{position}</span>
    </span>
  );
}
 
// Legacy StarRating component for backwards compatibility
interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}
 
const starSizeClasses = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
};
 
export function StarRating({
  rating,
  size = "md",
  showValue = true,
  className,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
 
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className={cn("flex text-yellow-400", starSizeClasses[size])}>
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`full-${i}`}>&#9733;</span>
        ))}
        {hasHalfStar && <span className="relative">&#9734;<span className="absolute left-0 top-0 overflow-hidden w-1/2">&#9733;</span></span>}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">
            &#9734;
          </span>
        ))}
      </div>
      {showValue && (
        <span className="ml-2 text-muted-foreground font-medium">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
 
 
 
================================================
FILE: src/components/athletes/top-rankings.tsx
================================================
"use client";
 
import { Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";
 
interface Athlete {
  id: string;
  rank: number;
  name: string;
  university: string;
  sport: string;
  position: string;
  score: number;
  imageUrl: string;
}
 
const mockAthletes: Athlete[] = [
  {
    id: "1",
    rank: 1,
    name: "Marcus Johnson",
    university: "University of Texas",
    sport: "Football",
    position: "Quarterback",
    score: 98,
    imageUrl: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    rank: 2,
    name: "Sarah Chen",
    university: "Stanford University",
    sport: "Basketball",
    position: "Point Guard",
    score: 97,
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    rank: 3,
    name: "Tyler Brooks",
    university: "Ohio State University",
    sport: "Football",
    position: "Wide Receiver",
    score: 96,
    imageUrl: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    rank: 4,
    name: "Marcus Thompson",
    university: "Duke University",
    sport: "Basketball",
    position: "Shooting Guard",
    score: 95,
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
  },
];
 
interface AthleteCardProps {
  athlete: Athlete;
}
 
function AthleteCard({ athlete }: AthleteCardProps) {
  return (
    <div className="bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-colors cursor-pointer">
      {/* Image Area */}
      <div className="relative h-48">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${athlete.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
 
        {/* Ranking Badge */}
        <div className="absolute top-3 left-3 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-slate-900 font-bold text-sm">#{athlete.rank}</span>
        </div>
      </div>
 
      {/* Info Area */}
      <div className="p-4 space-y-3">
        {/* Top Row: Name & Score */}
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold text-lg">{athlete.name}</h3>
          <div className="flex items-center gap-1.5 bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
            <Trophy className="w-4 h-4" />
            <span className="font-semibold text-sm">{athlete.score}</span>
          </div>
        </div>
 
        {/* University */}
        <p className="text-gray-400 text-sm">{athlete.university}</p>
 
        {/* Tags */}
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-medium text-gray-300 border border-gray-600 bg-transparent">
            {athlete.sport}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium text-gray-300 border border-gray-600 bg-transparent">
            {athlete.position}
          </span>
        </div>
      </div>
    </div>
  );
}
 
interface TopRankingsProps {
  athletes?: Athlete[];
  viewAllHref?: string;
}
 
export function TopRankings({
  athletes = mockAthletes,
  viewAllHref = "/rankings"
}: TopRankingsProps) {
  return (
    <section className="bg-[#0f172a] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Top Rankings</h2>
            <p className="text-gray-400">The elite of college athletics</p>
          </div>
          <Link
            href={viewAllHref}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
 
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {athletes.map((athlete) => (
            <AthleteCard key={athlete.id} athlete={athlete} />
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default TopRankings;
 
 
 
================================================
FILE: src/components/auth/login-form.tsx
================================================
"use client";
 
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { loginSchema, type LoginInput } from "@/lib/validations/auth";
 
export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });
 
  const onSubmit = async (data: LoginInput) => {
    setIsLoading(true);
    setError(null);
 
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
 
      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };
 
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription>Sign in to your account to continue</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          {error && (
            <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-md">
              {error}
            </div>
          )}
 
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
 
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              disabled={isLoading}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
 
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
 
 
 
================================================
FILE: src/components/auth/register-form.tsx
================================================
"use client";
 
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { registerSchema, type RegisterInput } from "@/lib/validations/auth";
 
export function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
 
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: "ATHLETE",
    },
  });
 
  const onSubmit = async (data: RegisterInput) => {
    setIsLoading(true);
    setError(null);
 
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
 
      const result = await response.json();
 
      if (!response.ok) {
        setError(result.error || "Registration failed");
        return;
      }
 
      router.push("/login?registered=true");
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };
 
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create an Account</CardTitle>
        <CardDescription>
          Join the athlete recruiting platform
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          {error && (
            <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-md">
              {error}
            </div>
          )}
 
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                {...register("firstName")}
                disabled={isLoading}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">{errors.firstName.message}</p>
              )}
            </div>
 
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                {...register("lastName")}
                disabled={isLoading}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>
 
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
 
          <div className="space-y-2">
            <Label htmlFor="role">I am a...</Label>
            <Select
              defaultValue="ATHLETE"
              onValueChange={(value) => setValue("role", value as "ATHLETE" | "COACH" | "BRAND")}
              disabled={isLoading}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ATHLETE">Athlete</SelectItem>
                <SelectItem value="COACH">Coach / Scout</SelectItem>
                <SelectItem value="BRAND">Brand / Sponsor</SelectItem>
              </SelectContent>
            </Select>
            {errors.role && (
              <p className="text-sm text-red-500">{errors.role.message}</p>
            )}
          </div>
 
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a strong password"
              {...register("password")}
              disabled={isLoading}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
 
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword")}
              disabled={isLoading}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create Account"}
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
 
 
 
================================================
FILE: src/components/layout/floating-home.tsx
================================================
"use client";
 
import Link from "next/link";
import { usePathname } from "next/navigation";
 
export function FloatingHomeButton() {
  const pathname = usePathname();
 
  // Don't show on homepage
  if (pathname === "/") {
    return null;
  }
 
  return (
    <Link
      href="/"
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="Return to homepage"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl group-hover:bg-primary/50 transition-all duration-300" />
 
        {/* Button */}
        <div className="relative flex items-center gap-2 glass-strong rounded-full pl-3 pr-4 py-2.5 border border-primary/30 group-hover:border-primary/60 transition-all duration-300 group-hover:scale-105">
          {/* Logo Icon */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
            <span className="text-xs font-black text-white">99</span>
          </div>
 
          {/* Text */}
          <span className="text-sm font-semibold text-gradient-cyan">
            Overall 99
          </span>
        </div>
 
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-background border border-border rounded-lg text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Return to Home
        </div>
      </div>
    </Link>
  );
}
 
// Compact version for mobile
export function FloatingHomeFab() {
  const pathname = usePathname();
 
  // Don't show on homepage
  if (pathname === "/") {
    return null;
  }
 
  return (
    <Link
      href="/"
      className="fixed bottom-6 left-6 z-50 md:hidden"
      aria-label="Return to homepage"
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg glow-cyan">
        <span className="text-lg font-black text-white">99</span>
      </div>
    </Link>
  );
}
 
 
 
================================================
FILE: src/components/layout/navbar.tsx
================================================
"use client";
 
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
 
export function Navbar() {
  const { data: session, status } = useSession();
 
  const initials = session?.user
    ? `${session.user.firstName?.[0] || ""}${session.user.lastName?.[0] || ""}`.toUpperCase() || "U"
    : "";
 
  return (
    <nav className="border-b border-border glass-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-gradient-cyan">
              Overall 99
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/athletes"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Athletes
              </Link>
              <Link
                href="/rankings"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Rankings
              </Link>
              <Link
                href="/marketplace"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                NIL Marketplace
              </Link>
              <Link
                href="/events"
                className="text-amber-400 hover:text-amber-300 transition-colors font-semibold"
              >
                Events
              </Link>
              {session?.user && (
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
 
          <div className="flex items-center gap-4">
            {status === "loading" ? (
              <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
            ) : session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/10">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">
                      {session.user.firstName} {session.user.lastName}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {session.user.email}
                    </p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  {session.user.role === "ATHLETE" && (
                    <DropdownMenuItem asChild>
                      <Link href="/profile">My Profile</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-red-600 cursor-pointer"
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
                  <Link href="/login">Sign in</Link>
                </Button>
                <Button className="btn-primary-glow text-primary-foreground" asChild>
                  <Link href="/register">Get Started</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
 
 
 
================================================
FILE: src/components/marketplace/index.ts
================================================
export { NILMarketplace } from "./nil-marketplace";
 
 
 
================================================
FILE: src/components/marketplace/nil-marketplace.tsx
================================================
"use client";
 
import { ArrowRight } from "lucide-react";
import Link from "next/link";
 
interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  author: string;
  imageUrl: string;
}
 
const mockItems: MarketplaceItem[] = [
  {
    id: "1",
    title: "Instagram Story Series",
    description: "A series of 5 Instagram stories featuring your brand over one week with authentic athlete integration.",
    category: "Social Media Post",
    price: 1200,
    author: "Marcus Johnson",
    imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Equipment Endorsement",
    description: "Full season equipment endorsement deal including social posts, game day usage, and press mentions.",
    category: "Brand Ambassador",
    price: 8000,
    author: "Sarah Chen",
    imageUrl: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Autograph Session",
    description: "Two-hour in-person autograph signing session at your location with photo opportunities.",
    category: "Appearance",
    price: 2000,
    author: "Tyler Brooks",
    imageUrl: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    title: "Game Day Vlog",
    description: "Behind-the-scenes game day vlog featuring your product with YouTube and TikTok distribution.",
    category: "Video Content",
    price: 2500,
    author: "Marcus Thompson",
    imageUrl: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop",
  },
];
 
function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
 
interface MarketplaceCardProps {
  item: MarketplaceItem;
}
 
function MarketplaceCard({ item }: MarketplaceCardProps) {
  return (
    <div className="bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group">
      {/* Image Section */}
      <div className="relative h-44 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
 
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {formatPrice(item.price)}
        </div>
      </div>
 
      {/* Content Section */}
      <div className="p-5 space-y-3">
        {/* Category Tag */}
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-slate-300 bg-slate-700/50 border border-slate-600">
          {item.category}
        </span>
 
        {/* Title */}
        <h3 className="text-white font-bold text-lg leading-tight">
          {item.title}
        </h3>
 
        {/* Description */}
        <p className="text-slate-400 text-sm line-clamp-2">
          {item.description}
        </p>
 
        {/* Author */}
        <p className="text-slate-500 text-xs">
          by <span className="text-slate-400">{item.author}</span>
        </p>
      </div>
    </div>
  );
}
 
interface NILMarketplaceProps {
  items?: MarketplaceItem[];
  viewAllHref?: string;
}
 
export function NILMarketplace({
  items = mockItems,
  viewAllHref = "/marketplace"
}: NILMarketplaceProps) {
  return (
    <section className="bg-[#0f172a] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">NIL Marketplace</h2>
            <p className="text-slate-400">Exclusive partnership opportunities</p>
          </div>
          <Link
            href={viewAllHref}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
 
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <MarketplaceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default NILMarketplace;
 
 
 
================================================
FILE: src/components/tournament/index.ts
================================================
export { MatchCard } from "./match-card"
export { TournamentMatchDrawer } from "./tournament-match-drawer"
 
 
 
================================================
FILE: src/components/tournament/match-card.tsx
================================================
"use client"
 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Timer } from "lucide-react"
import type { TournamentMatch } from "@/types/tournament"
 
interface MatchCardProps {
  match: TournamentMatch
}
 
function CompetitorRow({
  competitor,
}: {
  competitor: TournamentMatch["competitorA"]
}) {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="size-10">
        <AvatarImage src={competitor.avatar} alt={competitor.name} />
        <AvatarFallback className="bg-zinc-700 text-zinc-300 text-xs">
          {competitor.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </AvatarFallback>
      </Avatar>
      <span className="text-lg" role="img" aria-label={competitor.country}>
        {getCountryFlag(competitor.country)}
      </span>
      <div className="flex flex-col">
        <span className="text-white font-medium text-sm">{competitor.name}</span>
        <span className="text-zinc-400 text-xs">{competitor.team}</span>
      </div>
    </div>
  )
}
 
function getCountryFlag(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}
 
export function MatchCard({ match }: MatchCardProps) {
  return (
    <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
      <div className="bg-zinc-800 px-4 py-2 flex items-center justify-between">
        <span className="text-zinc-400 text-sm font-medium">
          Match {match.matchOrder}/{match.totalMatches}
        </span>
      </div>
 
      <div className="p-4 flex items-start justify-between">
        <div className="flex flex-col gap-4">
          <CompetitorRow competitor={match.competitorA} />
          <CompetitorRow competitor={match.competitorB} />
        </div>
 
        <div className="flex flex-col items-end gap-1 text-right">
          <div className="flex items-center gap-2 text-zinc-400">
            <Timer className="size-4" />
            <span className="text-sm font-medium">Field {match.matNumber}</span>
          </div>
          <span className="text-zinc-500 text-xs">{match.matchId}</span>
          <span className="text-white text-sm font-medium">{match.startTime}</span>
        </div>
      </div>
    </div>
  )
}
 
 
 
================================================
FILE: src/components/tournament/tournament-match-drawer.tsx
================================================
"use client"
 
import * as React from "react"
import { Search, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { MatchCard } from "./match-card"
import type { TournamentCategory, TournamentMatch } from "@/types/tournament"
 
interface TournamentMatchDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  category: TournamentCategory | null
  onViewBracket?: () => void
}
 
export function TournamentMatchDrawer({
  open,
  onOpenChange,
  category,
  onViewBracket,
}: TournamentMatchDrawerProps) {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [showAllMatches, setShowAllMatches] = React.useState(false)
 
  const filteredMatches = React.useMemo(() => {
    if (!category?.matches) return []
 
    let matches = category.matches
 
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      matches = matches.filter(
        (match) =>
          match.competitorA.name.toLowerCase().includes(query) ||
          match.competitorB.name.toLowerCase().includes(query) ||
          match.competitorA.team.toLowerCase().includes(query) ||
          match.competitorB.team.toLowerCase().includes(query) ||
          match.matchId.toLowerCase().includes(query)
      )
    }
 
    return matches
  }, [category?.matches, searchQuery])
 
  React.useEffect(() => {
    if (!open) {
      setSearchQuery("")
      setShowAllMatches(false)
    }
  }, [open])
 
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md bg-zinc-950 border-zinc-800 p-0 flex flex-col"
      >
        <SheetHeader className="p-4 pb-0 space-y-4">
          <div className="flex items-start justify-between">
            <SheetTitle className="text-white text-lg font-semibold pr-8">
              {category?.name || "Category"}
            </SheetTitle>
            <SheetClose className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-zinc-950 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-800">
              <X className="size-5 text-zinc-400" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </div>
 
          <Button
            onClick={onViewBracket}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
          >
            View bracket
          </Button>
 
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
            <Input
              placeholder="Search competitors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500 focus-visible:ring-zinc-700"
            />
          </div>
 
          <div className="flex items-center justify-between py-2">
            <Label
              htmlFor="show-all-matches"
              className="text-zinc-400 text-sm cursor-pointer"
            >
              Display all bracket matches
            </Label>
            <Switch
              id="show-all-matches"
              checked={showAllMatches}
              onCheckedChange={setShowAllMatches}
            />
          </div>
        </SheetHeader>
 
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredMatches.length === 0 ? (
            <div className="text-center py-8 text-zinc-500">
              {searchQuery ? "No matches found" : "No matches available"}
            </div>
          ) : (
            filteredMatches.map((match) => (
              <MatchCard key={match.matchId} match={match} />
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
 
 
 
================================================
FILE: src/components/ui/avatar.tsx
================================================
"use client"
 
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
 
import { cn } from "@/lib/utils"
 
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}
 
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}
 
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}
 
export { Avatar, AvatarImage, AvatarFallback }
 
 
 
================================================
FILE: src/components/ui/badge.tsx
================================================
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
 
import { cn } from "@/lib/utils"
 
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
 
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"
 
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}
 
export { Badge, badgeVariants }
 
 
 
================================================
FILE: src/components/ui/button.tsx
================================================
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
 
import { cn } from "@/lib/utils"
 
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
 
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
 
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
 
export { Button, buttonVariants }
 
 
 
================================================
FILE: src/components/ui/card.tsx
================================================
import * as React from "react"
 
import { cn } from "@/lib/utils"
 
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}
 
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}
 
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}
 
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}
 
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}
 
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}
 
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}
 
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
 
 
 
================================================
FILE: src/components/ui/dropdown-menu.tsx
================================================
"use client"
 
import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
 
function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}
 
function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}
 
function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}
 
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}
 
function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}
 
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}
 
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}
 
function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}
 
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}
 
function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}
 
function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}
 
function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}
 
function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}
 
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}
 
function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}
 
export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
 
 
 
================================================
FILE: src/components/ui/form.tsx
================================================
"use client"
 
import * as React from "react"
import type * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"
 
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
 
const Form = FormProvider
 
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}
 
const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)
 
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}
 
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)
 
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }
 
  const { id } = itemContext
 
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}
 
type FormItemContextValue = {
  id: string
}
 
const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)
 
function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId()
 
  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}
 
function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()
 
  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}
 
function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()
 
  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}
 
function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField()
 
  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}
 
function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : props.children
 
  if (!body) {
    return null
  }
 
  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  )
}
 
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
 
 
 
================================================
FILE: src/components/ui/input.tsx
================================================
import * as React from "react"
 
import { cn } from "@/lib/utils"
 
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}
 
export { Input }
 
 
 
================================================
FILE: src/components/ui/label.tsx
================================================
"use client"
 
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
 
import { cn } from "@/lib/utils"
 
function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}
 
export { Label }
 
 
 
================================================
FILE: src/components/ui/progress.tsx
================================================
"use client"
 
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
 
import { cn } from "@/lib/utils"
 
function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}
 
export { Progress }
 
 
 
================================================
FILE: src/components/ui/select.tsx
================================================
"use client"
 
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
 
function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}
 
function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}
 
function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}
 
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}
 
function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}
 
function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  )
}
 
function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span
        data-slot="select-item-indicator"
        className="absolute right-2 flex size-3.5 items-center justify-center"
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}
 
function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}
 
function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}
 
function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}
 
export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
 
 
 
================================================
FILE: src/components/ui/separator.tsx
================================================
"use client"
 
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
 
import { cn } from "@/lib/utils"
 
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}
 
export { Separator }
 
 
 
================================================
FILE: src/components/ui/sheet.tsx
================================================
"use client"
 
import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
 
function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}
 
function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}
 
function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}
 
function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}
 
function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}
 
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}
 
function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}
 
function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}
 
function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}
 
function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}
 
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
 
 
 
================================================
FILE: src/components/ui/sonner.tsx
================================================
"use client"
 
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
 
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()
 
  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}
 
export { Toaster }
 
 
 
================================================
FILE: src/components/ui/switch.tsx
================================================
"use client"
 
import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
 
import { cn } from "@/lib/utils"
 
function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}
 
export { Switch }
 
 
 
================================================
FILE: src/components/ui/textarea.tsx
================================================
import * as React from "react"
 
import { cn } from "@/lib/utils"
 
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}
 
export { Textarea }
 
 
 
================================================
FILE: src/lib/auth.ts
================================================
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";
import { UserRole } from "@prisma/client";
import { rateLimit, rateLimitConfigs } from "./rate-limit";
 
declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    role: UserRole;
    firstName?: string | null;
    lastName?: string | null;
  }
 
  interface Session {
    user: {
      id: string;
      email: string;
      role: UserRole;
      firstName?: string | null;
      lastName?: string | null;
    };
  }
}
 
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: UserRole;
    firstName?: string | null;
    lastName?: string | null;
  }
}
 
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }
 
        // Rate limit by email to prevent brute force attacks
        const rateLimitResult = rateLimit(
          `login:${credentials.email.toLowerCase()}`,
          rateLimitConfigs.login
        );
 
        if (!rateLimitResult.success) {
          throw new Error("Too many login attempts. Please try again later.");
        }
 
        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase() },
        });
 
        if (!user) {
          throw new Error("Invalid email or password");
        }
 
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
 
        if (!isPasswordValid) {
          throw new Error("Invalid email or password");
        }
 
        return {
          id: user.id,
          email: user.email,
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
};
 
 
 
================================================
FILE: src/lib/email.ts
================================================
import { prisma } from "./prisma";
import crypto from "crypto";
 
// Generate a secure verification token
export function generateVerificationToken(): string {
  return crypto.randomBytes(32).toString("hex");
}
 
// Create a verification token in the database
export async function createVerificationToken(email: string): Promise<string> {
  const token = generateVerificationToken();
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
 
  // Delete any existing tokens for this email
  await prisma.verificationToken.deleteMany({
    where: { identifier: email },
  });
 
  // Create new token
  await prisma.verificationToken.create({
    data: {
      identifier: email,
      token,
      expires,
    },
  });
 
  return token;
}
 
// Verify a token and mark email as verified
export async function verifyEmailToken(
  token: string
): Promise<{ success: boolean; email?: string; error?: string }> {
  const verificationToken = await prisma.verificationToken.findUnique({
    where: { token },
  });
 
  if (!verificationToken) {
    return { success: false, error: "Invalid verification token" };
  }
 
  if (verificationToken.expires < new Date()) {
    // Clean up expired token
    await prisma.verificationToken.delete({
      where: { token },
    });
    return { success: false, error: "Verification token has expired" };
  }
 
  // Mark user as verified
  await prisma.user.update({
    where: { email: verificationToken.identifier },
    data: { emailVerified: new Date() },
  });
 
  // Delete the used token
  await prisma.verificationToken.delete({
    where: { token },
  });
 
  return { success: true, email: verificationToken.identifier };
}
 
// Email sending stub - replace with actual email provider in production
// Recommended providers: Resend, SendGrid, AWS SES, Postmark
export async function sendVerificationEmail(
  email: string,
  token: string
): Promise<void> {
  const verificationUrl = `${process.env.NEXTAUTH_URL}/api/auth/verify?token=${token}`;
 
  // In production, replace this with actual email sending
  // Example with Resend:
  // await resend.emails.send({
  //   from: 'noreply@yourdomain.com',
  //   to: email,
  //   subject: 'Verify your Overall 99 account',
  //   html: `<a href="${verificationUrl}">Click here to verify your email</a>`
  // });
 
  // For development, log the verification URL
  console.log(`
    ========================================
    EMAIL VERIFICATION (Development Mode)
    ========================================
    To: ${email}
    Subject: Verify your Overall 99 account
 
    Click this link to verify your email:
    ${verificationUrl}
    ========================================
  `);
}
 
// Send password reset email stub
export async function sendPasswordResetEmail(
  email: string,
  token: string
): Promise<void> {
  const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`;
 
  console.log(`
    ========================================
    PASSWORD RESET (Development Mode)
    ========================================
    To: ${email}
    Subject: Reset your Overall 99 password
 
    Click this link to reset your password:
    ${resetUrl}
    ========================================
  `);
}
 
 
 
================================================
FILE: src/lib/prisma.ts
================================================
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
 
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};
 
function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL;
 
  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set");
  }
 
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
 
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });
}
 
export const prisma = globalForPrisma.prisma ?? createPrismaClient();
 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
 
 
 
================================================
FILE: src/lib/rate-limit.ts
================================================
// Simple in-memory rate limiter
// For production with multiple servers, use Redis-based rate limiting
 
interface RateLimitEntry {
  count: number;
  resetTime: number;
}
 
const rateLimitStore = new Map<string, RateLimitEntry>();
 
// Clean up expired entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);
 
interface RateLimitConfig {
  maxRequests: number; // Maximum requests allowed
  windowMs: number; // Time window in milliseconds
}
 
interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetTime: number;
}
 
export function rateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now();
  const key = identifier;
 
  let entry = rateLimitStore.get(key);
 
  // If no entry or window expired, create new entry
  if (!entry || now > entry.resetTime) {
    entry = {
      count: 1,
      resetTime: now + config.windowMs,
    };
    rateLimitStore.set(key, entry);
    return {
      success: true,
      remaining: config.maxRequests - 1,
      resetTime: entry.resetTime,
    };
  }
 
  // Increment count
  entry.count++;
 
  // Check if over limit
  if (entry.count > config.maxRequests) {
    return {
      success: false,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }
 
  return {
    success: true,
    remaining: config.maxRequests - entry.count,
    resetTime: entry.resetTime,
  };
}
 
// Preset configurations for different endpoints
export const rateLimitConfigs = {
  // Auth endpoints - stricter limits
  login: { maxRequests: 5, windowMs: 15 * 60 * 1000 }, // 5 attempts per 15 minutes
  register: { maxRequests: 3, windowMs: 60 * 60 * 1000 }, // 3 registrations per hour
 
  // API endpoints - more lenient
  api: { maxRequests: 100, windowMs: 60 * 1000 }, // 100 requests per minute
  search: { maxRequests: 30, windowMs: 60 * 1000 }, // 30 searches per minute
};
 
// Helper to get client IP from request
export function getClientIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
 
  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
 
  // Fallback - in production, ensure proper proxy configuration
  return "unknown";
}
 
 
 
================================================
FILE: src/lib/utils.ts
================================================
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
 
 
 
================================================
FILE: src/lib/validations/athlete.ts
================================================
import { z } from "zod";
 
// Helper to validate URLs and prevent SSRF attacks
const safeUrlSchema = z.string().optional().nullable().transform((val) => {
  if (!val || val.trim() === "") return null;
 
  // Add https:// if no protocol
  const urlString = val.startsWith("http://") || val.startsWith("https://")
    ? val
    : `https://${val}`;
 
  try {
    const url = new URL(urlString);
 
    // Block private/internal IPs and localhost
    const hostname = url.hostname.toLowerCase();
    const blockedPatterns = [
      /^localhost$/i,
      /^127\./,
      /^10\./,
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
      /^192\.168\./,
      /^0\./,
      /^169\.254\./,
      /^\[::1\]$/,
      /^\[fc/i,
      /^\[fd/i,
    ];
 
    if (blockedPatterns.some(pattern => pattern.test(hostname))) {
      return null;
    }
 
    // Only allow http and https protocols
    if (!["http:", "https:"].includes(url.protocol)) {
      return null;
    }
 
    return urlString;
  } catch {
    return null;
  }
});
 
export const createAthleteSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  primarySport: z.string().min(1, "Primary sport is required").max(50),
  positions: z.array(z.string()).default([]),
  dateOfBirth: z.string().datetime().optional().nullable(),
  bio: z.string().max(2000).optional().nullable(),
  profilePictureUrl: safeUrlSchema,
  hometown: z.string().max(100).optional().nullable(),
  state: z.string().max(50).optional().nullable(),
  highSchool: z.string().max(100).optional().nullable(),
  college: z.string().max(100).optional().nullable(),
  graduationYear: z.number().int().min(2000).max(2040).optional().nullable(),
  heightInches: z.number().int().min(0).max(120).optional().nullable(),
  weight: z.number().int().min(0).max(500).optional().nullable(),
  phoneNumber: z.string().max(20).optional().nullable(),
  socialMediaLinks: z.array(z.string().url()).default([]),
  isPublic: z.boolean().default(true),
});
 
export const updateAthleteSchema = createAthleteSchema.partial();
 
export const updateRatingScoresSchema = z.object({
  performanceScore: z.number().min(0).max(100).optional(),
  physicalScore: z.number().min(0).max(100).optional(),
  academicScore: z.number().min(0).max(100).optional(),
  socialScore: z.number().min(0).max(100).optional(),
  evaluationScore: z.number().min(0).max(100).optional(),
});
 
export const searchAthletesSchema = z.object({
  sport: z.string().max(50).optional(),
  minStars: z.coerce.number().min(0).max(5).optional(),
  maxStars: z.coerce.number().min(0).max(5).optional(),
  state: z.string().max(50).optional(),
  graduationYear: z.coerce.number().int().optional(),
  q: z.string().max(100).optional(), // Limit search query length
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(12),
});
 
export type CreateAthleteInput = z.infer<typeof createAthleteSchema>;
export type UpdateAthleteInput = z.infer<typeof updateAthleteSchema>;
export type UpdateRatingScoresInput = z.infer<typeof updateRatingScoresSchema>;
export type SearchAthletesInput = z.infer<typeof searchAthletesSchema>;
 
 
 
================================================
FILE: src/lib/validations/auth.ts
================================================
import { z } from "zod";
 
export const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: z.string(),
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  role: z.enum(["ATHLETE", "COACH", "BRAND"]),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
 
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});
 
export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});
 
export const resetPasswordSchema = z.object({
  token: z.string().min(1, "Token is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
 
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
 
 
 
================================================
FILE: src/services/rating.service.ts
================================================
/**
 * Rating Service
 * Implements the weighted percentile rating algorithm for athletes
 * Uses a 1%-99% scale instead of star ratings
 *
 * Weight Distribution:
 * - Performance: 40%
 * - Physical: 20%
 * - Academic: 15%
 * - Social: 15%
 * - Evaluation: 10%
 *
 * Special Rule: Only 1 athlete from each state for each position can be ranked 99%
 */
 
export interface RatingScores {
  performanceScore: number;
  physicalScore: number;
  academicScore: number;
  socialScore: number;
  evaluationScore: number;
}
 
export interface RatingBreakdown {
  performanceScore: number;
  physicalScore: number;
  academicScore: number;
  socialScore: number;
  evaluationScore: number;
  compositeScore: number;
  percentileRating: number;
  tierLabel: string;
  weights: typeof WEIGHTS;
}
 
export interface StatePositionRanking {
  athleteId: string;
  state: string;
  position: string;
  percentileRating: number;
}
 
const WEIGHTS = {
  performance: 0.4,
  physical: 0.2,
  academic: 0.15,
  social: 0.15,
  evaluation: 0.1,
} as const;
 
/**
 * Percentile thresholds based on composite score
 * Maps composite scores (0-100) to percentile ratings (1-99)
 */
const PERCENTILE_THRESHOLDS: Array<{ minScore: number; percentile: number; label: string }> = [
  { minScore: 98, percentile: 99, label: "Elite - #1 State Prospect" },
  { minScore: 95, percentile: 98, label: "Elite Prospect" },
  { minScore: 92, percentile: 97, label: "Blue-Chip Recruit" },
  { minScore: 88, percentile: 95, label: "5-Star Equivalent" },
  { minScore: 82, percentile: 92, label: "Power 5 Ready" },
  { minScore: 75, percentile: 88, label: "High 4-Star" },
  { minScore: 68, percentile: 82, label: "4-Star Prospect" },
  { minScore: 60, percentile: 75, label: "D1 Potential" },
  { minScore: 52, percentile: 65, label: "High D1/Mid-Major" },
  { minScore: 45, percentile: 55, label: "Solid Prospect" },
  { minScore: 38, percentile: 45, label: "D2/D3 Prospect" },
  { minScore: 30, percentile: 35, label: "Developmental" },
  { minScore: 22, percentile: 25, label: "Emerging Talent" },
  { minScore: 15, percentile: 15, label: "Early Development" },
  { minScore: 8, percentile: 8, label: "Beginner" },
  { minScore: 0, percentile: 1, label: "Unranked" },
];
 
/**
 * Clamp a value between 0 and 100
 */
function clamp(value: number): number {
  return Math.max(0, Math.min(100, value));
}
 
/**
 * Calculate the composite score from individual rating components
 * @param scores - The individual rating scores (0-100 scale)
 * @returns The weighted composite score (0-100)
 */
export function calculateCompositeScore(scores: RatingScores): number {
  const composite =
    clamp(scores.performanceScore) * WEIGHTS.performance +
    clamp(scores.physicalScore) * WEIGHTS.physical +
    clamp(scores.academicScore) * WEIGHTS.academic +
    clamp(scores.socialScore) * WEIGHTS.social +
    clamp(scores.evaluationScore) * WEIGHTS.evaluation;
 
  return Math.round(composite * 100) / 100;
}
 
/**
 * Convert a composite score to a percentile rating (1-99)
 * @param compositeScore - The composite score (0-100)
 * @returns The percentile rating (1-99)
 */
export function calculatePercentileRating(compositeScore: number): number {
  const score = clamp(compositeScore);
 
  for (const threshold of PERCENTILE_THRESHOLDS) {
    if (score >= threshold.minScore) {
      return threshold.percentile;
    }
  }
 
  return 1;
}
 
/**
 * Apply the state/position constraint for 99% ranking
 * Only 1 athlete from each state for each position can be ranked 99%
 * @param athleteId - The athlete being evaluated
 * @param state - The athlete's state
 * @param position - The athlete's position
 * @param rawPercentile - The calculated percentile before constraint
 * @param existingTopRankings - Map of state-position to athleteId who holds 99%
 * @returns The adjusted percentile rating
 */
export function applyStatePositionConstraint(
  athleteId: string,
  state: string,
  position: string,
  rawPercentile: number,
  existingTopRankings: Map<string, string>
): number {
  if (rawPercentile < 99) {
    return rawPercentile;
  }
 
  const key = `${state.toUpperCase()}-${position.toUpperCase()}`;
  const currentHolder = existingTopRankings.get(key);
 
  // If no one holds 99% for this state-position, or this athlete already holds it
  if (!currentHolder || currentHolder === athleteId) {
    return 99;
  }
 
  // Someone else holds 99% for this state-position, cap at 98
  return 98;
}
 
/**
 * Get the tier label for a percentile rating
 * @param percentile - The percentile rating (1-99)
 * @returns The tier label
 */
export function getTierLabel(percentile: number): string {
  const threshold = PERCENTILE_THRESHOLDS.find((t) => t.percentile === percentile);
  if (threshold) return threshold.label;
 
  // Find closest threshold
  for (const t of PERCENTILE_THRESHOLDS) {
    if (percentile >= t.percentile) {
      return t.label;
    }
  }
  return "Unranked";
}
 
/**
 * Get tier color based on percentile
 * @param percentile - The percentile rating (1-99)
 * @returns CSS classes for the tier badge
 */
export function getTierColor(percentile: number): string {
  if (percentile >= 99) return "bg-purple-100 text-purple-800 border-purple-200";
  if (percentile >= 95) return "bg-indigo-100 text-indigo-800 border-indigo-200";
  if (percentile >= 90) return "bg-blue-100 text-blue-800 border-blue-200";
  if (percentile >= 80) return "bg-cyan-100 text-cyan-800 border-cyan-200";
  if (percentile >= 70) return "bg-green-100 text-green-800 border-green-200";
  if (percentile >= 60) return "bg-teal-100 text-teal-800 border-teal-200";
  if (percentile >= 50) return "bg-yellow-100 text-yellow-800 border-yellow-200";
  if (percentile >= 40) return "bg-orange-100 text-orange-800 border-orange-200";
  if (percentile >= 30) return "bg-amber-100 text-amber-800 border-amber-200";
  return "bg-gray-100 text-gray-800 border-gray-200";
}
 
/**
 * Get a complete rating breakdown
 * @param scores - The individual rating scores
 * @returns Complete breakdown with composite score, percentile rating, and tier label
 */
export function getRatingBreakdown(scores: RatingScores): RatingBreakdown {
  const compositeScore = calculateCompositeScore(scores);
  const percentileRating = calculatePercentileRating(compositeScore);
  const tierLabel = getTierLabel(percentileRating);
 
  return {
    performanceScore: clamp(scores.performanceScore),
    physicalScore: clamp(scores.physicalScore),
    academicScore: clamp(scores.academicScore),
    socialScore: clamp(scores.socialScore),
    evaluationScore: clamp(scores.evaluationScore),
    compositeScore,
    percentileRating,
    tierLabel,
    weights: WEIGHTS,
  };
}
 
/**
 * Calculate the contribution of each component to the composite score
 * @param scores - The individual rating scores
 * @returns An object with the contribution of each component
 */
export function getScoreContributions(scores: RatingScores): Record<string, number> {
  return {
    performance: Math.round(clamp(scores.performanceScore) * WEIGHTS.performance * 100) / 100,
    physical: Math.round(clamp(scores.physicalScore) * WEIGHTS.physical * 100) / 100,
    academic: Math.round(clamp(scores.academicScore) * WEIGHTS.academic * 100) / 100,
    social: Math.round(clamp(scores.socialScore) * WEIGHTS.social * 100) / 100,
    evaluation: Math.round(clamp(scores.evaluationScore) * WEIGHTS.evaluation * 100) / 100,
  };
}
 
// Legacy support - convert percentile to star rating equivalent
export function percentileToStars(percentile: number): number {
  if (percentile >= 95) return 5.0;
  if (percentile >= 88) return 4.5;
  if (percentile >= 75) return 4.0;
  if (percentile >= 65) return 3.5;
  if (percentile >= 50) return 3.0;
  if (percentile >= 40) return 2.5;
  if (percentile >= 30) return 2.0;
  if (percentile >= 20) return 1.5;
  return 1.0;
}
 
 
 
================================================
FILE: src/types/tournament.ts
================================================
export interface Competitor {
  name: string
  team: string
  avatar: string
  country: string
}
 
export interface TournamentMatch {
  matchId: string
  matchOrder: number
  totalMatches: number
  competitorA: Competitor
  competitorB: Competitor
  startTime: string
  matNumber: number
}
 
export interface TournamentCategory {
  id: string
  name: string
  matches: TournamentMatch[]
}
 
 
 
================================================
FILE: tests/e2e/marketplace.spec.ts
================================================
import { test, expect } from '@playwright/test'
 
test.describe('NIL Marketplace', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/marketplace')
  })
 
  test('displays marketplace page with header', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'NIL Marketplace' })).toBeVisible()
    await expect(page.getByText('Exclusive partnership opportunities')).toBeVisible()
  })
 
  test('displays marketplace items with correct information', async ({ page }) => {
    // Check for marketplace items
    await expect(page.getByText('Instagram Story Series')).toBeVisible()
    await expect(page.getByText('Equipment Endorsement')).toBeVisible()
    await expect(page.getByText('Autograph Session')).toBeVisible()
    await expect(page.getByText('Game Day Vlog')).toBeVisible()
  })
 
  test('displays prices for all items', async ({ page }) => {
    await expect(page.getByText('$1,200')).toBeVisible()
    await expect(page.getByText('$8,000')).toBeVisible()
    await expect(page.getByText('$2,000')).toBeVisible()
    await expect(page.getByText('$2,500')).toBeVisible()
  })
 
  test('displays category badges', async ({ page }) => {
    await expect(page.getByText('Social Media Post')).toBeVisible()
    await expect(page.getByText('Brand Ambassador')).toBeVisible()
    await expect(page.getByText('Appearance')).toBeVisible()
    await expect(page.getByText('Video Content')).toBeVisible()
  })
 
  test('has View All link', async ({ page }) => {
    const viewAllLink = page.getByRole('link', { name: /view all/i })
    await expect(viewAllLink).toBeVisible()
    await expect(viewAllLink).toHaveAttribute('href', '/marketplace')
  })
 
  test('marketplace cards have hover effects', async ({ page }) => {
    const firstCard = page.locator('.bg-slate-800\\/50').first()
    await firstCard.hover()
 
    // The card should have the hover class applied
    await expect(firstCard).toBeVisible()
  })
 
  test('is responsive on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
 
    // Check that marketplace is still visible
    await expect(page.getByRole('heading', { name: 'NIL Marketplace' })).toBeVisible()
 
    // Items should stack in single column on mobile
    const grid = page.locator('.grid')
    await expect(grid).toBeVisible()
  })
 
  test('is responsive on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
 
    // Check that marketplace is still visible
    await expect(page.getByRole('heading', { name: 'NIL Marketplace' })).toBeVisible()
    await expect(page.getByText('Instagram Story Series')).toBeVisible()
  })
})
 
test.describe('Marketplace Navigation', () => {
  test('can navigate to marketplace from home', async ({ page }) => {
    await page.goto('/')
 
    // Look for marketplace link in navigation
    const marketplaceLink = page.getByRole('link', { name: /marketplace/i })
 
    if (await marketplaceLink.isVisible()) {
      await marketplaceLink.click()
      await expect(page).toHaveURL(/\/marketplace/)
    }
  })
})
 
test.describe('Marketplace Accessibility', () => {
  test('has no accessibility violations on main marketplace page', async ({ page }) => {
    await page.goto('/marketplace')
 
    // Basic accessibility checks
    const heading = page.getByRole('heading', { name: 'NIL Marketplace' })
    await expect(heading).toBeVisible()
 
    // Check that images have alt text or are decorative
    const images = page.locator('img')
    const imageCount = await images.count()
 
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      const role = await img.getAttribute('role')
 
      // Image should have alt text or be marked as presentation
      expect(alt !== null || role === 'presentation').toBeTruthy()
    }
  })
 
  test('cards are keyboard navigable', async ({ page }) => {
    await page.goto('/marketplace')
 
    // Tab through the page
    await page.keyboard.press('Tab')
 
    // The View All link should be focusable
    const viewAllLink = page.getByRole('link', { name: /view all/i })
    await expect(viewAllLink).toBeVisible()
  })
})
 
 
 
================================================
FILE: tests/integration/athletes-api.test.ts
================================================
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
 
// Mock next-auth
vi.mock('next-auth', () => ({
  getServerSession: vi.fn(),
}))
 
// Mock Prisma client
vi.mock('@/lib/prisma', () => ({
  prisma: {
    athlete: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      count: vi.fn(),
    },
  },
}))
 
// Mock rating service
vi.mock('@/services/rating.service', () => ({
  calculateCompositeScore: vi.fn().mockReturnValue(50),
  calculatePercentileRating: vi.fn().mockReturnValue(3),
}))
 
// Import after mocking
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
 
describe('Athletes API Route', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
 
  describe('GET /api/athletes', () => {
    it('returns a list of athletes with pagination', async () => {
      const mockAthletes = [
        {
          id: '1',
          name: 'Marcus Johnson',
          sport: 'Football',
          position: 'Quarterback',
          university: 'University of Texas',
          state: 'Texas',
          rating: 98,
        },
        {
          id: '2',
          name: 'Sarah Chen',
          sport: 'Basketball',
          position: 'Point Guard',
          university: 'Stanford University',
          state: 'California',
          rating: 96,
        },
      ]
 
      vi.mocked(prisma.athlete.findMany).mockResolvedValue(mockAthletes as never)
      vi.mocked(prisma.athlete.count).mockResolvedValue(2)
 
      // Import the route handler dynamically to get fresh mocks
      const { GET } = await import('@/app/api/athletes/route')
 
      const request = new NextRequest('http://localhost:3000/api/athletes')
      const response = await GET(request)
      const data = await response.json()
 
      expect(response.status).toBe(200)
      expect(data.athletes).toHaveLength(2)
      expect(data.athletes[0].name).toBe('Marcus Johnson')
    })
 
    it('filters athletes by sport', async () => {
      const mockAthletes = [
        {
          id: '1',
          name: 'Marcus Johnson',
          sport: 'Football',
          position: 'Quarterback',
          university: 'University of Texas',
          state: 'Texas',
          rating: 98,
        },
      ]
 
      vi.mocked(prisma.athlete.findMany).mockResolvedValue(mockAthletes as never)
      vi.mocked(prisma.athlete.count).mockResolvedValue(1)
 
      const { GET } = await import('@/app/api/athletes/route')
 
      const request = new NextRequest(
        'http://localhost:3000/api/athletes?sport=Football'
      )
      const response = await GET(request)
      const data = await response.json()
 
      expect(response.status).toBe(200)
      expect(data.athletes).toHaveLength(1)
      expect(data.athletes[0].sport).toBe('Football')
    })
 
    it('filters athletes by state', async () => {
      const mockAthletes = [
        {
          id: '1',
          name: 'Marcus Johnson',
          sport: 'Football',
          position: 'Quarterback',
          university: 'University of Texas',
          state: 'Texas',
          rating: 98,
        },
      ]
 
      vi.mocked(prisma.athlete.findMany).mockResolvedValue(mockAthletes as never)
      vi.mocked(prisma.athlete.count).mockResolvedValue(1)
 
      const { GET } = await import('@/app/api/athletes/route')
 
      const request = new NextRequest(
        'http://localhost:3000/api/athletes?state=Texas'
      )
      const response = await GET(request)
      const data = await response.json()
 
      expect(response.status).toBe(200)
      expect(data.athletes[0].state).toBe('Texas')
    })
 
    it('handles search query', async () => {
      const mockAthletes = [
        {
          id: '1',
          name: 'Marcus Johnson',
          sport: 'Football',
          position: 'Quarterback',
          university: 'University of Texas',
          state: 'Texas',
          rating: 98,
        },
      ]
 
      vi.mocked(prisma.athlete.findMany).mockResolvedValue(mockAthletes as never)
      vi.mocked(prisma.athlete.count).mockResolvedValue(1)
 
      const { GET } = await import('@/app/api/athletes/route')
 
      const request = new NextRequest(
        'http://localhost:3000/api/athletes?search=Marcus'
      )
      const response = await GET(request)
      const data = await response.json()
 
      expect(response.status).toBe(200)
      expect(data.athletes[0].name).toContain('Marcus')
    })
 
    it('returns empty array when no athletes found', async () => {
      vi.mocked(prisma.athlete.findMany).mockResolvedValue([])
      vi.mocked(prisma.athlete.count).mockResolvedValue(0)
 
      const { GET } = await import('@/app/api/athletes/route')
 
      const request = new NextRequest(
        'http://localhost:3000/api/athletes?sport=Cricket'
      )
      const response = await GET(request)
      const data = await response.json()
 
      expect(response.status).toBe(200)
      expect(data.athletes).toHaveLength(0)
    })
 
    it('handles database errors gracefully', async () => {
      vi.mocked(prisma.athlete.findMany).mockRejectedValue(
        new Error('Database connection failed')
      )
 
      const { GET } = await import('@/app/api/athletes/route')
 
      const request = new NextRequest('http://localhost:3000/api/athletes')
      const response = await GET(request)
 
      expect(response.status).toBe(500)
    })
  })
 
  describe('POST /api/athletes', () => {
    it('creates a new athlete with valid data', async () => {
      // Mock authenticated session
      vi.mocked(getServerSession).mockResolvedValue({
        user: { id: 'test-user-id', role: 'ATHLETE' },
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      } as never)
 
      // Mock no existing athlete
      vi.mocked(prisma.athlete.findUnique).mockResolvedValue(null)
 
      const newAthlete = {
        firstName: 'New',
        lastName: 'Athlete',
        primarySport: 'Football',
        primaryPosition: 'Wide Receiver',
        state: 'Alabama',
        graduationYear: 2025,
      }
 
      const createdAthlete = {
        id: 'new-id',
        userId: 'test-user-id',
        ...newAthlete,
        compositeScore: 50,
        starRating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        user: { email: 'test@example.com' },
      }
 
      vi.mocked(prisma.athlete.create).mockResolvedValue(createdAthlete as never)
 
      const { POST } = await import('@/app/api/athletes/route')
 
      const request = new NextRequest('http://localhost:3000/api/athletes', {
        method: 'POST',
        body: JSON.stringify(newAthlete),
      })
      const response = await POST(request)
      const data = await response.json()
 
      expect(response.status).toBe(201)
      expect(data.athlete.firstName).toBe('New')
    })
 
    it('returns 401 for unauthenticated requests', async () => {
      // Mock no session
      vi.mocked(getServerSession).mockResolvedValue(null)
 
      const { POST } = await import('@/app/api/athletes/route')
 
      const request = new NextRequest('http://localhost:3000/api/athletes', {
        method: 'POST',
        body: JSON.stringify({ firstName: 'Test' }),
      })
      const response = await POST(request)
 
      expect(response.status).toBe(401)
    })
 
    it('returns 400 when athlete profile already exists', async () => {
      // Mock authenticated session
      vi.mocked(getServerSession).mockResolvedValue({
        user: { id: 'test-user-id', role: 'ATHLETE' },
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      } as never)
 
      // Mock existing athlete
      vi.mocked(prisma.athlete.findUnique).mockResolvedValue({
        id: 'existing-id',
        userId: 'test-user-id',
      } as never)
 
      const { POST } = await import('@/app/api/athletes/route')
 
      const request = new NextRequest('http://localhost:3000/api/athletes', {
        method: 'POST',
        body: JSON.stringify({ firstName: 'Test' }),
      })
      const response = await POST(request)
 
      expect(response.status).toBe(400)
    })
  })
})
 
 
 
================================================
FILE: tests/mocks/handlers.ts
================================================
import { http, HttpResponse } from 'msw'
 
// Define API base URL
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
 
export const handlers = [
  // Athletes API
  http.get(`${API_BASE}/api/athletes`, () => {
    return HttpResponse.json({
      athletes: [
        {
          id: '1',
          name: 'Marcus Johnson',
          sport: 'Football',
          position: 'Quarterback',
          university: 'University of Texas',
          state: 'Texas',
          rating: 98,
          imageUrl: 'https://example.com/athlete1.jpg',
        },
        {
          id: '2',
          name: 'Sarah Chen',
          sport: 'Basketball',
          position: 'Point Guard',
          university: 'Stanford University',
          state: 'California',
          rating: 96,
          imageUrl: 'https://example.com/athlete2.jpg',
        },
      ],
      total: 2,
    })
  }),
 
  http.get(`${API_BASE}/api/athletes/:id`, ({ params }) => {
    const { id } = params
    return HttpResponse.json({
      id,
      name: 'Marcus Johnson',
      sport: 'Football',
      position: 'Quarterback',
      university: 'University of Texas',
      state: 'Texas',
      rating: 98,
      imageUrl: 'https://example.com/athlete1.jpg',
      bio: 'Star quarterback leading the team to victory.',
      stats: {
        games: 12,
        touchdowns: 35,
        yards: 4200,
      },
    })
  }),
 
  http.post(`${API_BASE}/api/athletes`, async ({ request }) => {
    const body = await request.json() as Record<string, unknown>
    return HttpResponse.json(
      {
        id: 'new-athlete-id',
        ...body,
        createdAt: new Date().toISOString(),
      },
      { status: 201 }
    )
  }),
 
  // Authentication API
  http.post(`${API_BASE}/api/auth/register`, async ({ request }) => {
    const body = await request.json() as { email?: string }
 
    // Simulate existing email error
    if (body.email === 'existing@example.com') {
      return HttpResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      )
    }
 
    return HttpResponse.json(
      {
        message: 'Registration successful',
        user: {
          id: 'new-user-id',
          email: body.email,
        },
      },
      { status: 201 }
    )
  }),
 
  http.post(`${API_BASE}/api/auth/login`, async ({ request }) => {
    const body = await request.json() as { email?: string; password?: string }
 
    if (body.email === 'test@example.com' && body.password === 'password123') {
      return HttpResponse.json({
        user: {
          id: 'test-user-id',
          email: 'test@example.com',
          name: 'Test User',
        },
        token: 'mock-jwt-token',
      })
    }
 
    return HttpResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    )
  }),
 
  // Tournament API
  http.get(`${API_BASE}/api/tournaments`, () => {
    return HttpResponse.json({
      tournaments: [
        {
          id: '1',
          name: 'Spring Championship',
          sport: 'Football',
          startDate: '2024-03-15',
          endDate: '2024-03-17',
          status: 'upcoming',
        },
        {
          id: '2',
          name: 'Basketball Invitational',
          sport: 'Basketball',
          startDate: '2024-04-01',
          endDate: '2024-04-03',
          status: 'upcoming',
        },
      ],
    })
  }),
 
  http.get(`${API_BASE}/api/tournaments/:id/matches`, ({ params }) => {
    const { id } = params
    return HttpResponse.json({
      tournamentId: id,
      matches: [
        {
          matchId: '1',
          matchOrder: 1,
          totalMatches: 8,
          competitorA: {
            name: 'Manchester United',
            team: 'England',
            avatar: 'https://example.com/mu.jpg',
            country: 'GB',
          },
          competitorB: {
            name: 'Real Madrid',
            team: 'Spain',
            avatar: 'https://example.com/rm.jpg',
            country: 'ES',
          },
          startTime: '2024-03-15T14:00:00Z',
          matNumber: 1,
        },
      ],
    })
  }),
 
  // Marketplace API
  http.get(`${API_BASE}/api/marketplace`, () => {
    return HttpResponse.json({
      items: [
        {
          id: '1',
          title: 'Instagram Story Series',
          description: 'A series of 5 Instagram stories featuring your brand.',
          category: 'Social Media Post',
          price: 1200,
          author: 'Marcus Johnson',
          imageUrl: 'https://example.com/item1.jpg',
        },
        {
          id: '2',
          title: 'Equipment Endorsement',
          description: 'Full season equipment endorsement deal.',
          category: 'Brand Ambassador',
          price: 8000,
          author: 'Sarah Chen',
          imageUrl: 'https://example.com/item2.jpg',
        },
      ],
    })
  }),
]
 
 
 
================================================
FILE: tests/mocks/server.ts
================================================
import { setupServer } from 'msw/node'
import { handlers } from './handlers'
 
// Setup MSW server with the defined handlers
export const server = setupServer(...handlers)
 
 
 
================================================
FILE: tests/setup/setup.ts
================================================
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeAll, afterAll } from 'vitest'
import { server } from '../mocks/server'
 
// Mock window.matchMedia for next-themes
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
 
// Establish API mocking before all tests
beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' })
})
 
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests
afterEach(() => {
  cleanup()
  server.resetHandlers()
})
 
// Clean up after all tests are done
afterAll(() => {
  server.close()
})
 
// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))
 
// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: function MockImage({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) {
    return Object.assign(document.createElement('img'), { src, alt, ...props })
  },
}))
 
 
 
================================================
FILE: tests/setup/test-utils.tsx
================================================
import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'next-themes'
 
// Add any providers your app uses here
interface AllTheProvidersProps {
  children: React.ReactNode
}
 
function AllTheProviders({ children }: AllTheProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
 
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })
 
// Re-export everything from testing-library
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
 
// Override render method
export { customRender as render }
 
// Utility to wait for async operations
export const waitForLoadingToFinish = () =>
  new Promise((resolve) => setTimeout(resolve, 0))
 
// Mock session data for authenticated tests
export const mockSession = {
  user: {
    id: 'test-user-id',
    name: 'Test User',
    email: 'test@example.com',
    image: null,
  },
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
}
 
// Mock athlete data for testing
export const mockAthlete = {
  id: '1',
  name: 'Marcus Johnson',
  sport: 'Football',
  position: 'Quarterback',
  university: 'University of Texas',
  state: 'Texas',
  rating: 98,
  imageUrl: 'https://example.com/athlete.jpg',
}
 
// Mock marketplace item for testing
export const mockMarketplaceItem = {
  id: '1',
  title: 'Instagram Story Series',
  description: 'A series of 5 Instagram stories featuring your brand.',
  category: 'Social Media Post',
  price: 1200,
  author: 'Marcus Johnson',
  imageUrl: 'https://example.com/marketplace.jpg',
}
 
// Mock tournament match for testing
export const mockTournamentMatch = {
  matchId: '1',
  matchOrder: 1,
  totalMatches: 8,
  competitorA: {
    name: 'Manchester United',
    team: 'England',
    avatar: 'https://example.com/mu.jpg',
    country: 'GB',
  },
  competitorB: {
    name: 'Real Madrid',
    team: 'Spain',
    avatar: 'https://example.com/rm.jpg',
    country: 'ES',
  },
  startTime: '2024-03-15T14:00:00Z',
  matNumber: 1,
}
 
 
 
================================================
FILE: tests/unit/nil-marketplace.test.tsx
================================================
import { describe, it, expect } from 'vitest'
import { render, screen } from '../setup/test-utils'
import { NILMarketplace } from '@/components/marketplace/nil-marketplace'
 
describe('NILMarketplace', () => {
  it('renders the marketplace header', () => {
    render(<NILMarketplace />)
 
    expect(screen.getByText('NIL Marketplace')).toBeInTheDocument()
    expect(screen.getByText('Exclusive partnership opportunities')).toBeInTheDocument()
  })
 
  it('renders all marketplace items', () => {
    render(<NILMarketplace />)
 
    // Check for default mock items
    expect(screen.getByText('Instagram Story Series')).toBeInTheDocument()
    expect(screen.getByText('Equipment Endorsement')).toBeInTheDocument()
    expect(screen.getByText('Autograph Session')).toBeInTheDocument()
    expect(screen.getByText('Game Day Vlog')).toBeInTheDocument()
  })
 
  it('displays correct prices for items', () => {
    render(<NILMarketplace />)
 
    expect(screen.getByText('$1,200')).toBeInTheDocument()
    expect(screen.getByText('$8,000')).toBeInTheDocument()
    expect(screen.getByText('$2,000')).toBeInTheDocument()
    expect(screen.getByText('$2,500')).toBeInTheDocument()
  })
 
  it('displays category badges for items', () => {
    render(<NILMarketplace />)
 
    expect(screen.getByText('Social Media Post')).toBeInTheDocument()
    expect(screen.getByText('Brand Ambassador')).toBeInTheDocument()
    expect(screen.getByText('Appearance')).toBeInTheDocument()
    expect(screen.getByText('Video Content')).toBeInTheDocument()
  })
 
  it('displays author names', () => {
    render(<NILMarketplace />)
 
    expect(screen.getByText('Marcus Johnson')).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('Tyler Brooks')).toBeInTheDocument()
  })
 
  it('renders View All link with correct href', () => {
    render(<NILMarketplace />)
 
    const viewAllLink = screen.getByRole('link', { name: /view all/i })
    expect(viewAllLink).toHaveAttribute('href', '/marketplace')
  })
 
  it('accepts custom items prop', () => {
    const customItems = [
      {
        id: 'custom-1',
        title: 'Custom NIL Deal',
        description: 'A custom deal for testing',
        category: 'Custom Category',
        price: 5000,
        author: 'Test Author',
        imageUrl: 'https://example.com/test.jpg',
      },
    ]
 
    render(<NILMarketplace items={customItems} />)
 
    expect(screen.getByText('Custom NIL Deal')).toBeInTheDocument()
    expect(screen.getByText('$5,000')).toBeInTheDocument()
    expect(screen.getByText('Custom Category')).toBeInTheDocument()
    expect(screen.getByText('Test Author')).toBeInTheDocument()
  })
 
  it('accepts custom viewAllHref prop', () => {
    render(<NILMarketplace viewAllHref="/custom-marketplace" />)
 
    const viewAllLink = screen.getByRole('link', { name: /view all/i })
    expect(viewAllLink).toHaveAttribute('href', '/custom-marketplace')
  })
 
  it('renders responsive grid layout', () => {
    const { container } = render(<NILMarketplace />)
 
    const grid = container.querySelector('.grid')
    expect(grid).toHaveClass('grid-cols-1')
    expect(grid).toHaveClass('sm:grid-cols-2')
    expect(grid).toHaveClass('lg:grid-cols-4')
  })
})
 
 
 
================================================
FILE: .claude/settings.local.json
================================================
{
  "permissions": {
    "allow": [
      "Bash(git init:*)",
      "Bash(git add:*)",
      "Bash(git commit -m \"$\\(cat <<''EOF''\nAdd CAM CAMP event pages and Capacitor iOS support\n\n- Add Vote page with hero header, voting cards, charity partners section\n- Add Leaderboard page with sortable table and live rankings\n- Add Finalists page with championship event card and filter system\n- Add Nominate page with comprehensive nomination form\n- Configure Capacitor for iOS simulator development\n- Fix hydration error by using usePathname hook\n- Add allowedDevOrigins for cross-origin dev support\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\nEOF\n\\)\")",
      "Bash(export PATH=\"/opt/homebrew/bin:$PATH\")",
      "Bash(python3.12:*)",
      "Bash(pip3.12:*)",
      "Bash(gitingest --version:*)",
      "Bash(gitingest --help:*)",
      "Bash(gitingest:*)"
    ]
  }
}
 
