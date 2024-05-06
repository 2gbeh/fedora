import { StyleSheet, type ViewStyle } from "react-native";
import { styles_flex } from "@/styles/Flex.module";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create<ViewStyle | any>({
  container: {
    // backgroundColor: "#000",
    marginBottom: 15,
    ...styles_flex.row_start_between,
  },
  left_content: { ...styles_flex.row_center, gap: 15 },
  right_content: { ...styles_flex.col_end, gap: 2 },
  //
  hgroup: { gap: 2 },
  h1: { color: COLOR.text, fontWeight: "600", fontSize: 18 },
  p: { color: COLOR.subtext, textTransform: "capitalize", fontSize: 14 },
  amount: (value: number = 0) => ({
    ...styles.h1,
    color: value < 0 ? COLOR.brand : COLOR.accent,
    fontWeight: "bold",
  }),
});

export default styles;
