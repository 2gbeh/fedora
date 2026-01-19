import { useRouter } from "next/router";
import { ArrowUpRightIcon } from "lucide-react";
//
import { ActionButton } from "@/components/atoms/buttons/action-button";
import { TransactionsTable } from "@/components/molecules/transactions-table";
import { PATH } from "@/constants/PATH";
//
import data from "@/data/fake-transactions-page-1.json";

export const RecentTransactionsTable = () => {
  const router = useRouter();
  //
  return (
    <div className="grid gap-2.5">
      <div className="flex-center-between">
        <h1 className="font-semibold leading-none tracking-tight">
          Recent Transactions
        </h1>
        <ActionButton
          label="View All"
          onClick={() => router.push(PATH.transactions)}
          RightIcon={ArrowUpRightIcon}
        />
      </div>
      <TransactionsTable data={data} />
    </div>
  );
};
