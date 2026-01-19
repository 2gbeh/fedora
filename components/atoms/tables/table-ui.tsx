import { PropsWithChildren } from "react";
//
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/shadcn/ui/table";
import { Badge } from "@/components/shadcn/ui/badge";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>{children}</Table>
    </div>
  );
};

interface Props extends PropsWithChildren {
  hasNumbering?: boolean;
  hasAction?: boolean;
}

const HeaderRow = ({ children, hasNumbering, hasAction }: Props) => {
  return (
    <TableHeader>
      <TableRow className="bg-muted">
        {hasNumbering && (
          <TableHead className="w-[10px]" aria-label="S/N">
            #
          </TableHead>
        )}
        {children}
        {hasAction && (
          <TableHead className="w-[10px]" aria-label="Actions"></TableHead>
        )}
      </TableRow>
    </TableHeader>
  );
};

const CellBadge = ({ children }: PropsWithChildren) => {
  return (
    <TableCell>
      <Badge variant="outline" className="px-1.5 text-muted-foreground">
        {children}
      </Badge>
    </TableCell>
  );
};

export const TableUI = {
  Container,
  HeaderRow,
  CellBadge,
};
