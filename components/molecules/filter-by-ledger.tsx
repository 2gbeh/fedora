import { SelectInput } from "../atoms/forms/ui/select-input";
import { selectorUtil } from "@/utils/selector-util";
import { LedgerEnum } from "@/types/transaction-types";

const mockOptions = selectorUtil.fromEnum(LedgerEnum);

interface Props {
  withLabel?: boolean;
  onChange?: (value: string) => void;
}

export const FilterByLedger = ({ withLabel, onChange }: Props) => {
  return (
    <SelectInput
      name="ledger"
      label={withLabel ? "Ledger :" : undefined}
      placeholder="Ledger"
      options={mockOptions}
      defaultValue="DEFAULT"
    />
  );
};
