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

export function CreateContactModal({
  open,
  onClose = () => undefined,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <form>
        <DialogContent className="bg-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Contact</DialogTitle>
            <DialogDescription>
              Required fields are marked with asterisks(*)
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="username-1">Upload Avatar</Label>
              <Input id="username-1" name="username" placeholder="Select file" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Display Name *</Label>
              <Input id="name-1" name="name" placeholder="Ex. Jubilee Chapel" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Account Name</Label>
              <Input id="name-1" name="name" placeholder="Ex. Corel Ministry Int'l" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Telephone No.</Label>
              <Input id="name-1" name="name" placeholder="(+234)" />
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
