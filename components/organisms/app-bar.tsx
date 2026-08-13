import { Pressable, Text, View } from "react-native";

export const AppBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600" }}>Fedora</Text>
      <Pressable onPress={() => console.log("See all pressed")}>
        <Text style={{ color: "#6750A4", fontWeight: "500" }}>Hi</Text>
      </Pressable>
    </View>
  );
};
