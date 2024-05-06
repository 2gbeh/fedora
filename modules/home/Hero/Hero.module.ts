import { StyleSheet, type ViewStyle } from "react-native";
import { styles_flex } from "@/styles/Flex.module";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create<ViewStyle | any>({
  container: {
    backgroundColor: COLOR.foreground,
    color: COLOR.text,
    borderColor: COLOR.foreground,
    borderBottomColor: COLOR.border,
    borderWidth: 2,
    borderRadius: 20,
    margin: 20,
    marginTop: 10,
    // marginBottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 18,
    minHeight: 160,
    justifyContent: "space-between",
  },
  top_content: { ...styles_flex.row_start_between },
  top_left_content: { gap: 5 },
  top_right_content: { ...styles_flex.row_center, gap: 10 },
  bottom_content: { ...styles_flex.row_center_between },
  bottom_left_content: { gap: 5 },
  bottom_right_content: { gap: 5, alignItems: "flex-end" },
  hgroup: { ...styles_flex.row_center, gap: 8 },
  p: { color: COLOR.subtext, fontSize: 14 },
  h1: { color: COLOR.accent, fontWeight: "bold", fontSize: 24 },
  h2: (value: number = 0) => ({
    color: value < 0 ? COLOR.brand : COLOR.text,
    fontWeight: "600",
    fontSize: 18,
  }),
});

export default styles;
