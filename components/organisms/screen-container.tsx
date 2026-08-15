import { flexStyles } from "@/styles/flex";
import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props extends PropsWithChildren {}

export const ScreenContainer = ({ children }: Props) => {
  if (typeof children === "string") {
    return (
      <SafeAreaView style={flexStyles.centered}>
        <Text>{children}</Text>
      </SafeAreaView>
    );
  }

  return <SafeAreaView style={sx.container}>{children}</SafeAreaView>;
};

export const sx = StyleSheet.create({
  _: {},
  template: {},
  container: {
    padding: 16,
    paddingBottom: 0,
    flex: 1,
    gap: 16,
  },
});
