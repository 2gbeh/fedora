import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Text, View } from "react-native";
//
import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex-styles";
import { textStyles } from "@/styles/text-styles";
import { formStyles } from "../styles";
import { InputProps } from "../types";
import { AppLabel } from "./app-label";

interface Props extends InputProps {}

export const ImageSelector = (props: Props) => {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    console.log(result);
  };

  return (
    <View style={formStyles.fieldContainer}>
      {props.label ? <AppLabel>{props.label}</AppLabel> : null}
      <View style={sx.container}>
        <View style={sx.iconContainer}>
          <MaterialIcons
            name="photo-camera"
            size={24}
            color={COLOR.secondary}
          />
        </View>
        <Text style={sx.text}>{props?.placeholder}</Text>
      </View>
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
  iconContainer: {
    backgroundColor: COLOR.offWhite,
    width: 48,
    height: 48,
    borderRadius: 8,
    ...flexStyles.centerCenter,
  },
  text: {
    color: COLOR.secondary,
    ...textStyles.label,
    // fontFamily: FONT.regular,
  },
});
