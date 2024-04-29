import { StyleSheet } from "react-native";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.hero,
    color: COLOR.text,
    paddingHorizontal: 20,
    minHeight: 60,
  },
  left_content: { gap: 12 },
  right_content: { gap: 12 },
  hgroup: { gap: 1 },
  p: { color: COLOR.subtext, fontSize: 13 },
  h1: { color: COLOR.text, fontWeight: "600", fontSize: 16 },
});

export default styles;
