import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/shadcn/ui/sidebar";
import { PATH } from "@/constants/PATH";
import { MENU } from "@/constants/MENU";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <NavUser />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={MENU.primary} />
      </SidebarContent>
      <SidebarFooter>
        <NavSecondary items={MENU.secondary} className="mt-auto" />
      </SidebarFooter>
    </Sidebar>
  );
}
