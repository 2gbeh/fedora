import { AppScreen } from "@/components/atoms/app-screen";
import { AppScrollView } from "@/components/atoms/app-scroll-view";
import { AppButton } from "@/components/atoms/forms/ui/app-button";
import { TextField } from "@/components/atoms/forms/ui/text-field";
import { AmountField } from "@/components/atoms/forms/ui/amount-field";
import { ListSelector } from "@/components/atoms/forms/ui/list-selector";
import { ListsSelector } from "@/components/atoms/forms/ui/lists-selector";
import { DateSelector } from "@/components/atoms/forms/ui/date-selector";
import { TRANSACTION_TYPE_OPTIONS } from "@/services/transactions/types";
//
import { useCreateTransaction } from "@/components/species/create-transaction/hook";
import { CreateTransactionPreview } from "@/components/species/create-transaction/ui/preview";
import { Spacing } from "@/components/atoms/spacing";

export default function CreateTransactionScreen() {
  const {
    formData,
    contactsList,
    categoriesList,
    walletsList,
    projectsList,
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
          data={TRANSACTION_TYPE_OPTIONS}
          value={formData.type}
          onChange={(type, item) =>
            mutateFormData({ type, typeText: item?.label })
          }
        />
        <ListSelector
          label="Contact"
          placeholder="Select contact"
          data={contactsList}
          value={formData.contactId}
          onChange={(contactId, item) =>
            mutateFormData({ contactId, contactIdText: item?.label })
          }
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
          onChange={(categoryIds, items) =>
            mutateFormData({
              categoryIds,
              categoryIdsText: items?.map(({ label }) => label),
            })
          }
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
        <ListSelector
          label="Wallet"
          placeholder="Select wallet"
          data={walletsList}
          value={formData.walletId}
          onChange={(walletId, item) =>
            mutateFormData({ walletId, walletIdText: item?.label })
          }
          loading={!walletsList}
          disabled={!walletsList}
        />
        <ListSelector
          label="Project"
          placeholder="Select project"
          data={projectsList}
          value={formData.projectId}
          onChange={(projectId, item) =>
            mutateFormData({ projectId, projectIdText: item?.label })
          }
          loading={!projectsList}
          disabled={!projectsList}
        />
        <Spacing />
      </AppScrollView>
      {openPreview && (
        <CreateTransactionPreview
          formData={formData}
          mutateFormData={mutateFormData}
          open={openPreview}
          onClose={() => setOpenPreview(false)}
        />
      )}
    </AppScreen>
  );
}
