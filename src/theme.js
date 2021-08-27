import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#78909c',
    },
    secondary: {
      main: '#ffab40',
    },
  },
  typography: {
    fontFamily: 'Questrial',
  },
  spacing: 6,
});

export default theme;