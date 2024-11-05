import React from "react";
import { View, Text, FlatList } from "react-native";
//
import Avatar from "@/components/atoms/avatar";
import { StringHelper } from "@/utils/helpers/common/string.helper";
//
import { favoritesStyles as s } from "./styles";

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
            <Text style={s.label}>
              {StringHelper.truncate("Plateaumed.com", 10)}
            </Text>
          </View>
        )}
        ListHeaderComponent={
          <View style={s.header}>
            <View style={s.button}>
              <Text style={s.button_label}>+</Text>
            </View>
            <Text style={s.heading}>Add</Text>
          </View>
        }
        contentContainerStyle={{ columnGap: 16 }}
      />
    </View>
  );
};

export default React.memo(Favorites);
