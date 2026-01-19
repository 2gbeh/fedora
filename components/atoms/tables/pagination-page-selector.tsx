import { PropsWithChildren } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
// 
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/shadcn/ui/pagination";
import { Button } from "@/components/shadcn/ui/button";

interface Props {
  page?: number;
  pages?: number;
}

export const PaginationPageSelector = ({ page = 1, pages = 10 }: Props) => {
  return (
    <div className="flex-center-start gap-2">
      <div className="text-sm text-muted-foreground">
        Page {page} of {pages}
      </div>
      <div className="flex items-center gap-2 lg:ml-0">
        <Pagination>
          <PaginationContent>
            <PaginationItemButton title="First Page" disabled={true}>
              <ChevronsLeftIcon />
            </PaginationItemButton>
            <PaginationItemButton title="Previous Page" disabled={true}>
              <ChevronLeftIcon />
            </PaginationItemButton>
            {[1, 2, 3].map((item) => (
              <PaginationItem key={item}>
                <PaginationLink
                  href={`?page=${item}`}
                  isActive={item === page}
                  className="size-8"
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItemButton title="Next Page">
              <ChevronRightIcon />
            </PaginationItemButton>
            <PaginationItemButton title="Last Page">
              <ChevronsRightIcon />
            </PaginationItemButton>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

interface PaginationItemButtonProps extends PropsWithChildren {
  title?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const PaginationItemButton = ({
  children,
  title,
  disabled,
  onClick,
}: PaginationItemButtonProps) => {
  return (
    <PaginationItem>
      <Button
        variant="outline"
        onClick={onClick}
        disabled={disabled}
        title={title}
        className="hidden size-8 p-0 lg:flex"
      >
        <span className="sr-only">{title}</span>
        {children}
      </Button>
    </PaginationItem>
  );
};
