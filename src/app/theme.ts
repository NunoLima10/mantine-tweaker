import { createTheme, darken, lighten, virtualColor } from "@mantine/core";

function hexToRgba(hex: string, alpha: number): string {
  let r = 0,
    g = 0,
    b = 0;

  // Lida com formatos de 3 ou 6 dígitos
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  } else {
    throw new Error("Formato hexadecimal inválido. Use #RRGGBB ou #RGB.");
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const colors = [
  "#faf5fa", //background , card
  "#501854", //foreground , card-foreground, popover-foreground
  "#ffffff", // popover , primary-foreground, destructive-foreground
  "#a84370", // primary
  "#f1c4e6", // secondary, accent
  "#77347c", // secondary-foreground, accent-foreground
  "#f6e5f3", // muted
  "#834588", //muted-foreground
  "#ab4347", // destructive
  "#efbdeb", // border
  "#e7c1dc", //input
  "#db2777", // ring, sidebar-ring
  "#d926a2", //chart-1
  "#6c12b9", //chart-2
  "#274754", //chart-3
  "#e8c468", //chart-4
  "#f4a462", //chart-5
  "#f3e4f6", //sidebar
  "#ac1668", //sidebar-foreground, sidebar-accent-foreground
  "#454554", //sidebar-primary
  "#faf1f7", //sidebar-primary-foreground, sidebar-accent
  "#eceae9", //sidebar-border
];

// export const theme = createTheme({
//   defaultRadius: "0.5rem",
//   //mantine-primary-color-contrast
//   white: "#faf5fa", //light-mode body-color/background-color
//   black: "#501854", //light-mode text-color
//   primaryColor: "primary",
//   primaryShade: 5,
//   colors: {
//     primary: virtualColor({
//       name: "primary",
//       dark: "customdark",
//       light: "customlight",
//     }),
//     //dark -mode
//     dark: [
//       "#C9C9C9", //  text color
//       "#b8b8b8",
//       "#828282", //dimmed-color
//       "#696969", //placeholder-color ,
//       "#424242", //border-color
//       "#3b3b3b", //hover-color
//       "#2e2e2e", //disabled-color
//       "#221d27", //body-color/background-color
//       "#1f1f1f",
//       "#141414",
//     ],

//     //light -mode
//     gray: [
//       "#f1c4e6", //hover-color
//       "#f6e5f3",
//       "#f6e5f3", //disabled-bg-color
//       "#e7c1dc", //skelont-color
//       "#efbdeb", //border-color
//       "#834588", //placeholder-color, disabled-color
//       hexToRgba("#501854", 0.3), //dimmed-color
//       "#495057",
//       "#343a40",
//       "#212529",
//     ],
//     customlight: [
//       "red",
//       "#d0ebff",
//       "#a5d8ff",
//       "#74c0fc",
//       "#4dabf7",
//       "#a84370", //color filled, outline
//       hexToRgba("#a84370", 0.9), //color-filled-hover
//       "#1c7ed6",
//       "#1971c2",
//       "#1864ab",
//     ],
//     customdark: [
//       "red",
//       "#d0ebff",
//       "#a5d8ff",
//       "#74c0fc",
//       "#4dabf7",
//       "#a3004c", //color filled, outline
//       hexToRgba("#a84370", 0.9), //color-filled-hover
//       "#1c7ed6",
//       "#1971c2",
//       "#1864ab",
//     ],
//   },
// });

const style = {
  light: {
    background: "#faf5fa",
    foreground: "#501854",
    card: "#faf5fa",
    "card-foreground": "#501854",
    popover: "#ffffff",
    "popover-foreground": "#501854",
    primary: "#a84370",
    "primary-foreground": "#ffffff",
    secondary: "#f1c4e6",
    "secondary-foreground": "#77347c",
    muted: "#f6e5f3",
    "muted-foreground": "#834588",
    accent: "#f1c4e6",
    "accent-foreground": "#77347c",
    destructive: "#ab4347",
    "destructive-foreground": "#ffffff",
    border: "#efbdeb",
    input: "#e7c1dc",
    ring: "#db2777",
    "chart-1": "#d926a2",
    "chart-2": "#6c12b9",
    "chart-3": "#274754",
    "chart-4": "#e8c468",
    "chart-5": "#f4a462",
    sidebar: "#f3e4f6",
    "sidebar-foreground": "#ac1668",
    "sidebar-primary": "#454554",
    "sidebar-primary-foreground": "#faf1f7",
    "sidebar-accent": "#f8f8f7",
    "sidebar-accent-foreground": "#454554",
    "sidebar-border": "#eceae9",
    "sidebar-ring": "#db2777",
    radius: "0.5rem",
  },
  dark: {
    background: "#221d27",
    foreground: "#d2c4de",
    card: "#2c2632",
    "card-foreground": "#dbc5d2",
    popover: "#100a0e",
    "popover-foreground": "#f8f1f5",
    primary: "#a3004c",
    "primary-foreground": "#efc0d8",
    secondary: "#362d3d",
    "secondary-foreground": "#d4c7e1",
    muted: "#28222d",
    "muted-foreground": "#c2b6cf",
    accent: "#463753",
    "accent-foreground": "#f8f1f5",
    destructive: "#301015",
    "destructive-foreground": "#ffffff",
    border: "#3b3237",
    input: "#3e343c",
    ring: "#db2777",
    "chart-1": "#a84370",
    "chart-2": "#934dcb",
    "chart-3": "#e88c30",
    "chart-4": "#af57db",
    "chart-5": "#e23670",
    sidebar: "#181117",
    "sidebar-foreground": "#e0cad6",
    "sidebar-primary": "#1d4ed8",
    "sidebar-primary-foreground": "#ffffff",
    "sidebar-accent": "#261922",
    "sidebar-accent-foreground": "#f4f4f5",
    "sidebar-border": "#000000",
    "sidebar-ring": "#db2777",
  },
} as const;

const style2 = {
  light: {
    background: "#F1F0E5",
    foreground: "#56453F",
    card: "#F1F0E5",
    "card-foreground": "#56453F",
    popover: "#FFFFFF",
    "popover-foreground": "#56453F",
    primary: "#A37764",
    "primary-foreground": "#FFFFFF",
    secondary: "#BAAB92",
    "secondary-foreground": "#ffffff",
    muted: "#E4C7B8",
    "muted-foreground": "#8A655A",
    accent: "#E4C7B8",
    "accent-foreground": "#56453F",
    destructive: "#1f1a17",
    "destructive-foreground": "#FFFFFF",
    border: "#BAAB92",
    input: "#BAAB92",
    ring: "#A37764",
    "chart-1": "#A37764",
    "chart-2": "#8A655A",
    "chart-3": "#C39E88",
    "chart-4": "#BAAB92",
    "chart-5": "#A28777",
    sidebar: "#ebd6cb",
    "sidebar-foreground": "#56453F",
    "sidebar-primary": "#A37764",
    "sidebar-primary-foreground": "#FFFFFF",
    "sidebar-accent": "#C39E88",
    "sidebar-accent-foreground": "#ffffff",
    "sidebar-border": "#A28777",
    "sidebar-ring": "#A37764",
    "font-sans": "DM Sans, sans-serif",
    "font-serif": "Georgia, serif",
    "font-mono": "Menlo, monospace",
    radius: "0.5rem",
    "shadow-color": "hsl(20 18% 51% / 0.4)",
    "shadow-opacity": "0.11",
    "shadow-blur": "0px",
    "shadow-spread": "0px",
    "shadow-offset-x": "2px",
    "shadow-offset-y": "2px",
  },
  dark: {
    background: "#2d2521",
    foreground: "#F1F0E5",
    card: "#3c332e",
    "card-foreground": "#F1F0E5",
    popover: "#3c332e",
    "popover-foreground": "#F1F0E5",
    primary: "#C39E88",
    "primary-foreground": "#2d2521",
    secondary: "#8A655A",
    "secondary-foreground": "#F1F0E5",
    muted: "#56453F",
    "muted-foreground": "#c5aa9b",
    accent: "#BAAB92",
    "accent-foreground": "#2d2521",
    destructive: "#E57373",
    "destructive-foreground": "#2d2521",
    border: "#56453F",
    input: "#56453F",
    ring: "#C39E88",
    "chart-1": "#C39E88",
    "chart-2": "#BAAB92",
    "chart-3": "#A37764",
    "chart-4": "#8A655A",
    "chart-5": "#A28777",
    sidebar: "#1f1a17",
    "sidebar-foreground": "#F1F0E5",
    "sidebar-primary": "#C39E88",
    "sidebar-primary-foreground": "#1f1a17",
    "sidebar-accent": "#BAAB92",
    "sidebar-accent-foreground": "#1f1a17",
    "sidebar-border": "#56453F",
    "sidebar-ring": "#C39E88",
    "shadow-color": "hsl(20 18% 30% / 0.5)",
  },
};

const light = {
  body: style.light.background,
  text: style.light.foreground,
  hover: style.light.secondary as string,
  menuHover: lighten(style.light.secondary, .3),
  disabledBG: style.light.muted as string,
  border: style.light.input as string, //skelont
  inputBoder: style.light.border,
  placeholder: style.light["muted-foreground"], // disabled-text
  dimmed: hexToRgba(style.light["muted-foreground"], .3),
  closeX: style.light["accent-foreground"],
  unknown: "red",
  notifictionTitle: style.light.foreground,
};
const lightPrimary = {
  filled: style.light.primary, //outline
  hover: lighten(style.light.primary, 0.15),
};

const dark = {
  body: style.dark.background,
  text: style.dark.foreground,
  hover: style.dark.secondary as string,
  menuHover: lighten(style.dark.secondary, .3),
  disabledBG: style.dark.muted as string,
  border: style.dark.input as string, //skelont
  inputBoder: style.dark.border,
  placeholder: style.dark["muted-foreground"], // disabled-text
  dimmed: lighten(style.dark["muted-foreground"], .3),
  closeX: style.dark["accent-foreground"],
  unknown: "red",
  notifictionTitle: style.dark.foreground,
};

const darkPrimary = {
  filled: style.dark.primary,
  hover: darken(style.dark.primary, .15),
  text: style.dark.foreground,
  buttonOuntline: style.dark.primary,
  lightButton: style.dark.primary,
  link: style.dark.primary,
};

export const theme = createTheme({
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
      darken(dark.body, .2),
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

