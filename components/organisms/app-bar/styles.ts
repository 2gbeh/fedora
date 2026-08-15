import { StyleSheet } from "react-native";
import { flexStyles } from "@/styles/flex";
import { COLOR } from "@/constants/COLOR";

export const appBarStyles = StyleSheet.create({
  _: {},
  container: {
    borderWidth: 1,
    paddingHorizontal: 4,
    height: 64,
    ...flexStyles.rowCenterBetween,
    gap: 8,
  },
  figure: {
    ...flexStyles.rowCenter,
    gap: 8,
  },
  figcaption: {
    // ...flexStyles.colStart,
  },
  text: {
    color: COLOR.foreground,
    fontSize: 16,
    fontWeight: "700",
  },
  subtext: {
    color: COLOR.foreground,
    fontSize: 16,
  },
  rightSection: {
    ...flexStyles.rowCenter,
    gap: 16,
  },
  iconContainer: {
    backgroundColor: COLOR.input,
    borderRadius: 28,
    width: 28,
    height: 28,
    ...flexStyles.colCenterCenter,
  },
  indicator: {
    backgroundColor: COLOR.destructive,
    borderRadius: 8,
    width: 8,
    height: 8,
    position: "absolute",
    right: 0,
    top: 0,
  },
});
