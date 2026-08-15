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
    <TouchableOpacity onPress={action} style={flexStyles.centerCenter}>
      <View style={[sx.container, tab ? sx.tabFab : sx.fab]}>
        <MaterialIcons name="add" size={24} color={COLOR.primaryForeground} />
      </View>
    </TouchableOpacity>
  );
};

const sx = StyleSheet.create({
  _: {},
  container: {
    ...flexStyles.centerCenter,
    backgroundColor: COLOR.primary,
    borderRadius: 16,
    width: 56,
    height: 56,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
  },
  tabFab: {
    marginTop: -8,
  },
});
