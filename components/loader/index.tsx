import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";

const Loader: React.FC = () => {
  console.log("🚀 ~ Loader");
  // RENDER
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor: "rgba(0,0,0,0.4)",
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      <ActivityIndicator color="white" size="small" />
    </View>
  );
};

export default React.memo(Loader);
