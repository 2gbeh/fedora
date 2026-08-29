import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { StyleSheet, Text, View } from "react-native";
//
import { AppLabel } from "./builder";
import { InputAlias } from "./builder";
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

    if (!result.canceled) {
      const asset = result.assets[0];

      const formData = new FormData();
      formData.append("image", {
        uri: asset.uri,
        name: asset.fileName ?? `photo-${Date.now()}.jpg`,
        type: asset.mimeType ?? "image/jpeg",
      } as any);
      formData.append("email", "user@example.com");
      formData.append("tel", "08012345678");

      const uploadResponse = await fetch("https://your-api.com/upload", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = await uploadResponse.json();
      console.log(uploadResponse.status, data);
    }
  };

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync();
    console.log(result);

    if (!result.canceled) {
      const asset = result.assets[0];

      const formData = new FormData();
      formData.append("document", {
        uri: asset.uri,
        name: asset.name ?? `file-${Date.now()}`,
        type: asset.mimeType ?? "application/octet-stream",
      } as any);
      formData.append("email", "user@example.com");
      formData.append("tel", "08012345678");

      const uploadResponse = await fetch("https://your-api.com/upload", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = await uploadResponse.json();
      console.log(uploadResponse.status, data);
    }
  };
  //

  return (
    <View style={inputStyles.fieldContainer}>
      <AppLabel text={props.label} />
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
        <InputAlias
          value={props.value}
          placeholder={props.placeholder}
          icon="cloud-upload"
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
