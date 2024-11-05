import React from "react";
import { View, Text } from "react-native";
//
import Avatar from "@/components/atoms/avatar";
import { COLOR } from "@/constants/THEME";
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
        <Avatar />
        <View style={s.figcaption}>
          <Text style={s.left_top}>Plateaumed.com</Text>
          <Text style={s.left_bottom}>October salary</Text>
        </View>
      </View>
      <View style={s.right}>
        <Text
          style={[
            s.right_top,
            { color: id % 3 > 0 ? COLOR.dark.error : COLOR.success_lighter },
          ]}
        >
          800,000
        </Text>
        <Text style={s.right_bottom}>Nov {id}</Text>
      </View>
    </View>
  );
};

export default React.memo(JustifiedListItem);
