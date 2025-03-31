# Turborepo Practice

## 🌟 Overview

This monorepo is a starter for an Expo + Next.js + Tamagui.

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have the correct versions installed:

- **[Node.js v20.18.1](https://nodejs.org/en/download/package-manager)**
- **[yarn v4.0.2](https://classic.yarnpkg.com/lang/en/docs/install/)**
- **[turbo v2.4.2](https://turbo.build/repo/docs/getting-started/installation)**

## 🛠️ Technical Stack

### 💻 Languages

- [HTML](https://www.w3schools.com/html/): is the standard markup language for Web pages.
- [CSS](https://www.w3schools.com/css/): is the language we use to style an HTML document.
- [Typescript](https://www.typescriptlang.org): is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications and transpiled to JavaScript.

### 📚 Frameworks & Libraries

- [Turborepo](https://turbo.build/repo/docs)(v2.4.2): Turborepo is a high-performance build system for JavaScript and TypeScript codebases. It is designed for scaling monorepos and also makes workflows in single-package workspaces faster, too.
- [React](https://facebook.github.io/react)(v18.3.1): a JavaScript library for building user interfaces.
- [React Native](https://reactnative.dev/)(v0.76.7): React Native brings the best parts of developing with React to native development. It's a best-in-class JavaScript library for building user interfaces.
- [Expo](https://expo.dev/)(v52.0.37): Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
- [Next.js](https://nextjs.org)(v14.0.4): is a React framework that simplifies full-stack web development with features like server-side rendering, static site generation, and routing, allowing developers to focus on building applications.
- [Tamagui](https://tamagui.dev): is a UI library and optimizing compiler for React and React Native that simplifies building cross-platform applications with a focus on performance and code sharing.
- [Zustand](https://github.com/pmndrs/zustand): a small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy API based on hooks, isn't boilerplatey or opinionated.
- [React Hook Form](https://react-hook-form.com/): performant, flexible and extensible forms with easy-to-use validation.

### 🧰 Development Tools

- [Husky](https://github.com/typicode/husky): can prevent bad git commit, git push.
- [Prettier](https://prettier.io): is an opinionated code formatter
- [Commitlint](https://commitlint.js.org): Easy setup. Get high commit message quality and short feedback cycles by linting commit messages right when they are authored.

## 🗂 Folder layout

The main apps are:

- `apps` all backend and frontend apps
  - `expo` (native)
  - `next` (web)
- `packages` shared packages across apps
  - `ui` includes your custom UI kit that will be optimized by Tamagui
  - `constants`
  - `hooks`
  - `stores`
  - `utils`
  - `typescript-config`
  - `eslint-config`

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn dev:web`

- Expo local dev: `yarn dev:mobile`

Some command lines to run tasks specified in `turbo.json`

- `turbo run` display what tasks are available for the packages in the repository.
- `turbo run build --cache=local:r,remote:rw` only read from local cache. Read from and write to Remote Cache.
- `turbo run build --cache=local:` does not use cache, equivalent to omitting the cache source option.
- `turbo run build --filter={.apps/*}[HEAD^1]` any packages in `apps` subdirectories that have changed since the last commit.
- `turbo run web#lint` run a specific task for a specific package.
- `turbo run build --force` ignore existing cached artifacts and re-execute all tasks.
- `turbo run dev --no-cache` do not cache results of the task.

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/ui`:

```sh
cd packages/ui
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `native`:

```sh
cd apps/native
yarn add react-native-reanimated
cd ..
yarn
```

## Update new dependencies

### Pure JS dependencies

```sh
yarn upgrade-interactive
```

You can also install the native library inside of `packages/ui` if you want to get auto-import for that package inside of the `ui` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

You may potentially want to have the native module transpiled for the next app. If you get error messages with `Cannot use import statement outside a module`, you may need to use `transpilePackages` in your `next.config.js` and add the module to the array there.

### Deploying to Vercel

- Root: `apps/web`
- Install command to be `yarn set version stable && yarn install`
- Build command: leave default setting
- Output dir: leave default setting
