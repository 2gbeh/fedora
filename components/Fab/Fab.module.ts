import { StyleSheet, type ViewStyle } from "react-native";
import { styles_flex } from "@/styles/Flex.module";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create<ViewStyle | any>({
  container: (value: number = 20) => ({
    backgroundColor: COLOR.brand,
    borderRadius: 12,
    width: 50,
    height: 50,
    position: "absolute",
    bottom: value,
    right: 20,
    display: "flex",
    zIndex: 7,
    // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px,
    // -webkit-transition: none,
    // transition: none,
    // &:active {
    //   width: 58,
    //   height: 58,
    // }
    ...styles_flex.col_center_center, 
  }),
  content: {
    color: COLOR.text,
    marginTop: -4,
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 0,
    // display: "none",
  },
});

export default styles;
