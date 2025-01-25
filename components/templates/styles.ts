import { ViewStyle, TextStyle } from "react-native";
import { ThemeType } from "@/store/theme/theme.slice";
import { containerStyles } from "@/styles/container.styles";
import { typographyStyles } from "@/styles/typography.styles";
import { COLOR } from "@/constants/THEME";

export const exampleStyles = (theme: ThemeType) => ({
  _: {},
  container: {
    ...containerStyles.rowCenterBetween,
    flex: 1,
  } satisfies ViewStyle,
  label: {
    ...typographyStyles.labelLarge,
    color: COLOR[theme].onSurface,
  } satisfies TextStyle,
});
