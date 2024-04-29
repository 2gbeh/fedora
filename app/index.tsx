import { FlatList, StyleSheet, Text, View } from "react-native";
//
import SafeAreaInsets from "@/components/SafeAreaInsets";
import Sandbox from "@/components/Sandbox";
import AppBar from "@/components/AppBar";
import SectionHeading from "@/components/SectionHeading";
import TransactionItem from "@/components/TransactionItem";
import AddFavorite from "@/components/AddFavorite";
import Favorites from "@/components/Favorites";
import _Hero from "@/modules/home/Hero";
//
import COLOR from "@/constants/COLOR";
import { styles_flex } from "@/styles/Flex.module";
import SketchBox from "@/components/SketchBox";
import fakeTransactions from "@/data/fake-transactions";

export default function HomeScreen() {
  return (
    <SafeAreaInsets>
      <AppBar />
      <_Hero />

      {/* TOP ACCOUNTS */}
      <SectionHeading
        title="Favorites"
        action={{ text: "See All", href: "#" }}
        styles_props={{ container: styles.top_container }}
      />
      <View style={styles.top_wrapper}>
        <FlatList
          data={fakeTransactions}
          keyExtractor={(item) => item.account.name}
          horizontal
          renderItem={({ item }) => <Favorites item={item.account} />}
          ListHeaderComponent={() => <AddFavorite />}
        />
      </View>

      {/* RECENT TRANSACTIONS */}
      <View style={styles.bottom_container}>
        <FlatList
          data={fakeTransactions}
          keyExtractor={(item) => item.account.name}
          renderItem={({ item }) => <TransactionItem item={item} />}
          ListHeaderComponent={() => (
            <SectionHeading
              title="Transactions"
              action={{ text: "See All", href: "#" }}
            />
          )}
        />
      </View>

      {/* <Sandbox /> */}
    </SafeAreaInsets>
  );
}

const styles = StyleSheet.create({
  top_container: { paddingHorizontal: 25 },
  top_wrapper: { marginTop: 15, marginBottom: 10, marginLeft: 25},
  bottom_container: { paddingHorizontal: 25 },
});
