import { createContext, useState } from "react";
import { ThemeProvider } from 'styled-components';

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

/* 1 - Criação do Contexto */
export const ThemeContext = createContext();
/* 2 - Criação do Provider que irá repassar o tema para as rotas da aplicação */
export const ThemeContextProvider = ({ children }) => {

  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      return 'dark';
    } else {
      return 'light';
    }
  });

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
			
      <ThemeProvider theme={isDarkTheme === 'dark' ? dark : light}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}