import { StyleSheet, type ViewStyle } from "react-native";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create<ViewStyle | any>({
  container: {},
  left_content: { gap: 15 },
  right_content: {},
  //
  text_group: { gap: 4 },
  account: { color: COLOR.text, fontWeight: "600", fontSize: 15 },
  date: { color: COLOR.subtext, fontSize: 14 },
  amount: (value: number = 0) => ({
    color: value < 0 ? COLOR.brand : COLOR.accent,
    fontWeight: "600",
    fontSize: 16,
  }),
});

export default styles;
