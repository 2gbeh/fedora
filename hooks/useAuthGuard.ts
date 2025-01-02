import { useEffect, useState } from "react";
import { router, useSegments } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
//
import { auth } from "@/lib/firebase/firebase.config";
import { useAppDispatch } from "@/store/store.config";
import { ICurrentUser, CurrentUserEntity } from "@/store/auth/auth.interface";
import { setCurrentUser } from "@/store/auth/auth.slice";

export function useAuthGuard() {
  const segments = useSegments();
  const dispatch = useAppDispatch();
  // LOCAL STATES
  const [verifying, setVerifying] = useState(true);
  const [user, setUser] = useState<ICurrentUser | null>(null);
  // SIDE-EFFECTS
  useEffect(() => {
    const sub = onAuthStateChanged(auth, (user: CurrentUserEntity) => {
      if (user) {
        const serializedUser = {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
        };
        setUser(serializedUser);
        dispatch(setCurrentUser(serializedUser));
      }
      setVerifying(false);
    });
    return sub;
  }, []);

  useEffect(() => {
    if (!verifying) {
      if (user) {
        if (segments.includes("(auth)" as never)) router.replace("/home");
      } else {
        // router.replace("/login");
      }
    }
  }, [verifying]);

  return { verifying, user };
}
