module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          config: './tamagui.config.ts',
          components: ['tamagui', '@repo/ui'],
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development',
        },
      ],
    ],
  };
};
