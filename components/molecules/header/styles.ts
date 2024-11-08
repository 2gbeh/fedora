import { StyleSheet } from "react-native";
import { viewStyles, textStyles } from "@/styles";
import { COLOR, FONT } from "@/constants/THEME";

export const headerStyles = StyleSheet.create({
  _: {},
  container: {
    padding: 16,
    ...viewStyles.row_center_between,
  },
  left: {
    ...viewStyles.row_center,
    columnGap: 16,
  },
  right: {
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
  },
  greeting: {
    ...textStyles.regular,
  },
  name: {
    ...textStyles.medium,
    color: COLOR.dark.onSurface,
    fontSize: 18,
  },
  icon: {
    backgroundColor: COLOR.dark.surfaceContainer,
    borderRadius: 8,
    width: 32,
    height: 32,
    ...viewStyles.centered
  },
});
