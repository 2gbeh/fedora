import { StyleSheet } from "react-native";

export const flexStyles = StyleSheet.create({
  _: {},
  flex_1: {
    flex: 1,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowCenterCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
