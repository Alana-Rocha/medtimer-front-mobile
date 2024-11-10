import { DefaultTheme, MD3Theme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  fonts: {
    displayLarge: { fontFamily: "GilroyRegular", fontWeight: "normal" },
    displayMedium: { fontFamily: "GilroyRegular", fontWeight: "normal" },
    displaySmall: { fontFamily: "GilroyRegular", fontWeight: "normal" },
    headlineLarge: { fontFamily: "GilroyBold", fontWeight: "normal" },
    headlineMedium: { fontFamily: "GilroyBold", fontWeight: "normal" },
    headlineSmall: { fontFamily: "GilroyRegular", fontWeight: "normal" },
    titleLarge: { fontFamily: "GilroyBold", fontWeight: "normal" },
    titleMedium: { fontFamily: "GilroyRegular", fontWeight: "normal" },
    titleSmall: { fontFamily: "GilroyRegular", fontWeight: "normal" },
    bodyLarge: { fontFamily: "GilroyRegular", fontWeight: "normal" },
    bodyMedium: { fontFamily: "GilroyRegular", fontWeight: "normal" },
    bodySmall: { fontFamily: "GilroyRegular", fontWeight: "normal" },
    labelLarge: { fontFamily: "GilroyBold", fontWeight: "normal" },
    labelMedium: { fontFamily: "GilroyBold", fontWeight: "normal" },
    labelSmall: { fontFamily: "GilroyRegular", fontWeight: "normal" },
  },
  colors: {
    ...DefaultTheme.colors,
    primary: "#31658B",
  },
} as MD3Theme;
