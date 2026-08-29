import { PropsWithChildren } from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
//
import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex-styles";
import { textStyles } from "@/styles/text-styles";
//
import { appButtonUtils as ux, AppButtonVariant } from "./utils";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: AppButtonVariant;
  asBadge?: boolean;
}

export const AppButton = ({ children, ...props }: Props) => {
  return (
    <View style={!props.asBadge && { flex: 1 }}>
      <TouchableOpacity
        onPress={props.onClick}
        disabled={props.disabled}
        style={sx.container(props)}
      >
        <Text style={sx.text(props)}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

interface ButtonGroupProps extends PropsWithChildren {
  grid?: boolean;
}

export const ButtonGroup = ({ children, grid }: ButtonGroupProps) => (
  <View style={sx.btn_group(grid)}>{children}</View>
);

export const sx = {
  _: {},
  container: (params: Props) =>
    ({
      backgroundColor: params.disabled
        ? COLOR.primaryDisabled
        : ux.getVariantStyles(params.variant).backgroundColor,
      borderColor: params.disabled
        ? COLOR.primaryDisabled
        : ux.getVariantStyles(params.variant).borderColor,
      borderWidth: 1,
      borderRadius: 100,
      paddingVertical: 6,
      paddingHorizontal: 12,
      height: params.asBadge ? 30 : 44,
      ...flexStyles.centerCenter,
    }) as ViewStyle,
  text: (params: Props) =>
    ({
      color: ux.getVariantStyles(params.variant).color,
      ...(params.asBadge ? textStyles.label : textStyles.button),
    }) as TextStyle,
  btn_group: (grid: ButtonGroupProps["grid"]) =>
    ({
      ...(grid ? {} : flexStyles.rowCenterBetween),
      gap: 12,
    }) as ViewStyle,
};
