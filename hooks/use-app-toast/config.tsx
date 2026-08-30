import { Pressable, TextStyle, ViewStyle } from "react-native";
import Toast, { BaseToast, BaseToastProps } from "react-native-toast-message";
import { MaterialIcons } from "@expo/vector-icons";
//
import { textStyles } from "@/styles/text-styles";
import { flexStyles } from "@/styles/flex-styles";
import { MaterialIconName } from "@/types/react-types";
import { COLOR } from "@/constants/COLOR";

const createToast =
  (backgroundColor: string, icon?: MaterialIconName) =>
  (props: BaseToastProps) => (
    <BaseToast
      {...props}
      text2Style={sx.text}
      text2NumberOfLines={2}
      style={sx.container(backgroundColor)}
      contentContainerStyle={{ paddingHorizontal: 4 }}
      renderLeadingIcon={() => (
        <MaterialIcons name={icon} size={20} color={COLOR.white} />
      )}
      renderTrailingIcon={() => (
        <Pressable onPress={() => Toast.hide()}>
          <MaterialIcons name="close" size={16} color={COLOR.neutral} />
        </Pressable>
      )}
    />
  );

const sx = {
  _: {},
  container: (backgroundColor: string) =>
    ({
      backgroundColor,
      borderLeftWidth: 0,
      borderRadius: 8,
      paddingHorizontal: 16,
      height: 56,
      ...flexStyles.rowCenterBetween,
      gap: 8,
    }) as ViewStyle,
  text: {
    color: COLOR.white,
    ...textStyles.input,
    lineHeight: 18,
  } as TextStyle,
};

export const toastConfig = {
  info: createToast(COLOR.link, "info"),
  success: createToast(COLOR.success, "check-circle"),
  warning: createToast(COLOR.warning, "warning"),
  danger: createToast(COLOR.danger, "cancel"),
};
