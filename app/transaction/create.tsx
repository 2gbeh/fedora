import { AppScreen } from "@/components/atoms/app-screen";
import { AppScrollView } from "@/components/atoms/app-scroll-view";
import { AppButton, ButtonGroup } from "@/components/atoms/forms/ui/app-button";
import { TextField } from "@/components/atoms/forms/ui/text-field";
import { ListSelector } from "@/components/atoms/forms/ui/list-selector";
import { useState } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";

import seedContacts from "@/services/contacts/data/seed.json";
import seedCategories from "@/services/categories/data/seed.json";
import seedWallets from "@/services/wallets/data/seed.json";
import seedProjects from "@/services/projects/data/seed.json";
import { DateTimeSelector } from "@/components/atoms/forms/ui/datetime-selector";
import { FileSelector } from "@/components/atoms/forms/ui/file-selector";
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
        <FileSelector label="Receipt" placeholder="Attach receipt" /> 
        <ListSelector
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
        <ListSelector
          label="Categories"
          placeholder="Select categories"
          data={seedCategories.map((item, i) => ({
            label: item.name,
            value: String(i),
          }))}
          searchable
          searchPlaceholder="Search categories"
        />
        <ListSelector
          label="Wallet"
          placeholder="Select wallet"
          data={seedWallets.map((item, i) => ({
            label: item.name,
            value: String(i),
          }))}
        />
        <ListSelector
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
