import { COLOR } from "@/constants/COLOR";

export type AppButtonVariant =
  | "solid"
  | "outline"
  | "success"
  | "warning"
  | "danger";

const getVariantStyles = (variant?: AppButtonVariant) => {
  switch (variant) {
    case "outline":
      return {
        backgroundColor: COLOR.nil,
        borderColor: COLOR.primary,
        color: COLOR.primary,
      };
    case "success":
      return {
        backgroundColor: COLOR.success,
        borderColor: COLOR.success,
        color: COLOR.white,
      };
    case "warning":
      return {
        backgroundColor: COLOR.warningContainer,
        borderColor: COLOR.warningContainer,
        color: COLOR.warning,
      };
    case "danger":
      return {
        backgroundColor: COLOR.dangerContainer,
        borderColor: COLOR.dangerContainer,
        color: COLOR.danger,
      };
    default:
      return {
        backgroundColor: COLOR.primary,
        borderColor: COLOR.primary,
        color: COLOR.white,
      };
  }
};

export const appButtonUtils = {
  getVariantStyles,
};
