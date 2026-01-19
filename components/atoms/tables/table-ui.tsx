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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { UNKNOWN, HYPHENS } from "@/constants/LOCALE";

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

interface Props {
  src?: string;
  name?: string;
  email?: string;
}

const CellAvatarBio = ({ src, name, email }: Props) => {
  return (
    <TableCell className="flex-center-start gap-2.5">
        <Avatar className="size-8 rounded-full">
          <AvatarImage src={src || undefined} />
          <AvatarFallback>
            {(name || UNKNOWN).charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="grid text-sm leading-tight">
          <span className="truncate font-medium">{name || HYPHENS}</span>
          {email ? (
            <span className="truncate text-xs text-muted-foreground">
              {email}
            </span>
          ) : null}
        </div>
    </TableCell>
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
  CellAvatarBio,
  CellBadge,
};
