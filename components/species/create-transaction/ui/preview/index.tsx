import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// 
import { Spacing } from "@/components/atoms/spacing";
import { AppButton, ButtonGroup } from "@/components/atoms/forms/ui/app-button";
import { LabelledSwitchV2 } from "@/components/atoms/forms/ui/labelled-switch-v2";
import { ModalContainer } from "@/components/atoms/modal-container";
import { PreviewList } from "@/components/atoms/list/preview-list";
import { flexStyles } from "@/styles/flex-styles";
//
import { CreateTransactionFormSchema } from "../../hook";
import { useCreateTransactionPreview } from "./hook";
import { COLOR } from "@/constants/COLOR";
import { NAIRA } from "@/constants";

interface Props {
  formData: CreateTransactionFormSchema;
  mutateFormData: (formData: Partial<CreateTransactionFormSchema>) => void;
  open?: boolean;
  onClose?: () => void;
}

const renderGetDirection = (
  <View style={{ ...flexStyles.rowCenter, gap: 4 }}>
    <Text>Attach receipt</Text>
    <MaterialIcons name="link" color={COLOR.link} size={18} />
  </View>
);

export const CreateTransactionPreview = ({
  formData,
  mutateFormData,
  open,
  onClose,
}: Props) => {
  const {  } = useCreateTransactionPreview();

  const data = [
    {
      label: "Pyjamas Bonnet (SK)",
      value: `-${NAIRA} 15,000`,
      color: COLOR.success,
    },
    {
      label: "Payment date",
      value: `Dec 14, 2024 | 10:01:16 am`,
    },
    {
      icon: "lock-clock",
      label: "Thursday - January 2, 2025",
      color: COLOR.primary,
    },
    {
      icon: "place",
      iconColor: COLOR.danger,
      label: "Mushin/Atewolara, Lagos",
      color: COLOR.primary,
      // label: ", 102215 Notes: 2 floor house with white fence",
    },
    {
      color: COLOR.link,
      label: renderGetDirection,
    },
  ];

  return (
    <ModalContainer open={open} bottomSheet>
      <PreviewList
        title="Transaction details"
        rightSection={
          <AppButton variant="warning" asBadge>
            Need confirmation
          </AppButton>
        }
        data={data}
      />
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
