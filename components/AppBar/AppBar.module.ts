import { StyleSheet } from "react-native";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.foreground,
    color: COLOR.text,
    paddingHorizontal: 20,
    minHeight: 60,
  },
  left_content: { gap: 12 },
  right_content: { gap: 12 },
  greeting: { color: COLOR.subtext, fontSize: 12 },
  username: { color: COLOR.text, fontWeight: "600" },
});

export default styles;
