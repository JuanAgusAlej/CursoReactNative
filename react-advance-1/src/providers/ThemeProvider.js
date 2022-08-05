import { createContext, useContext, useState } from 'react';

// creamos el contexto
const themeContex = createContext();
const themeToggleContex = createContext();

export const useThemeContext = () => {
  return useContext(themeContex);
};

export const useThemeToggleContext = () => {
  return useContext(themeToggleContex);
};

export const ThemeProvider = ({ children }) => {
  const [thema, setThema] = useState('ligth');
  return (
    <themeContex.Provider value={thema}>
      <themeToggleContex.Provider value={setThema}>{children}</themeToggleContex.Provider>
    </themeContex.Provider>
  );
};
