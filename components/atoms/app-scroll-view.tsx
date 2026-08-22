import { PropsWithChildren } from "react";
import { ScrollView, ViewStyle } from "react-native";

interface Props extends PropsWithChildren {
  styles?: {
    container?: ViewStyle;
    content?: ViewStyle;
  };
}

export const AppScrollView = ({ children, styles }: Props) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{ flex: 1, ...styles?.container }}
      contentContainerStyle={{ gap: 12, ...styles?.content }}
    >
      {children}
    </ScrollView>
  );
};
