import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  // ---
  const [darkMode, setDarkMode] = useLocalStorage(
    "isDarkMode",
    false
  );

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error(
      "Dark mode context was used outside of dark mode provider"
    );
  return context;
}
