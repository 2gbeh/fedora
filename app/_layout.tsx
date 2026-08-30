import { NativeStackNavigationOptions, Stack } from "expo-router";
import Toast from "react-native-toast-message";
//
import { AppBar } from "@/components/organisms/app-bar";
import { useAppFont } from "@/hooks/use-app-font";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { toastConfig } from "@/hooks/use-app-toast/config";
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";

export default function RootLayout() {
  const { fontsLoaded, fontError } = useAppFont();
  const { authenticating } = useAuthGuard();

  if ((!fontsLoaded && !fontError) || authenticating) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={screenOptions}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="transactions/create"
          options={{
            headerTitle: "Add Transaction",
            // presentation: "modal",
            headerRight: () => <AppBar menu />,
          }}
        />
        {/* <Stack.Screen name="analytics/index" />
      <Stack.Screen name="profile/index" />
      <Stack.Screen name="settings/index" /> */}
      </Stack>
      <Toast config={toastConfig} />
    </>
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
