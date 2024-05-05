import { StyleSheet, type ViewStyle } from "react-native";
import { styles_flex } from "@/styles/Flex.module";
import COLOR from "@/constants/COLOR";
import ComputedStyles from "@/utils/ComputedStyles";

const styles = StyleSheet.create<ViewStyle | any>({
  container: (value: number[]) => ({
    ...ComputedStyles.margin(value),
    ...styles_flex.row_end_between,
  }),
  title: { color: COLOR.text, fontWeight: "600", fontSize: 16 },
  right_content: styles_flex.row_center,
  icon_text: {
    color: COLOR.subtext,
    fontWeight: "600",
    fontSize: 14,
    marginRight: 10,
  },
});

export default styles;
