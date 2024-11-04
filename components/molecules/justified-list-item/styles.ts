import { StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const justifiedListItemStyles = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
  figure: {
    borderColor: COLOR.white,
    borderWidth: 1,
    borderRadius: 100,
    width: 48,
    height: 48,
  },
  figcaption: {
    rowGap: 4,
  },
  left_top: {
    color: COLOR.white,
    fontFamily: FONT.RobotoMedium,
    fontWeight: "500",
    fontSize: 16,
  },
  left_bottom: {
    color: COLOR.white,
    fontFamily: FONT.RobotoRegular,
    fontWeight: "400",
    fontSize: 14,
  },
  right: {
    alignItems: "flex-end",
    rowGap: 4,
  },
  right_top: {
    color: COLOR.white,
    fontFamily: FONT.RobotoMedium,
    fontWeight: "500",
    fontSize: 16,
  },
  right_bottom: {
    color: COLOR.white,
    fontFamily: FONT.RobotoRegular,
    fontWeight: "400",
    fontSize: 14,
  },
});
