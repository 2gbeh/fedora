import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export const SearchBar = () => {
  const [number, setNumber] = useState("");

  return (
    <TextInput
      keyboardType="web-search"
      placeholder="Search transactions"
      value={number}
      onChangeText={setNumber}
      style={sx.input}
    />
  );
};

const sx = StyleSheet.create({
  _: {},
  input: {
    borderWidth: 1,
    padding: 10,
    height: 40,
  },
});
