import { Style } from "@/types/theme-style";
import {
  createTheme,
  lighten,
  MantineThemeOverride,
  virtualColor,
} from "@mantine/core";

export function genTheme(style: Style): MantineThemeOverride {
  return createTheme({
    defaultRadius: "0.5rem",
    white: style.light.background, //light-mode body-color/background-color
    black: style.light.foreground, //light-mode text-color
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
        style.dark.foreground, //text color
        "red",
        style.dark["muted-foreground"], //dimmed-color
        style.dark["muted-foreground"], //placeholder-color ,
        style.dark.border, //border-color
        style.dark.accent, //hover-color
        style.dark.muted, //disabled-color
        style.dark.background, //body-color/background-color
        "blue",
        "blue",
      ],

      //light -mode
      gray: [
        //hover-color
        style.light.secondary,
        style.light.muted,
        style.light.muted, //disabled-bg-color
        style.light.input, //skelont-color
        style.light.border, //border-color
        style.light["muted-foreground"], //placeholder-color, disabled-color
        lighten(style.light["muted-foreground"], 0.15), //dimmed-color
        "yellow",
        "green",
        style.dark["muted-foreground"],
      ],
      primarylight: [
        style.dark.foreground,
        "black",
        "#a5d8ff",
        "#74c0fc",
        "#4dabf7",
        style.light.primary, //color filled, outline
        lighten(style.light.primary, 0.15), //color-filled-hover
        "#1c7ed6",
        "#1971c2",
        "#1864ab",
      ],
      primarydark: [
        style.dark.foreground,
        style.dark.primary,
        "#ff00ff",
        style.dark.primary,
        "#4dabf7",
        style.dark.primary, //color filled, outline
        lighten(style.dark.primary, 0.15), //color-filled-hover
        "#1c7ed6",
        "#1971c2",
        "#1864ab",
      ],
    },
  });
}
