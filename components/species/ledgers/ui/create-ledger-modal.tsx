import { Label } from "@/components/shadcn/ui/label";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/ui/dialog";
interface Props {
  open?: boolean;
  onClose?: () => void;
}

export function CreateLedgerModal({
  open,
  onClose = () => undefined,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <form>
        <DialogContent className="bg-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Ledger</DialogTitle>
            <DialogDescription>
              Required fields are marked with asterisks(*)
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name *</Label>
              <Input id="name-1" name="name" placeholder="Ex. House Project" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Description</Label>
              <Input id="name-1" name="name" placeholder="Ex. 27 Omoruyi Street, Benin City, 300102" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Select Visibility</Label>
              <Input id="name-1" name="name" placeholder="Ex. Public | Private* | Protected" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={onClose}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
