import { SelectInput } from "../atoms/forms/ui/select-input";
import { selectorUtil } from "@/utils/selector-util";
import { TransactionFieldEnum } from "@/types/transaction-types";

const mockOptions = selectorUtil.fromEnum(TransactionFieldEnum);

interface Props {
  onChange?: (value: string) => void;
}

export const SortByTransactionField = ({ onChange }: Props) => {
  return (
    <SelectInput
      options={mockOptions}
      defaultValue="DATE"
      placeholder="Sort"
    />
  );
};
