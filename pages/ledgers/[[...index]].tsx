import { DashboardLayout } from "@/components/species/dashboard/ui/dashboard-layout";
import { SectionCards } from "@/components/species/dashboard/ui/section-cards";
import { ChartAreaInteractive } from "@/components/species/dashboard/ui/chart-area-interactive";
import { DataTable } from "@/components/species/dashboard/ui/data-table";
import data from "@/components/species/dashboard/data.json";

export default function LedgersPage() {
  return (
    <DashboardLayout
      pageTitle="Ledgers"
      pageDisplayTitle="Ledgers"
      breadcrumbs={[
        { label: "Building Your Application", path: "/dashboard" },
        { label: "Data Fetching" },
      ]}
    >
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </DashboardLayout>
  );
}
