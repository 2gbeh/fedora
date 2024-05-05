import { StyleSheet, type ViewStyle } from "react-native";
import { styles_flex } from "@/styles/Flex.module";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create<ViewStyle | any>({
  container: (value: number = 0) => ({
    borderColor: COLOR.border,
    backgroundColor: COLOR.brand,
  }),
  image: {},
  hgroup: {},
  h1: { color: COLOR.text, fontWeight: "600", fontSize: 18 },
  p: { color: COLOR.subtext, textTransform: "capitalize", fontSize: 14 },
});

export default styles;
