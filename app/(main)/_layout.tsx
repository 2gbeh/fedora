import { COLOR } from "@/constants/THEME";
import { Slot } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainLayout() {
  console.log("🚀 ~ MainLayout");
  // renders
  return (
    <SafeAreaView style={s.container}>
      <Slot />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.secondary,
    flex: 1,
  },
});
