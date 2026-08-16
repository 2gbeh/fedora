import { StyleSheet } from "react-native";
import { flexStyles } from "@/styles/flex";
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";


export const heroStyles = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.primary,
    borderRadius: 28,
    padding: 28,
    gap: 16,
  },
  label: {
    color: COLOR.muted,
    fontFamily: FONT.regular,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  value: {
    color: COLOR.white,
    fontFamily: FONT.medium,
    fontSize: 32,
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  btn: {
    backgroundColor: COLOR.successContainer,
    borderRadius: 116,
    height: 40,
    ...flexStyles.rowCenterCenter,
    gap: 8,
    flex: 1,
  },
  btnSec: {
    backgroundColor: COLOR.dangerContainer,
  },
  btnText: {
    color: COLOR.primary,
    fontFamily: FONT.regular,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
});
