import { StyleSheet } from "react-native";

export const viewStyles = StyleSheet.create({
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  row_center: {
    flexDirection: "row",
    alignItems: "center",
  },
  row_center_around: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  row_center_between: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row_start_between: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
