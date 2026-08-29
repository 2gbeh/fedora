import { AppScreen } from "@/components/atoms/app-screen";
import { AppScrollView } from "@/components/atoms/app-scroll-view";
import { AppButton } from "@/components/atoms/forms/ui/app-button";
import { TextField } from "@/components/atoms/forms/ui/text-field";
import { AmountField } from "@/components/atoms/forms/ui/amount-field";
import { ListSelector } from "@/components/atoms/forms/ui/list-selector";
import { DateTimeSelector } from "@/components/atoms/forms/ui/datetime-selector";
import { TransactionTypeOptions } from "@/services/transactions/types";
//
import { useCreateTransaction } from "@/components/species/create-transaction/hook";
import { ListsSelector } from "@/components/atoms/forms/ui/lists-selector";

export default function CreateTransactionScreen() {
  const {
    formData,
    contactsList,
    categoriesList,
    canSave,
    canConfirm,
    mutateFormData,
    handleSave,
  } = useCreateTransaction();
  //
  return (
    <AppScreen
      title="Add Transaction"
      footer={
        <AppButton onClick={handleSave} disabled={!canSave}>
          Save
        </AppButton>
      }
    >
      <AppScrollView>
        <ListSelector
          label="Contact"
          placeholder="Select contact"
          data={contactsList}
          value={formData.contactId}
          onChange={(contactId) => mutateFormData({ contactId })}
          loading={!contactsList}
          disabled={!contactsList}
          searchable
          searchPlaceholder="Search contacts"
        />
        <ListSelector
          label="Type"
          placeholder="Select type"
          data={TransactionTypeOptions}
        />
        <AmountField label="Amount" placeholder="Enter amount" />
        <TextField label="Narration" placeholder="Enter description" />
        <ListsSelector
          label="Categories"
          placeholder="Select categories"
          data={categoriesList}
          value={formData.categoryIds}
          onChange={(categoryIds) => mutateFormData({ categoryIds })}
          loading={!categoriesList}
          disabled={!categoriesList}
          searchable
          searchPlaceholder="Search categories"
        />
        <DateTimeSelector label="Date" placeholder="Transaction date" />
      </AppScrollView>
    </AppScreen>
  );
}
