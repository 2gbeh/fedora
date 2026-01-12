import { useState } from "react";
import { useRouter } from "next/router";
import { ArrowUpRightIcon, ChartCandlestickIcon, Router } from "lucide-react";
//
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/shadcn/ui/select";
import { Button } from "@/components/shadcn/ui/button";
import { PATH } from "@/constants/PATH";
//
import { DashboardLayout } from "@/components/species/dashboard/ui/dashboard-layout";
import { SectionCards } from "@/components/species/dashboard/ui/section-cards";
import { ChartAreaInteractive } from "@/components/species/dashboard/ui/chart-area-interactive";
import { DataTable } from "@/components/species/dashboard/ui/data-table";
import data from "@/components/species/dashboard/data.json";

export default function DashboardPage() {
  const router = useRouter();
  const [timeRange, setTimeRange] = useState("30d");

  return (
    <DashboardLayout
      pageTitle="Dashboard"
      pageDisplayTitle="Dashboard"
      breadcrumbs={[{ label: "Year 2025" }]}
      rightSection={
        <div className="flex-center-start gap-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="@[767px]/card:hidden _w-32 flex"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Year 2024
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Year 2025
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Year 2026
              </SelectItem>
            </SelectContent>
          </Select>
          <Button size="sm">
            <ChartCandlestickIcon />
            <span className="hidden lg:inline">Generate Report</span>
          </Button>
        </div>
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
