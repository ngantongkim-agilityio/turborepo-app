/** @type {import('next').NextConfig} */
const { withTamagui } = require('@tamagui/next-plugin');
const { join } = require('node:path');

const boolVals = {
  true: true,
  false: false
};

const disableExtraction =
  boolVals[process.env.DISABLE_EXTRACTION] ??
  process.env.NODE_ENV === 'development';

const plugins = [
  withTamagui({
    config: '../../packages/config/src/tamagui.config.ts',
    components: ['tamagui', '@repo/ui'],
    appDir: true,
    importsWhitelist: ['constants.js', 'colors.js'],
    outputCSS:
      process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
    logTimings: true,
    disableExtraction,
    shouldExtract: (path) => {
      if (path.includes(join('packages', 'app'))) {
        return true;
      }
    },
    excludeReactNativeWebExports: [
      'Switch',
      'ProgressBar',
      'Picker',
      'CheckBox',
      'Touchable'
    ]
  })
];

module.exports = () => {
  /** @type {import('next').NextConfig} */
  let config = {
    typescript: {
      ignoreBuildErrors: true
    },
    redirects: async () => [
      {
        source: '/',
        destination: '/login',
        permanent: true
      }
    ],
    modularizeImports: {
      '@tamagui/lucide-icons': {
        transform: `@tamagui/lucide-icons/dist/esm/icons/{{kebabCase member}}`,
        skipDefaultConversion: true
      }
    },
    transpilePackages: [
      'solito',
      'react-native-svg',
      'react-native-web',
      'expo-linking',
      'expo-constants',
      'expo-modules-core'
    ],
    experimental: {
      scrollRestoration: true
    },
    webpack: (config) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Transform all direct `react-native` imports to `react-native-web`
        'react-native$': 'react-native-web'
      };
      config.resolve.extensions = [
        '.web.js',
        '.web.jsx',
        '.web.ts',
        '.web.tsx',
        ...config.resolve.extensions
      ];
      config.module.rules.push({
        test: /\.js$/,
        include: [
          /node_modules\/@react-native/,
          /node_modules\/react-native-svg/
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: ['@babel/plugin-transform-flow-strip-types']
          }
        }
      });

      return config;
    }
  };

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config)
    };
  }

  return config;
};
