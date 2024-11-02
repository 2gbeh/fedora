export type TFont = "black" | "bold" | "medium" | "regular" | "light" | "thin";

export enum FONT {
  GilroyBlack = "GilroyBlack",
  GilroyBold = "GilroyBold",
  GilroyMedium = "GilroyMedium",
  GilroyRegular = "GilroyRegular",
  GilroyLight = "GilroyLight",
  GilroyThin = "GilroyThin",
}

export const FONTS = {
  GilroyBlack: require("../assets/fonts/Gilroy-Black.ttf"),
  GilroyBold: require("../assets/fonts/Gilroy-Bold.ttf"),
  GilroyMedium: require("../assets/fonts/Gilroy-Medium.ttf"),
  GilroyRegular: require("../assets/fonts/Gilroy-Regular.ttf"),
  GilroyLight: require("../assets/fonts/Gilroy-Light.ttf"),
  GilroyThin: require("../assets/fonts/Gilroy-Thin.ttf"),
};

// https://hexcolorpedia.com/color/?q=db1a5a
export const COLOR = {
  primary: "#0B0C7D",
  secondary: "#EDF0F8",
  accent: "#ECECFD",
};
