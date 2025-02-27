import { config } from '@repo/tamagui-config';

export type Conf = typeof config;

declare module '@repo/ui' {
  interface TamaguiCustomConfig extends Conf {}
}
