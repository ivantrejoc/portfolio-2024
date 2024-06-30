import { createContext, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { LightTheme, DarkTheme } from './index'; // Asegúrate de importar los temas correctamente

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

const MuiThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeMode = useMemo(() => (theme === 'light' ? LightTheme : DarkTheme), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeMode}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MuiThemeProvider;
