import { useRouter } from "next/router";
import { ChartCandlestickIcon } from "lucide-react";
//
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { FilterByLedger } from "@/components/molecules/filter-by-ledger";
import { FilterByYear } from "@/components/molecules/filter-by-year";
import { ActionButton } from "@/components/atoms/buttons/action-button";
import { PATH } from "@/constants/PATH";
//
import { KpiCards } from "@/components/species/dashboard/components/kpi-cards";
import { IncomeExpenseChart } from "@/components/species/dashboard/components/income-expense-chart";
import { RecentTransactionsTable } from "@/components/species/dashboard/components/recent-transactions-table";

export default function DashboardPage() {
  const router = useRouter();

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
      <IncomeExpenseChart />
      <RecentTransactionsTable />
    </DashboardLayout>
  );
}
