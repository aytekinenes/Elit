import AppRouter from './routes/AppRouter';
import theme from './theme/theme';
import { ThemeProvider, CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
