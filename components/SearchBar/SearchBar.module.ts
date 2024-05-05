import { StyleSheet } from "react-native";
import { styles_flex } from "@/styles/Flex.module";
import COLOR from "@/constants/COLOR";

export const style = { placeholder: COLOR.subtext };

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.foreground,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    ...styles_flex.row_center_between, 
    gap: 10,
  },
  input: {
    color: COLOR.text,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flex: 1,
  },
  button: {
    marginRight: 20,
  },
});

export default styles;
