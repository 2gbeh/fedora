import { Spacing } from "@/components/atoms/spacing";
import { AppButton, ButtonGroup } from "@/components/atoms/forms/ui/app-button";
import { ListSelector } from "@/components/atoms/forms/ui/list-selector";
import { FileSelector } from "@/components/atoms/forms/ui/file-selector";
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
  const { walletsList, projectsList } = useCreateTransactionPreview();

  return (
    <ModalContainer open={open} bottomSheet>
      <PreviewCard/>
      <ListSelector
        label="Wallet"
        placeholder="Select wallet"
        data={walletsList}
        value={formData.walletId}
        onChange={(walletId) => mutateFormData({ walletId })}
        loading={!walletsList}
        disabled={!walletsList}
      />
      <ListSelector
        label="Project"
        placeholder="Select project"
        data={projectsList}
        value={formData.projectId}
        onChange={(projectId) => mutateFormData({ projectId })}
        loading={!projectsList}
        disabled={!projectsList}
      />
      <FileSelector label="Receipt" placeholder="Attach receipt" />
      <LabelledSwitchV2
        label="Mark as draft"
        value={formData.isDraft}
        onChange={(isDraft) => mutateFormData({ isDraft })}
      />
      <LabelledSwitchV2
        label="Mark as incognito"
        value={formData.isIncognito}
        onChange={(isIncognito) => mutateFormData({ isIncognito })}
      />
      <Spacing />
      <ButtonGroup>
        <AppButton variant="outline">Back</AppButton>
        <AppButton variant="success">Confirm</AppButton>
      </ButtonGroup>
    </ModalContainer>
  );
};
