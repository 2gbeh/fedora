import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
//
import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex";

interface Props {
  src?: string;
  alt?: string;
  size?: number;
  relativePath?: boolean;
}

export const Avatar = ({ src, alt, size = 40, relativePath }: Props) => {
  const source = relativePath ? src : { uri: src };
  const imageStyles = {
    width: size,
    height: size,
    borderRadius: size / 2,
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
    ...flexStyles.colCenterCenter,
  },
  text: {
    color: COLOR.primaryForeground,
    fontSize: 16,
    fontWeight: "400",
  },
});
