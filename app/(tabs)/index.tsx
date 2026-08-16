import { ScreenContainer } from "@/components/organisms/screen-container";
import { SectionHeader } from "@/components/organisms/section-header";
import { Hero } from "@/components/species/home/ui/hero";
import { ProjectsFilterBar } from "@/components/species/home/ui/projects-filter-bar";
import { RecentTransactions } from "@/components/species/home/ui/recent-transactions";

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <Hero />
      <SectionHeader
        label="Expense Accounts"
        action={{ path: "/transactions" }}
      />
      <ProjectsFilterBar />
      <SectionHeader
        label="Recent Transactions"
        action={{ path: "/transactions" }}
      />
      <RecentTransactions />
    </ScreenContainer>
  );
}
