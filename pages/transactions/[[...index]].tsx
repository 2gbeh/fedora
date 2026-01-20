import { useState } from "react";
import { PlusIcon } from "lucide-react";
//
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { ActionButton } from "@/components/atoms/buttons/action-button";
import { SearchInput } from "@/components/atoms/forms/ui/search-input";
import { TransactionsTable } from "@/components/species/transactions/components/transactions-table";
import { MOCK } from "@/constants/MOCK";
//
import { FilterByLedger } from "@/components/species/transactions/components/filter-by-ledger";
import { FilterByCategory } from "@/components/species/transactions/components/filter-by-category";
import { SortByTransactionField } from "@/components/species/transactions/components/sort-by-transaction-field";
import { CreateTransactionOffcanvas } from "@/components/species/transactions/components/create-transaction-offcanvas";
import data from "@/data/fake-transactions-page-1.json";

const defaultOpen = Boolean(MOCK.transactions.portal);

export default function TransactionsPage() {
  const [open, setOpen] = useState(defaultOpen);
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
      <div className="flex-center-between">
        <SearchInput className="w-full sm:w-auto" />
        <div className="flex-center-start gap-4">
          <FilterByLedger withLabel />
          <FilterByCategory withLabel />
          <SortByTransactionField withLabel />
        </div>
      </div>
      <TransactionsTable data={data} />
      <CreateTransactionOffcanvas open={open} onClose={() => setOpen(false)} />
    </DashboardLayout>
  );
}
