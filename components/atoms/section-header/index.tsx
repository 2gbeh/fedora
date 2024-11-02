import React from "react";
import { View, Text } from "react-native";
// 
import { sectionHeaderStyles as s } from "./styles";

interface IProps {}

const SectionHeader: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ SectionHeader");
  // renders
  return (
    <View style={s.container}>
      <Text>SectionHeader</Text>
    </View>
  );
};

export default React.memo(SectionHeader);
