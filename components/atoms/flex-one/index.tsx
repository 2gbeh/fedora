import React, { PropsWithChildren } from "react";
import { View } from "react-native";

interface IProps extends PropsWithChildren {}

const FlexOne: React.FC<IProps> = ({ children }) => {
  console.log("🚀 ~ FlexOne");
  // renders
  return <View style={{ flex: 1 }}>{children}</View>;
};

export default React.memo(FlexOne);
