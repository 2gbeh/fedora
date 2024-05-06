import { StyleSheet } from "react-native";
import { styles_flex } from "@/styles/Flex.module";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.background,
    color: COLOR.text,
    paddingHorizontal: 20,
    minHeight: 60,
    ...styles_flex.row_center_between, 
  },
  left_content: { ...styles_flex.row_center, gap: 12 },
  right_content: { ...styles_flex.row_center, gap: 12 },
  hgroup: { gap: 1 },
  greeting: { color: COLOR.subtext, fontSize: 13 },
  username: { color: COLOR.text, fontWeight: "600", fontSize: 16 },
  title: { color: COLOR.text, fontWeight: "600", fontSize: 16 },
});

export default styles;
