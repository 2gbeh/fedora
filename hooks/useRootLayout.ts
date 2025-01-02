import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
//
import { FONTS } from "@/constants/THEME";

SplashScreen.preventAutoHideAsync();

export function useRootLayout() {
  const [loaded] = useFonts(FONTS);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return { fontsLoaded: loaded };
}
