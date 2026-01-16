import { Controller, FieldValues } from "react-hook-form";
// 
import { Field, FieldError, FieldLabel } from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
//
import { ControlledInputProps } from "../types";

export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  placeholder,
}: ControlledInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className="gap-2">
          <FieldLabel htmlFor={name}>{label}</FieldLabel>
          <Input {...field} type={type} id={name} placeholder={placeholder} />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
