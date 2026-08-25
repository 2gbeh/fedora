import { AppScreen } from "@/components/atoms/app-screen";
import { AppScrollView } from "@/components/atoms/app-scroll-view";
import { TextField } from "@/components/atoms/forms/ui/text-field";
import { FileSelector } from "@/components/atoms/forms/ui/file-selector";
import { ListSelector } from "@/components/atoms/forms/ui/list-selector";
import { DateTimeSelector } from "@/components/atoms/forms/ui/datetime-selector";
import { AppButton } from "@/components/atoms/forms/ui/app-button";
//
import useCreateTransaction from "@/components/species/transactions/hooks/use-create-transaction";
/**
# Form
- Contact
- Receipt
- Amount
- Narration
- Categories
- Wallet
- Project
- Date (calendar)
- [Back|Reset][Save]

# Preview Sheet
- Mark as Draft
- Mark as Incognito
- [Cancel][Confirm]

# Success Modal
- [Back][Close]
 */

export default function CreateTransactionScreen() {
  const { seedContacts, seedCategories, seedWallets, seedProjects } =
    useCreateTransaction();
  //
  return (
    <AppScreen
      title="Add Transaction"
      footer={<AppButton disabled>Confirm</AppButton>}
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
