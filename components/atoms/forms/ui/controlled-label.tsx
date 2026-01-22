import { FieldLabel } from "@/components/shadcn/ui/field";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  name: string;
  required?: boolean;
}

export const ControlledLabel = ({ children, name, required }: Props) => {
  return (
    <FieldLabel htmlFor={name}>
      {children}
      {required && <span className="text-rose-600">*</span>}
    </FieldLabel>
  );
};
