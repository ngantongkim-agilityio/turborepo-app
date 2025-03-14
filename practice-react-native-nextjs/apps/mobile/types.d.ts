import { config } from './tamagui.config';

export type Conf = typeof config;

declare module '@repo/ui' {
  type TamaguiCustomConfig = Conf;
}
