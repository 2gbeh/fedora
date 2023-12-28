import { StyleSheet, TextStyle } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: "",
    // border: "1px solid blue",
  },
  avatarParent: { position: "relative" },
  avatarChild: { position: "absolute", bottom: -2, right: -2 },
  title: { fontSize: 16 },
  narration: { color: "#777", fontSize: 13 },
  amount: (type: number = 0): TextStyle => ({
    color: type < 1 ? "#e11" : "#16BC00",
    fontSize: 14,
  }),
  date: { color: "#777", fontSize: 12 },
});

export type TTransaction = {
  type: number;
  amount: number;
  narration: string;
  transaction_date: string;
  account: {
    avatar?: string | null;
    name: string;
    display_name?: string | null;
  };
  wallet: {
    avatar?: string | null;
    name: string;
    short_name?: string | null;
  };
};
