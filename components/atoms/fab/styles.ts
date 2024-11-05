import { StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const fabStyles = StyleSheet.create({
  _: {},
  button: {
    backgroundColor: COLOR.dark.primary,
    borderWidth: 1,
    borderRadius: 16,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  label: {
    color: COLOR.dark.onPrimary,
    fontFamily: FONT.RobotoBold,
    fontWeight: "700",
    fontSize: 24,
  },
});
