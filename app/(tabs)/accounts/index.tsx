import { View, FlatList, RefreshControl, ScrollView, Text } from "react-native";
//
import SafeAreaInsets from "@/components/SafeAreaInsets";
import SketchBox from "@/components/SketchBox";
import NoContent from "@/components/NoContent";
import AppBar from "@/components/AppBar";
import Fab from "@/components/Fab";
import SearchBar from "@/components/SearchBar";
import SectionHeading from "@/components/SectionHeading";
import AccountCard from "@/components/AccountCard";
//
import { useHome } from "@/modules/Home/useHome";
import { IAccount } from "@/server/accounts/account.dto";
import fakeAccounts from "@/data/fake-accounts";
//
import styles from "@/modules/Accounts/Accounts.module";

export default function AccountsScreen() {
  const { refetching, handleRefetch } = useHome();
  //
  return (
    <>
      <Fab path="#" />
      <SafeAreaInsets>
        <AppBar stack="Accounts" />

        {/* SEARCH BAR */}
        <SearchBar />

        {/* ACCOUNT CARDS */}
        <View style={styles.container}>
          <FlatList
            contentContainerStyle={styles.wrapper}
            data={fakeAccounts}
            keyExtractor={(item) => (item as IAccount).name}
            renderItem={({ item }) => <AccountCard item={item} />}
            ListHeaderComponent={() => (
              <SectionHeading
                title="All accounts"
                action={{ text: "Sort", path: "#" }}
                margin={[5, 0, 0]}
              />
            )}
            ListEmptyComponent={() => (
              <NoContent text="No accounts found" height={240} />
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
