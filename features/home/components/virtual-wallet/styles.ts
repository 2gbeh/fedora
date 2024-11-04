import { StyleSheet } from "react-native";
import { viewStyles, textStyles } from "@/styles";
import { COLOR, FONT } from "@/constants/THEME";

export const virtualWalletStyles = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.dark.surface,
    borderRadius: 16,
    padding: 20,
    height: 160,
    justifyContent: "space-between",
  },
  item: {
    rowGap: 4,
  },
  label_group: {
    ...viewStyles.row_center,
    columnGap: 8,
  },
  label: {
    ...textStyles.regular,
    color: COLOR.dark.secondary,
  },
  balance: {
    ...textStyles.medium,
    color: COLOR.dark.onSurface,
    fontSize: 24,
  },
  bottom: {
    ...viewStyles.row_center_between,
  },
  income: {
    ...textStyles.medium,
    color: COLOR.dark.primary,
  },
  expense: {
    ...textStyles.medium,
    color: COLOR.dark.error,
  },
});
