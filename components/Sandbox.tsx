import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
//
import COLOR from "@/constants/COLOR";

const Sandbox = () => {
  const [counter, setCounter] = useState(-1);
  //
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{ backgroundColor: COLOR.text, width: 160, height: 160 }}
        ></View>
        <View
          style={{ backgroundColor: COLOR.text_muted, width: 160, height: 160 }}
        ></View>
        <View
          style={{ backgroundColor: COLOR.subtext, width: 160, height: 160 }}
        ></View>
      </View>

      <TouchableOpacity
        onPress={() => setCounter((prev) => prev + 1)}
        style={{ backgroundColor: "purple" }}
      >
        <Text style={{ color: "white" }}>{counter}</Text>
      </TouchableOpacity>
    </>
  );
};

export default React.memo(Sandbox);

const styles = StyleSheet.create({
  container: {},
})