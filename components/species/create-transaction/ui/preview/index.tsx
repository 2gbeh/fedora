import { AppButton } from "@/components/atoms/forms/ui/app-button";
import { ListSelector } from "@/components/atoms/forms/ui/list-selector";
import { FileSelector } from "@/components/atoms/forms/ui/file-selector";
import { ModalContainer } from "@/components/atoms/modal-container";
//
import { useCreateTransactionPreview } from "./hook";

export const CreateTransactionPreview = () => {
  const { seedWallets, seedProjects } = useCreateTransactionPreview();

  return (
    <ModalContainer bottomSheet show={true}>
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
      <FileSelector label="Receipt" placeholder="Attach receipt" large />
      <AppButton>Save</AppButton>
    </ModalContainer>
  );
};
