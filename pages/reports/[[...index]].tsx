import { useRouter } from "next/router";
import { ChartLineIcon } from "lucide-react";
//
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { ActionButton } from "@/components/atoms/buttons/action-button";
import { ClusteredColumnChart } from "@/components/atoms/charts/clustered-column-chart";
import { KpiCards } from "@/components/species/dashboard/components/kpi-cards";
import { IncomeExpenseChart } from "@/components/species/dashboard/components/income-expense-chart";
import { FilterByYear } from "@/components/species/transactions/components/filter-by-year";
import { PATH } from "@/constants/PATH";
//
import { KpiCards as ReportsKpiCards } from "@/components/species/reports/components/kpi-cards";

export default function ReportsPage() {
  const router = useRouter();

  return (
    <DashboardLayout
      pageTitle="Reports"
      pageDisplayTitle="Reports"
      breadcrumbs={[{ label: "Annual Summary" }, { label: "Year 2025" }]}
      rightSection={
        <>
          <FilterByYear />
          <ActionButton
            // variant="secondary"
            onClick={() => router.push(PATH.dashboard)}
            LeftIcon={ChartLineIcon}
            label="Dashboard"
          />
        </>
      }
    >
      <Tabs defaultValue="account">
        <TabsList className="mb-2.5 justify-start text-foreground">
          <TabsTrigger value="account" className="!bg-white">
            Annual Summary
          </TabsTrigger>
          <TabsTrigger value="password">Lifetime Summary</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="grid gap-4 lg:gap-6">
          <KpiCards />
          <IncomeExpenseChart />
        </TabsContent>
        <TabsContent value="password" className="grid gap-4 lg:gap-6">
          <ReportsKpiCards />
          <ClusteredColumnChart />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
