import { SelectInput } from "@/components/atoms/forms/ui/select-input";
import { TransactionFieldEnum } from "@/types/enums/transaction-enum";
import { selectorUtil } from "@/utils/selector-util";

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
