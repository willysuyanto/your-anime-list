import type { themeConfig } from '@config';
import 'styled-components';

type themeType = typeof themeConfig;

// and extend them!
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends themeType {}
}