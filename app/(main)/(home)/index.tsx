import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import { router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
//
import Header from "@/components/molecules/header";
import SectionHeader from "@/components/atoms/section-header";
import HorizontalList from "@/components/molecules/horizontal-list";
import JustifiedListItem from "@/components/molecules/justified-list-item";
import FAB from "@/components/atoms/fab";
import { COLOR, FONT } from "@/constants/THEME";
//
import { homeStyles as s, VirtualWallet } from "@/features/home";

export default function HomeScreen() {
  console.log("🚀 ~ HomeScreen");
  // renders
  return (
    <View style={s.container}>
      <Header />
      <View style={s.content}>
        <VirtualWallet />
        <SectionHeader title="Transactions" />
        <FlatList
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
          renderItem={({ item }) => <JustifiedListItem {...item} />}
          contentContainerStyle={{ flex: 1, rowGap: 24 }}
        />
      </View>
      <FAB />
    </View>
  );
}
