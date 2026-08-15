import { useEffect } from "react";
import { Stack, useRouter, useSegments } from "expo-router";
import { DEBUG } from "@/constants/DEBUG";

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const isLoggedIn = Boolean(DEBUG.auth.router || 0);

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (!isLoggedIn && !inAuthGroup) {
      router.replace("/(auth)/login");
    } else if (isLoggedIn && inAuthGroup) {
      router.replace("/(tabs)/index");
    }
  }, [isLoggedIn, segments]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="transactions/create"
        options={{ presentation: "modal" }}
      />
      <Stack.Screen name="analytics/index" />
      <Stack.Screen name="profile/index" />
      <Stack.Screen name="settings/index" />
    </Stack>
  );
}
