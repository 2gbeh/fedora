import { PropsWithChildren } from "react";
//
import { Separator } from "@/components/shadcn/ui/separator";
import { SidebarTrigger } from "@/components/shadcn/ui/sidebar";
import { AppBreadcrumb } from "./app-breadcrumb";

interface Props extends PropsWithChildren {
  title?: string;
  breadcrumbs?: { label: string; path?: string }[];
  rightSection?: React.ReactNode;
}

export const Header = ({ title, breadcrumbs, rightSection }: Props) => {
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex-center-between h-16 shrink-0 gap-2 px-4 transition-[width,height] ease-linear">
      <div className="flex-center-start gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        {title ? (
          <a href="" title="Reload">
            <h1 className="text-base font-medium hover:underline">{title}</h1>
          </a>
        ) : null}
        {breadcrumbs ? <AppBreadcrumb trails={breadcrumbs} /> : null}
      </div>
      <div className="flex-center-start gap-4">{rightSection}</div>
    </header>
  );
};
