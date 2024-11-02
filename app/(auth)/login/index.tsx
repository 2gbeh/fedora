import { StyleSheet, View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
// 
import { COLOR, FONT } from "@/constants/THEME";

export default function LoginScreen() {
  console.log("🚀 ~ LoginScreen");
  // renders
  return (
    <View style={s.container}>
      <Pressable onPress={() => router.back()}>
        <Feather name="framer" size={32} color={COLOR.primary} />
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.secondary,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 16,
  },
  h1: {
    color: COLOR.secondary,
    fontFamily: FONT.RobotoMedium,
    fontWeight: "500",
    fontSize: 18,
  },
});
