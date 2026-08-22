```ts
import { TextField } from "@/components/atoms/forms/ui/text-field";
import { Screen } from "@/components/atoms/screen";
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";
import DateTimePicker from "@react-native-community/datetimepicker";
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
/\*\*
**Select Recipient:**

- Upload Receipt
- Enter Amount
- Narration
- Categories
- Project Options
- Wallet Options
- Transaction Date (calendar)

**Preview Sheet:**

- Mark as Draft
- Mark as Incognito
- [Back][Save]

**Success Modal:**

- [Select Receipt]
- [Enter Amount]
- [Close]
  \*/

export default function CreateTransactionScreen() {
const layout = useWindowDimensions();
const [index, setIndex] = useState(0);
const [routes] = useState([
{ key: "posts", title: "Recents" },
{ key: "about", title: "Favorites" },
]);

const [text, setText] = useState("");
const [number, setNumber] = useState("");
const [isEnabled, setIsEnabled] = useState(false);
const [sliderVal, setSliderVal] = useState(0);
const [date, setDate] = useState(new Date());
const [pickerVal, setPickerVal] = useState("");
const [checked, setChecked] = useState(false);

const pickImage = async () => {
const result = await ImagePicker.launchImageLibraryAsync();
console.log(result);
};

const pickDocument = async () => {
const result = await DocumentPicker.getDocumentAsync();
console.log(result);
};

return (
<AppScreen title="Add Transaction" styles={sx.screen}>
{[
"**Select Recipient:**",
"- Upload Receipt",
"- Enter Amount",
"- Narration",
"- Categories",
"- Project Options",
"- Wallet Options",
"- Transaction Date (calendar)",
].map((label, i) => (
<TextField key={i} label={label} />
))}
<View>
{/_ Text input _/}
<TextInput value={text} onChangeText={setText} placeholder="Text" />

        {/* Number input */}
        <TextInput
          value={number}
          onChangeText={(t) => setNumber(t.replace(/[^0-9]/g, ""))}
          keyboardType="numeric"
          placeholder="Number"
        />

        {/* Password input */}
        <TextInput
          value={text}
          onChangeText={setText}
          secureTextEntry
          placeholder="Password"
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

        {/* Date/Time picker (@react-native-community/datetimepicker) */}
        <DateTimePicker
          value={date}
          mode="date"
          onChange={(event, selectedDate) =>
            selectedDate && setDate(selectedDate)
          }
        />

        {/* Dropdown / Picker (@react-native-picker/picker) */}
        <Picker selectedValue={pickerVal} onValueChange={setPickerVal}>
          <Picker.Item label="Option 1" value="1" />
          <Picker.Item label="Option 2" value="2" />
        </Picker>

        {/* Image picker (expo-image-picker) */}
        <TouchableOpacity onPress={pickImage}>
          <Text>Pick Image</Text>
        </TouchableOpacity>

        {/* Document picker (expo-document-picker) */}
        <TouchableOpacity onPress={pickDocument}>
          <Text>Pick Document</Text>
        </TouchableOpacity>
      </View>
      {/* <Card title="Select Recipient" styles={{ gap: 16 }}>
        <TextInput
          keyboardType="web-search"
          placeholder="Search recipient"
          value={number}
          onChangeText={setNumber}
          style={sx.input}
          placeholderTextColor={COLOR.muted}
        />
        <Dropdown />
      </Card>
      <Card styles={{ padding: 0 }}>
        <SectionTabs />
      </Card>
      <View style={{ ...flexStyles.rowCenterBetween, gap: 8 }}>
        <Button variant="outline">Cancel</Button>
        <Button>Add New</Button>
      </View> */}
    </AppScreen>

);
}

const sx = StyleSheet.create({
\_: {},
screen: {
gap: 16,
marginTop: 16,
},
container: {
backgroundColor: COLOR.white,
borderRadius: 8,
padding: 16,
gap: 8,
},
title: {
color: COLOR.primary,
fontFamily: FONT.medium,
fontSize: 16,
lineHeight: 24,
letterSpacing: 0.12,
},
input: {
backgroundColor: COLOR.background,
borderColor: COLOR.border,
borderWidth: 1,
borderRadius: 8,
paddingHorizontal: 16,
height: 44,
fontFamily: FONT.regular,
fontSize: 14,
lineHeight: 22,
letterSpacing: 0.12,
},
});
```
