import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
//
import { NAIRA } from "utils";
import APP from "utils/constants/APP";
import mockGetTransactions from "data/getTransactions";

import type { TTransaction } from "components/_home/Recent/Recent.module";

const DataProps: TTransaction[] = mockGetTransactions;

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1",
    title: "1st Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f62",
    title: "2nd Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "3rd Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "4th Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "5th Item",
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function HomeTabScreen() {
  const [selectedId, setSelectedId] = React.useState<string>();

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={k.container}>
      {/* HERO */}
      <View style={k.hero_container}>
        <Text style={k.hero_p}>Total Balance</Text>
        <Text style={k.hero_h1}>
          <Text style={k.hero_sup}>{NAIRA}</Text>
          220,312.80
          <Text style={k.hero_sub}>.80</Text>
        </Text>
      </View>

      {/* FAVORITE */}
      <View style={k.favourite_container}>
        <FlatList
          horizontal
          data={DataProps}
          keyExtractor={(item) => item.amount}
          contentContainerStyle={k.favourite_content}
          renderItem={({ item }) => (
            <View style={k.favourite_card}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </View>
          )}
        ></FlatList>
      </View>

      {/* RECENT */}
      <View style={k.recent_container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

const k = StyleSheet.create({
  container: {
    padding: 20,
  },
  hero_container: {
    backgroundColor: APP.color.brand,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    height: 180,
  },
  hero_p: {
    color: "white",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  hero_h1: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
  hero_sup: {
    fontSize: 18,
    letterSpacing: 1,
    marginRight: 2,
    top: -10,
  },
  hero_sub: {
    fontSize: 18,
    letterSpacing: 1,
  },
  favourite_container: {
    marginTop: 20,
  },
  favourite_content: {
    columnGap: 10,
  },
  favourite_card: {
    width: 160,
  },
  recent_container: {
    marginTop: 20,
    maxHeight: 320,
  },
  recent_content: {
    columnGap: 10,
  },
  recent_card: {
    width: 160,
  },
});
