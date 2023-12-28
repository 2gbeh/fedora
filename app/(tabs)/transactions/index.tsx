import { StyleSheet, View, Text } from "react-native";

export default function TransactionsTabScreen() {
  return (
    <View style={k.container}>
      <View style={k.hero}>Hi</View>
    </View>
  );
}

const k = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  hero: {
  flex: 1,
    backgroundColor: "#feb000",
    color: "white",
  },
});
