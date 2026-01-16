import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
//
import {
  AuthContext,
  IAuthContext,
} from "@/components/providers/auth-provider";
import { PATH } from "@/constants/PATH";

export function useAuthContext(): IAuthContext {
  const router = useRouter();
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuthContext must be used inside AuthProvider");
  }

  useEffect(() => {
    if (!ctx.loading && !ctx.data) router.push(PATH.login);
  }, [ctx, router]);

  return ctx;
}
