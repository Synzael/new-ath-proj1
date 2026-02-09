import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.test.{ts,tsx}', 'src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'node_modules/',
        'tests/',
        '.next/',
        'prisma/',
        '**/*.d.ts',
        '**/*.config.*',
        'src/types/**',
        'src/components/ui/**', // shadcn UI components (auto-generated)
        'src/app/**/page.tsx', // Next.js page wrappers (tested via E2E)
        'src/app/**/layout.tsx', // Next.js layouts (tested via E2E)
        'src/middleware.ts', // Next.js middleware (tested via E2E)
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
