import React from "react";
import { View, Text } from "react-native";
// 
import { headerStyles as s } from "./styles";

interface IProps {}

const Header: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Header");
  // renders
  return (
    <View style={s.container}>
      <Text>Header</Text>
    </View>
  );
};

export default React.memo(Header);
