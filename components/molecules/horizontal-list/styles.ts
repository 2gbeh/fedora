import { StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const horizontalListStyles = StyleSheet.create({
  _: {},
  container: {
    rowGap: 8,
    alignItems: "center",
  },
  figure: {
    borderColor: COLOR.white,
    borderWidth: 1,
    borderRadius: 100,
    width: 48,
    height: 48,
  },
  figcaption: {
    color: COLOR.white,
    fontFamily: FONT.RobotoMedium,
    fontWeight: "500",
    fontSize: 16,
  },
});
