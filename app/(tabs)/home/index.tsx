import { View, FlatList, RefreshControl, ScrollView, Text } from "react-native";
import SafeAreaInsets from "@/components/SafeAreaInsets";
import Sandbox from "@/components/Sandbox";
import SketchBox from "@/components/SketchBox";
import NoContent from "@/components/NoContent";
import AppBar from "@/components/AppBar";
import Fab from "@/components/Fab";
import SectionHeading from "@/components/SectionHeading";
import TransactionCard from "@/components/TransactionCard";
import AddFavorite from "@/components/AddFavorite";
import Favorites from "@/components/Favorites";
import _Hero from "@/modules/Home/Hero";
//
import { useHome } from "@/modules/Home/useHome";
import { ITransaction } from "@/server/transactions/transaction.dto";
import fakeTransactions from "@/data/fake-transactions";
//
import styles from "@/modules/Home/Home.module";

export default function HomeScreen() {
  const { refetching, handleRefetch } = useHome();
  //
  return (
    <>
      {/* <Sandbox /> */}
      <Fab path="#" />
      <SafeAreaInsets>
        <AppBar />

        {/* HERO */}
        <_Hero />

        {/* TOP ACCOUNTS */}
        <SectionHeading
          title="Favorites"
          action={{ text: "See All", path: "/home/" }}
          margin={[0, 25]}
        />
        <View style={styles.top_content}>
          <FlatList
            horizontal
            data={fakeTransactions}
            keyExtractor={(item) => (item as ITransaction).account.name}
            renderItem={({ item }) => (
              <Favorites item={(item as ITransaction).account} />
            )}
            ListHeaderComponent={() => <AddFavorite />}
          />
        </View>

        {/* RECENT TRANSACTIONS */}
        <View style={styles.bottom_container}>
          <SectionHeading
            title="Recent Transactions"
            action={{ text: "See All", path: "#" }}
            margin={[0, 0, 15, 0]}
          />
          <FlatList
            contentContainerStyle={styles.bottom_content}
            data={fakeTransactions}
            keyExtractor={(item) => (item as ITransaction).account.name}
            renderItem={({ item }) => <TransactionCard item={item} />}
            ListEmptyComponent={() => (
              <NoContent text="No transactions this month" height={240} />
            )}
            refreshControl={
              <RefreshControl
                refreshing={refetching}
                onRefresh={handleRefetch}
              />
            }
          />
        </View>
      </SafeAreaInsets>
    </>
  );
}
