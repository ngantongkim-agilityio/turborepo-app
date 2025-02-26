import type { ReactNode } from 'react';
import type { Metadata } from 'next';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
