import React from "react";
import { Image, View } from "react-native";
import ASSET, { type TAsset } from "@/constants/ASSET";

type TAssetBox = {
  as: string;
  size?: number;
  radius?: number;
  alt?: string;
};

const AssetBox = ({ as, size = 32, radius = 0, alt = "" }: TAssetBox) => {
  const [width, height] = [size, size];
  //
  return (
    <Image
      source={ASSET[as as TAsset]}
      alt={alt}
      style={{ width, height, resizeMode: "contain", borderRadius: radius }}
    />
  );
};
export default React.memo(AssetBox);
