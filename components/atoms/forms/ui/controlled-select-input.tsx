import { Controller, FieldValues } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/shadcn/ui/field";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/shadcn/ui/select";
//
import { ControlledLabel } from "./controlled-label";
import { ControlledInputProps } from "../types";

export const ControlledSelectInput = <T extends FieldValues>({
  control,
  name,
  label,
  options = [],
  placeholder = "Choose one",
  required,
}: Omit<ControlledInputProps<T>, "type" | "datalist">) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className="gap-2">
          <ControlledLabel name={name} required={required}>
            {label}
          </ControlledLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger id={name} className="@4xl/main:hidden flex w-fit">
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
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
