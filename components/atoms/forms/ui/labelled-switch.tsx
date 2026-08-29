import { StyleSheet, Switch, Text, View } from "react-native";
//
import { flexStyles } from "@/styles/flex-styles";
import { textStyles } from "@/styles/text-styles";
import { InputProps } from "../types";
import { COLOR } from "@/constants/COLOR";

interface Props extends Omit<InputProps, "value" | "onChange"> {
  value?: boolean;
  onChange?: (value?: boolean) => void;
}

export const LabelledSwitch = (props: Props) => {
  return (
    <View style={sx.container}>
      <Text style={sx.text}>{props.label}</Text>
      <Switch
        value={props.value}
        onValueChange={props.onChange}
        thumbColor={props.value ? COLOR.primary : COLOR.muted}
        trackColor={{
          true: COLOR.muted,
          false: COLOR.primaryDisabled,
        }}
        ios_backgroundColor={COLOR.primaryDisabled}
      />
    </View>
  );
};

const sx = StyleSheet.create({
  _: {},
  container: {
    marginVertical: 4,
    ...flexStyles.rowCenterBetween,
  },
  text: {
    color: COLOR.primary,
    ...textStyles.label_medium,
  },
});
