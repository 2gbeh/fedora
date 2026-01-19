import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { KpiCardContainer, KpiCard } from "@/components/atoms/charts/kpi-card";
import { MoneyHelper } from "@/utils/helpers/money-helper";

export const KpiCards = () => {
  const money = new MoneyHelper({ isPrototyping: false });
  //
  return (
    <KpiCardContainer>
      <KpiCard
        label="Annual Income"
        value={money.toNGN(9600000)}
        badge={{
          value: "+1.5%",
          variant: "success",
          Icon: TrendingUpIcon,
        }}
        meta={{
          label: "Average monthly income",
          value: money.toNGN(800000),
        }}
      />
      <KpiCard
        label="Annual Expense"
        value={money.toNGN(6600000)}
        badge={{
          value: "-0.9%",
          variant: "danger",
          Icon: TrendingDownIcon,
        }}
        meta={{
          label: "Average monthly expense",
          value: money.toNGN(550000),
        }}
      />
      <KpiCard
        label="Monthly Income"
        value={money.toNGN(800000)}
        badge={{
          value: "+1.9%",
          variant: "success",
          Icon: TrendingUpIcon,
        }}
        meta={{
          label: "Average hourly rate",
          value: `${money.toNGN(5000)} (~${money.toUSD(5000)})`,
        }}
      />
      <KpiCard
        label="Monthly Expense"
        value={money.toNGN(480000)}
        badge={{
          value: "+9.2%",
          variant: "success",
          Icon: TrendingUpIcon,
        }}
        meta={{
          label: "Actual vs. Unplanned",
          value: (
            <div className="flex-center-start gap-2">
              <span className="text-indigo-600">{money.toNGN(455000)}</span>
              <span className="text-amber-600">{money.format(25000)}</span>
            </div>
          ),
        }}
      />
    </KpiCardContainer>
  );
};
