import "expo-dev-client";
import "react-native-reanimated";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { RootSiblingParent } from "react-native-root-siblings";
// ///////////////////////////////////////////////
import { useRootLayout } from "@/hooks/useRootLayout";

export default function RootLayout() {
  const loaded = useRootLayout();

  return !loaded ? null : (
    <SafeAreaProvider>
      <RootSiblingParent>
        <Slot />
      </RootSiblingParent>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
