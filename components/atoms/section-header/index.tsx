import React from "react";
import { View, Text } from "react-native";
import { ChevronRightIcon, PackageIcon } from "lucide-react-native";
//
import { COLOR } from "@/constants/THEME";
//
import { sectionHeaderStyles as s } from "./styles";

interface IProps {
  title?: string;
}

const SectionHeader: React.FC<IProps> = ({ title }) => {
  console.log("🚀 ~ SectionHeader");
  // renders
  return (
    <View style={s.container}>
      <Text style={s.heading}>{title}</Text>
      <View style={s.right}>
        <Text style={s.link}>See all</Text>
        <ChevronRightIcon color={COLOR.white} />
      </View>
    </View>
  );
};

export default React.memo(SectionHeader);
