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
import { SkeletonUI } from "@/components/atoms/skeleton-ui";
import { useAuthContext } from "@/hooks/use-auth-context";
import { PATH } from "@/constants/PATH";
import { UNKNOWN, HYPHENS } from "@/constants/LOCALE";

export function UserMenu() {
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
      <Avatar className="size-8 rounded-full">
        <AvatarImage src={user?.photoURL || undefined} />
        <AvatarFallback>
          {(user?.displayName || UNKNOWN).charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="grid text-sm leading-tight">
        <span className="truncate font-medium">
          {user?.displayName || HYPHENS}
        </span>
        {user?.email ? (
          <span className="truncate text-xs text-muted-foreground">
            {user.email}
          </span>
        ) : null}
      </div>
    </>
  );
};

const renderProfileSkeleton = () => {
  return (
    <div className="flex-center-start space-x-3">
      <SkeletonUI.Avatar />
      <div className="space-y-2">
        <SkeletonUI.Text className="w-[80px]" />
        <SkeletonUI.Text className="w-[120px]" />
      </div>
    </div>
  );
};
