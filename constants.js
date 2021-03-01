
// https://coolors.co/palettes/trending
// https://chakra-ui.com/docs/theming/customize-theme
// OVERWRITE DARKMODE: https://stackoverflow.com/a/65104049


export const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

export const font = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: "PoiretOne-Regular, serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
}

export const chakraConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}