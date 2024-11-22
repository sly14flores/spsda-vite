import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import merge from 'lodash.merge'; // THEME SHADOWS LIST

import shadows from './shadows'; // MUI COMPONENTS OVERRIDE

import componentsOverride from './components'; // LIGHT & DARK THEME OPTIONS

import themesOptions from './themeOptions';
import { THEMES } from '@/utils/constants'; // FONT VARIANTS

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
const baseOptions = {
  direction: 'ltr',
  typography: {
    fontFamily: "'Inter', sans-serif"
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
}; // ==============================================================

// ==============================================================
export const createCustomTheme = settings => {
  /**
   * settings.theme value is 'light' or 'dark'
   * update settings in contexts/settingsContext.tsx
   */
  let themeOption = themesOptions[settings.theme];

  if (!themeOption) {
    themeOption = themesOptions[THEMES.LIGHT];
  }

  const mergedThemeOptions = merge({}, baseOptions, themeOption, {
    direction: settings.direction
  });
  let theme = createTheme(mergedThemeOptions); // OVERRIDE SHADOWS

  theme.shadows = shadows(theme); // OVERRIDE COMPONENTS

  theme.components = componentsOverride(theme);

  if (settings.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};