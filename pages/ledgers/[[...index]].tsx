import { useState } from "react";
import { PlusIcon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
//
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { LedgersTable } from "@/components/species/ledgers/ui/ledgers-table";
import { CreateLedgerModal } from "@/components/species/ledgers/ui/create-ledger-modal";
import data from "@/components/shadcn/data.json";

export default function LedgersPage() {
  const [open, setOpen] = useState(false);
  return (
    <DashboardLayout
      pageTitle="Ledgers"
      pageDisplayTitle="Ledgers"
      rightSection={
        <Button size="sm" onClick={() => setOpen(true)}>
          <PlusIcon />
          <span className="hidden lg:inline">Add New</span>
        </Button>
      }
    >
      <LedgersTable data={data} onCreate={() => setOpen(true)} />
      <CreateLedgerModal open={open} onClose={() => setOpen(false)} />
    </DashboardLayout>
  );
}
