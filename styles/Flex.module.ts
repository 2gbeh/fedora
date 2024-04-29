import { StyleSheet } from "react-native";

export const styles_flex = StyleSheet.create({
  row_start: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  row_end: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  col_end: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  row_center: {
    flexDirection: "row",
    alignItems: "center",
  },
  col_center: {
    flexDirection: "column",
    alignItems: "center",
  },
  row_center_center: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  row_start_between: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  row_end_between: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  row_center_between: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
