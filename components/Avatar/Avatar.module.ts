import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    overflow: "hidden",
  },
  flex: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export type TAvatar = {
  uri?: string;
  fit?: "cover" | "fill";
  size?: number;
  radius?: number;
  isStatic?: boolean;
};

export type TAvatarText = {
  name?: string;
  color?: string;
  background?: string;
  radius?: number;
  size?: number;
};

export const DEFAULT_SIZE = 48;

export const BLUR_HASH =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export function getColor(color: string): string {
  const COLOR = [
    "#009688",
    "#00bcd4",
    "#03a9f4",
    "#2196f3",
    "#3f51b5",
    "#4caf50",
    "#607d8b",
    "#673ab7",
    "#795548",
    "#8bc34a",
    "#9c27b0",
    "#9e9e9e",
    //
    "#cddc39",
    "#e91e63",
    "#f44336",
    "#ff5722",
    "#ff9800",
    "#ffc107",
    "#ffeb3b",
  ];
  //
  if (color === "random") {
    let i = Math.floor(Math.random() * (COLOR.length - 0 + 1)) + 0;
    return COLOR[i];
  }
  return color;
}

export function getText(name: string): string {
  let names = name.toLocaleUpperCase().split(" ");
  return names.length > 1
    ? names[0][0] + names[1][0]
    : names[0][0] + names[0][1];
}
