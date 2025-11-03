import '@eluelu/elu-ui/globals.css';
import type { ReactNode } from 'react';

import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import { ThemeProvider } from '@/components/themes/provider';
import { websiteFontClasses } from '@/styles/font';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout: RCC<RootLayoutProps> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={websiteFontClasses}>
      <ThemeProvider>
        <Header />
        <main className="flex min-h-screen flex-col pt-16 md:pt-[128px]">
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
