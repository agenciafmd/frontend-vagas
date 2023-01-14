import {AppThemeProvider} from '../src/contexts/ThemeContext'
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';
import '../public/assets/fonts/styles.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.primaryColor,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <AppThemeProvider>
      <Story />
      <GlobalStyles />
    </AppThemeProvider>
  ),
];
