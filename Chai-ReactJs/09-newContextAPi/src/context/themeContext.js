// 1
import { createContext, useContext } from "react";
export const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});
// 2
export const ThemeProvider = ThemeContext.Provider;
export default function useTheme() {
  return useContext(ThemeContext);
}
