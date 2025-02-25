import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import onlyWarn from 'eslint-plugin-only-warn';

const [tsEslintBase, tsEslintEslintRecommended, tsEslintRecommend] =
  tseslint.configs.recommended;

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  tsEslintBase,
  tsEslintEslintRecommended,
  {
    ...tsEslintRecommend,
    rules: {
      ...tsEslintRecommend.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
      ]
    }
  },
  {
    plugins: {
      turbo: turboPlugin
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn'
    }
  },
  {
    plugins: {
      onlyWarn
    }
  },
  {
    ignores: ['dist/**']
  }
];
