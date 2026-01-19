import { AreaChart } from "@/components/atoms/charts/area-chart";
import { FilterByTimePeriod } from "@/components/molecules/filter-by-time-period";
import data from "@/data/fake-transactions-weekly.json";

export const IncomeExpenseChart = () => {
  return (
    <AreaChart
      header={{
        title: "Income & Expense Summary",
        subtitle: "Sun, Jan 11th - Sat, Jan 17th, 2026",
        rightSection: <FilterByTimePeriod />,
      }}
      config={{
        Income: "hsl(var(--chart-2))",
        Expense: "hsl(var(--chart-1))",
      }}
      data={data}
    />
  );
};
