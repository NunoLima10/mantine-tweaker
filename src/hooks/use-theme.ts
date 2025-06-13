import { ThemeContext } from "@/context/theme";
import { useContext } from "react";

export function useTheme() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return themeContext;
}
