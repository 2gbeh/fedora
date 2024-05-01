import { StyleSheet, type DimensionValue, type ViewStyle } from "react-native";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create({
  top_heading: { paddingHorizontal: 25 },
  top_content: { marginTop: 15, marginBottom: 10, marginLeft: 25 },
  //
  bottom_container: {
    paddingLeft: 25,
    paddingRight: 20,
    // backgroundColor: "red",
    flexGrow: 1,
  },
  bottom_heading: { paddingBottom: 15 },
  bottom_content: {
    // backgroundColor: "red",
    flex: 1,
  },
});

export default styles;
