import { COLOR } from "@/constants/COLOR";
import { TextInput, View } from "react-native";
import { inputStyles as sx } from "../styles";
import { InputProps, KEYBOARD_TYPE_MAP } from "../types";
import { AppLabel } from "./builder";

interface Props extends InputProps {}

export const TextField = (props: Props) => {
  return (
    <View style={sx.field_container}>
      <AppLabel text={props.label} />
      <TextInput
        keyboardType={KEYBOARD_TYPE_MAP[props.type || "text"]}
        value={props.value || ""}
        onChangeText={props.onChange}
        editable={!props.disabled && !props.readOnly}
        clearButtonMode="while-editing"
        placeholder={props.placeholder}
        placeholderTextColor={COLOR.muted}
        style={sx.input}
      />
    </View>
  );
};
