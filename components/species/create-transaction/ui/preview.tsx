import { View } from "react-native";
import { Spacing } from "@/components/atoms/spacing";
import { AppButton, ButtonGroup } from "@/components/atoms/forms/ui/app-button";
import { Hyperlink } from "@/components/atoms/hyperlink";
import { LabelledSwitchV2 } from "@/components/atoms/forms/ui/labelled-switch-v2";
import { ModalContainer } from "@/components/atoms/modal-container";
import {
  PreviewList,
  PreviewListData,
} from "@/components/atoms/list/preview-list";
import { momentUtils } from "@/utils/moment-utils";
import { TRANSACTION_TYPE_MAP } from "@/services/transactions/types";
import { COLOR } from "@/constants/COLOR";
import { HYPHENS, NAIRA } from "@/constants";
//
import { CreateTransactionFormSchema } from "../hook";

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
      icon: "switch-left",
      label: "Transaction Type",
      value: formData.typeText || HYPHENS,
    },
    {
      icon: "person",
      label: "Contact Name",
      value: formData.contactIdText || HYPHENS,
    },
    {
      icon: "payments",
      label: "Amount",
      value: formData.amount
        ? `${NAIRA} ${Number(formData.amount).toLocaleString()}`
        : HYPHENS,
      valueColor:
        formData.type === TRANSACTION_TYPE_MAP.Debit
          ? COLOR.danger
          : COLOR.success,
    },
    {
      icon: "chat",
      label: "Narration",
      value: formData.narration || HYPHENS,
    },
    {
      icon: "sell",
      label: "Categories",
      value: formData.categoryIdsText?.join(", ") || HYPHENS,
    },
    {
      icon: "today",
      label: "Transaction Date",
      value: formData.entryDate
        ? momentUtils.dateStd(formData.entryDate)
        : HYPHENS,
    },
    {
      icon: "account-balance",
      label: "Wallet",
      value: formData.walletIdText || HYPHENS,
    },
    {
      icon: "category",
      label: "Project",
      value: formData.projectIdText || HYPHENS,
    },
  ];

  return (
    <ModalContainer open={open} onClose={onClose} bottomSheet>
      <PreviewList
        title="Transaction details"
        headerRight={
          <AppButton variant="info" asBadge>
            Save as draft
          </AppButton>
        }
        data={data}
      />
      <View style={{ paddingHorizontal: 16, gap: 12 }}>
        <Hyperlink text="Attach Receipt" withIcon />
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
