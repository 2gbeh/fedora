import { ViewStyle } from "react-native";
import { ThemeType } from "@/store/theme/theme.slice";
import { containerStyles } from "@/styles/container.styles";
import { COLOR } from "@/constants/THEME";

export const authStyles = (theme: ThemeType) => ({
  _: {},
  container: {
    backgroundColor: COLOR.dark.surface,
    flex: 1,
  } satisfies ViewStyle,
  content: {
    backgroundColor: COLOR[theme].surfaceContainer,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingVertical: 24,
    paddingHorizontal: 16,
    rowGap: 16,
  } satisfies ViewStyle,
  checkboxWrapper: {
    ...containerStyles.rowCenter,
    columnGap: 4,
  } satisfies ViewStyle,
  checkboxProps: {
    color: COLOR[theme].tertiary,
    uncheckedColor: COLOR[theme].tertiary,
    position: "leading" as "leading",
    labelVariant: "bodyMedium" as "bodyMedium",
  },
});
