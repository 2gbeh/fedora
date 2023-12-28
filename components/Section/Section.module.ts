import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: '',
    // border: "1px solid red",
  },
});

export type TSection = {
  label: string;
  action?: {
    text: string;
    handlePress: () => void;
  };
};
