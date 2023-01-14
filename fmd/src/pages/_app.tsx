import { AppProps } from 'next/app';

import '../../public/assets/fonts/styles.css';
import { GlobalStyles } from '../styles/global-styles';
import { AppThemeProvider } from 'contexts/ThemeContext';
import { MenuContextProvider } from 'contexts/MenuContext/Context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <MenuContextProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </MenuContextProvider>
    </AppThemeProvider>
  );
}

export default MyApp;
