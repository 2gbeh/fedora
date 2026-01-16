import { useRouter } from "next/router";
import { UserPenIcon } from "lucide-react";
import { User } from "firebase/auth";
//
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/shadcn/ui/sidebar";
import { Skeleton } from "@/components/shadcn/ui/skeleton";
import { useAuthContext } from "@/hooks/use-auth-context";
import { PATH } from "@/constants/PATH";
import { UNKNOWN } from "@/constants/LOCALE";

export function NavUser() {
  const router = useRouter();
  const authContext = useAuthContext();
  //
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          onClick={() => router.push(PATH.profile)}
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          {authContext.loading
            ? renderProfileSkeleton()
            : renderProfileSummary(authContext.data)}
          <UserPenIcon className="ml-auto size-4" />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

const renderProfileSummary = (user: User | null) => {
  return (
    <>
      <Avatar className="h-8 w-8 rounded-full">
        <AvatarImage src={user?.photoURL || undefined} />
        <AvatarFallback className="rounded-lg">
          {(user?.displayName || UNKNOWN).slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">
          {user?.displayName || UNKNOWN}
        </span>
        <span className="truncate text-xs text-muted-foreground">
          {user?.email || UNKNOWN}
        </span>
      </div>
    </>
  );
};

const renderProfileSkeleton = () => {
  return (
    <>
      <div className="flex-center-start space-x-3">
        <Skeleton className="h-9 w-9 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-[80px] rounded-sm" />
          <Skeleton className="h-3 w-[120px] rounded-sm" />
        </div>
      </div>
    </>
  );
};
