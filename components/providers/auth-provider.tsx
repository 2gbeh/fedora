import { ReactNode, createContext, useEffect, useState } from "react";
import { User } from "firebase/auth";
//
import { authService, SessionDto } from "@/services/auth-service";

const initialValues: SessionDto = {
  data: null,
  loading: true,
};

export const AuthContext = createContext<SessionDto | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<SessionDto>(initialValues);

  useEffect(() => {
    const unsub = authService.getSession(setValue);
    return () => unsub();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
