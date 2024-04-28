import { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function useRootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    if (error) throw error;
  }, [loaded, error]);

  return { loaded, error };
}
