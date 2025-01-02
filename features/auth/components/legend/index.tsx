import React from "react";
import { Text, View, TextStyle } from "react-native";
//
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { typographyStyles } from "@/styles/typography.styles";
import { COLOR } from "@/constants/THEME";

interface IProps {
  title?: string;
  subtitle?: string;
}

const Legend: React.FC<IProps> = ({ title, subtitle }) => {
  const sx = themedStyles(useAppSelector(selectTheme));
  console.log("🚀 ~ Legend");
  // RENDER
  return (
    <View>
      {!!title && <Text style={sx.title}>{title}</Text>}
      {!!subtitle && <Text style={sx.subtitle}>{subtitle}</Text>}
    </View>
  );
};

export default React.memo(Legend);

const themedStyles = (theme: ThemeType) => ({
  title: {
    ...typographyStyles.bodyLarge,
    color: COLOR[theme].onSurface,
  } satisfies TextStyle,
  subtitle: {
    ...typographyStyles.bodyMedium,
    color: COLOR[theme].onSurfaceVariant,
  } satisfies TextStyle,
});
