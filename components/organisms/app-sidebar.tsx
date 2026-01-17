import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/shadcn/ui/sidebar";
import { UserMenu } from "@/components/organisms/user-menu";
import { AppSidebarMenu } from "./app-sidebar-menu";
import { MENU } from "@/constants/MENU";

export const AppSidebar = () => {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <UserMenu />
      </SidebarHeader>
      <SidebarContent>
        <AppSidebarMenu menu={MENU.primary} />
      </SidebarContent>
      <SidebarFooter>
        <AppSidebarMenu menu={MENU.secondary} />
      </SidebarFooter>
    </Sidebar>
  );
};
