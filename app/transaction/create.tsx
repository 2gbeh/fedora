import { AppScreen } from "@/components/atoms/app-screen";
import { AppScrollView } from "@/components/atoms/app-scroll-view";
import { AppButton, ButtonGroup } from "@/components/atoms/forms/ui/app-button";
import { ImageSelector } from "@/components/atoms/forms/ui/image-selector";
import { TextField } from "@/components/atoms/forms/ui/text-field";
import { TextSelector } from "@/components/atoms/forms/ui/text-selector";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import seedContacts from "@/services/contacts/data/seed.json";
import seedCategories from "@/services/categories/data/seed.json";
import seedWallets from "@/services/wallets/data/seed.json";
import seedProjects from "@/services/projects/data/seed.json";
import { DateTimeSelector } from "@/components/atoms/forms/ui/datetime-selector";
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
    <AppScreen
      title="Add Transaction"
      footer={
        <ButtonGroup variant="flex">
          <AppButton variant="outline">Cancel</AppButton>
          <AppButton disabled>Confirm</AppButton>
        </ButtonGroup>
      }
    >
      <AppScrollView>
        <ImageSelector label="Receipt" placeholder="Attach receipt" /> 
        <TextSelector
          label="Contact"
          placeholder="Select contact"
          data={seedContacts.map((item, i) => ({
            label: `${item.displayName} ${item.name ? `(${item.name})` : ""}`,
            value: String(i),
          }))}
          searchable
          searchPlaceholder="Search contacts"
        />
        <TextField label="Amount" type="decimal" placeholder="Enter amount" />
        <TextField label="Narration" placeholder="Enter description" />
        <TextSelector
          label="Categories"
          placeholder="Select categories"
          data={seedCategories.map((item, i) => ({
            label: item.name,
            value: String(i),
          }))}
          searchable
          searchPlaceholder="Search categories"
        />
        <TextSelector
          label="Wallet"
          placeholder="Select wallet"
          data={seedWallets.map((item, i) => ({
            label: item.name,
            value: String(i),
          }))}
        />
        <TextSelector
          label="Project"
          placeholder="Select project"
          data={seedProjects.map((item, i) => ({
            label: item.name,
            value: String(i),
          }))}
        />
        <DateTimeSelector label="Date" placeholder="Transaction date" />
      </AppScrollView>
    </AppScreen>
  );
}

const sx = StyleSheet.create({
  _: {},
  container: {},
});
