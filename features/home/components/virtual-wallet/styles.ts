import { StyleSheet } from "react-native";
import { viewStyles, textStyles } from "@/styles";
import { COLOR, FONT } from "@/constants/THEME";

export const virtualWalletStyles = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.dark.surfaceContainer,
    borderRadius: 16,
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    rowGap: 24,
  },
  top: {
    ...viewStyles.row_start_between,
  },
  item: {},
  label_group: {
    ...viewStyles.row_center,
    columnGap: 8,
  },
  label: {
    ...textStyles.regular,
  },
  balance: {
    ...textStyles.medium,
    color: COLOR.dark.primary,
    fontSize: 36,
  },
  bottom: {
    ...viewStyles.row_center_between,
  },
  income: {
    ...textStyles.medium,
    color: COLOR.success_lighter,
    fontSize: 24,
  },
  expense: {
    ...textStyles.medium,
    color: COLOR.dark.error,
    fontSize: 24,
  },
});
