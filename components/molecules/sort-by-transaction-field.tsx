import { SelectInput } from "../atoms/forms/ui/select-input";
import { selectorUtil } from "@/utils/selector-util";
import { TransactionFieldEnum } from "@/types/transaction-types";

const mockOptions = selectorUtil.fromEnum(TransactionFieldEnum);

interface Props {
  withLabel?: boolean;
  onChange?: (value: string) => void;
}

export const SortByTransactionField = ({ withLabel, onChange }: Props) => {
  return (
    <SelectInput
      name="sort"
      label={withLabel ? "Sort by :" : undefined}
      options={mockOptions}
      defaultValue="DATE"
      placeholder="Sort"
    />
  );
};
