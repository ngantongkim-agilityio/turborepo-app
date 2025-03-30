import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: ['src/index.ts'],
  banner: {
    js: "'use client'"
  },
  clean: true,
  format: ['cjs', 'esm'],
  external: ['react'],
  dts: true,
  target: 'es2020',
  ...options
}));
