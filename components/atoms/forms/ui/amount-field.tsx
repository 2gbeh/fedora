import { TextInput, View } from "react-native";
//
import { AppLabel, InputWrapper } from "./builder";
import { inputStyles as sx } from "../styles";
import { InputProps } from "../types";
import { COLOR } from "@/constants/COLOR";
import { NAIRA } from "@/constants";

interface Props extends InputProps {}

export const AmountField = (props: Props) => {
  const handleChange = (text: string) => {
    const sanitized = text.replace(NAIRA, "").replace(/,/g, "").trim();

    if (!/^[0-9.]*$/.test(sanitized)) return;
    if ((sanitized.match(/\./g) || []).length > 1) return;
    if (props.onChange) props.onChange(sanitized);
  };

  return (
    <View style={sx.field_container}>
      <AppLabel text={props.label} />
      <InputWrapper value={props.value} onChange={props.onChange}>
        <TextInput
          keyboardType="decimal-pad"
          value={transform(props.value)}
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

const transform = (value?: string) => {
  if (!value) return "";

  const [int, ...dec] = value.split(".");
  const intSafe = int.replace(/[^0-9]/g, "");
  const csv = intSafe.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (dec.length === 0) return `${NAIRA} ${csv}`;

  const dp = dec
    .join("")
    .replace(/[^0-9]/g, "")
    .slice(0, 2);

  return `${NAIRA} ${csv}.${dp}`;
};
