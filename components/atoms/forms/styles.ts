import { StyleSheet } from "react-native";
//
import { textStyles } from "@/styles/text-styles";
import { COLOR } from "@/constants/COLOR";

export const inputStyles = StyleSheet.create({
  _: {},
  field_container: {
    gap: 4,
  },
  input: {
    color: COLOR.primary,
    backgroundColor: COLOR.background,
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 44,
    ...textStyles.input,
  },
  placeholder: {
    color: COLOR.muted,
    ...textStyles.input,
  },
  value: {
    color: COLOR.primary,
    ...textStyles.input,
  },
  right_section: {
    position: "absolute",
    top: 14,
    right: 16,
  },
});

export const selectorStyles = StyleSheet.create({
  _: {},
  container: {
    maxHeight: 250,
  },
  search_input: {
    backgroundColor: COLOR.nil,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 0,
    margin: 0,
    // marginBottom: 0,
    paddingHorizontal: 8,
  },
  item_container: {
    backgroundColor: COLOR.nil,
    height: 40,
    justifyContent: "center",
  },
});