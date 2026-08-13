// TransactionList.tsx
import { useMemo } from "react";
import { FlatList } from "react-native";
import { TransactionListItem } from "./TransactionListItem";
import { Transaction } from "@/models/transaction";
import { Contact } from "@/models/contact";

interface TransactionWithContact extends TransactionDto {
  contact?: ContactDto;
}

export function TransactionList({ data }: { data: TransactionWithContact[] }) {
  const rows = useMemo(
    () =>
      data.map((item) => ({
        id: item.id,
        transaction: new Transaction(item),
        contact: item.contact ? new Contact(item.contact) : undefined,
      })),
    [data]
  );

  return (
    <FlatList
      data={rows}
      keyExtractor={(row) => row.id}
      renderItem={({ item }) => (
        <TransactionListItem transaction={item.transaction} contact={item.contact} />
      )}
    />
  );
}