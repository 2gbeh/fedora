import React from "react";
import { Image } from "react-native";
import box from "@/assets/images/box.png";
import box_dark from "@/assets/images/box-dark.png";

type TSketchBox = {
  as: string;
  size?: number;
  dark?: boolean;
};

const SketchBox = ({ as, size = 32, dark = false }: TSketchBox) => {
  const [width, height] = [size, size];
  //
  return (
    <Image
      // source={{ uri: "https://github.com/2gbeh.png" }}
      source={dark ? box_dark : box}
      style={{ width, height }}
    />
  );
};
export default React.memo(SketchBox);
