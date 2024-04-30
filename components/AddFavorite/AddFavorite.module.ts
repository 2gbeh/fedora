import { StyleSheet } from "react-native";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create({
  container: { gap: 10, marginTop: -0 },
  button: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: COLOR.text_muted,
    borderRadius: 99,
    width: 45,
    height: 45,
  },
  button_text: {
    color: COLOR.text_muted,
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 0,
    marginTop: -2,
  },
  label: { color: COLOR.subtext, fontWeight: "600", fontSize: 14 },
});

export default styles;
