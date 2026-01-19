import { useState } from "react";
import { PlusIcon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { TransactionsTable } from "@/components/species/transactions/components/transactions-table";
//
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { LedgersTable } from "@/components/species/ledgers/ui/ledgers-table";
import { CreateLedgerModal } from "@/components/species/ledgers/ui/create-ledger-modal";
import data from "@/components/species/dashboard/data.json";
import { PATH } from "@/constants/PATH";
import { CreateTransactionOffcanvas } from "@/components/species/transactions/components/create-transaction-offcanvas";

export default function LedgerTransactionsPage() {
  const [open, setOpen] = useState(false);
  return (
    <DashboardLayout
      pageTitle="Ledger Transactions"
      pageDisplayTitle="Ledgers"
      breadcrumbs={[
        { label: "Default", path: PATH.ledgers },
        { label: "Transactions" },
      ]}
      rightSection={
        <Button size="sm" onClick={() => setOpen(true)}>
          <PlusIcon />
          <span className="hidden lg:inline">Add New</span>
        </Button>
      }
    >
      <section className="grid grid-cols-3 gap-4 px-6">
        <div>
          <p>Name: House Project (public)</p>
          <p>Description: Ex. 27 Omoruyi Street, Benin City, 300102</p>
          <p>Start Date: 13/01/2026</p>
        </div>
        <div>
          <p>Total Income:</p>
          <p>Total Expense:</p>
          <p>Balance:</p>
        </div>
      </section>

      <TransactionsTable data={data} />
      <CreateTransactionOffcanvas open={open} onClose={() => setOpen(false)} />
    </DashboardLayout>
  );
}
