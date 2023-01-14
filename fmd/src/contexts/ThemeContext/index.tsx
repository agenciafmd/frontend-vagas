import React, { createContext, useEffect, useCallback, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { blackTheme, theme } from 'styles/theme';

export type AppThemeProviderProps = {
  children: React.ReactNode;
};

export type AppThemeContextValue = {
  theme: DefaultTheme;
  setTheme?: (mode: 'dark' | 'white') => void;
};
export const AppThemeContext = createContext<AppThemeContextValue>({ theme });

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [AppTheme, setAppTheme] = useState(theme);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    setAppTheme(JSON.parse(localTheme));
  }, []);

  const handleAppTheme: AppThemeContextValue['setTheme'] = useCallback(
    (mode = 'white') => {
      if (mode === 'white') {
        setAppTheme(theme);
        localStorage.setItem('theme', JSON.stringify(theme));
        return;
      }
      if (mode === 'dark') {
        const newTheme = {
          ...theme,
          name: 'dark',
          colors: blackTheme,
        };
        setAppTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
        return;
      }
    },
    [],
  );

  return (
    <AppThemeContext.Provider
      value={{ theme: AppTheme, setTheme: handleAppTheme }}
    >
      <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};
