import { StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const fabStyles = StyleSheet.create({
  _: {},
  button: {
    backgroundColor: COLOR.primary,
    borderWidth: 1,
    borderRadius: 16,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  label: {
    color: COLOR.white,
    fontFamily: FONT.RobotoBold,
    fontWeight: "700",
    fontSize: 24,
  },
});