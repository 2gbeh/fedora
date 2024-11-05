import React from "react";
import { View, Text } from "react-native";
import { CalendarIcon, PieChartIcon } from "lucide-react-native";
//
import Avatar from "@/components/atoms/avatar";
import { COLOR } from "@/constants/THEME";
import { calendarUtil } from "@/utils/calendar/calendar.util";
//
import { headerStyles as s } from "./styles";

interface IProps {}

const Header: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Header");
  // renders
  return (
    <View style={s.container}>
      <View style={s.left}>
        <Avatar src="https://github.com/2gbeh.png" />
        <View style={s.figcaption}>
          <Text style={s.greeting}>{calendarUtil.greeting()}</Text>
          <Text style={s.name}>Emanuel</Text>
        </View>
      </View>
      <View style={s.right}>
        <View style={s.icon}>
          <CalendarIcon color={COLOR.dark.onSurface} size={18} />
        </View>
      </View>
    </View>
  );
};

export default React.memo(Header);
