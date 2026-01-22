import { Controller, FieldValues } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
//
import { ControlledLabel } from "./controlled-label";
import { ControlledInputProps } from "../types";

export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  placeholder,
  required,
  datalist,
}: ControlledInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className="gap-2">
          <ControlledLabel name={name} required={required}>
            {label}
          </ControlledLabel>
          {datalist ? (
            <>
              <Input
                {...field}
                type={type}
                id={name}
                placeholder={placeholder}
                list={`${name}-list`}
              />
              <datalist id={`${name}-list`}>
                {datalist.map((value) => (
                  <option key={value} value={value} />
                ))}
              </datalist>
            </>
          ) : (
            <Input {...field} type={type} id={name} placeholder={placeholder} />
          )}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
