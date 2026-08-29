import { AppScreen } from "@/components/atoms/app-screen";
import { AppScrollView } from "@/components/atoms/app-scroll-view";
import { AppButton } from "@/components/atoms/forms/ui/app-button";
import { TextField } from "@/components/atoms/forms/ui/text-field";
import { AmountField } from "@/components/atoms/forms/ui/amount-field";
import { ListSelector } from "@/components/atoms/forms/ui/list-selector";
import { ListsSelector } from "@/components/atoms/forms/ui/lists-selector";
import { DateSelector } from "@/components/atoms/forms/ui/date-selector";
import { TransactionTypeOptions } from "@/services/transactions/types";
//
import { useCreateTransaction } from "@/components/species/create-transaction/hook";
import { CreateTransactionPreview } from "@/components/species/create-transaction/ui/preview";

export default function CreateTransactionScreen() {
  const {
    formData,
    contactsList,
    categoriesList,
    openPreview,
    setOpenPreview,
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
          label="Type"
          placeholder="Select type"
          data={TransactionTypeOptions}
          value={formData.type}
          onChange={(type) => mutateFormData({ type })}
        />
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
        <AmountField
          label="Amount"
          placeholder="Enter amount"
          value={formData.amount}
          onChange={(amount) => mutateFormData({ amount })}
        />
        <TextField
          label="Narration"
          placeholder="Enter description"
          value={formData.narration}
          onChange={(narration) => mutateFormData({ narration })}
        />
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
        <DateSelector
          label="Date"
          placeholder="Transaction date"
          value={formData.entryDate}
          onChange={(entryDate) => mutateFormData({ entryDate })}
        />
      </AppScrollView>
      <CreateTransactionPreview
        formData={formData}
        mutateFormData={mutateFormData}
        open={openPreview}
        onClose={() => setOpenPreview(false)}
      />
    </AppScreen>
  );
}
