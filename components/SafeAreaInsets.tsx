import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLOR from "@/constants/COLOR";

const SafeAreaInsets = ({ children }: { children: React.ReactNode }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        // 
        backgroundColor: COLOR.background,
        flexGrow: 1,
      }}
    >
      {children}
    </View>
  );
};
export default React.memo(SafeAreaInsets);
