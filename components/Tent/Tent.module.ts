import { StyleSheet } from "react-native";
import COLOR from "@/constants/COLOR";

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  figure: {
    backgroundColor: COLOR.foreground,
    borderRadius: 99,
    marginTop: 120,
    marginBottom: 20,
    height: 128,
    width: 128,
  },
  hgroup: { gap: 10 },
  h1: { color: COLOR.text, fontSize: 24, fontWeight: "bold" },
  p: {
    color: COLOR.subtext,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 22,
    // fontStyle: "italic",
  },
  mark: { color: COLOR.text, marginHorizontal: 8 },
  footer: { position: "absolute", bottom: 40 },
  button: {
    backgroundColor: COLOR.brand,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  label: {
    color: COLOR.text,
    marginLeft: 8,
    textTransform: "uppercase",
    fontWeight: "600",
  },
});

export default styles;
