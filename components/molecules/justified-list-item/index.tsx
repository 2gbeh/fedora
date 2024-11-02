import React from "react";
import { View, Text } from "react-native";
// 
import { justifiedListItemStyles as s } from "./styles";

interface IProps {}

const JustifiedListItem: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ JustifiedListItem");
  // renders
  return (
    <View style={s.container}>
      <Text>JustifiedListItem</Text>
    </View>
  );
};

export default React.memo(JustifiedListItem);
