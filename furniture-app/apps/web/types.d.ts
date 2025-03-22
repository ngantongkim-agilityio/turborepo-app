import { config } from '@repo/config';

export type Conf = typeof config;

declare module '@my/ui' {
  interface TamaguiCustomConfig extends Conf {}
}
