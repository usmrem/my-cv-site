import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";


type Theme = "dark" | "light";


type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export function ThemeProvider({ children }: { children: ReactNode }) {


  const getSystemTheme = (): Theme => {

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";

  };

const [theme, setTheme] = useState<Theme>(() => {
  return getSystemTheme();
});

  useEffect(() => {

    const media = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );


    const updateTheme = () => {

      setTheme(
        media.matches
          ? "dark"
          : "light"
      );

    };


    media.addEventListener(
      "change",
      updateTheme
    );


    return () => {
      media.removeEventListener(
        "change",
        updateTheme
      );
    };


  }, []);



  useEffect(() => {

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );


  }, [theme]);



  const toggleTheme = () => {

    setTheme(prev =>
      prev === "dark"
        ? "light"
        : "dark"
    );

  };



  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >

      {children}

    </ThemeContext.Provider>
  );

}



export function useTheme() {

  const context = useContext(ThemeContext);


  if (!context) {
    throw new Error(
      "useTheme must be used within ThemeProvider"
    );
  }


  return context;

}