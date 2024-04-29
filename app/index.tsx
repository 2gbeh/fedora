import { StyleSheet, Text, View } from "react-native";
//
import SafeAreaInsets from "@/components/SafeAreaInsets";
import Sandbox from "@/components/Sandbox";
import AppBar from "@/components/AppBar";
import SectionHeading from "@/components/SectionHeading";
import TransactionItem from "@/components/TransactionItem";
import Favorites from "@/components/Favorites";
import _Hero from "@/modules/home/Hero";
//
import fakeTransactions from "@/data/fake-transactions";
import { styles_flex } from "@/styles/Flex.module";
import SketchBox from "@/components/SketchBox";

export default function HomeScreen() {
  return (
    <SafeAreaInsets>
      <AppBar />
      <_Hero />

      {/* TOP ACCOUNTS */}
      <View style={styles.top_container}>
        <SectionHeading
          title="Favorites"
          action={{ text: "See All", href: "#" }}
        />
        {/* LIST */}
        <View style={[styles_flex.row_center, styles.top_wrapper]}>
          {fakeTransactions.map((e, i) => (
            <Favorites key={i} index={i} item={e.account} />
          ))}
        </View>
      </View>

      {/* RECENT TRANSACTIONS */}
      <View style={styles.bottom_container}>
        <SectionHeading
          title="Transactions"
          action={{ text: "See All", href: "#" }}
        />
        {/* LIST */}
        <View style={styles.bottom_wrapper}>
          {fakeTransactions.map(
            (e, i) => i != 3 && <TransactionItem key={i} index={i} item={e} />
          )}
        </View>
      </View>

      {/* <Sandbox /> */}
    </SafeAreaInsets>
  );
}

const styles = StyleSheet.create({
  top_container: { paddingHorizontal: 25 },
  top_wrapper: { marginVertical: 15, marginBottom: 10, gap: 20 },
  bottom_container: { paddingHorizontal: 25 },
  bottom_wrapper: { marginVertical: 15, gap: 20 },
});
