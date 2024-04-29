import { StyleSheet } from "react-native";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create({
  container: { alignItems: "center", gap: 10 },
  name: { color: COLOR.text, fontWeight: "600", fontSize: 14 },
  // 
  add: { gap: 10, marginTop: -0 },
  add_button: {
    borderWidth: 2,
    borderStyle:"dashed",
    borderColor: COLOR.text_muted,
    borderRadius: 99,
    width: 45,
    height: 45,
  },
  add_label: {
    color: COLOR.text_muted,
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 0,
    marginTop: -2,
  },
  add_text: { color: COLOR.subtext, fontWeight: "600", fontSize: 14 },
});

export default styles;
