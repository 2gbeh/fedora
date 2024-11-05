import React from "react";
import { View, Text, FlatList } from "react-native";
//
import { favoritesStyles as s } from "./styles";
import Avatar from "@/components/atoms/avatar";

interface IProps {}

const Favorites: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Favorites");
  // renders
  return (
    <View style={s.container}>
      <FlatList
        horizontal
        data={[
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
          { id: 9 },
          { id: 10 },
        ]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={s.item}>
            <Avatar />
            <Text style={s.label}>PL</Text>
          </View>
        )}
        contentContainerStyle={{ columnGap: 24 }}
      />
    </View>
  );
};

export default React.memo(Favorites);
