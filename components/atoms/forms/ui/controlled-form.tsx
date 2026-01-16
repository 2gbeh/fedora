import { FormEventHandler, PropsWithChildren } from "react";
import { FieldGroup } from "@/components/shadcn/ui/field";

interface Props extends PropsWithChildren {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  disabled?: boolean;
}

export const ControlledForm = ({ children, onSubmit, disabled }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <fieldset disabled={disabled}>
        <FieldGroup>{children} </FieldGroup>
      </fieldset>
    </form>
  );
};
