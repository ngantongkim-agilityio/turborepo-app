import { expoConfigSetup } from '@repo/eslint-config/expo';

/** @type {import("eslint").Linter.Config} */
export default [
  ...expoConfigSetup,
  {
    ignores: ['**/*.config.*', '**/.expo/**', '**/.tamagui/**', '**/.turbo/**', '**/node_modules/**'],
  },
];
