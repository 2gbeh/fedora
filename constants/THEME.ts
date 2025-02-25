export type FontType =
  | "black"
  | "bold"
  | "medium"
  | "regular"
  | "light"
  | "thin";

export enum FONT {
  RobotoBlack = "RobotoBlack",
  RobotoBold = "RobotoBold",
  RobotoMedium = "RobotoMedium",
  RobotoRegular = "RobotoRegular",
  RobotoLight = "RobotoLight",
  RobotoThin = "RobotoThin",
}

// https://fonts.google.com/specimen/Roboto
export const FONTS = {
  RobotoBlack: require("@/assets/fonts/Roboto-Black.ttf"),
  RobotoBold: require("@/assets/fonts/Roboto-Bold.ttf"),
  RobotoMedium: require("@/assets/fonts/Roboto-Medium.ttf"),
  RobotoRegular: require("@/assets/fonts/Roboto-Regular.ttf"),
  RobotoLight: require("@/assets/fonts/Roboto-Light.ttf"),
  RobotoThin: require("@/assets/fonts/Roboto-Thin.ttf"),
};

// https://hexcolorpedia.com/color/?q=0093dd
export const COLOR = {
  none: "transparent",
  white: "#fff",
  black: "#000",
  //
  primary: "#0093DD",
  tertiary: "#DD4A00",
  alert: {
    info: "",
    onInfo: "",
    infoContainer: "#d8e2ff",
    onInfoContainer: "#0057d0",
    success: "#3b693a",
    onSuccess: "#ffffff",
    successContainer: "#bcf0b4",
    onSuccessContainer: "#002105",
    caution: "#8f4f00",
    onCaution: "#ffffff",
    cautionContainer: "#fb8e00",
    onCautionContainer: "#321800",
    warning: "",
    onWarning: "",
    warningContainer: "#ffe093",
    onWarningContainer: "#261a00",
    danger: "",
    onDanger: "",
    dangerContainer: "#ffdbc9",
    onDangerContainer: "#341000",
  },
  light: {
    primary: "#005482",
    surfaceTint: "#006397",
    onPrimary: "#FFFFFF",
    primaryContainer: "#007BB9",
    onPrimaryContainer: "#FFFFFF",
    secondary: "#40627E",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#C1E0FF",
    onSecondaryContainer: "#244763",
    tertiary: "#912E00",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#D04500",
    onTertiaryContainer: "#FFFFFF",
    error: "#BA1A1A",
    onError: "#FFFFFF",
    errorContainer: "#FFDAD6",
    onErrorContainer: "#410002",
    background: "#F7F9FF",
    onBackground: "#171C21",
    surface: "#F7F9FF",
    onSurface: "#171C21",
    surfaceVariant: "#DAE3EF",
    onSurfaceVariant: "#3F4851",
    outline: "#6F7882",
    outlineVariant: "#BEC7D2",
    shadow: "#000000",
    scrim: "#000000",
    inverseSurface: "#2C3136",
    inverseOnSurface: "#EDF1F7",
    inversePrimary: "#93CCFF",
    primaryFixed: "#CCE5FF",
    onPrimaryFixed: "#001D31",
    primaryFixedDim: "#93CCFF",
    onPrimaryFixedVariant: "#004B73",
    secondaryFixed: "#CCE5FF",
    onSecondaryFixed: "#001D31",
    secondaryFixedDim: "#A8CAEB",
    onSecondaryFixedVariant: "#274A65",
    tertiaryFixed: "#FFDBCF",
    onTertiaryFixed: "#380D00",
    tertiaryFixedDim: "#FFB59B",
    onTertiaryFixedVariant: "#822800",
    surfaceDim: "#D6DAE1",
    surfaceBright: "#F7F9FF",
    surfaceContainerLowest: "#FFFFFF",
    surfaceContainerLow: "#F0F4FA",
    surfaceContainer: "#EAEEF5",
    surfaceContainerHigh: "#E5E8EF",
    surfaceContainerHighest: "#DFE3E9",
    //
    info: "#415F91",
    onInfo: "#FFFFFF",
    infoContainer: "#D6E3FF",
    onInfoContainer: "#001B3E",
    success: "#4C662B",
    onSuccess: "#FFFFFF",
    successContainer: "#CDEDA3",
    onSuccessContainer: "#102000",
    warning: "#6D5E0F",
    onWarning: "#FFFFFF",
    warningContainer: "#F8E287",
    onWarningContainer: "#221B00",
  },
  dark: {
    primary: "#93CCFF",
    surfaceTint: "#93CCFF",
    onPrimary: "#003351",
    primaryContainer: "#007BB9",
    onPrimaryContainer: "#FFFFFF",
    secondary: "#A8CAEB",
    onSecondary: "#0B334E",
    secondaryContainer: "#1E425E",
    onSecondaryContainer: "#B6D8FA",
    tertiary: "#FFB59B",
    onTertiary: "#5C1A00",
    tertiaryContainer: "#CE4500",
    onTertiaryContainer: "#FFFFFF",
    error: "#FFB4AB",
    onError: "#690005",
    errorContainer: "#93000A",
    onErrorContainer: "#FFDAD6",
    background: "#0F1418",
    onBackground: "#DFE3E9",
    surface: "#0F1418",
    onSurface: "#DFE3E9",
    surfaceVariant: "#3F4851",
    onSurfaceVariant: "#BEC7D2",
    outline: "#89929C",
    outlineVariant: "#3F4851",
    shadow: "#000000",
    scrim: "#000000",
    inverseSurface: "#DFE3E9",
    inverseOnSurface: "#2C3136",
    inversePrimary: "#006397",
    primaryFixed: "#CCE5FF",
    onPrimaryFixed: "#001D31",
    primaryFixedDim: "#93CCFF",
    onPrimaryFixedVariant: "#004B73",
    secondaryFixed: "#CCE5FF",
    onSecondaryFixed: "#001D31",
    secondaryFixedDim: "#A8CAEB",
    onSecondaryFixedVariant: "#274A65",
    tertiaryFixed: "#FFDBCF",
    onTertiaryFixed: "#380D00",
    tertiaryFixedDim: "#FFB59B",
    onTertiaryFixedVariant: "#822800",
    surfaceDim: "#0F1418",
    surfaceBright: "#353A3F",
    surfaceContainerLowest: "#0A0F13",
    surfaceContainerLow: "#171C21",
    surfaceContainer: "#1C2025",
    surfaceContainerHigh: "#262A2F",
    surfaceContainerHighest: "#31353A",
    //
    info: "#AAC7FF",
    onInfo: "#0A305F",
    infoContainer: "#284777",
    onInfoContainer: "#D6E3FF",
    success: "#B1D18A",
    onSuccess: "#1F3701",
    successContainer: "#354E16",
    onSuccessContainer: "#CDEDA3",
    warning: "#DBC66E",
    onWarning: "#3A3000",
    warningContainer: "#534600",
    onWarningContainer: "#F8E287",
  },
};

// https://rgbacolorpicker.com/rgba-to-hex
export const OPACITY = {
  5: "#0000000d",
  10: "#0000001a",
  15: "#00000026",
  20: "#00000033",
  25: "#00000040",
  30: "#0000004d",
  35: "#00000059",
  40: "#00000066",
  45: "#00000073",
  50: "#00000080",
  55: "#0000008c",
  60: "#00000099",
  65: "#000000a6",
  70: "#000000b3",
  75: "#000000bf",
  80: "#000000cc",
  85: "#000000d9",
  90: "#000000e6",
  95: "#000000f2",
};
