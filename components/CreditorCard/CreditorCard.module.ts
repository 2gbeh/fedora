import { StyleSheet, type ViewStyle } from "react-native";
import { styles_flex } from "@/styles/Flex.module";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.foreground,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR.border,
    height: 150,
    ...styles_flex.col_center_center,
    flex: 1,
  },
  figure: {
    backgroundColor: COLOR.foreground_hover,
    borderRadius: 99,
    marginTop: 5,
    padding: 20,
  },
  hgroup: {
    marginTop: 10,
    alignItems: "center",
    gap: 2,
  },
  h1: { color: COLOR.text, fontSize: 16 },
  p: { color: COLOR.subtext, fontSize: 14 },
});

export default styles;
