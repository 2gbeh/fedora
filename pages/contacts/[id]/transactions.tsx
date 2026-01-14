import { useState } from "react";
import { PlusIcon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { TransactionsTable } from "@/components/species/transactions/ui/transactions-table";
//
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { LedgersTable } from "@/components/species/ledgers/ui/ledgers-table";
import { CreateLedgerModal } from "@/components/species/ledgers/ui/create-ledger-modal";
import data from "@/components/species/dashboard/data.json";
import { PATH } from "@/constants/PATH";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { CreateTransactionOffcanvas } from "@/components/species/transactions/ui/create-transaction-offcanvas";

export default function ContactTransactionsPage() {
  const [open, setOpen] = useState(false);
  const user = {
    name: "Aduwa Daam",
    email: "etugbeh@outlook.com",
    avatar: "https://github.com/shadcn.png",
  };

  return (
    <DashboardLayout
      pageTitle="Contact Transactions"
      pageDisplayTitle="Contacts"
      breadcrumbs={[
        { label: "Aduwa Daam", path: PATH.contacts },
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
        <div className="flex-center-start gap-4">
          <Avatar className="h-16 w-16 rounded-full">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="rounded-lg">AA</AvatarFallback>
          </Avatar>
          <div>
            <p>Name: Sunday Bike</p>
            <p>Phone No.: 09162443891 (copy)</p>
            <p>Mobile No.: n/A</p>
          </div>
        </div>
        <div>
          <p>Bank Name: UBA</p>
          <p>Account Name: Aduwa Daam</p>
          <p>Account No.: 0131988214 (copy)</p>
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
