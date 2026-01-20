import { SelectInput } from "@/components/atoms/forms/ui/select-input";
import { TransactionCategoryEnum } from "@/types/enums/transaction-enum";
import { selectorUtil } from "@/utils/selector-util";

const mockOptions = selectorUtil.fromEnum(TransactionCategoryEnum);

interface Props {
  withLabel?: boolean;
  onChange?: (value: string) => void;
}

export const FilterByCategory = ({ withLabel, onChange }: Props) => {
  return (
    <SelectInput
      name="category"
      label={withLabel ? "Category :" : undefined}
      options={mockOptions}
      defaultValue="UTILITIES"
      placeholder="Category"
    />
  );
};
