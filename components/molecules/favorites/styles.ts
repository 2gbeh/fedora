import { StyleSheet } from "react-native";
import { viewStyles, textStyles } from "@/styles";
import { COLOR, FONT } from "@/constants/THEME";

export const favoritesStyles = StyleSheet.create({
  _: {},
  container: {
    paddingLeft: 16,
  },
  item: {
    alignItems: "center",
    rowGap: 8,
  },
  label: {
    ...textStyles.regular,
    fontSize: 14,
  },
  header: {
    alignItems: "center",
    rowGap: 4,
  },
  button: {
    backgroundColor: COLOR.dark.surfaceContainer,
    // borderColor: COLOR.dark.onSurface,
    borderRadius: 100,
    // borderWidth: 2,
    width: 52,
    height: 52,
    ...viewStyles.centered,
  },
  button_label: {
    ...textStyles.medium,
    color: COLOR.dark.onSurface,
    fontSize: 24,
  },
  heading: {
    ...textStyles.regular,
    fontSize: 14,
  },
});
