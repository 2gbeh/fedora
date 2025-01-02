import React from "react";
import { Text, View, TextStyle, ViewStyle } from "react-native";
//
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { containerStyles } from "@/styles/container.styles";
import { typographyStyles } from "@/styles/typography.styles";
import { COLOR } from "@/constants/THEME";

interface IProps {}

const Example: React.FC<IProps> = ({}) => {
  const sx = themedStyles(useAppSelector(selectTheme));
  console.log("🚀 ~ Example");
  // RENDER
  return (
    <View style={sx.container}>
      <Text style={sx.label}>Example</Text>
    </View>
  );
};

export default React.memo(Example);

const themedStyles = (theme: ThemeType) => ({
  container: {
    flex: 1,
  } satisfies ViewStyle,
  label: {
    color: COLOR[theme].onSurface,
  } satisfies TextStyle,
});
