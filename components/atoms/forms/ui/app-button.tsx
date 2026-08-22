import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex-styles";
import { textStyles } from "@/styles/text-styles";
import { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Variant = "solid" | "outline";
interface Props extends PropsWithChildren {
  variant?: Variant;
}

export const AppButton = ({ children, variant = "solid" }: Props) => {
  return (
    <TouchableOpacity style={sx(variant).container}>
      <Text style={sx(variant).text}>{children}</Text>
    </TouchableOpacity>
  );
};

const sx = (variant: Variant) =>
  StyleSheet.create({
    _: {},
    container: {
      backgroundColor: variant === "outline" ? "transparent" : COLOR.primary,
      borderColor: COLOR.primary,
      borderWidth: 1,
      borderRadius: 100,
      height: 44,
      ...flexStyles.centerCenter,
    },
    text: {
      color: variant === "outline" ? COLOR.primary : COLOR.white,
      ...textStyles.button,
    },
  });
