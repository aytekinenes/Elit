import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides:{
        root:{
          textTransform: "none",
          borderRadius: "980px",
          paddingLeft:'21px',
          paddingRight:'21px',
          paddingTop:'11px',
          paddingBottom:'11px',
          fontSize:'18px',
          fontWeight:'bold'
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000',
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
