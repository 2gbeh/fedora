import { AppBar } from "@/components/organisms/app-bar";
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";
import { useAppFont } from "@/hooks/use-app-font";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { NativeStackNavigationOptions, Stack } from "expo-router";

export default function RootLayout() {
  const { fontsLoaded, fontError } = useAppFont();
  const { authenticating } = useAuthGuard();

  if ((!fontsLoaded && !fontError) || authenticating) {
    return null;
  }

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="transaction/create"
        options={{
          headerTitle: "Add Transaction",
          presentation: "modal",
          headerRight: () => <AppBar menu />,
        }}
      />
      <Stack.Screen name="analytics/index" />
      <Stack.Screen name="profile/index" />
      <Stack.Screen name="settings/index" />
    </Stack>
  );
}

const screenOptions: NativeStackNavigationOptions = {
  headerTitleStyle: {
    fontFamily: FONT.medium,
    fontSize: 18,
  },
  headerShadowVisible: false,
  contentStyle: {
    backgroundColor: COLOR.white,
  },
};
