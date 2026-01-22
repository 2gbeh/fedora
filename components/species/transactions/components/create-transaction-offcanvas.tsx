import { ControlledSelectInput } from "@/components/atoms/forms/ui/controlled-select-input";
import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet";
import {
  ledgerOptions,
  typeOptions,
  categoriesOptions,
  tagsOptions,
  walletOptions,
  useCreateTransaction,
} from "../hooks/use-create-transaction";
import { ControlledForm } from "@/components/atoms/forms/ui/controlled-form";
import { CUR_DATE, DEFAULT_LEDGER, NAIRA } from "@/constants/LOCALE";
import { ControlledInput } from "@/components/atoms/forms/ui/controlled-input";
import { Spinner } from "@/components/shadcn/ui/spinner";

interface Props {
  open?: boolean;
  onClose?: () => void;
}

export function CreateTransactionOffcanvas({
  open,
  onClose = () => undefined,
}: Props) {
  const { form, submitting, onSubmit } = useCreateTransaction();
  //
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="flex flex-col bg-white">
        <ControlledForm
          onSubmit={form.handleSubmit(onSubmit)}
          disabled={submitting}
        >
          <SheetHeader className="space-y-0">
            <SheetTitle>Add Transaction</SheetTitle>
            <SheetDescription>
              Required fields are marked with asterisks(*)
            </SheetDescription>
          </SheetHeader>
          <div className="custom-scroll grid max-h-[calc(100vh-180px)] gap-4 overflow-y-auto">
            <ControlledSelectInput
              control={form.control}
              name="ledgerId"
              label="Select Ledger"
              options={[DEFAULT_LEDGER]}
            />
            <ControlledInput
              type="date"
              control={form.control}
              name="date"
              label="Transaction Date"
            />
            <ControlledInput
              type="search"
              control={form.control}
              name="contactId"
              label="Contact Name"
              placeholder="Ex. Aduwa Daam"
              required
              datalist={["Aduwa Daam", "Philip Sunday"]}
            />
            <ControlledInput
              type="number"
              control={form.control}
              name="amount"
              label={`Amount (${NAIRA})`}
              placeholder="0.00"
              required
            />
            <ControlledInput
              type="search"
              control={form.control}
              name="narration"
              label="Narration"
              placeholder="Ex. Fuel"
              required
            />
            <ControlledSelectInput
              control={form.control}
              name="type"
              label="Transaction Type"
              options={typeOptions}
            />
            <ControlledSelectInput
              control={form.control}
              name="categories"
              label="Select Categories"
              options={categoriesOptions}
              required
            />
            <ControlledSelectInput
              control={form.control}
              name="tags"
              label="Select Tags"
              options={tagsOptions}
            />
            <ControlledSelectInput
              control={form.control}
              name="wallet"
              label="Select Wallet"
              options={walletOptions}
              required
            />
            <ControlledInput
              type="file"
              control={form.control}
              name="amountSplit"
              label="Upload Receipt"
              placeholder="Select file"
            />
          </div>
          <SheetFooter className="mt-0">
            <SheetClose asChild>
              <Button type="reset" variant="outline">
                Clear
              </Button>
            </SheetClose>
            <Button>
              {submitting && <Spinner />}
              Save
            </Button>
          </SheetFooter>
        </ControlledForm>
      </SheetContent>
    </Sheet>
  );
}
