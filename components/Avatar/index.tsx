import React from "react";
import { View } from "react-native";
import { Image } from "expo-image";
//
import { styles, type TAvatar, DEFAULT_SIZE, BLUR_HASH } from "./Avatar.module";

const Avatar = ({
  uri = "/assets/images/avatar.png",
  fit = "fill",
  size = DEFAULT_SIZE,
  radius = 1024,
  isStatic = true,
}: TAvatar) => {
  const stylesCached = React.useMemo(
    () => ({
      minWidth: size,
      maxWidth: size,
      minHeight: size,
      maxHeight: size,
      borderRadius: radius,
    }),
    [size]
  );
  //
  return (
    <View style={[styles.container, stylesCached]}>
      {isStatic ? (
        <img src={uri} alt={uri} width="100%" />
      ) : (
        <Image
          source={uri}
          placeholder={BLUR_HASH}
          contentFit={fit}
          transition={200}
          style={{ flex: 1 }}
        />
      )}
    </View>
  );
};

export default React.memo(Avatar);
export { default as AvatarText } from "./Text";
