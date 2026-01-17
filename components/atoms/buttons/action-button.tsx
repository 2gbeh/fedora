import { type LucideIcon } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";

interface Props {
  label: string;
  onClick?: () => void;
  LeftIcon?: LucideIcon;
  RightIcon?: LucideIcon;
}

export const ActionButton = ({
  label,
  onClick,
  LeftIcon,
  RightIcon,
}: Props) => {
  return (
    <Button type="button" size="sm" onClick={onClick} title={label}>
      {LeftIcon ? <LeftIcon /> : null}
      <span className="hidden lg:inline">{label}</span>
      {RightIcon ? <RightIcon /> : null}
    </Button>
  );
};
