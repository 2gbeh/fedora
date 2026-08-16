import { StyleSheet } from "react-native";
import { flexStyles } from "@/styles/flex";
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";

export const appBarStyles = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.white,
    borderWidth: 0,
    paddingLeft: 16,
    height: 64,
    ...flexStyles.rowCenterBetween,
    gap: 8,
  },
  figure: {
    ...flexStyles.rowCenter,
    gap: 8,
  },
  greeting: {
    color: COLOR.secondary,
    fontFamily: FONT.regular,
    fontSize: 14,
    // lineHeight: 22,
    letterSpacing: 0.12,
  },
  username: {
    color: COLOR.primary,
    fontFamily: FONT.bold,
    fontSize: 16,
    // lineHeight: 24,
    letterSpacing: 0.12,
  },
  right: {
    ...flexStyles.rowCenter,
    paddingRight: 4,
  },
  iconContainer: {
    // borderWidth: 1,
    width: 48,
    height: 48,
    ...flexStyles.centerCenter,
  },
});
