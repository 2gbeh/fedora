import React from "react";
import { View, Text } from "react-native";
// 
import { fooStyles as s } from "./styles";

interface IProps {}

const Foo: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Foo");
  // renders
  return (
    <View style={s.container}>
      <Text>Foo</Text>
    </View>
  );
};

export default React.memo(Foo);
