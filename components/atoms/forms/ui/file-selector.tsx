import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { StyleSheet, Text, View } from "react-native";
//
import { AppLabel } from "./app-label";
import { InputSelector } from "./input-selector";
import { flexStyles } from "@/styles/flex-styles";
import { textStyles } from "@/styles/text-styles";
import { inputStyles } from "../styles";
import { InputProps } from "../types";
import { COLOR } from "@/constants/COLOR";

interface Props extends InputProps {
  large?: boolean;
}

export const FileSelector = (props: Props) => {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    console.log(result);
  };

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync();
    console.log(result);
  };
  //

  return (
    <View style={inputStyles.fieldContainer}>
      {props.label ? <AppLabel>{props.label}</AppLabel> : null}
      {props.large ? (
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
      ) : (
        <InputSelector {...props} icon="cloud-upload" />
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
