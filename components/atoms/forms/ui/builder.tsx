import { PropsWithChildren } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
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
  <Text style={[{ color: COLOR.primary }, textStyles.label_medium]}>
    {text}
  </Text>
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
        style={inputStyles.right_section}
      >
        <MaterialIcons name="cancel" size={18} color={COLOR.secondary} />
      </TouchableOpacity>
    ) : null}
  </View>
);

interface InputWrapperLoadingProps extends PropsWithChildren {
  loading?: boolean;
}

export const InputWrapperLoading = ({
  children,
  ...props
}: InputWrapperLoadingProps) => (
  <View>
    {children}
    {props.loading ? (
      <ActivityIndicator
        size={18}
        color={COLOR.secondary}
        style={inputStyles.right_section}
      />
    ) : null}
  </View>
);

interface InputAliasProps extends Pick<InputProps, "value" | "placeholder"> {
  icon?: MaterialIconName;
  onClick?: () => void;
}

export const InputAlias = ({ icon, onClick, ...props }: InputAliasProps) => (
  <TouchableOpacity
    onPress={onClick}
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
