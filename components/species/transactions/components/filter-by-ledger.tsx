import { SelectInput } from "@/components/atoms/forms/ui/select-input";
import { selectorUtil } from "@/utils/selector-util";
import { LedgerNameEnum } from "@/types/enums/ledger-enum";

const mockOptions = selectorUtil.fromEnum(LedgerNameEnum);

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
