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

interface Props {
  open?: boolean;
  onClose?: () => void;
}

export function CreateTransactionOffcanvas({
  open,
  onClose = () => undefined,
}: Props) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="flex flex-col bg-white">
        <SheetHeader>
          <SheetTitle>Add Transaction</SheetTitle>
          <SheetDescription>
            Required fields are marked with asterisks(*)
          </SheetDescription>
        </SheetHeader>
        <div className="mt-0 flex flex-1 flex-col gap-5 overflow-y-auto max-h-screen">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Select Ledger</Label>
            <Input id="sheet-demo-name" defaultValue="Default" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Transaction Date</Label>
            <Input
              id="sheet-demo-name"
              defaultValue={new Date().toISOString().slice(0, 10)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Contact Name *</Label>
            <Input id="sheet-demo-username" placeholder="Adua Daam" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Amount *</Label>
            <Input id="sheet-demo-name" placeholder="20000" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Narration *</Label>
            <Input id="sheet-demo-username" placeholder="Ex. Fuel" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Select Type</Label>
            <Input id="sheet-demo-name" defaultValue="Expense" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Select Categories *</Label>
            <Input
              id="sheet-demo-username"
              placeholder="Ex. Church | Support | Groceries | Toiletries | Utilities*"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Select Tags</Label>
            <Input
              id="sheet-demo-name"
              placeholder="Ex. Draft | Frivolous"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Select Wallet *</Label>
            <Input id="sheet-demo-name" defaultValue="OPay" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Upload Receipt</Label>
            <Input id="sheet-demo-name" placeholder="Select file" />
          </div>
        </div>
        <SheetFooter className="mt-5">
          <SheetClose asChild>
            <Button variant="outline">Clear</Button>
          </SheetClose>
          <Button onClick={onClose}>Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
