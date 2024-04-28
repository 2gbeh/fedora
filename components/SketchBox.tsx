import React from "react";
import { Image } from "react-native";
import box from "@/assets/images/box.png";
import box_dark from "@/assets/images/box-dark.png";

type ISketchBox = {
  as: string;
  size?: number;
  alt?: boolean;
};

const SketchBox = ({ as, size = 32, alt = false }: ISketchBox) => {
  const [width, height] = [size, size];
  //
  return (
    <Image
      // source={{ uri: "https://github.com/2gbeh.png" }}
      source={alt ? box_dark : box}
      style={{ width, height }}
    />
  );
};
export default React.memo(SketchBox);
