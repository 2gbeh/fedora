import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
//
import { ScreenContainer } from "@/components/organisms/screen-container";
import { AppBar } from "@/components/organisms/app-bar";
import { Hero } from "@/components/molecules/hero";
import { SectionHeader } from "@/components/organisms/section-header";
import { Avatar } from "@/components/atoms/avatar";
import { TransactionsService } from "@/services/transactions";
import { TransactionDto } from "@/services/transactions/types";
import { Transaction } from "@/services/transactions/model";
import { Contact } from "@/services/contacts/model";
import { flexStyles } from "@/styles/flex";
import { COLOR } from "@/constants/COLOR";

export default function HomeScreen() {
  const [data, setData] = useState<TransactionDto[]>([]);

  const transformedData = data.map((item) => ({
    id: item.id,
    transaction: new Transaction(item),
    contact: item.contact ? new Contact(item.contact) : undefined,
  }));

  useEffect(() => {
    fetchRecentTransactions();
  }, []);

  const fetchRecentTransactions = async () => {
    const data = await TransactionsService.recent();
    setData(data);
  };

  return (
    <ScreenContainer>
      <Hero />
      <SectionHeader
        text="Recent Transactions"
        action={{ path: "/transactions" }}
      />
      <FlatList
        data={transformedData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 16 }}
        renderItem={({ item }) => (
          <View style={[flexStyles.rowCenterBetween, { gap: 8 }]}>
            <Avatar
              src={item?.contact?._?.avatar}
              alt={item?.contact?._?.displayName}
            />
            <View style={flexStyles.flex_1}>
              <Text style={{ fontSize: 16, fontWeight: "400" }}>
                {item?.contact?._?.displayName}
              </Text>
              <Text style={{ color: COLOR.mutedForeground }}>
                {item?.transaction?._?.narration}
              </Text>
            </View>
            <View style={flexStyles.colEnd}>
              <Text
                style={[
                  item?.transaction?.amountColor(),
                  { fontSize: 16, fontWeight: "500" },
                ]}
              >
                {item?.transaction?.amount}
              </Text>
              <Text>{item?.transaction?.entryDate}</Text>
            </View>
          </View>
        )}
      />
    </ScreenContainer>
  );
}
