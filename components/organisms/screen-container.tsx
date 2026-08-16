import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// 
import { flexStyles } from "@/styles/flex";
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";

interface Props extends PropsWithChildren {}

export const ScreenContainer = ({ children }: Props) => {
  if (typeof children === "string") {
    return (
      <SafeAreaView style={flexStyles.centered}>
        <Text style={sx.text}>{children}</Text>
      </SafeAreaView>
    );
  }

  return <SafeAreaView style={sx.container}>{children}</SafeAreaView>;
};

export const sx = StyleSheet.create({
  _: {},
  container: {
    padding: 16,
    paddingBottom: 0,
    flex: 1,
    gap: 16,
  },
  text: {
    color: COLOR.primary,
    fontFamily: FONT.medium,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  },
});
