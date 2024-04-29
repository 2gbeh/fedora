import { StyleSheet, type ViewStyle } from "react-native";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create<ViewStyle | any>({
  container: {
    // backgroundColor: "#000",
    marginTop: 15,
  },
  left_content: { gap: 15 },
  right_content: {},
  //
  hgroup: { gap: 2 },
  h1: { color: COLOR.text, fontWeight: "600", fontSize: 18 },
  p: { color: COLOR.subtext, textTransform: "capitalize", fontSize: 14 },
  amount: (value: number = 0) => ({
    ...styles.h1,
    color: value < 0 ? COLOR.brand : COLOR.accent,
    fontWeight: "bold",
  }),
});

export default styles;
