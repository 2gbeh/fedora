import "expo-dev-client";
import "react-native-reanimated";

import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
//
import PaperProviderWrapper from "@/components/providers/PaperProviderWrapper";
import DispatchNotice from "@/components/atoms/dispatch-notice";
import { useRootLayout } from "@/hooks/useRootLayout";
import { ReduxProviderWrapper } from "@/components/providers/ReduxProviderWrapper";

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
