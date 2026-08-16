import { View } from "react-native";

interface Props {
  t?: number;
  b?: number;
  y?: number;
  l?: number;
  r?: number;
  x?: number;
}

export const Spacing = ({ t, b, y, l, r, x }: Props) => {
  return (
    <View
      style={{
        marginTop: t,
        marginBottom: b,
        marginVertical: y,
        marginLeft: l,
        marginRight: r,
        marginHorizontal: x,
      }}
    />
  );
};
