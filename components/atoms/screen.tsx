import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Head from "expo-router/head";
//
import { flexStyles } from "@/styles/flex";
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";

interface Props extends PropsWithChildren {
  title?: string;
}

export const Screen = ({ children, title }: Props) => {
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
        <SafeAreaView style={sx.container}>{children}</SafeAreaView>
      )}
    </>
  );
};

export const sx = StyleSheet.create({
  _: {},
  container: {
    paddingHorizontal: 16,
    paddingBottom: 0,
    flex: 1,
  },
  text: {
    color: COLOR.primary,
    fontFamily: FONT.medium,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  },
});
