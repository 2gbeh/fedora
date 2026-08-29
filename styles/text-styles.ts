import { StyleSheet } from "react-native";
import { FONT } from "@/constants/FONT";

export const textStyles = StyleSheet.create({
  _: {},
  title: {
    fontFamily: FONT.bold,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  label: {
    fontFamily: FONT.regular,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.12,
  },
  label_medium: {
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
