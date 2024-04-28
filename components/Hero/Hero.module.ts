import { StyleSheet, type ViewStyle } from "react-native";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.foreground,
    color: COLOR.text,
    borderRadius: 20,
    margin: 20,
    paddingHorizontal: 25,
    paddingVertical: 20,
    minHeight: 180,
    justifyContent: "space-between",
  },
  top_content: { display: "flex" },
  top_left_content: { gap: 5 },
  top_right_content: { gap: 10 },
  bottom_content: { display: "flex" },
  bottom_left_content: { gap: 5 },
  bottom_right_content: { gap: 5, alignItems: "flex-end" },
  label_group: { gap: 8 },
  label: { color: COLOR.subtext, fontSize: 12 },
  h1: { color: COLOR.accent, fontWeight: "bold", fontSize: 24 },
  h2: (value?: number = 1) => {
    return {
      color: value < 1 ? COLOR.brand : COLOR.text,
      fontWeight: "600",
      fontSize: 18,
    } as ViewStyle;
  },
});

export default styles;
