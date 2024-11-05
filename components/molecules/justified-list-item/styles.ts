import { StyleSheet } from "react-native";
import { viewStyles, textStyles } from "@/styles";
import { COLOR, FONT } from "@/constants/THEME";

export const justifiedListItemStyles = StyleSheet.create({
  _: {},
  container: {
    ...viewStyles.row_center_between,
    paddingHorizontal: 16,
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
  figcaption: {},
  left_top: {
    ...textStyles.medium,
    color: COLOR.dark.onSurface,
  },
  left_bottom: {
    ...textStyles.regular,
  },
  right: {
    alignItems: "flex-end",
  },
  right_top: {
    ...textStyles.medium,
    color: COLOR.dark.onSurface,
  },
  right_bottom: {
    ...textStyles.regular,
  },
});
