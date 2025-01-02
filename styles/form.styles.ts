import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({
  form: {
    rowGap: 16,
  },
  formControl: {
    rowGap: 8,
  },
  label: {
    color: "#ddd",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    height: 40,
  },
  passwordWrapper: {
    position: "relative",
  },
  passwordIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  error: {
    color: "red",
  },
});
