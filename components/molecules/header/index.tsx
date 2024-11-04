import React from "react";
import { View, Text } from "react-native";
import { BellIcon, PackageIcon } from "lucide-react-native";
// 
import { COLOR } from "@/constants/THEME";
//
import { headerStyles as s } from "./styles";
import Avatar from "@/components/atoms/avatar";

interface IProps {}

const Header: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Header");
  // renders
  return (
    <View style={s.container}>
      <View style={s.left}>
        <Avatar />
        <View style={s.figcaption}>
          <Text style={s.greeting}>Hi,</Text>
          <Text style={s.name}>Emanuel</Text>
        </View>
      </View>
      <View style={s.right}>
        <BellIcon color={COLOR.white} />
      </View>
    </View>
  );
};

export default React.memo(Header);
