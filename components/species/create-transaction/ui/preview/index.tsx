import { AppButton } from "@/components/atoms/forms/ui/app-button";
import { ListSelector } from "@/components/atoms/forms/ui/list-selector";
import { FileSelector } from "@/components/atoms/forms/ui/file-selector";
import { LabelledSwitch } from "@/components/atoms/forms/ui/labelled-switch";
import { LabelledSwitchV2 } from "@/components/atoms/forms/ui/labelled-switch-v2";
import { ModalContainer } from "@/components/atoms/modal-container";
//
import { CreateTransactionFormSchema } from "../../hook";
import { useCreateTransactionPreview } from "./hook";

interface Props {
  formData: CreateTransactionFormSchema;
  mutateFormData: (formData: Partial<CreateTransactionFormSchema>) => void;
  open?: boolean;
  onClose?: () => void;
}

export const CreateTransactionPreview = ({
  formData,
  mutateFormData,
  open,
  onClose,
}: Props) => {
  const { seedWallets, seedProjects } = useCreateTransactionPreview();

  return (
    <ModalContainer open={open} bottomSheet>
      <ListSelector
        label="Wallet"
        placeholder="Select wallet"
        data={seedWallets.map((item, i) => ({
          label: item.name,
          value: String(i + 1),
        }))}
      />
      <ListSelector
        label="Project"
        placeholder="Select project"
        data={seedProjects.map((item, i) => ({
          label: item.name,
          value: String(i + 1),
        }))}
      />
      <FileSelector label="Receipt" placeholder="Attach receipt" />
      <LabelledSwitch
        label="Mark as draft"
        value={formData.isDraft}
        onChange={(isDraft) => mutateFormData({ isDraft })}
      />
      <LabelledSwitch
        label="Mark as incognito"
        value={formData.isIncognito}
        onChange={(isIncognito) => mutateFormData({ isIncognito })}
      />
      <LabelledSwitchV2
        label="Mark as stub"
        value={formData.isIncognito}
        onChange={(isIncognito) => mutateFormData({ isIncognito })}
      />
      <AppButton>Confirm</AppButton>
    </ModalContainer>
  );
};

/**
# Bottom Sheet
- Wallet
- Project
- Receipt
- Mark as Draft
- Mark as Incognito
- [Cancel][Confirm]
 */
