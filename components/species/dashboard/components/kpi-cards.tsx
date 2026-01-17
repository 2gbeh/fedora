import { KpiCard } from "@/components/atoms/charts/kpi-card";
import { MoneyHelper } from "@/utils/helpers/money-helper";

export const KpiCards = () => {
  const money = new MoneyHelper({
    // conversionRate: 1450,
    // isPrototyping: false,
  });
  //
  return (
    <div className="*:data-[slot=card]:shadow-xs grid grid-cols-1 gap-4 px-4 py-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card md:grid-cols-2 lg:grid-cols-4 lg:px-6">
      <KpiCard
        label="Annual Income"
        value={money.toNGN(9600000)}
        badge={{ value: "+1.5%", negative: false }}
        meta={{
          label: "Average monthly income",
          value: money.toNGN(800000),
        }}
      />
      <KpiCard
        label="Annual Expense"
        value={money.toNGN(6600000)}
        badge={{ value: "-0.9%", negative: true }}
        meta={{
          label: "Average monthly expense",
          value: money.toNGN(550000),
        }}
      />
      <KpiCard
        label="Monthly Income"
        value={money.toNGN(800000)}
        badge={{ value: "+1.9%", negative: false }}
        meta={{
          label: "Average hourly rate",
          value: `${money.toNGN(5000)} (~${money.toUSD(5000)})`,
        }}
      />
      <KpiCard
        label="Monthly Expense"
        value={money.toNGN(480000)}
        badge={{ value: "+9.2%", negative: false }}
        meta={{
          label: "Essential % Unplanned",
          value: `${money.toNGN(455000)} % ${money.toCSV(25000)}`,
        }}
      />
    </div>
  );
};
