import React from "react";
import { View, Text } from "react-native";
import SketchBox from "@/components/SketchBox";
//
import { styles_flex } from "@/styles/Flex.module";
import styles from "./TransactionItem.module";
import { TTransaction } from "@/server/transactions/transaction.entity";
import { TransactionPipe } from "@/server/transactions/transaction.pipe";

type TTransactionItem = { index?: number; item: TTransaction };

const TransactionItem = ({ index, item }: TTransactionItem) => {
  const transactionPipe = TransactionPipe.transform(item);
  //
  return (
    <View style={[styles_flex.row_start_between, styles.container]}>
      {/* LEFT */}
      <View style={[styles_flex.row_center, styles.left_content]}>
        <SketchBox as="Avatar" size={40} alt />
        <View style={styles.hgroup}>
          <Text style={styles.h1}>{transactionPipe.account.name_f}</Text>
          <Text style={styles.p}>{transactionPipe.narration_f}</Text>
        </View>
      </View>

      {/* RIGHT */}
      <View style={[styles_flex.col_end, styles.hgroup]}>
        <Text style={styles.amount(item.amount)}>
          {transactionPipe.amount_f}
        </Text>
        <Text style={styles.p}>{transactionPipe.date_f}</Text>
      </View>
    </View>
  );
};
export default React.memo(TransactionItem);
