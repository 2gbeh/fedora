import { StyleSheet, type ViewStyle } from "react-native";
import { styles_flex } from "@/styles/Flex.module";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create<ViewStyle | any>({
  container: {
    backgroundColor: COLOR.foreground,
    borderColor: COLOR.foreground,
    borderBottomColor: COLOR.border,
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  top_content: { marginBottom: 0 },
  top_wrapper: styles_flex.row_start_between,
  top_left_content: {},
  top_right_content: { ...styles_flex.row_center_between, gap: 8 },
  p: { color: COLOR.subtext, fontSize: 14 },
  h1: { color: COLOR.accent, marginTop: 2, fontWeight: "bold", fontSize: 24 },
  h2: { color: COLOR.text },
  pin: { marginTop: 10, ...styles_flex.row_start, gap: 10 },
  masked: {
    color: COLOR.text_muted,
    fontSize: 24,
    letterSpacing: 1,
  },
  digits: {
    color: COLOR.text,
    fontWeight: "600",
    fontSize: 18,
    letterSpacing: 1,
  },
  bottom_content: { ...styles_flex.row_center, gap: 40 },
  hgroup: { gap: 5 },
  label: { color: COLOR.subtext },
  value: (value: number = 0) => ({
    color: value < 0 ? COLOR.brand : COLOR.text,
  }),
});

export default styles;
