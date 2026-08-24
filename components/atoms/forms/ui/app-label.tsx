import { COLOR } from "@/constants/COLOR";
import { textStyles } from "@/styles/text-styles";
import { PropsWithChildren } from "react";
import { Text } from "react-native";

export const AppLabel = ({ children }: PropsWithChildren) => {
  return (
    <Text style={[{ color: COLOR.primary }, textStyles.labelMedium]}>{children}</Text>
  );
};