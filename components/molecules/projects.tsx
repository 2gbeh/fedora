import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { flexStyles } from "@/styles/flex";

interface Chip {
  id: string;
  label: string;
}

const chips: Chip[] = [
  { id: "1", label: "All" },
  { id: "5", label: "HWP" },
  { id: "2", label: "UBTH" },
  { id: "3", label: "House" },
  { id: "4", label: "Decor" },
  { id: "6", label: "+" },
];

export function ChipFilter() {
  const [selected, setSelected] = useState("1");

  return (
    <FlatList
      data={chips}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ gap: 8 }}
      renderItem={({ item }) => {
        const isSelected = item.id === selected;
        return (
          <TouchableOpacity
            onPress={() => setSelected(item.id)}
            style={[
              sx.chip,
              { backgroundColor: isSelected ? "#6750A4" : "#F3F0F7" },
            ]}
          >
            <Text
              style={[sx.chipText, { color: isSelected ? "#fff" : "#111" }]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const sx = StyleSheet.create({
  _: {},
  container: {},
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    ...flexStyles.rowCenterCenter,
  },
  chipText: {
    fontSize: 12,
    fontWeight: "500",
  },
});
