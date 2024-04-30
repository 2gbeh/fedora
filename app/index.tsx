import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ScrollView,
  DimensionValue,
} from "react-native";
//
import SafeAreaInsets from "@/components/SafeAreaInsets";
import Sandbox from "@/components/Sandbox";
import SketchBox from "@/components/SketchBox";
import NoContent from "@/components/NoContent";
import AppBar from "@/components/AppBar";
import SectionHeading from "@/components/SectionHeading";
import TransactionItem from "@/components/TransactionItem";
import AddFavorite from "@/components/AddFavorite";
import Favorites from "@/components/Favorites";
import _Hero from "@/modules/Home/Hero";
//
import { useHome } from "@/modules/Home/useHome";
import { styles_flex } from "@/styles/Flex.module";
import styles from "@/modules/Home/Home.module";
import { TTransaction } from "@/server/transactions/transaction.entity";
import fakeTransactions from "@/data/fake-transactions";

export default function HomeScreen() {
  const { refetching, handleRefetch } = useHome();
  //
  return (
    <SafeAreaInsets>
      {/* <Sandbox /> */}
      <AppBar />
      <_Hero />
      {/* 
      TOP ACCOUNTS */}
      <SectionHeading
        title="Favorites"
        action={{ text: "See All", href: "#" }}
        styles_props={{ container: styles.top_heading }}
      />
      <View style={styles.top_content}>
        <FlatList
          data={fakeTransactions}
          keyExtractor={(item) => (item as TTransaction).account.name}
          horizontal
          renderItem={({ item }) => (
            <Favorites item={(item as TTransaction).account} />
          )}
          ListHeaderComponent={() => <AddFavorite />}
        />
      </View>
      {/* 
      RECENT TRANSACTIONS */}
      <View style={styles.bottom_container}>
        <SectionHeading
          title="Transactions"
          action={{ text: "See All", href: "#" }}
          styles_props={{ container: styles.bottom_heading }}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 640 }}>
          <View style={{ flex: 1 }}>
            <FlatList
              data={fakeTransactions}
              keyExtractor={(item) => (item as TTransaction).account.name}
              renderItem={({ item }) => {
                return (
                  <>
                    <TransactionItem item={item} />
                  </>
                );
              }}
              refreshControl={
                <RefreshControl
                  refreshing={refetching}
                  onRefresh={handleRefetch}
                />
              }
              ListEmptyComponent={() => (
                <NoContent text="No transactions this month" height={240} />
              )}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaInsets>
  );
}
