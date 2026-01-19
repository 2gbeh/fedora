import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { ChartCandlestickIcon } from "lucide-react";
//
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { ActionButton } from "@/components/atoms/buttons/action-button";
import { SkeletonUI } from "@/components/atoms/skeleton-ui";
import { FilterByLedger } from "@/components/molecules/filter-by-ledger";
import { FilterByYear } from "@/components/molecules/filter-by-year";
import { PATH } from "@/constants/PATH";
//
import { KpiCards } from "@/components/species/dashboard/components/kpi-cards";

const LazyIncomeExpenseChart = dynamic(
  () =>
    import("@/components/species/dashboard/components/income-expense-chart").then(
      (mod) => mod.IncomeExpenseChart,
    ),
  {
    loading: () => <SkeletonUI.Card />,
    ssr: false,
  },
);

const LazyRecentTransactionsTable = dynamic(
  () =>
    import("@/components/species/dashboard/components/recent-transactions-table").then(
      (mod) => mod.RecentTransactionsTable,
    ),
  {
    loading: () => <SkeletonUI.Card />,
    ssr: false,
  },
);

export default function DashboardPage() {
  const router = useRouter();
  //
  return (
    <DashboardLayout
      pageTitle="Dashboard"
      pageDisplayTitle="Dashboard"
      breadcrumbs={[{ label: "Default Ledger" }, { label: "Year 2025" }]}
      rightSection={
        <>
          <FilterByLedger />
          <FilterByYear />
          <ActionButton
            onClick={() => router.push(PATH.reports)}
            LeftIcon={ChartCandlestickIcon}
            label="Generate Report"
          />
        </>
      }
    >
      <KpiCards />
      {/* <LazyIncomeExpenseChart /> */}
      <LazyRecentTransactionsTable />
    </DashboardLayout>
  );
}
