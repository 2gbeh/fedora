import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import { router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
//
import SectionHeader from "@/components/atoms/section-header";
import Header from "@/components/molecules/header";
import HorizontalList from "@/components/molecules/horizontal-list";
import JustifiedListItem from "@/components/molecules/justified-list-item";
import { COLOR, FONT } from "@/constants/THEME";
//
import { homeStyles as s, Hero } from "@/features/home";

export default function HomeScreen() {
  console.log("🚀 ~ HomeScreen");
  // renders
  return (
    <View style={s.container}>
      <Header />
      <Hero />
      <SectionHeader />
      <HorizontalList />
      <SectionHeader />
      <JustifiedListItem />
    </View>
  );
}
