import { PropsWithChildren } from "react";
//
import { SidebarInset, SidebarProvider } from "@/components/shadcn/ui/sidebar";
import { PageTitle } from "../atoms/page-title";
import { Header } from "../organisms/header";
import { AppSidebar } from "../organisms/app-sidebar";
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
          <Header
            title={pageDisplayTitle}
            breadcrumbs={breadcrumbs}
            rightSection={rightSection}
          />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 px-4 lg:gap-6 lg:px-6 py-2">
                {children}
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};
