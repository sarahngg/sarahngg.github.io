import { createTheme } from '@material-ui/core/styles';

const lightPalette = {
  type: 'light',
  primary: {
    main: '#78909c',
  },
  secondary: {
    main: '#ffab40',
  },
  background: {
    paper: '#f5f5f5',
  },
};

const darkPalette = {
  type: 'dark',
  primary: {
    main: '#78909c',
  },
  secondary: {
    main: '#ffab40',
  },
};

function makeThemeWithPalette (palette) {
  return createTheme({
    palette: palette,
    typography: {
      fontFamily: 'Questrial',
    },
  // spacing: 6,
  })
}

const theme = { 
  light: makeThemeWithPalette(lightPalette), 
  dark:  makeThemeWithPalette(darkPalette)
};

export default theme;