'use client';

import { GlobalStyle } from '@/styles/global.style';
import { theme } from '@/styles/theme.style';
import { ThemeProvider } from 'styled-components';

export function GlobalThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
