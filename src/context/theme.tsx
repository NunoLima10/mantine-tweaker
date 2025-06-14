import { convertToMantineObjectString } from "@/lib/conver-to-mantine-object-string";
import { convertToMantineTheme } from "@/lib/conver-to-mantine-theme";
import { defaultPresets } from "@/lib/theme-presets";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { useClipboard } from "node_modules/@mantine/hooks/lib/use-clipboard/use-clipboard";
import { createContext, PropsWithChildren, useState } from "react";

type ThemeContextType = {
  switchTheme: (key: string) => void;
  themeObjectString:string | undefined;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<MantineThemeOverride>();
  const [themeObjectString, setThemeString] = useState<string>();


  function switchTheme(key: string) {
    const theme = defaultPresets[key];
    if (!theme) return;
    const mantineTheme = convertToMantineTheme(theme.styles);
    const mantineThemeString = convertToMantineObjectString(theme.styles);
    setTheme(mantineTheme);
    setThemeString(mantineThemeString);
  }


  const value = {
    switchTheme,
    themeObjectString
  };

  return (
    <ThemeContext.Provider value={value}>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
