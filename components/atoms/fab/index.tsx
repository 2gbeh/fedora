import React from "react";
import { View, Text } from "react-native";
// 
import { fabStyles as s } from "./styles";

interface IProps {}

const FAB: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ FAB");
  // renders
  return (
    <View style={s.button}>
      <Text style={s.label}>+</Text>
    </View>
  );
};

export default React.memo(FAB);
