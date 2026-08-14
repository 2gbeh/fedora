import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props extends PropsWithChildren {
  title?: string;
}

export const ScreenContainer = ({ children }: Props) => {
  if (children) {
    return <SafeAreaView style={sx.container}>{children}</SafeAreaView>;
  }
  
  return (
    <SafeAreaView style={sx.container}>
      <Text style={sx._}>ContactsScreen</Text>
    </SafeAreaView>
  );
};

export const sx = StyleSheet.create({
  _: {},
  container: {
    padding: 16,
    flex: 1,
    gap: 16,
  },
});
