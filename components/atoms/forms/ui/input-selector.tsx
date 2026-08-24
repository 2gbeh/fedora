import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
//
import { flexStyles } from "@/styles/flex-styles";
import { inputStyles } from "../styles";
import { InputProps } from "../types";
import { COLOR } from "@/constants/COLOR";
import { MaterialIconName } from "@/types/react";

interface Props extends InputProps {
  icon?: MaterialIconName;
}

export const InputSelector = ({ icon, ...props }: Props) => {
  return (
    <TouchableOpacity style={sx.container}>
      <Text style={props.value ? inputStyles.value : inputStyles.placeholder}>
        {props.value || props.placeholder}
      </Text>
      <MaterialIcons name={icon} size={18} color={COLOR.secondary} />
    </TouchableOpacity>
  );
};

const sx = StyleSheet.create({
  _: {},
  container: {
    ...inputStyles.input,
    ...flexStyles.rowCenterBetween,
  },
});
