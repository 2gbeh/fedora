import { StyleSheet, Pressable, Text } from "react-native";

export const FAB = () => {
  return (
    <Pressable style={sx.fab} onPress={() => console.log("FAB pressed")}>
      <Text style={sx.fabIcon}>+</Text>
    </Pressable>
  );
};

const sx = StyleSheet.create({
  _: {},
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#6750A4",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  fabIcon: {
    color: "#fff",
    fontSize: 28,
    lineHeight: 28,
  },
});
