import { PropsWithChildren } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
//
import { textStyles } from "@/styles/text-styles";
import { flexStyles } from "@/styles/flex-styles";
import { inputStyles } from "../styles";
import { MaterialIconName } from "@/types/react";
import { InputProps } from "../types";
import { COLOR } from "@/constants/COLOR";

interface InputWrapperProps extends PropsWithChildren {}

export const AppLabel = ({ text }: { text?: string }) => (
  <Text style={[{ color: COLOR.primary }, textStyles.labelMedium]}>{text}</Text>
);

interface InputWrapperProps
  extends PropsWithChildren, Pick<InputProps, "value" | "onChange"> {}

export const InputWrapper = ({ children, ...props }: InputWrapperProps) => (
  <View>
    {children}
    {props.value ? (
      <TouchableOpacity
        onPress={() => {
          if (props.onChange) props?.onChange("");
        }}
        style={inputStyles.clear}
      >
        <MaterialIcons name="cancel" size={18} color={COLOR.secondary} />
      </TouchableOpacity>
    ) : null}
  </View>
);

interface InputAliasProps extends Pick<InputProps, "value" | "placeholder"> {
  icon?: MaterialIconName;
}

export const InputAlias = ({ icon, ...props }: InputAliasProps) => (
  <TouchableOpacity
    style={{
      ...inputStyles.input,
      ...flexStyles.rowCenterBetween,
    }}
  >
    <Text style={props.value ? inputStyles.value : inputStyles.placeholder}>
      {props.value || props.placeholder}
    </Text>
    <MaterialIcons
      name={icon}
      size={18}
      color={props.value ? COLOR.secondary : COLOR.muted}
    />
  </TouchableOpacity>
);
