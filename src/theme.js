import '@fontsource/montserrat/variable.css';
import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    allVariants: {},
    h1: {
      fontSize: '3rem',
      fontWeight: 900,
      color: '#E4472E',
    },
    h2: {
      fontSize: '2rem',
      color: 'black',
    },
    h3: {
      fontSize: '1.1rem',
      color: '#E4472E',
    },
    h4: {
      fontSize: '1.3rem',
      fontWeight: 400,
      color: '#E4472E',
    },
    p: {
      fontSize: '1rem',
    },
  },

  components: {
    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
            backgroundColor: '#A5A5A5',
            
        },
        bar: {
            backgroundColor: '#E4472E',
        },
        root: {
          height: 15,
          ml: 2,
          mr: 2,
          mt: 2,
          mb: 1,
        },
        
      },
    },
  },
});
export default theme;
