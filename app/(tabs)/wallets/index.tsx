import { View, FlatList, RefreshControl, ScrollView, Text } from "react-native";
//
import SafeAreaInsets from "@/components/SafeAreaInsets";
import SketchBox from "@/components/SketchBox";
import NoContent from "@/components/NoContent";
import AppBar from "@/components/AppBar";
import Fab from "@/components/Fab";
import SearchBar from "@/components/SearchBar";
import SectionHeading from "@/components/SectionHeading";
import WalletCard from "@/components/WalletCard";
//
import { useHome } from "@/modules/Home/useHome";
import { IWallet } from "@/server/wallets/wallet.dto";
import fakeWallets from "@/data/fake-wallets";
//
import styles from "@/modules/Wallets/Wallets.module";

export default function WalletsScreen() {
  const { refetching, handleRefetch } = useHome();
  //
  return (
    <>
      <Fab path="#" />
      <SafeAreaInsets>
        <AppBar stack="Wallets" />

        {/* SEARCH BAR */}
        <SearchBar />

        {/* CARDS */}
        <View style={styles.container}>
          <FlatList
            contentContainerStyle={styles.content}
            data={fakeWallets}
            keyExtractor={(item) => (item as IWallet).account_name}
            renderItem={({ item }) => <WalletCard item={item} />}
            ListHeaderComponent={() => (
              <SectionHeading
                title="My Cards"
                action={{ text: "Sort", path: "#" }}
                margin={[5, 0, 0]}
              />
            )}
            ListEmptyComponent={() => (
              <NoContent text="No wallets this month" height={240} />
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
