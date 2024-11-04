import { StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const heroStyles = StyleSheet.create({
  _: {},
  container: {
    borderColor: COLOR.white,
    borderWidth: 1,
    borderRadius: 16,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: COLOR.white,
    fontFamily: FONT.RobotoMedium,
    fontWeight: "500",
    fontSize: 16,
  },
});
