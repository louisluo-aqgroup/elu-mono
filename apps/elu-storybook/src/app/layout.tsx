import '@eluelu/elu-ui/globals.css';
import type { ReactNode } from 'react';

import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header/main';
import { ThemeProvider } from '@/components/themes/provider';
import { websiteFontClasses } from '@/styles/font';
import { ReactQueryProvider } from '@/components/providers/react-query';
import { ModalProvider } from '@eluelu/elu-ui/components/modal-provider';
import { ModalContainer } from '@eluelu/elu-ui/components/modal-renderer';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout: RCC<RootLayoutProps> = ({ children }) => (
  <html lang="zh-TW" suppressHydrationWarning>
    <body className={websiteFontClasses}>
      <ReactQueryProvider>
        <ThemeProvider>
          <ModalProvider>
            <Header />
            <main className="flex min-h-screen flex-col pt-16 lg:pt-32">
              {children}
            </main>
            <Footer />
            <ModalContainer />
          </ModalProvider>
        </ThemeProvider>
      </ReactQueryProvider>
    </body>
  </html>
);

export default RootLayout;
