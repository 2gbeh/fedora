import { DashboardLayout } from "@/components/species/dashboard/ui/dashboard-layout";
import { SectionCards } from "@/components/species/dashboard/ui/section-cards";
import { ChartAreaInteractive } from "@/components/species/dashboard/ui/chart-area-interactive";
import { DataTable } from "@/components/species/dashboard/ui/data-table";
import data from "@/components/species/dashboard/data.json";
import { SearchBar } from "@/components/species/dashboard/ui/search-bar";
import { Button } from "@/components/shadcn/ui/button";
import { PlusIcon } from "lucide-react";

export default function ProfilePage() {
  return (
    <DashboardLayout
      pageTitle="Profile"
      pageDisplayTitle="Profile"
      breadcrumbs={[
        { label: "Building Your Application", path: "/dashboard" },
        { label: "Data Fetching" },
      ]}
      rightSection={
        <>
          <SearchBar className="w-full sm:ml-auto sm:w-auto" />
          <Button variant="destructive" size="sm">
            <PlusIcon />
            <span className="hidden lg:inline">Add New</span>
          </Button>
        </>
      }
    >
      <SectionCards />
      <DataTable data={data} />
    </DashboardLayout>
  );
}
