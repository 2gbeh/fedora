```tsx
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";
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

    <Card styles={{ padding: 0 }}>
      <SectionTabs />
    </Card>
  </>
  )
}
```
