```tsx
import { TextField } from "@/components/atoms/forms/ui/text-field";
import { Screen } from "@/components/atoms/screen";
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";
import _ as DocumentPicker from "expo-document-picker";
import _ as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
StyleSheet,
Switch,
Text,
TextInput,
TouchableOpacity,
useWindowDimensions,
View,
} from "react-native";


export default function CreateTransactionScreen() {
const layout = useWindowDimensions();
const [routes] = useState([
{ key: "posts", title: "Recents" },
{ key: "about", title: "Favorites" },
]);

return (
  <>
    {/* Number input */}
    <TextInput
      value={number}
      onChangeText={(t) => setNumber(t.replace(/[^0-9]/g, ""))}
      keyboardType="numeric"
      placeholder="Number"
    />

    {/* Multiline / textarea */}
    <TextInput
      value={text}
      onChangeText={setText}
      multiline
      numberOfLines={4}
      placeholder="Multiline"
    />

    {/* Switch / toggle */}
    <Switch value={isEnabled} onValueChange={setIsEnabled} />

    {/* Checkbox (expo-checkbox) */}
    <Checkbox value={checked} onValueChange={setChecked} />

    {/* Slider (@react-native-community/slider) */}
    <Slider
      value={sliderVal}
      onValueChange={setSliderVal}
      minimumValue={0}
      maximumValue={100}
    />

    {/* Dropdown / Picker (@react-native-picker/picker) */}
    <Picker selectedValue={pickerVal} onValueChange={setPickerVal}>
      <Picker.Item label="Option 1" value="1" />
      <Picker.Item label="Option 2" value="2" />
    </Picker>

    <Dropdown />

    <Card styles={{ padding: 0 }}>
      <SectionTabs />
    </Card>
  </>
  )
}
```
