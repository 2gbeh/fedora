import { Fragment } from "react";
import { MoreVerticalIcon } from "lucide-react";
//
import { Button } from "@/components/shadcn/ui/button";
import { TableCell } from "@/components/shadcn/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { OptionType } from "@/types";

type MenuType = OptionType & { separator?: boolean };

interface Props {
  menu: MenuType[];
}

export const TableCellAction = ({ menu }: Props) => {
  return (
    <TableCell className="w-[10px]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
          >
            <MoreVerticalIcon />
            <span className="sr-only">Action</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          {menu.map((item, i) => {
            return (
              <Fragment key={i}>
                {item.separator && <DropdownMenuSeparator />}
                <DropdownMenuItem disabled={item.disabled}>
                  {item.label}
                </DropdownMenuItem>
              </Fragment>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </TableCell>
  );
};
