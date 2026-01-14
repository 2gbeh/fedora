import { Label } from "@/components/shadcn/ui/label";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
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

export function CreateContactOffcanvas({
  open,
  onClose = () => undefined,
}: Props) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <form>
        <SheetContent className="flex flex-col bg-white">
          <SheetHeader>
            <SheetTitle>Add Contact</SheetTitle>
            <SheetDescription>
              Required fields are marked with asterisks(*)
            </SheetDescription>
          </SheetHeader>
          <div className="mt-0 flex max-h-screen flex-1 flex-col gap-5 overflow-y-auto">
            <div className="grid gap-3">
              <Label htmlFor="username-1">Upload Avatar</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="Select file"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Display Name *</Label>
              <Input id="name-1" name="name" placeholder="Ex. Jubilee Chapel" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Bank Name</Label>
              <Input id="name-1" name="name" defaultValue="GTBank" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Account Name</Label>
              <Input
                id="name-1"
                name="name"
                defaultValue="Corel Ministry Int'l"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Account No.</Label>
              <Input id="name-1" name="name" defaultValue="0032062284" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Phone No.</Label>
              <Input id="name-1" name="name" placeholder="(+234)" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Mobile No.</Label>
              <Input id="name-1" name="name" placeholder="(+234)" />
            </div>
          </div>
          <SheetFooter className="mt-5">
            <SheetClose asChild>
              <Button variant="outline">Clear</Button>
            </SheetClose>
            <Button onClick={onClose}>Save</Button>
          </SheetFooter>
        </SheetContent>
      </form>
    </Sheet>
  );
}
