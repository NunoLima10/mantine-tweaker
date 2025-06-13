import { convertToMantineTheme } from "@/lib/conver-to-mantine-theme";
import { defaultPresets } from "@/lib/theme-presets";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { createContext, PropsWithChildren, useState } from "react";

type ThemeContextType = {
  switchTheme: (key: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<MantineThemeOverride>();

  function switchTheme(key: string) {
    const theme = defaultPresets[key];
    if (!theme) return;
    const mantineTheme = convertToMantineTheme(theme.styles);
    setTheme(mantineTheme);
  }
  const value = {
    switchTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
