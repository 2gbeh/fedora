import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Tent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("🚀 ~ Tent");
  // RENDER
  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={router.back}>
          <Text style={styles.label}>{children}</Text>
        </Pressable>
      </View>
      <StatusBar style="dark" />
    </>
  );
};

export default React.memo(Tent);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#555",
    fontSize: 16,
  },
});
