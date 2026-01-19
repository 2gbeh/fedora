import { Label } from "@/components/shadcn/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/shadcn/ui/select";
import { OptionType } from "@/types/common-types";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  options?: OptionType[];
  defaultValue?: string;
}

export const SelectInput = ({
  label,
  name,
  options = [],
  defaultValue,
  placeholder = "",
}: Props) => {
  return (
    <div className="flex-center-start gap-2">
      {label ? (
        <Label htmlFor={name} className="font-medium">
          {label}
        </Label>
      ) : null}
      <Select defaultValue={defaultValue}>
        <SelectTrigger
          className="@4xl/main:hidden flex w-fit"
          id={name}
        >
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
    </div>
  );
};
