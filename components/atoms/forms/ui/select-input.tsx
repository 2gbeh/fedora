import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/shadcn/ui/select";
import { OptionType } from "@/types/common-types";

interface Props {
  options?: OptionType[];
  defaultValue?: string;
  placeholder?: string;
}

export const SelectInput = ({
  options = [],
  defaultValue,
  placeholder = "",
}: Props) => {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger className="@4xl/main:hidden flex w-fit" id="view-selector">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
