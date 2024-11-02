export type TFont = "black" | "bold" | "medium" | "regular" | "light" | "thin";

export enum FONT {
  RobotoBlack = "RobotoBlack",
  RobotoBold = "RobotoBold",
  RobotoMedium = "RobotoMedium",
  RobotoRegular = "RobotoRegular",
  RobotoLight = "RobotoLight",
  RobotoThin = "RobotoThin",
}

export const FONTS = {
  RobotoBlack: require("../assets/fonts/Roboto-Black.ttf"),
  RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
  RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
  RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
  RobotoLight: require("../assets/fonts/Roboto-Light.ttf"),
  RobotoThin: require("../assets/fonts/Roboto-Thin.ttf"),
};

// https://hexcolorpedia.com/color/?q=db1a5a
export const COLOR = {
  primary: "#db1a5a",
  secondary: "#131313",
  accent: "#19db9a",
  surface: "#1c1c21",
};
