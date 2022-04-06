/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextData {
  theme: Theme;
  toogleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const theme = localStorage.getItem('theme');

    return (theme ?? 'light') as Theme;
  });
  function toogleTheme() {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}
