import { PropsWithChildren } from "react";
// 
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";

interface Props extends PropsWithChildren {
  submitting?: boolean;
}

export const SubmitButton = ({ children, submitting }: Props) => {
  return (
    <Button>
      {submitting && <Spinner />}
      {children}
    </Button>
  );
};
