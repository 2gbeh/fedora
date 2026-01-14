import { useState } from "react";
import { useRouter } from "next/router";
import {
  ArrowUpRightIcon,
  ChartCandlestickIcon,
  ChartLineIcon,
  Router,
} from "lucide-react";
//
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/shadcn/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import { Button } from "@/components/shadcn/ui/button";
import { PATH } from "@/constants/PATH";
//
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { SectionCards } from "@/components/species/dashboard/ui/section-cards";
import { SectionCards as SectionCards2 } from "@/components/species/reports/ui/section-cards";
import { ChartAreaInteractive } from "@/components/species/dashboard/ui/chart-area-interactive";
import { DataTable } from "@/components/species/dashboard/ui/data-table";
import data from "@/components/species/dashboard/data.json";
import { ChartBarClusteredColumn } from "@/components/species/dashboard/ui/chart-clustered-column";

export default function ReportsPage() {
  const router = useRouter();
  const [timeRange, setTimeRange] = useState("30d");

  return (
    <DashboardLayout
      pageTitle="Reports"
      pageDisplayTitle="Reports"
      breadcrumbs={[{ label: "Annual Summary" }, { label: "Year 2025" }]}
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
              <SelectItem value="0d" className="rounded-lg">
                All
              </SelectItem>
              <SelectItem value="1d" className="rounded-lg">
                2021
              </SelectItem>
              <SelectItem value="2d" className="rounded-lg">
                2022
              </SelectItem>
              <SelectItem value="3d" className="rounded-lg">
                2023
              </SelectItem>
              <SelectItem value="90d" className="rounded-lg">
                2024
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                2025
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                2026
              </SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant={"secondary"}
            size="sm"
            onClick={() => router.push(PATH.dashboard)}
          >
            <ChartLineIcon />
            <span className="hidden lg:inline">Dashboard</span>
          </Button>
        </div>
      }
    >
      <div className="px-6">
        <Tabs
          defaultValue="account"
          className="flex flex-col justify-start gap-4"
        >
          <TabsList className="justify-start text-foreground">
            <TabsTrigger value="account" className="!bg-white">
              Annual Summary
            </TabsTrigger>
            <TabsTrigger value="password">Lifetime Summary</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <SectionCards />
            <div className="_px-4 _lg:px-6 flex flex-col gap-6">
              <ChartAreaInteractive />
            </div>
          </TabsContent>
          <TabsContent value="password">
            <SectionCards2 />
            <div className="_px-4 _lg:px-6 flex flex-col gap-6">
              <ChartBarClusteredColumn />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
