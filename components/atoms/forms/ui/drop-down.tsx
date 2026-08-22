import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";

export const Dropdown = () => {
  const [selected, setSelected] = useState("cash");

  return (
    <Picker
      selectedValue={selected}
      onValueChange={(value) => setSelected(value)}
      style={sx.input}
    >
      <Picker.Item label="Cash" value="cash" />
      <Picker.Item label="GTBank" value="gtbank" />
      <Picker.Item label="Access Bank" value="access" />
    </Picker>
  );
};

const sx = StyleSheet.create({
  _: {},
  input: {
    backgroundColor: COLOR.background,
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    fontFamily: FONT.regular,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.12,
  },
});
