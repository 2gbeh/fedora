import { Pressable, StyleSheet, Text, View } from "react-native";
import { Avatar } from "../atoms/avatar";
import { flexStyles } from "@/styles/flex";
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";

export const AppBar = () => {
  return (
    <View
      style={flexStyles.rowCenterBetween}
    >
      <View style={sx.figure}>
        <Avatar
          src={require("@/assets/images/favicon.png")}
          alt={APP.name}
          relativePath
        />
        <View style={sx.figcaption}>
          <Text style={sx.text}>Good morning,</Text>
          <Text style={sx.subtext}>Emanuel</Text>
        </View>
      </View>
      <Pressable style={sx.iconContainer}>
        <View style={sx.indicator} />
      </Pressable>
    </View>
  );
};

const sx = StyleSheet.create({
  _: {},
  figure: {
    ...flexStyles.rowCenter,
    gap: 8,
  },
  figcaption: {
    // ...flexStyles.colStart,
  },
  text: {
    color: COLOR.foreground,
    fontSize: 12,
  },
  subtext: {
    color: COLOR.foreground,
    fontSize: 16,
  },
  iconContainer: {
    backgroundColor: COLOR.border,
    borderRadius: 24,
    width: 24,
    height: 24,
  },
  indicator: {
    backgroundColor: COLOR.destructive,
    borderRadius: 10,
    width: 10,
    height: 10,
    position: "absolute",
    right: 0,
    top: 0,
  },
});
