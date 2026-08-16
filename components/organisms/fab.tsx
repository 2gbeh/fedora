import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
//
import { flexStyles } from "@/styles/flex";
import { COLOR } from "@/constants/COLOR";

interface Props {
  action?: () => void;
  tab?: boolean;
}

export const FAB = ({ action, tab }: Props) => {
  return (
    <View style={[flexStyles.centerCenter, tab ? sx.tabFab : sx.fab]}>
      <TouchableOpacity onPress={action} style={sx.container}>
        <MaterialIcons name="add" size={24} color={COLOR.white} />
      </TouchableOpacity>
    </View>
  );
};

const sx = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.primary,
    borderRadius: 16,
    width: 56,
    height: 56,
    elevation: 4,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowColor: COLOR.black,
    ...flexStyles.centerCenter,
  },
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  tabFab: {
    marginTop: -8,
  },
});
