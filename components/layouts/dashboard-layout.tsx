import { Fragment, PropsWithChildren } from "react";
import Link from "next/link";
//
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/shadcn/ui/sidebar";
import { Separator } from "@/components/shadcn/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/shadcn/ui/breadcrumb";
import { PageTitle } from "../atoms/page-title";
import { AppSidebar } from "../species/dashboard/ui/app-sidebar";
//
interface Props extends PropsWithChildren {
  pageTitle?: string;
  pageDisplayTitle?: string;
  breadcrumbs?: { label: string; path?: string }[];
  rightSection?: React.ReactNode;
}

export const DashboardLayout = ({
  children,
  pageTitle,
  pageDisplayTitle,
  breadcrumbs,
  rightSection,
}: Props) => {
  return (
    <>
      <PageTitle title={pageTitle} />
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex-center-between h-16 shrink-0 gap-2 px-4 transition-[width,height] ease-linear">
            <div className="flex-center-start gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              {pageDisplayTitle ? (
                <a href="" title="Reload">
                  <h1 className="text-base font-medium hover:underline">
                    {pageDisplayTitle}
                  </h1>
                </a>
              ) : null}
              {breadcrumbs ? (
                <Breadcrumb>
                  <BreadcrumbList>
                    {breadcrumbs.map(({ label, path }, i) => {
                      const isNotLastItem = i < breadcrumbs.length;
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
              ) : null}
            </div>
            <div className="flex-center-start gap-4">{rightSection}</div>
          </header>
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 md:gap-6">
                {children}
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};
