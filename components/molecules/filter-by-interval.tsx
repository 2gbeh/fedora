import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/shadcn/ui/toggle-group";

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const data = [
  { value: "this-week", label: "This Week" },
  { value: "this-month", label: "This Month" },
  { value: "this-year", label: "This Year" },
];

export const FilterByInterval = ({
  value = "this-week",
  onChange = () => undefined,
  placeholder = "Interval",
}: Props) => {
  return (
    <>
      <ToggleGroup
        variant="outline"
        type="single"
        value={value}
        onValueChange={onChange}
        className="hidden gap-2 md:flex"
      >
        {data.map(({ label, value }, i) => (
          <ToggleGroupItem
            key={i}
            value={value}
            className="h-8 px-2.5 font-normal"
          >
            {label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="flex w-40 md:hidden" aria-label={placeholder}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="rounded-xl">
          {data.map(({ label, value }, i) => (
            <SelectItem key={i} value={value} className="rounded-lg">
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
