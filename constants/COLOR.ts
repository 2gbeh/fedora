import "@/styles/global.css";

export const COLOR = {
  nil: "transparent",
  overlay: "rgba(0,0,0,0.4)", // #00000066
  white: "#FFF",
  black: "#000",
  black10: "#0000001A",
  neutral: "#F9FAFB",
  background: "#F3F4F6",
  primary: "#1D1C28",
  primaryDisabled: "#D1D5DB",
  secondary: "#6B7280",
  muted: "#9CA3AF",
  icon: "#374151",
  border: "#E5E7EB",
  link: "#1A56DB",
  star: "#FACA15",
  rated: "#FFD536",
  rating: "#C0C0C0",
  // CONTEXTUAL
  success: "#0E9F6E",
  successContainer: "#DEF7EC",
  successContainerLighter: "#F3FAF7",
  warning: "#C27803",
  warningContainer: "#FDF6B2",
  danger: "#E02424",
  dangerContainer: "#FDF2F2",
} as const;

export const COLOR_OPACITY = {
  white: {
    0: "#FFFFFF00",
    10: "#FFFFFF1A",
    20: "#FFFFFF33",
    30: "#FFFFFF4D",
    40: "#FFFFFF66",
    50: "#FFFFFF80",
    60: "#FFFFFF99",
    70: "#FFFFFFB3",
    80: "#FFFFFFCC",
    90: "#FFFFFFE6",
    100: "#FFFFFFFF",
  },
  black: {
    0: "#00000000",
    10: "#0000001A",
    20: "#00000033",
    30: "#0000004D",
    40: "#00000066",
    50: "#00000080",
    60: "#00000099",
    70: "#000000B3",
    80: "#000000CC",
    90: "#000000E6",
    100: "#000000FF",
  },
} as const;
