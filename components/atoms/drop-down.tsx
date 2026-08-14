import { useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export const Dropdown = () => {
  const [selected, setSelected] = useState("cash");

  return (
    <View>
      <Picker
        selectedValue={selected}
        onValueChange={(value) => setSelected(value)}
      >
        <Picker.Item label="Cash" value="cash" />
        <Picker.Item label="GTBank" value="gtbank" />
        <Picker.Item label="Access Bank" value="access" />
      </Picker>
    </View>
  );
};
