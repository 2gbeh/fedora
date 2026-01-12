import Link from "next/link";
import { type LucideIcon, PlusCircleIcon } from "lucide-react";

import { Button } from "@/components/shadcn/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/shadcn/ui/sidebar";
import { IMenu } from "@/constants/MENU";
import { useRouter } from "next/router";

export function NavMain({ items }: { items: IMenu[] }) {
  const router = useRouter();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            const isActive = router.asPath === item.path;
            return (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton asChild>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-2 ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
