import React from "react";
import { View, Text } from "react-native";
//
import { horizontalListStyles as s } from "./styles";

interface IProps {}

const HorizontalList: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ HorizontalList");
  // renders
  return (
    <View style={s.container}>
      <View style={s.figure} />
      <Text style={s.figcaption}>PL</Text>
    </View>
  );
};

export default React.memo(HorizontalList);
