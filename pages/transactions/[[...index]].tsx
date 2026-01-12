import { useState } from "react";
// 
import { DashboardLayout } from "@/components/species/dashboard/ui/dashboard-layout";
import { DataTable } from "@/components/species/transactions/ui/data-table";
import data from "@/components/species/dashboard/data.json";
import { CreateTransactionOffcanvas } from "@/components/species/transactions/ui/create-transaction-offcanvas";

export default function TransactionsPage() {
  const [open, setOpen] = useState(false);
  return (
    <DashboardLayout
      pageTitle="Transactions"
      pageDisplayTitle="Transactions"
      breadcrumbs={[{ label: "Default Ledger" }]}
    >
      <DataTable data={data} onCreate={() => setOpen(true)} />
      <CreateTransactionOffcanvas open={open} onClose={() => setOpen(false)} />
    </DashboardLayout>
  );
}
