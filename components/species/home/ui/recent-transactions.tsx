import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
//
import { Avatar } from "@/components/atoms/avatar";
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";
import { Contact } from "@/services/contacts/model";
import { TransactionsService } from "@/services/transactions";
import { Transaction } from "@/services/transactions/model";
import { TransactionDto } from "@/services/transactions/types";
import { flexStyles } from "@/styles/flex-styles";

export const RecentTransactions = () => {
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
    <FlatList
      data={transformedData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={sx.container}>
          <Avatar
            src={item?.contact?._?.avatar}
            alt={item?.contact?._?.displayName}
          />
          <View style={sx.left}>
            <Text style={sx.text}>{item?.contact?._?.displayName}</Text>
            <Text style={sx.subtext}>{item?.transaction?._?.narration}</Text>
          </View>
          <View style={sx.right}>
            <Text style={[sx.amountText, item?.transaction?.amountColor()]}>
              {item?.transaction?.amount}
            </Text>
            <Text style={sx.subtext}>{item?.transaction?.entryDate}</Text>
          </View>
        </View>
      )}
    />
  );
};

const sx = StyleSheet.create({
  _: {},
  container: {
    borderBottomColor: COLOR.border,
    borderBottomWidth: 1,
    // paddingHorizontal: 16,
    height: 72,
    ...flexStyles.rowCenterBetween,
    gap: 12,
  },
  left: { flex: 1 },
  right: { ...flexStyles.colEnd },
  text: {
    color: COLOR.primary,
    fontFamily: FONT.regular,
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  amountText: {
    color: COLOR.primary,
    fontFamily: FONT.medium,
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  subtext: {
    color: COLOR.secondary,
    fontFamily: FONT.regular,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
});
