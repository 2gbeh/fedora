import { StyleSheet, View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { COLOR, FONT } from "@/constants/THEME";

export default function LoginScreen() {
  console.log("🚀 ~ LoginScreen");
  // renders
  return (
    <View style={s.container}>
      <Pressable onPress={() => router.back()}>
        <Text style={s.h1}>Welcome</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.primary,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 16,
  },
  h1: {
    color: COLOR.secondary,
    fontFamily: FONT.GilroyMedium,
    fontSize: 18,
    fontWeight: "600",
  },
});
