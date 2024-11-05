import { StyleSheet } from "react-native";
import { viewStyles, textStyles } from "@/styles";
import { COLOR, FONT } from "@/constants/THEME";

export const favoritesStyles = StyleSheet.create({
  _: {},
  container: {},
  item: {
    alignItems: "center",
    rowGap: 4,
  },
  label: {
    ...textStyles.regular,
  },
});
