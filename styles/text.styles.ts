import { StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const textStyles = StyleSheet.create({
  black: {
    fontFamily: FONT.RobotoBlack,
    fontWeight: "900",
  },
  bold: {
    fontFamily: FONT.RobotoBold,
    fontWeight: "700",
  },
  medium: {
    color: COLOR.text,
    fontFamily: FONT.RobotoMedium,
    fontWeight: "500",
    fontSize: 18,
  },
  regular: {
    color: COLOR.muted,
    fontFamily: FONT.RobotoRegular,
    fontWeight: "400",
    fontSize: 16,
  },
  light: {
    fontFamily: FONT.RobotoLight,
    fontWeight: "300",
  },
  thin: {
    fontFamily: FONT.RobotoThin,
    fontWeight: "100",
  },
});
