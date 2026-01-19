import { useRouter } from "next/router";
import { ArrowUpRightIcon } from "lucide-react";
//
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/shadcn/ui/table";
import { ActionButton } from "@/components/atoms/buttons/action-button";
import { TableUI } from "@/components/atoms/tables/table-ui";
import { TableCellAction } from "@/components/atoms/tables/table-cell-action";
import { PaginationUI } from "@/components/atoms/tables/pagination-ui";
import { PaginationPageSelector } from "@/components/atoms/tables/pagination-page-selector";
import { PATH } from "@/constants/PATH";
//
import data from "./data.json";

export const RecentTransactionsTable = () => {
  const router = useRouter();
  //
  return (
    <div className="grid gap-2.5">
      <div className="flex-center-between">
        <h1 className="font-semibold leading-none tracking-tight">
          Recent Transactions
        </h1>
        <ActionButton
          label="View All"
          onClick={() => router.push(PATH.transactions)}
          RightIcon={ArrowUpRightIcon}
        />
      </div>
      <TableUI.Container>
        <TableUI.HeaderRow hasAction>
          <TableHead>Contact Name</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead>Narration</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Date</TableHead>
        </TableUI.HeaderRow>
        <TableBody>
          {data.map((item, i) => (
            <TableRow key={item.invoice}>
              <TableUI.CellAvatarBio name="Sunday Bike" email="Aduwa Daam" />
              <TableCell className="text-right">{item.totalAmount}</TableCell>
              <TableCell>{item.paymentMethod}</TableCell>
              <TableUI.CellBadge>{item.paymentStatus}</TableUI.CellBadge>
              <TableCell className="h-12">{item.invoice}</TableCell>
              <TableCellAction
                menu={[
                  { label: "Receipt", value: "Receipt", disabled: true },
                  { label: "Edit", value: "Edit" },
                  { label: "Delete", value: "Delete" },
                  {
                    label: "Duplicate",
                    value: "Duplicate",
                    separator: true,
                  },
                ]}
              />
            </TableRow>
          ))}
        </TableBody>
      </TableUI.Container>
      <PaginationUI.Container>
        <PaginationUI.SizeSelector />
        <PaginationUI.SelectedRowsCaption />
        <PaginationPageSelector />
      </PaginationUI.Container>
    </div>
  );
};
