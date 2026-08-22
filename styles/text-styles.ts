import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";
import { StyleSheet } from "react-native";

export const textStyles = StyleSheet.create({
  _: {},
  label: {
    fontFamily: FONT.medium,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.12,
  },
  input: {
    fontFamily: FONT.regular,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.12,
  },
  button: {
    fontFamily: FONT.medium,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  },
});
