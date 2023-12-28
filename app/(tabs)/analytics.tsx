import { StyleSheet, View, Text } from "react-native";

export default function AnalyticsTabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  content: {
    color: "white",
  },
});
