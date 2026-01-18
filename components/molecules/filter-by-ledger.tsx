import { SelectInput } from "../atoms/forms/ui/select-input";
import { selectorUtil } from "@/utils/selector-util";
import { LedgerEnum } from "@/types/transaction-types";

const mockOptions = selectorUtil.fromEnum(LedgerEnum);

interface Props {
  onChange?: (value: string) => void;
}

export const FilterByLedger = ({ onChange }: Props) => {
  return (
    <SelectInput
      options={mockOptions}
      defaultValue="DEFAULT"
      placeholder="Ledger"
    />
  );
};
