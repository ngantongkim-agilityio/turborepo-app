import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui, createTokens } from 'tamagui';
import { bodyFont, headingFont } from './fonts';
import { colors } from './colors';
import { metrics } from './metrics';
const { size, space, zIndex, radius } = metrics;

import { animations } from './animations';

export const config = createTamagui({
  ...defaultConfig,
  animations,
  fonts: {
    body: bodyFont,
    heading: headingFont
  },
  tokens: createTokens({ color: colors, space, size, radius, zIndex })
});
