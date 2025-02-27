import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { NextTamaguiProvider } from './NextTamaguiProvider';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <NextTamaguiProvider>{children}</NextTamaguiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
