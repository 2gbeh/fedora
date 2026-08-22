import { PropsWithChildren } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";

interface Props extends PropsWithChildren {
  title?: string;
  styles?: ViewStyle;
}
export const Card = ({ children, title, styles }: Props) => {
  return (
    <View style={[sx.container, styles]}>
      {title ? <Text style={sx.title}>{title}</Text> : null}
      {children}
    </View>
  );
};

const sx = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.white,
    borderRadius: 8,
    padding: 16,
    gap: 8,
  },
  title: {
    color: COLOR.primary,
    fontFamily: FONT.medium,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  },
});
