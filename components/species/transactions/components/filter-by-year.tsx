import { SelectInput } from "@/components/atoms/forms/ui/select-input";
import { selectorUtil } from "@/utils/selector-util";

const mockOptions = selectorUtil.fromList([2021, 2022, 2023, 2024, 2025, 2026]);

interface Props {
  withLabel?: boolean;
  onChange?: (value: string) => void;
}

export const FilterByYear = ({ withLabel, onChange }: Props) => {
  return (
    <SelectInput
      name="year"
      label={withLabel ? "Year :" : undefined}
      options={[{ value: "All", label: "All" }, ...mockOptions]}
      defaultValue="2025"
      placeholder="Year"
    />
  );
};
