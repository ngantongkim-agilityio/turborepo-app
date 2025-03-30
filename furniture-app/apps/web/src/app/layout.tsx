import type { Metadata } from 'next';
import { QueryClientProvider, NextTamaguiProvider } from '@/providers';

export const metadata: Metadata = {
  title: 'Tamagui • App Router',
  description: 'Tamagui, Solito, Expo & Next.js',
  icons: '/favicon.ico'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // You can use `suppressHydrationWarning` to avoid the warning about mismatched content during hydration in dev mode
    <html lang='en' suppressHydrationWarning>
      <body>
        <QueryClientProvider>
          <NextTamaguiProvider>{children}</NextTamaguiProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
