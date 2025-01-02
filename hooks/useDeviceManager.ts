import { useEffect, useState } from "react";
import { Platform, useColorScheme, useWindowDimensions } from "react-native";
import { Orientation, getOrientationAsync } from "expo-screen-orientation";
import NetInfo from "@react-native-community/netinfo";

export const isAndroid = Platform.OS === "android";
export const isIOS = Platform.OS === "ios";
export const isMacOS = Platform.OS === "macos";
export const isWeb = Platform.OS === "web";
export const isWindows = Platform.OS === "windows";

export function useDeviceManager() {
  const { width, height } = useWindowDimensions();
  const colorScheme = useColorScheme();
  const [hasInternet, setHasInternet] = useState(false);
  const [orientation, setOrientation] = useState<Orientation>(
    Orientation.UNKNOWN
  );
  //
  useEffect(() => {
    (async () => {
      let newOrientation = await getOrientationAsync();
      setOrientation(newOrientation);
    })();
    //
    const sub = NetInfo.addEventListener((state) =>
      setHasInternet(!!state.isConnected)
    );
    return sub;
  }, []);

  return {
    isLightMode: colorScheme === "light",
    isDarkMode: colorScheme === "dark",
    isTablet: width > 768 || height >= 1024,
    isLandscape:
      orientation === Orientation.LANDSCAPE_LEFT ||
      orientation === Orientation.LANDSCAPE_RIGHT,
    isPortrait:
      orientation === Orientation.PORTRAIT_UP ||
      orientation === Orientation.PORTRAIT_DOWN,
    hasInternet,
  };
}
