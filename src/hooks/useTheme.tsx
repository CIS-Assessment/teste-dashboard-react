import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useMemo,
  useCallback,
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

  const toogleTheme = useCallback(() => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  }, [currentTheme]);

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const ThemeContextValues = useMemo(
    () => ({
      theme: currentTheme,
      toogleTheme,
    }),
    [currentTheme, toogleTheme],
  );

  return (
    <ThemeContext.Provider value={ThemeContextValues}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}
