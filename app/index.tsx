import { SafeAreaView } from "react-native-safe-area-context";
//
import { TransactionList } from "@/components/molecules/transaction/list";
import { AppBar } from "@/components/organisms/app-bar";
import { SearchBar } from "@/components/organisms/search-bar";
import { SectionHeader } from "@/components/organisms/section-header";
import { FAB } from "@/components/organisms/fab";
// 
import { homeStyles as sx } from "@/components/species/home/styles";
import { containerStyles } from "@/styles/container";

export default function HomeScreen() {
  return (
    <SafeAreaView style={containerStyles.safeArea}>
      <AppBar />
      <SearchBar />
      <SectionHeader />
      <TransactionList />
      <FAB />
    </SafeAreaView>
  );
}
