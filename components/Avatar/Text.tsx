import React from "react";
import { View, Text } from "react-native";
//
import {
  styles,
  type TAvatarText,
  DEFAULT_SIZE,
  getColor,
  getText,
} from "./Avatar.module";

const AvatarText = ({
  name = "Undefined",
  color = "white",
  background = "random",
  size = DEFAULT_SIZE,
  radius = 1024,
}: TAvatarText) => {
  const stylesCached = React.useMemo(
    () => ({
      minWidth: size,
      maxWidth: size,
      minHeight: size,
      maxHeight: size,
      borderRadius: radius,
      backgroundColor: getColor(background),
    }),
    [size, name]
  );
  //
  return (
    <View style={[styles.container, styles.flex, stylesCached]}>
      <Text style={{ color, fontSize: size / 3 }}>{getText(name)}</Text>
    </View>
  );
};

export default React.memo(AvatarText);
