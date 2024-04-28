import { useState } from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";
//
import SafeAreaInsets from "@/components/SafeAreaInsets";
import Sandbox from "@/components/Sandbox";
import AppBar from "@/components/AppBar";
import _Hero from "@/modules/home/Hero";
import _TransactionList from "@/modules/home/TransactionList";
//
import COLOR from "@/constants/COLOR";
import { styles_flex } from "@/styles/Flex.module";

export default function HomeScreen() {
  const [x, y] = useState(-1);
  return (
    <SafeAreaInsets>
      <AppBar />
      {/*  */}
      <_Hero />
      {/*  */}
      <_TransactionList />
      {/*  */}
      {/* <Sandbox /> */}
    </SafeAreaInsets>
  );
}
