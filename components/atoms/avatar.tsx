import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
//
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";
import { flexStyles } from "@/styles/flex-styles";

interface Props {
  src?: string;
  alt?: string;
  size?: number;
  radius?: number;
  relativePath?: boolean;
}

export const Avatar = ({
  src,
  alt,
  size = 40,
  radius,
  relativePath,
}: Props) => {
  const source = relativePath ? src : { uri: src };
  const imageStyles = {
    width: size,
    height: size,
    borderRadius: radius || size,
  };

  if (src) {
    return (
      <Image
        source={source}
        contentFit="cover"
        transition={200}
        style={imageStyles}
      />
    );
  }

  return (
    <View style={[imageStyles, sx.container]}>
      <Text style={sx.text}>{extractInitials(alt)}</Text>
    </View>
  );
};

const extractInitials = (text?: string) => {
  if (!text) return "U";

  const arr = text.trim().split(" ");
  const ini = arr.length > 1 ? `${arr[0][0]}${arr[1][0]}` : arr[0][0];
  return ini.toUpperCase();
};

const sx = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.primary,
    ...flexStyles.centerCenter,
  },
  text: {
    color: COLOR.white,
    fontFamily: FONT.medium,
    fontSize: 16,
    letterSpacing: 0.15,
  },
});
