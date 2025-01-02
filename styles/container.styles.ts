import { StyleSheet } from "react-native";

export const containerStyles = StyleSheet.create({
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowCenterAround: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  rowCenterBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowCenterCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowCenterEnd: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  rowEndBetween: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  rowStartBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowStartEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
