import { Pressable, StyleSheet, Text, View } from "react-native";
import { Avatar } from "../atoms/avatar";
import { flexStyles } from "@/styles/flex";
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";
import { MaterialIcons } from "@expo/vector-icons";

export const AppBar = () => {
  return (
    <View style={sx.container}>
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
        <MaterialIcons
          name="notifications"
          size={18}
          color={"#79747E"}
        />
        <View style={sx.indicator} />
      </Pressable>
    </View>
  );
};

const sx = StyleSheet.create({
  _: {},
  container: {
    ...flexStyles.rowCenterBetween,
    padding: 16,
    paddingBottom: 0,
  },
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
    backgroundColor: COLOR.input,
    borderRadius: 28,
    width: 28,
    height: 28,
    ...flexStyles.colCenterCenter,
  },
  indicator: {
    backgroundColor: COLOR.destructive,
    borderRadius: 8,
    width: 8,
    height: 8,
    position: "absolute",
    right: 0,
    top: 0,
  },
});
