import { ReactNode, createContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
//
import { firebaseAuth } from "@/lib/firebase/config";

const initialValues: IAuthContext = {
  data: null,
  loading: true,
};

export interface IAuthContext {
  data: User | null;
  loading: boolean;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<IAuthContext>(initialValues);

  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, (user) => {
      // console.log("🚀 ~ AuthProvider ~ user:", user);
      setValue({ data: user, loading: false });
    });

    return () => unsub();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
