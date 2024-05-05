import React from "react";
import { Image } from "react-native";
// 
import APP from "@/constants/APP";
import ASSET from "@/constants/ASSET";

const Logo = ({ width = 35 }: { width?: number }) => {
  return (
    <Image
      source={ASSET.icon}
      alt={APP.name}
      style={{ width, resizeMode: "contain" }}
    />
  );
};
export default React.memo(Logo);
