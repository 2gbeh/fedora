import { useRouter } from "next/router";
import { ArrowUpRightIcon, ChartCandlestickIcon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { FilterByLedger } from "@/components/molecules/filter-by-ledger";
import { FilterByYear } from "@/components/molecules/filter-by-year";
import { ActionButton } from "@/components/atoms/buttons/action-button";
import { PATH } from "@/constants/PATH";
// 
import { SectionCards } from "@/components/species/dashboard/ui/section-cards";
import { ChartAreaInteractive } from "@/components/species/dashboard/ui/chart-area-interactive";
import { DataTable } from "@/components/species/dashboard/ui/data-table";
import data from "@/components/species/dashboard/data.json";

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
      <SectionCards />
      <div className="flex flex-col gap-6 px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <div className="grid gap-2">
        <div className="flex-center-between px-6">
          <h1 className="font-semibold leading-none tracking-tight">
            Recent Transactions
          </h1>
          <Button size="sm" onClick={() => router.push(PATH.transactions)}>
            <span className="hidden lg:inline">View All</span>
            <ArrowUpRightIcon />
          </Button>
        </div>
        <DataTable data={data} />
      </div>
    </DashboardLayout>
  );
}
