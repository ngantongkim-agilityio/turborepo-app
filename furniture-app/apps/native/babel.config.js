module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        '@tamagui/babel-plugin',
        {
          components: ['@my/ui', 'tamagui'],
          config: '../../packages/config/src/tamagui.config.ts',
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development'
        }
      ]
    ]
  };
};
