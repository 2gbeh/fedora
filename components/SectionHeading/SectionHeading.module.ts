import { StyleSheet, type ViewStyle } from "react-native";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create<ViewStyle | any>({
  title: { color: COLOR.text, fontWeight: "bold", fontSize: 20 },
  subtitle: {
    color: COLOR.subtext,
    fontWeight: "600",
    fontSize: 14,
    marginRight: 10,
  }
});

export default styles;
