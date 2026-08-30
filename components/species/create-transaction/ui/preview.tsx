import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
//
import { Spacing } from "@/components/atoms/spacing";
import { AppButton, ButtonGroup } from "@/components/atoms/forms/ui/app-button";
import { LabelledSwitchV2 } from "@/components/atoms/forms/ui/labelled-switch-v2";
import { ModalContainer } from "@/components/atoms/modal-container";
import {
  PreviewList,
  PreviewListData,
} from "@/components/atoms/list/preview-list";
import { flexStyles } from "@/styles/flex-styles";
import { COLOR } from "@/constants/COLOR";
import { HYPHENS, NAIRA } from "@/constants";
import { TRANSACTION_TYPE_MAP } from "@/services/transactions/types";
//
import { CreateTransactionFormSchema } from "../hook";
import { momentUtils } from "@/utils/moment-utils";
import { Hyperlink } from "@/components/atoms/hyperlink";

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
  const data: PreviewListData[] = [
    {
      label: "Transaction Type",
      value: formData.typeText || HYPHENS,
    },
    {
      label: "Contact Name",
      value: formData.contactIdText || HYPHENS,
    },
    {
      label: "Amount",
      value: formData.amount
        ? `${NAIRA} ${Number(formData.amount).toLocaleString()}`
        : HYPHENS,
      valueColor:
        formData.type === TRANSACTION_TYPE_MAP.Debit
          ? COLOR.danger
          : COLOR.primary,
    },
    {
      label: "Narration",
      value: formData.narration || HYPHENS,
    },
    {
      label: "Categories",
      value: formData.categoryIdsText?.join(", ") || HYPHENS,
    },
    {
      label: "Transaction Date",
      value: formData.entryDate
        ? momentUtils.dateStd(formData.entryDate)
        : HYPHENS,
    },
    {
      label: "Wallet",
      value: formData.walletIdText || HYPHENS,
    },
    {
      label: "Project",
      value: formData.projectIdText || HYPHENS,
    },
  ];

  return (
    <ModalContainer open={open} onClose={onClose} bottomSheet>
      <PreviewList
        title="Transaction details"
        rightSection={
          <AppButton variant="solid" asBadge>
            Save as draft
          </AppButton>
        }
        data={data}
      />
      <View style={{ paddingHorizontal: 16, gap: 12 }}>
        <Hyperlink text="Attach receipt" withIcon/>
        <LabelledSwitchV2
          label="Mark as incognito"
          value={formData.isIncognito}
          onChange={(isIncognito) => mutateFormData({ isIncognito })}
        />
        <Spacing />
        <ButtonGroup>
          <AppButton variant="outline" onClick={onClose}>
            Back
          </AppButton>
          <AppButton variant="success">Confirm</AppButton>
        </ButtonGroup>
      </View>
    </ModalContainer>
  );
};
