import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex-styles";
import { textStyles } from "@/styles/text-styles";
import { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Variant = "solid" | "outline";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: Variant;
}

export const AppButton = ({
  children,
  disabled,
  loading,
  variant = "solid",
}: Props) => {
  return (
    <TouchableOpacity
      onPress={alert}
      disabled={disabled}
      style={sx({ disabled, variant }).container}
    >
      <Text style={sx({ variant }).text}>{children}</Text>
    </TouchableOpacity>
  );
};

const sx = (params: Props) =>
  StyleSheet.create({
    _: {},
    container: {
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
    },
    text: {
      color: params.variant === "outline" ? COLOR.primary : COLOR.white,
      ...textStyles.button,
    },
  });
