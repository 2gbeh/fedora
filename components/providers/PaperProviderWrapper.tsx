import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  MD3DarkTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
//
import { useAppSelector } from "@/store/store.config";
import { selectTheme } from "@/store/theme/theme.slice";
import { COLOR } from "@/constants/THEME";

export default function PaperProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useAppSelector(selectTheme);
  const paperTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...COLOR[theme],
    },
  };
  // RENDER
  return (
    <>
      <PaperProvider theme={paperTheme}>{children}</PaperProvider>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
    </>
  );
}
