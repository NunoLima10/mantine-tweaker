import { Style } from "@/types/theme-style";
import {
  createTheme,
  lighten,
  MantineThemeOverride,
  virtualColor,
} from "@mantine/core";

export function convertToMantineTheme(style: Style): MantineThemeOverride {

  if (!style || !style.light || !style.dark) {
    throw new Error("Invalid style object provided");
  }
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
        style.dark.foreground as string, //text color
        style.dark.foreground as string,
        style.dark["muted-foreground"] as string, //dimmed-color
        style.dark["muted-foreground"] as string, //placeholder-color ,
        style.dark.border as string, //border-color
        style.dark.accent as string, //hover-color
        style.dark.muted as string, //disabled-color
        style.dark.background as string, //body-color/background-color
        "blue",
        "blue",
      ],

      //light -mode
      gray: [
        //hover-color
        style.light.secondary as string,
        style.light.muted as string,
        style.light.muted as string, //disabled-bg-color
        style.light.input as string, //skelont-color
        style.light.border as string, //border-color
        style.light["muted-foreground"] as string, //placeholder-color, disabled-color
        lighten(style.light["muted-foreground"] as string, 0.15) as string, //dimmed-color
        style.light.foreground as string, //body-color/background-color
        "green",
        style.dark["muted-foreground"] as string,
      ],
      primarylight: [
        style.dark.foreground as string,
        "black",
        "#a5d8ff",
        "#74c0fc",
        "#4dabf7",
        style.light.primary as string, //color filled, outline
        lighten(style.light.primary as string, 0.15) as string, //color-filled-hover
        "#1c7ed6",
        "#1971c2",
        "#1864ab",
      ],
      primarydark: [
        style.dark.foreground as string,
        style.dark.primary as string,
        "#ff00ff",
        style.dark.primary as string,
        "#4dabf7",
        style.dark.primary as string, //color filled, outline
        lighten(style.dark.primary as string, 0.15) as string, //color-filled-hover
        "#1c7ed6",
        "#1971c2",
        "#1864ab",
      ],
    },
  });
}
