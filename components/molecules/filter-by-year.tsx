import { SelectInput } from "../atoms/forms/ui/select-input";
import { selectorUtil } from "@/utils/selector-util";

const mockOptions = selectorUtil.fromList([2021, 2022, 2023, 2024, 2025, 2026]);

interface Props {
  onChange?: (value: string) => void;
}

export const FilterByYear = ({ onChange }: Props) => {
  return (
    <SelectInput
      options={[{ value: "All", label: "All" }, ...mockOptions]}
      defaultValue="2025"
      placeholder="Year"
    />
  );
};
