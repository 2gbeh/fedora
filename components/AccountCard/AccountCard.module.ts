import { StyleSheet, type ViewStyle } from "react-native";
import { styles_flex } from "@/styles/Flex.module";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create<ViewStyle | any>({
  container: {
    // backgroundColor: "#000",
    ...styles_flex.row_center_between,
  },
  left_content: { ...styles_flex.row_center, gap: 15 },
  hgroup: { gap: 2 },
  h1: { color: COLOR.text, fontWeight: "600", fontSize: 16 },
  p: { color: COLOR.subtext, textTransform: "capitalize", fontSize: 14 },
});

export default styles;
