// TransactionListItem.tsx
import { memo } from "react";
import { View, Text } from "react-native";
import { Transaction } from "@/services/transactions/model";
import { Contact } from "@/services/contacts/model";
import { flexStyles as fx } from "@/styles/flex";

interface Props {
  transaction: Transaction;
  contact?: Contact;
}

export const TransactionListItem = memo(({
  transaction,
  contact,
}: Props) =>{
  return (
    <View style={[fx.rowCenterBetween]}>
      <View>
        <Text>{contact?.initials ?? "?"}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>{contact?.displayName ?? "Unknown"}</Text>
        <Text>{transaction.narration}</Text>
      </View>
      <View style={[fx.colEnd]}>
        <Text>{transaction.formattedAmount}</Text>
        <Text>{transaction.formattedDate}</Text>
      </View>
    </View>
  );
});
