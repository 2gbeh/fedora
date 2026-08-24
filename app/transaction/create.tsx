import { AppScreen } from "@/components/atoms/app-screen";
import { AppScrollView } from "@/components/atoms/app-scroll-view";
import { AppButton } from "@/components/atoms/forms/ui/app-button";
import { ImageSelector } from "@/components/atoms/forms/ui/image-selector";
import { TextField } from "@/components/atoms/forms/ui/text-field";
import { TextSelector } from "@/components/atoms/forms/ui/text-selector";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
/**
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
 */

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
    <AppScreen title="Add Transaction">
      <AppScrollView>
        <ImageSelector label="Receipt" placeholder="Select image" />
        <TextSelector
          label="Contact"
          placeholder="Select contact"
          data={[
            { label: "Item 1", value: "1" },
            { label: "Item 2", value: "2" },
            { label: "Item 3", value: "3" },
          ]}
        />
        <TextField label="Amount" type="decimal" placeholder="Enter amount" />
        <TextField label="Narration" placeholder="Enter description" />
        {["Categories", "Project", "Wallet", "Date"].map((label, i) => (
          <TextField key={i} label={label} />
        ))}
      </AppScrollView>
      <View style={sx.footer}>
        <AppButton disabled>Confirm</AppButton>
      </View>
    </AppScreen>
  );
}

const sx = StyleSheet.create({
  _: {},
  container: {},
  footer: {
    paddingTop: 8,
    paddingBottom: 16,
  },
});
