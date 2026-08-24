import { TextStyle, ViewStyle } from "react-native";
//
import { flexStyles } from "@/styles/flex-styles";
import { textStyles } from "@/styles/text-styles";
import { COLOR } from "@/constants/COLOR";
//
import { ButtonGroupProps, ButtonProps } from "./types";

export const inputStyles = {
  _: {},
  fieldContainer: {
    gap: 4,
  },
  inputContainer: {},
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
};

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
  buttonGroup: (params: ButtonGroupProps) =>
    ({
      ...(params.variant === "flex" ? flexStyles.rowCenterBetween : {}),
      gap: 12,
    }) as ViewStyle,
};
