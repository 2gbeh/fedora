import { Screen } from "@/components/atoms/screen";
import { Spacing } from "@/components/atoms/spacing";
import { SectionHeader } from "@/components/organisms/section-header";
import { Hero } from "@/components/species/home/ui/hero";
import { ProjectsFilterBar } from "@/components/species/home/ui/projects-filter-bar";
import { RecentTransactions } from "@/components/species/home/ui/recent-transactions";

export default function HomeScreen() {
  return (
    <Screen title="Dashboard">
      <Spacing top={8} />
      <Hero />
      <Spacing top={16} />
      <SectionHeader
        label="Expense Accounts"
        action={{ path: "/transactions" }}
      />
      <Spacing top={16} />
      <ProjectsFilterBar />
      <Spacing top={16} />
      <SectionHeader
        label="Recent Transactions"
        action={{ path: "/transactions" }}
      />
      <RecentTransactions />
    </Screen>
  );
}
