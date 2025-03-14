import { config as baseConfig } from './base.js';
import expoConfig from 'eslint-config-expo';

const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx', '.d.ts'];
const platformSubExtensions = ['.android', '.ios', '.web', '.native'];

const platformExtensions = platformSubExtensions.flatMap((subExt) =>
  [...jsExtensions, ...tsExtensions].map((ext) => `${ext}${subExt}`)
);

export const expoConfigSetup = [
  // Base configuration
  ...baseConfig,

  // Expo-specific rules scoped to platform extensions
  {
    files: [
      '**/*.{js,jsx,ts,tsx}', // Standard extensions
      `**/*.{${platformExtensions.join(',')}}` // Platform-specific extensions
    ],
    rules: {
      ...expoConfig.rules,
      '@typescript-eslint/no-require-imports': 'off'
    }
  }
];
