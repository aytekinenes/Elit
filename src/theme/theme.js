import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#000',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#000',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000', // Mavi örnek renk
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#000',
          color: '#ffffff',
        },
      },
    },
  },
});

export default theme;
