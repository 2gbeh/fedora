import { useState } from "react";
import { PlusIcon } from "lucide-react";

//
import { Button } from "@/components/shadcn/ui/button";

//
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { TransactionsTable } from "@/components/species/transactions/ui/transactions-table";
import { CreateTransactionOffcanvas } from "@/components/species/transactions/ui/create-transaction-offcanvas";
import data from "@/components/species/dashboard/data.json";

export default function TransactionsPage() {
  const [open, setOpen] = useState(false);
  return (
    <DashboardLayout
      pageTitle="Transactions"
      pageDisplayTitle="Transactions"
      breadcrumbs={[{ label: "Default Ledger" }]}
      rightSection={
        <Button size="sm" onClick={() => setOpen(true)}>
          <PlusIcon />
          <span className="hidden lg:inline">Add New</span>
        </Button>
      }
    >
      <TransactionsTable data={data} />
      <CreateTransactionOffcanvas open={open} onClose={() => setOpen(false)} />
    </DashboardLayout>
  );
}
