import { JSX, PropsWithChildren } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Head from "expo-router/head";
//
import { flexStyles } from "@/styles/flex-styles";
import { APP } from "@/constants/APP";
import { FONT } from "@/constants/FONT";
import { COLOR } from "@/constants/COLOR";

interface Props extends PropsWithChildren {
  title?: string;
  footer?: JSX.Element;
  styles?: ViewStyle;
}

export const AppScreen = ({ children, title, footer, styles }: Props) => {
  return (
    <>
      <Head>
        <title>{`${title || APP.title} | ${APP.name}`}</title>
      </Head>
      {typeof children === "string" ? (
        <SafeAreaView style={flexStyles.centered}>
          <Text style={sx.text}>{children}</Text>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={[sx.container, styles]}>
          {children}
          {footer ? <View style={sx.footer}>{footer}</View> : null}
        </SafeAreaView>
      )}
    </>
  );
};

export const sx = StyleSheet.create({
  _: {},
  container: {
    paddingHorizontal: 16,
    flex: 1,
    gap: 12,
  },
  text: {
    color: COLOR.primary,
    fontFamily: FONT.medium,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  footer: {
    // paddingTop: 8,
    paddingBottom: 16,
  },
});
