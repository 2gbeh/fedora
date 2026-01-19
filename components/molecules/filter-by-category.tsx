import { SelectInput } from "../atoms/forms/ui/select-input";
import { selectorUtil } from "@/utils/selector-util";
import { TransactionCategoryEnum } from "@/types/transaction-types";

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
