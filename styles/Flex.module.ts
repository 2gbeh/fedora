import { StyleSheet } from "react-native";

export default StyleSheet.create({
  item: {
    flex: 1,
    width: "100%",
  },
  // COLUMN
  columnCenterCenter: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  columnEnd: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  columnStart: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  // ROW
  rowCenterBetween: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowCenterStart: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rowStartBetween: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});
