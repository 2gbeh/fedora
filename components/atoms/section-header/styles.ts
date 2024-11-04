import { StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const sectionHeaderStyles = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  title: {
    color: COLOR.white,
    fontFamily: FONT.RobotoMedium,
    fontWeight: "500",
    fontSize: 16,
  },
  link: {
    color: COLOR.white,
    fontFamily: FONT.RobotoRegular,
    fontWeight: "400",
    fontSize: 14,
  },
});
