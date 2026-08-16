import { View } from "react-native";

interface Props {
  top?: number;
}

export const Spacing = (props: Props) => {
  return <View style={{ marginTop: props?.top }} />;
};
