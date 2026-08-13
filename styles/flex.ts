import { StyleSheet } from "react-native";

export const flexStyles = StyleSheet.create({
  _: {},
  flex1: {
    flex: 1,
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowCenterBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // ////////////////////////////////////////
  colStart: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  colEnd: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  colCenterCenter: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
