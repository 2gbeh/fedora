import { StyleSheet, type DimensionValue, type ViewStyle } from "react-native";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create({
  top_content: { marginTop: 15, marginBottom: 10, marginLeft: 25 },
  bottom_container: {
    paddingHorizontal: 25,
    flexGrow: 1,
  },
  bottom_content: {
    flex: 1,
  },
});

export default styles;
