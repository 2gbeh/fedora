import React from "react";
import { View, Text } from "react-native";
import SketchBox from "@/components/SketchBox";
//
import styles from "./TransactionCard.module";
import { ITransaction } from "@/server/transactions/transaction.dto";
import { TransactionPipe } from "@/server/transactions/transaction.pipe";

type ITransactionCard = { index?: number; item: ITransaction };

const TransactionCard = ({ index, item }: ITransactionCard) => {
  const transactionPipe = TransactionPipe.transform(item);
  //
  return (
    <View style={styles.container}>
      {/* LEFT */}
      <View style={styles.left_content}>
        <SketchBox as="Avatar" size={40} alt />
        <View style={styles.hgroup}>
          <Text style={styles.h1}>{transactionPipe.account.name_f}</Text>
          <Text style={styles.p}>{transactionPipe.narration_f}</Text>
        </View>
      </View>

      {/* RIGHT */}
      <View style={styles.right_content}>
        <Text style={styles.amount(item.amount)}>
          {transactionPipe.amount_f}
        </Text>
        <Text style={styles.p}>{transactionPipe.date_f}</Text>
      </View>
    </View>
  );
};
export default React.memo(TransactionCard);
