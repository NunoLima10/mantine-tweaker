import { Style } from "@/types/theme-style";
import {
  createTheme,
  darken,
  lighten,
  MantineThemeOverride,
  virtualColor,
} from "@mantine/core";

export function convertToMantineTheme(style: Style): MantineThemeOverride {
  if (!style || !style.light || !style.dark) {
    throw new Error("Invalid style object provided");
  }

  const light = {
    body: style.light.background as string,
    text: style.light.foreground as string,
    hover: style.light.secondary as string,
    menuHover: lighten(style.light.secondary as string, 0.3),
    disabledBG: style.light.muted as string,
    border: style.light.input as string, //skelont
    inputBoder: style.light.border as string,
    placeholder: style.light["muted-foreground"] as string, // disabled-text
    dimmed: lighten(style.light["muted-foreground"] as string, 0.3),
    closeX: style.light["accent-foreground"] as string,
    unknown: "red",
    notifictionTitle: style.light.foreground as string,
  };
  const lightPrimary = {
    filled: style.light.primary as string, //outline
    hover: lighten(style.light.primary as string, 0.15) as string,
  };

  const dark = {
    body: style.dark.background as string,
    text: style.dark.foreground as string,
    hover: style.dark.secondary as string,
    menuHover: lighten(style.dark.secondary as string, 0.3),
    disabledBG: style.dark.muted as string,
    border: style.dark.input as string, //skelont
    inputBoder: style.dark.border as string,
    placeholder: style.dark["muted-foreground"] as string, // disabled-text
    dimmed: lighten(style.dark["muted-foreground"] as string, 0.3),
    closeX: style.dark["accent-foreground"] as string,
    unknown: "red",
    notifictionTitle: style.dark.foreground as string,
  };

  const darkPrimary = {
    filled: style.dark.primary as string,
    hover: darken(style.dark.primary as string, 0.15),
    text: style.dark.foreground as string,
    buttonOuntline: style.dark.primary as string,
    lightButton: style.dark.primary as string,
    link: style.dark.primary as string,
  };

  return createTheme({
    defaultRadius: "0.5rem",
    //mantine-primary-color-contrast
    white: light.body, //light-mode body-color/background-color
    black: light.text, //light-mode text-color
    primaryColor: "primary",
    primaryShade: 5,
    defaultGradient: {
      from: style.light.accent,
      to: style.dark.accent,
      deg: 113,
    },
    colors: {
      primary: virtualColor({
        name: "primary",
        dark: "primarydark",
        light: "primarylight",
      }),
      //dark -mode
      dark: [
        dark.text,
        dark.closeX,
        dark.dimmed,
        dark.placeholder,
        dark.inputBoder,
        dark.hover,
        dark.disabledBG,
        dark.body,
        darken(dark.body, 0.2),
        "blue",
      ],

      //light -mode
      gray: [
        light.hover,
        light.menuHover,
        light.disabledBG,
        light.border,
        light.inputBoder,
        light.placeholder,
        light.dimmed,
        light.closeX,
        light.unknown,
        light.notifictionTitle,
      ],
      primarylight: [
        "green",
        "green",
        "green",
        "green",
        "green",
        lightPrimary.filled,
        lightPrimary.hover,
        "green",
        "green",
        "green",
      ],
      primarydark: [
        darkPrimary.text,
        darkPrimary.buttonOuntline,
        "yellow",
        darkPrimary.lightButton,
        darkPrimary.link,
        darkPrimary.filled,
        darkPrimary.hover,
        "yellow",
        "yellow",
        "yellow",
      ],
    },
  });
}

