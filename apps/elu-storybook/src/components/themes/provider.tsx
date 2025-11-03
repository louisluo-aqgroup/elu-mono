'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const ThemeProvider: RCC = ({ children }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableColorScheme
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
};
