import "expo-dev-client";
import "react-native-reanimated";

import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
//
import ReduxProviderWrapper from "@/components/_providers/ReduxProviderWrapper";
import PaperProviderWrapper from "@/components/_providers/PaperProviderWrapper";
import DispatchNotice from "@/components/dispatch-notice";
import { useRootLayout } from "@/hooks/useRootLayout";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { fontsLoaded } = useRootLayout();
  console.log("🚀 ~ RootLayout");
  // RENDER
  return !fontsLoaded ? null : (
    <ReduxProviderWrapper>
      <PaperProviderWrapper>
        <Stack screenOptions={{ headerShown: false }} />
        <DispatchNotice />
      </PaperProviderWrapper>
    </ReduxProviderWrapper>
  );
}
