import { SelectInput } from "../atoms/forms/ui/select-input";
import { selectorUtil } from "@/utils/selector-util";
import { TransactionCategoryEnum } from "@/types/transaction-types";

const mockOptions = selectorUtil.fromEnum(TransactionCategoryEnum);

interface Props {
  onChange?: (value: string) => void;
}

export const FilterByCategory = ({ onChange }: Props) => {
  return (
    <SelectInput
      options={mockOptions}
      defaultValue="UTILITIES"
      placeholder="Category"
    />
  );
};
