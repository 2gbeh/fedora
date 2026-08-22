import { AppScreen } from "@/components/atoms/app-screen";
import { SectionHeader } from "@/components/atoms/section-header";
import { Spacing } from "@/components/atoms/spacing";
import { Hero } from "@/components/species/home/ui/hero";
import { ProjectsFilterBar } from "@/components/species/home/ui/projects-filter-bar";
import { RecentTransactions } from "@/components/species/home/ui/recent-transactions";

export default function HomeScreen() {
  return (
    <AppScreen title="Dashboard" styles={{ gap: 0, marginTop: 8 }}>
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
    </AppScreen>
  );
}
