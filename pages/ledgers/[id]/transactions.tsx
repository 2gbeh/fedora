import { useState } from "react";
import { PlusIcon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { TransactionsTable } from "@/components/species/transactions/ui/transactions-table";
//
import { DashboardLayout } from "@/components/species/dashboard/ui/dashboard-layout";
import { LedgersTable } from "@/components/species/ledgers/ui/ledgers-table";
import { CreateLedgerModal } from "@/components/species/ledgers/ui/create-ledger-modal";
import data from "@/components/species/dashboard/data.json";
import { PATH } from "@/constants/PATH";

export default function LedgerTransactionsPage() {
  const [open, setOpen] = useState(false);
  return (
    <DashboardLayout
      pageTitle="Ledger Transactions"
      pageDisplayTitle="Ledger"
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
      <section className="grid grid-cols-2 gap-0 px-6">
        <div>
          <h1>Name: House Project (public)</h1>
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
      <CreateLedgerModal open={open} onClose={() => setOpen(false)} />
    </DashboardLayout>
  );
}
