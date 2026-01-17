import { useRouter } from "next/router";
import { ArrowUpRightIcon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { PATH } from "@/constants/PATH";
//
import { DataTable } from "../ui/data-table";
import data from "@/data/fake-transactions.json";

export const RecentTransactionsTable = () => {
  const router = useRouter();
  //
  return (
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
  );
};
