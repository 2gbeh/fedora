import { Text, TouchableOpacity, View } from "react-native";
//
import { ButtonGroupProps, ButtonProps } from "../types";
import { buttonStyles as sx } from "../styles";

interface Props extends ButtonProps {}

export const AppButton = ({
  children,
  onClick,
  disabled,
  loading,
  variant = "solid",
}: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={onClick}
        disabled={disabled}
        style={sx.container({ disabled, variant })}
      >
        <Text style={sx.text({ variant })}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const ButtonGroup = ({
  children,
  variant = "flex",
}: ButtonGroupProps) => (
  <View style={sx.btn_group({ variant })}>{children}</View>
);
