import { StyleSheet } from "react-native";
import { viewStyles, textStyles } from "@/styles";
import { COLOR, FONT } from "@/constants/THEME";

export const headerStyles = StyleSheet.create({
  _: {},
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20,
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
    rowGap: 4,
  },
  greeting: {
    ...textStyles.regular
  },
  name: {
    ...textStyles.medium
  },
  icon: {
    borderColor: COLOR.white,
    borderWidth: 1,
    borderRadius: 5,
    width: 16,
    height: 16,
  },
});
