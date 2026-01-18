import { PropsWithChildren } from "react";
import { type LucideIcon } from "lucide-react";
//
import { Badge } from "@/components/shadcn/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { ColorVariantType, colorUtil } from "@/utils/color-util";

interface BaseProps {
  label: string;
  value: React.ReactNode;
}

interface Props extends BaseProps {
  badge?: {
    value: React.ReactNode;
    variant?: ColorVariantType;
    Icon?: LucideIcon;
  };
  meta?: BaseProps;
}

export const KpiCard = ({ label, value, badge, meta }: Props) => {
  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardDescription>{label}</CardDescription>
        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
          {value}
        </CardTitle>
        {badge ? (
          <div className="absolute right-4 top-4">
            <Badge
              variant="outline"
              className={`flex gap-1 rounded-lg text-xs ${colorUtil.text(badge.variant)}`}
            >
              {badge.Icon ? <badge.Icon className="size-3" /> : null}
              {badge.value}
            </Badge>
          </div>
        ) : null}
      </CardHeader>
      {meta ? (
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 text-muted-foreground">
            {meta.label}
          </div>
          <div className="font-semibold">{meta.value}</div>
        </CardFooter>
      ) : null}
    </Card>
  );
};

export const KpiCardContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="*:data-[slot=card]:shadow-xs grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card md:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
};
