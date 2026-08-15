import { PropsWithChildren } from "react";
import { Shadow } from "react-native-shadow-2";

interface Props extends PropsWithChildren {
  config?: [number, number, number, string];
}

export const DropShadow = ({ children, config }: Props) => {
  const [x = 0, y = -2, blur = 10.4, color = "#0000001A"] = config || [];

  return (
    <Shadow distance={blur} startColor={color} offset={[x, y]}>
      {children}
    </Shadow>
  );
};
