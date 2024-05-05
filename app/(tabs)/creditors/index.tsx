import { View, FlatList, RefreshControl, ScrollView, Text } from "react-native";
//
import SafeAreaInsets from "@/components/SafeAreaInsets";
import SketchBox from "@/components/SketchBox";
import NoContent from "@/components/NoContent";
import AppBar from "@/components/AppBar";
import Fab from "@/components/Fab";
import SearchBar from "@/components/SearchBar";
import SectionHeading from "@/components/SectionHeading";
import CreditorCard from "@/components/CreditorCard";
//
import { useHome } from "@/modules/Home/useHome";
import { IBill } from "@/server/bills/bill.dto";
import fakeBills from "@/data/fake-bills";
//
import styles from "@/modules/Creditors/Creditors.module";

export default function CreditorsScreen() {
  const { refetching, handleRefetch } = useHome();
  //
  return (
    <SafeAreaInsets>
      <AppBar stack="Creditors" />
      <Fab path="#" />

      {/* SEARCH BAR */}
      <SearchBar />

      {/* GRID CARDS */}
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.content}
          columnWrapperStyle={styles.wrapper}
          numColumns={2}
          //
          data={fakeBills}
          keyExtractor={(item) => (item as IBill).account.name}
          renderItem={({ item }) => <CreditorCard item={item} />}
          ListHeaderComponent={() => (
            <SectionHeading
              title="All creditors"
              action={{ text: "Sort", path: "#" }}
              margin={[5, 0, 0]}
            />
          )}
          ListEmptyComponent={() => (
            <NoContent text="No bills this month" height={240} />
          )}
          refreshControl={
            <RefreshControl refreshing={refetching} onRefresh={handleRefetch} />
          }
        />
      </View>
    </SafeAreaInsets>
  );
}
