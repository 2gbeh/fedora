import { useState } from "react";
import { PlusIcon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
//
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { ContactsTable } from "@/components/species/contacts/ui/contacts-table";
import { CreateContactOffcanvas } from "@/components/species/contacts/ui/create-contact-offcanvas";
import data from "@/components/shadcn/data.json";

export default function ContactsPage() {
  const [open, setOpen] = useState(false);
  return (
    <DashboardLayout
      pageTitle="Contacts"
      pageDisplayTitle="Contacts"
      rightSection={
        <Button size="sm" onClick={() => setOpen(true)}>
          <PlusIcon />
          <span className="hidden lg:inline">Add New</span>
        </Button>
      }
    >
      <ContactsTable data={data} onCreate={() => setOpen(true)} />
      <CreateContactOffcanvas open={open} onClose={() => setOpen(false)} />
    </DashboardLayout>
  );
}
