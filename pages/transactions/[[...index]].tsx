import { useState } from "react";
import { PlusIcon } from "lucide-react";
// 
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { ActionButton } from "@/components/atoms/buttons/action-button";
// 
import { TransactionsTable } from "@/components/species/transactions/ui/transactions-table";
import { CreateTransactionOffcanvas } from "@/components/species/transactions/ui/create-transaction-offcanvas";
import data from "@/data/fake-transactions.json";

export default function TransactionsPage() {
  const [open, setOpen] = useState(false);
  return (
    <DashboardLayout
      pageTitle="Transactions"
      pageDisplayTitle="Transactions"
      breadcrumbs={[{ label: "Default Ledger" }]}
      rightSection={
        <ActionButton
          onClick={() => setOpen(true)}
          LeftIcon={PlusIcon}
          label="Add New"
        />
      }
    >
      <TransactionsTable data={data} />
      <CreateTransactionOffcanvas open={open} onClose={() => setOpen(false)} />
    </DashboardLayout>
  );
}
