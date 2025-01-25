import { StyleSheet, View, Text } from "react-native";
import { router } from "expo-router";
import { Button } from "react-native-paper";
//
import Tent from "@/components/tent";

async function getTodos() {
  const raw = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/todos`);
  const res = await raw.json();
  return res;
}

export default function WelcomeScreen() {
  const gotoLogin = () => router.replace("/login");
  const gotoRegister = () => router.replace("/register");
  console.log("🚀 ~ WelcomeScreen");
  // RENDER
  return (
    <View style={sx.container}>
      <Button mode="contained" onPress={gotoLogin}>
        Log in
      </Button>
      <Button mode="contained-tonal" onPress={gotoRegister}>
        Create account
      </Button>
    </View>
  );
}

const sx = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "flex-end",
    rowGap: 24,
  },
});
