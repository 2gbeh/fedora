import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

type TTabIcon = {
  title: string;
  icon: ImageSourcePropType;
  color: string;
  focused: boolean;
};

const TabIcon = ({ title, icon, color, focused }: TTabIcon) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {title}
      </Text>
    </View>
  );
};

export default React.memo(TabIcon);

