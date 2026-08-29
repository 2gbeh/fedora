import { StyleSheet, TextStyle, ViewStyle } from "react-native";
//
import { flexStyles } from "@/styles/flex-styles";
import { textStyles } from "@/styles/text-styles";
import { ButtonGroupProps, ButtonProps } from "./types";
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

export const buttonStyles = {
  _: {},
  container: (params: ButtonProps) =>
    ({
      backgroundColor: params.disabled
        ? COLOR.primaryDisabled
        : params.variant === "outline"
          ? COLOR.nil
          : COLOR.primary,
      borderColor: params.disabled ? COLOR.primaryDisabled : COLOR.primary,
      borderWidth: 1,
      borderRadius: 100,
      height: 44,
      ...flexStyles.centerCenter,
    }) as ViewStyle,
  text: (params: ButtonProps) =>
    ({
      color: params.variant === "outline" ? COLOR.primary : COLOR.white,
      ...textStyles.button,
    }) as TextStyle,
  btn_group: (params: ButtonGroupProps) =>
    ({
      ...(params.variant === "flex" ? flexStyles.rowCenterBetween : {}),
      gap: 12,
    }) as ViewStyle,
};
