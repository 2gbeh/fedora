import { Stack } from "expo-router";
import { useAppFont } from "@/hooks/use-app-font";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { COLOR } from "@/constants/COLOR";

export default function RootLayout() {
  const { fontsLoaded, fontError } = useAppFont();
  const { authenticating } = useAuthGuard();

  if ((!fontsLoaded && !fontError) || authenticating) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: COLOR.background },
      }}
    >
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="transaction/create"
        options={{ presentation: "modal" }}
      />
      <Stack.Screen name="analytics/index" />
      <Stack.Screen name="profile/index" />
      <Stack.Screen name="settings/index" />
    </Stack>
  );
}
