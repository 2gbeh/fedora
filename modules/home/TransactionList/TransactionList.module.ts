import { StyleSheet } from "react-native";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create({
  container: { paddingHorizontal: 25 },
  wrapper: { gap: 20 },
  heading: {
    paddingBottom: 20,
  },
  title: { color: COLOR.text, fontWeight: "bold", fontSize: 20 },
  subtitle: { color: COLOR.subtext, fontWeight: "600", fontSize: 14 },
});

export default styles;
