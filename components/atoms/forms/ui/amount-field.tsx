import { useState } from "react";
import { View } from "react-native";
import MaskInput, { createNumberMask } from "react-native-mask-input";
//
import { InputProps } from "../types";
import { inputStyles as sx } from "../styles";
import { COLOR } from "@/constants/COLOR";
import { NAIRA } from "@/constants";
import { AppLabel, InputWrapper } from "./builder";

interface Props extends InputProps {}

const currencyMask = createNumberMask({
  prefix: [NAIRA + " "],
  delimiter: ",",
  separator: ".",
  precision: 2,
});

export const AmountField = (props: Props) => {
  const [value, setValue] = useState(props.value);

  const handleChange = (formatted: string, raw: string) => {
    setValue(formatted);
    if (props.onChange) props?.onChange(raw);
  };

  return (
    <View style={sx.fieldContainer}>
      <AppLabel text={props.label} />
      <InputWrapper value={props.value} onChange={props.onChange}>
        <MaskInput
          keyboardType="decimal-pad"
          mask={currencyMask}
          value={value}
          onChangeText={handleChange}
          editable={!props.disabled && !props.readOnly}
          placeholder={props.placeholder}
          placeholderTextColor={COLOR.muted}
          style={sx.input}
        />
      </InputWrapper>
    </View>
  );
};
