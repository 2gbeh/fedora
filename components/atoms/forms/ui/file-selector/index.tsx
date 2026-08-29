import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
//
import { AppLabel } from "../builder";
import { InputAlias } from "../builder";
import { flexStyles } from "@/styles/flex-styles";
import { textStyles } from "@/styles/text-styles";
import { inputStyles } from "../../styles";
import { COLOR } from "@/constants/COLOR";
//
import { FileSelectorProps, useFileSelector } from "./hook";

interface Props extends FileSelectorProps {}

export const FileSelector = (props: Props) => {
  const { handleClick } = useFileSelector(props);

  return (
    <View style={inputStyles.field_container}>
      <AppLabel text={props.label} />
      {props.large ? (
        <View style={sx.container}>
          <View style={sx.icon_container}>
            <MaterialIcons
              name="photo-camera"
              color={COLOR.secondary}
              size={24}
            />
          </View>
          <Text style={sx.text}>{props?.placeholder}</Text>
        </View>
      ) : (
        <InputAlias
          icon="cloud-upload"
          value={props.value}
          placeholder={props.placeholder}
          onClick={handleClick}
        />
      )}
    </View>
  );
};

const sx = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.background,
    borderRadius: 8,
    height: 88,
    ...flexStyles.centerCenter,
    gap: 4,
  },
  icon_container: {
    backgroundColor: COLOR.offWhite,
    width: 48,
    height: 48,
    borderRadius: 8,
    ...flexStyles.centerCenter,
  },
  text: {
    color: COLOR.secondary,
    ...textStyles.label,
  },
});
