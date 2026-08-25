import { useState } from "react";
import { AppScreen } from "@/components/atoms/app-screen";
import { AppScrollView } from "@/components/atoms/app-scroll-view";
import { AppButton } from "@/components/atoms/forms/ui/app-button";
import { TextField } from "@/components/atoms/forms/ui/text-field";
import { ListSelector } from "@/components/atoms/forms/ui/list-selector";

import seedContacts from "@/services/contacts/data/seed.json";
import seedCategories from "@/services/categories/data/seed.json";
import seedWallets from "@/services/wallets/data/seed.json";
import seedProjects from "@/services/projects/data/seed.json";
import { DateTimeSelector } from "@/components/atoms/forms/ui/datetime-selector";
import { FileSelector } from "@/components/atoms/forms/ui/file-selector";

export default function useCreateTransaction() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [sliderVal, setSliderVal] = useState(0);
  const [date, setDate] = useState(new Date());
  const [pickerVal, setPickerVal] = useState("");
  const [checked, setChecked] = useState(false);
  //
  return {seedContacts,
seedCategories,
seedWallets,
seedProjects,};
}
