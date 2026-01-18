import { Calendar1Icon } from "lucide-react";
import { KpiCardContainer, KpiCard } from "@/components/atoms/charts/kpi-card";
import { MoneyHelper } from "@/utils/helpers/money-helper";

export const KpiCards = () => {
  const money = new MoneyHelper({ isPrototyping: false });
  //
  return (
    <KpiCardContainer>
      {[2026, 2025, 2024, 2023, 2022, 2021].map((value) => (
        <KpiCard
          key={value}
          label="Annual Income"
          value={money.toNGN(9600000)}
          badge={{
            value,
            variant: "danger",
            Icon: Calendar1Icon,
          }}
          meta={{
            label: "Projected Annual Income",
            value: money.toNGN(12000000),
          }}
        />
      ))}
    </KpiCardContainer>
  );
};
