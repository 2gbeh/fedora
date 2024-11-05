import { StyleSheet } from "react-native";
import { viewStyles, textStyles } from "@/styles";
import { COLOR, FONT } from "@/constants/THEME";

export const horizontalListStyles = StyleSheet.create({
  _: {},
  container: {
    rowGap: 8,
    alignItems: "center",
  },
  figure: {
    borderColor: COLOR.white,
    borderWidth: 1,
    borderRadius: 100,
    width: 48,
    height: 48,
  },
  figcaption: {
   ...textStyles.medium
  },
});
