import { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react";
// 
import { Field, FieldError, FieldLabel } from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
//
import { ControlledInputProps } from "../types";

interface Props<T extends FieldValues> extends ControlledInputProps<T> {
  labelRightSection?: React.ReactNode;
}

export const ControlledPasswordInput = <T extends FieldValues>({
  control,
  name,
  label,
  labelRightSection,
  placeholder = "**** ****",
}: Props<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);
// 
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className="gap-2">
          <div className="flex-center-between">
            <FieldLabel htmlFor={name}>{label}</FieldLabel>
            {labelRightSection}
          </div>
          <div className="relative">
            <Input
              {...field}
              type={showPassword ? "text" : "password"}
              id={name}
              placeholder={placeholder}
            />
            <button
              type="button"
              className="absolute right-3 top-2.5 cursor-pointer text-muted-foreground"
              onClick={toggleShowPassword}
            >
              {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
            </button>
          </div>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};