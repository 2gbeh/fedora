import React from "react";
import { View, Text } from "react-native";
// 
import { heroStyles as s } from "./styles";

interface IProps {}

const Hero: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Hero");
  // renders
  return (
    <View style={s.container}>
      <Text>Hero</Text>
    </View>
  );
};

export default React.memo(Hero);
