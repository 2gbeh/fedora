import {
  Area,
  AreaChart as RechartsAreaChat,
  CartesianGrid,
  XAxis,
} from "recharts";
//
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/shadcn/ui/chart";
import { chartUtil } from "@/utils/chart-util";

/**
#data {
  "2026-01-18": [
    { label: "Income", value: 200000 },
    { label: "Expense", value: 137500 },
  ], ...
}

#transformedData [
  {
    "dataKey": "2026-01-18",
    "Income": 200000,
    "Expense": 137500
  }, ...
]
 */

type ChartData = Record<string, string | number>;

interface Props {
  header?: {
    title: string;
    subtitle?: string;
    rightSection?: React.ReactNode;
  };
  config: Record<string, string>;
  data: Record<
    string,
    {
      label: string;
      value: number;
    }[]
  >;
}

export function AreaChart({ header, config, data }: Props) {
  const transformedConfig: ChartConfig = {};
  const transformedData: ChartData[] = [];

  Object.entries(config).forEach(
    ([label, color]) => (transformedConfig[label] = { label, color }),
  );

  Object.entries(data).forEach(([dataKey, items], i) => {
    const item: ChartData = { dataKey };
    items.forEach(({ label, value }) => (item[label] = value));
    transformedData.push(item);
  });
  //
  return (
    <Card className="@container/card">
      {renderChartHeader(header)}
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={transformedConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <RechartsAreaChat data={transformedData}>
            <defs>
              {Object.keys(config).map((label, i) => {
                const id = `fillArea${i + 1}`;
                const stopColor = `var(--color-${label})`;
                //
                return (
                  <linearGradient key={id} id={id} x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={stopColor}
                      stopOpacity={i < 1 ? 1.0 : 0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={stopColor}
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                );
              })}
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="dataKey"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={chartUtil.formatDate}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={chartUtil.formatDate}
                  indicator="dot"
                />
              }
            />
            {Object.keys(config).map((label, i) => {
              const fill = `url(#fillArea${i + 1})`;
              const stroke = `var(--color-${label})`;
              //
              return (
                <Area
                  key={label}
                  dataKey={label}
                  type="natural"
                  fill={fill}
                  stroke={stroke}
                  stackId="a"
                />
              );
            })}
          </RechartsAreaChat>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const renderChartHeader = (header: Props["header"]) =>
  header ? (
    <CardHeader className="flex flex-row items-center justify-between">
      <div className="grid gap-1">
        <CardTitle>{header.title}</CardTitle>
        {header.subtitle ? (
          <CardDescription>{header.subtitle}</CardDescription>
        ) : null}
      </div>
      <div>{header.rightSection}</div>
    </CardHeader>
  ) : null;
