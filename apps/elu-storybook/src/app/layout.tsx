import '@eluelu/elu-ui/globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import { ThemeProvider } from '@/components/themes/provider';
import '@/styles/globals.css'

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout: RCC<RootLayoutProps> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
    >
      <ThemeProvider>
        <div className="flex min-h-screen flex-col pt-28">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
