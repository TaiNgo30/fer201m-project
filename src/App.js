import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { createTheme } from '@mui/material';
import ColorModeContext from './context/ColorModeContext';
import { routes } from './routes/routes';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

const useColorMode = () => {
  const [mode, setMode] = React.useState('light');

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const colorMode = React.useMemo(() => ({
    toggleColorMode,
  }), [toggleColorMode]);

  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        mode,
      },
    }), [mode]);

  return { colorMode, theme };
}

function App() {
  const { colorMode, theme } = useColorMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Navigation />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {routes.map((route) => (
              <Route 
                key={route.path} 
                path={route.path} 
                element={<PrivateRoute element={route.element} />} 
              />
            ))}
          </Routes>
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
