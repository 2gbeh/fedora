import { AreaChart } from "@/components/atoms/charts/area-chart";
import { FilterByInterval } from "@/components/molecules/filter-by-interval";
import data from "./data.json";

export const IncomeExpenseChart = () => {
  return (
    <AreaChart
      header={{
        title: "Income & Expense Summary",
        subtitle: "Sun, Jan 11th - Sat, Jan 17th, 2026",
        rightSection: <FilterByInterval />,
      }}
      config={{
        Income: "hsl(var(--chart-2))",
        Expense: "hsl(var(--chart-1))",
      }}
      data={data}
    />
  );
};