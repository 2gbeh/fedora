import { TextInput, View } from "react-native";
import { formStyles as sx } from "../styles";
import { InputProps, KEYBOARD_TYPE_MAP } from "../types";
import { Label } from "./label";

interface Props extends InputProps {}

export const AppTextInput = (props: Props) => {
  return (
    <View style={sx.fieldContainer}>
      {props.label ? <Label>{props.label}</Label> : null}
      <TextInput
        keyboardType={KEYBOARD_TYPE_MAP[props.type || "text"]}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChange}
        style={sx.input}
        editable={!props.disabled && !props.readOnly}
      />
    </View>
  );
};
