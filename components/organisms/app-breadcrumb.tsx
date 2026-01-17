import { Fragment } from "react";
import Link from "next/link";
//
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/shadcn/ui/breadcrumb";

interface Props {
  trails: { label: string; path?: string }[];
}

export const AppBreadcrumb = ({ trails }: Props) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {trails.map(({ label, path }, i) => {
          const isNotLastItem = i < trails.length;
          return (
            <Fragment key={i}>
              {isNotLastItem && (
                <BreadcrumbSeparator className="hidden md:block" />
              )}
              <BreadcrumbItem className="hidden md:block">
                {path ? (
                  <BreadcrumbLink asChild>
                    <Link href={path} className="hover:underline">
                      {label}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="cursor-default text-muted-foreground">
                    {label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
