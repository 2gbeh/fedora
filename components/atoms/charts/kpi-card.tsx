import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { Badge } from "@/components/shadcn/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";

interface BaseProps {
  label: string;
  value: string | React.ReactNode;
}

interface Props extends BaseProps {
  badge?: { value: string; negative?: boolean };
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
              className={`flex gap-1 rounded-lg text-xs ${badge.negative ? "text-rose-500" : "text-emerald-500"}`}
            >
              {badge.negative ? (
                <TrendingDownIcon className="size-3" />
              ) : (
                <TrendingUpIcon className="size-3" />
              )}
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
