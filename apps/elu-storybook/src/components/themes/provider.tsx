'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const ThemeProvider: RCC = ({ children }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      enableColorScheme
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
};
