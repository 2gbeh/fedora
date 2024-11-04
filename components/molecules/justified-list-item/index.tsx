import React from "react";
import { View, Text } from "react-native";
//
import { justifiedListItemStyles as s } from "./styles";

interface IProps {
  id: number;
}

const JustifiedListItem: React.FC<IProps> = ({ id }) => {
  console.log("🚀 ~ JustifiedListItem");
  // renders
  return (
    <View style={s.container}>
      <View style={s.left}>
        <View style={s.figure} />
        <View style={s.figcaption}>
          <Text style={s.left_top}>Plateaumed.com</Text>
          <Text style={s.left_bottom}>October salary</Text>
        </View>
      </View>
      <View style={s.right}>
        <Text style={s.left_top}>800,000</Text>
        <Text style={s.left_bottom}>Nov {id}</Text>
      </View>
    </View>
  );
};

export default React.memo(JustifiedListItem);
