import { StyleSheet } from "react-native";
import { viewStyles, textStyles } from "@/styles";
import { COLOR, FONT } from "@/constants/THEME";

export const justifiedListItemStyles = StyleSheet.create({
  _: {},
  container: {
    ...viewStyles.row_center_between,
  },
  left: {
    ...viewStyles.row_center,
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
    // rowGap: 4,
  },
  left_top: {
    ...textStyles.medium,
    color: COLOR.dark.onSurface,
  },
  left_bottom: {
    ...textStyles.regular,
    // color: COLOR.dark.onSurface,
  },
  right: {
    alignItems: "flex-end",
    // rowGap: 4,
  },
  right_top: {
    ...textStyles.medium,
    color: COLOR.dark.onSurface,
    // fontSize: 18,
  },
  right_bottom: {
    ...textStyles.regular,
    // color: COLOR.dark.onSurface,
  },
});
