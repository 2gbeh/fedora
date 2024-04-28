import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
// 
import SafeAreaInsets from "@/components/SafeAreaInsets";
import AppBar from "@/components/AppBar";
import Hero from "@/components/Hero";
// 
import COLOR from "@/constants/COLOR";

export default function HomeScreen() {
  const [x, y] = useState(-1);
  return (
    <SafeAreaInsets>
      <AppBar />
      <Hero />
      {/* <View style={{ flexDirection: "row" }}>
        <View
          style={{ backgroundColor: COLOR.text, width: 160, height: 160 }}
        ></View>
        <View
          style={{ backgroundColor: COLOR.text_loud, width: 160, height: 160 }}
        ></View>
      </View> */}
      {/* <TouchableOpacity
        onPress={() => y((z) => z + 1)}
        style={{ backgroundColor: "purple" }}
      >
        <Text style={{ color: "white" }}>{x}</Text>
      </TouchableOpacity> */}
    </SafeAreaInsets>
  );
}
