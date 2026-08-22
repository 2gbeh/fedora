import Head from "expo-router/head";
import { PropsWithChildren } from "react";
import { StyleSheet, Text, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";
import { flexStyles } from "@/styles/flex-styles";

interface Props extends PropsWithChildren {
  title?: string;
  styles?: ViewStyle;
}

export const AppScreen = ({ children, title, styles }: Props) => {
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
        <SafeAreaView style={[sx.container, styles]}>{children}</SafeAreaView>
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
});
