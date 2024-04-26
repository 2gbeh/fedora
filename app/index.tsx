import COLOR from "@/constants/COLOR";
import React from "react";
import { StyleSheet, Text, View, DimensionValue } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100vh" as DimensionValue,
  },
  h1: {
    fontSize: 18,
    color: COLOR.text,
  },
});
