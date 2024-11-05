import { StyleSheet } from "react-native";
import { viewStyles, textStyles } from "@/styles";
import { COLOR, FONT } from "@/constants/THEME";

export const sectionHeaderStyles = StyleSheet.create({
  _: {},
  container: {
    paddingHorizontal: 16,
    ...viewStyles.row_center_between,
  },
  right: {
    ...viewStyles.row_center,
    columnGap: 4,
  },
  heading: {
    ...textStyles.medium,
    color: COLOR.dark.onSurface,
    fontSize: 22,
  },
  link: {
    ...textStyles.regular,
    color: COLOR.dark.onSurface,
  },
});
