import { useEffect, useState } from "react";
import { useRouter, useSegments } from "expo-router";
import { DEBUG } from "@/constants/DEBUG";

export function useAuthGuard() {
  const router = useRouter();
  const segments = useSegments();
  const [authenticating, setAuthenticating] = useState(true);

  // TODO: replace with real auth check
  const authenticated = Boolean(DEBUG.auth.loader || 0);

  useEffect(() => {
    // TODO: replace with real async auth check (e.g. Firebase onAuthStateChanged)
    setAuthenticating(false);
  }, []);

  useEffect(() => {
    if (authenticating) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!authenticated && !inAuthGroup) {
      router.replace("/(auth)/login");
    } else if (authenticated && inAuthGroup) {
      router.replace("/(tabs)");
    }
  }, [authenticated, segments, authenticating]);

  return { authenticated, authenticating };
}
