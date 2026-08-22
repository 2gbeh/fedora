import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
//
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";
import { flexStyles } from "@/styles/flex-styles";

const data = [
  { id: "3", label: "HWP" },
  { id: "4", label: "UBTH" },
  { id: "2", label: "House" },
  { id: "1", label: "Decor" },
];

export function ProjectsFilterBar() {
  const router = useRouter();
  const [selected, setSelected] = useState("0");

  const transformedData = [{ id: "0", label: "All" }, ...data];

  return (
    <View>
      <FlatList
        data={transformedData}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={sx.__.container}
        renderItem={({ item }) => {
          const active = item.id === selected;
          return (
            <TouchableOpacity
              onPress={() => setSelected(item.id)}
              style={sx.chip(active)}
            >
              <Text style={sx.chipText(active)}>{item.label}</Text>
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={
          <TouchableOpacity
            style={sx.chip()}
            onPress={() => router.push("/projects/create")}
          >
            <MaterialIcons name="add" size={18} color={COLOR.muted} />
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const sx = {
  _: {},
  __: StyleSheet.create({
    container: {
      gap: 8,
    },
  }),
  chip: (active?: boolean) =>
    ({
      backgroundColor: active ? COLOR.primary : COLOR.background,
      borderRadius: 16,
      paddingHorizontal: 16,
      height: 32,
      ...flexStyles.centerCenter,
    }) as ViewStyle,
  chipText: (active?: boolean) =>
    ({
      color: active ? COLOR.white : COLOR.secondary,
      fontFamily: FONT.regular,
      fontSize: 12,
      lineHeight: 18,
      letterSpacing: 0.12,
    }) as TextStyle,
};
