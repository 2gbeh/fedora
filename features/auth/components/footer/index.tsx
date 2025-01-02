import React from "react";
import { Text, View, TextStyle, ViewStyle } from "react-native";
import { Href } from "expo-router";
//
import Hyperlink from "@/components/hyperlink";
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { containerStyles } from "@/styles/container.styles";
import { typographyStyles } from "@/styles/typography.styles";
import { COLOR } from "@/constants/THEME";

interface IProps {
  title?: string;
  subtitle: string;
  href?: Href;
}

const Footer: React.FC<IProps> = ({ title, subtitle, href = "/" }) => {
  const sx = themedStyles(useAppSelector(selectTheme));
  console.log("🚀 ~ Footer");
  // RENDER
  return (
    <>
      <View />
      <View style={sx.container}>
        {!!title && <Text style={sx.label}>{title}</Text>}
        <Hyperlink href={href}>{subtitle}</Hyperlink>
      </View>
    </>
  );
};

export default React.memo(Footer);

const themedStyles = (theme: ThemeType) => ({
  container: {
    ...containerStyles.rowCenterCenter,
    columnGap: 4,
  } satisfies ViewStyle,
  label: {
    ...typographyStyles.labelLarge,
    color: COLOR[theme].onSurfaceVariant,
  } satisfies TextStyle,
});
