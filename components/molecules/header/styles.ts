import { StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const headerStyles = StyleSheet.create({
  _: {},
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
  right: {
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
  greeting: {
    color: COLOR.white,
    fontFamily: FONT.RobotoRegular,
    fontWeight: "400",
    fontSize: 14,
  },
  name: {
    color: COLOR.white,
    fontFamily: FONT.RobotoMedium,
    fontWeight: "500",
    fontSize: 16,
  },
  icon: {
    borderColor: COLOR.white,
    borderWidth: 1,
    borderRadius: 5,
    width: 16,
    height: 16,
  },
});
