import { Control, FieldValues, Path } from "react-hook-form";
import { OptionType } from "@/types";

export interface ControlledInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  // 
  required?: boolean;
  options?: OptionType[];
  datalist?: string[];
}