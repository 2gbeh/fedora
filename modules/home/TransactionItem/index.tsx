import React from "react";
import { View, Text } from "react-native";
//
import SketchBox from "@/components/SketchBox";
//
import { TTransaction } from "@/server/transactions/transaction.entity";
import { styles_flex } from "@/styles/Flex.module";
import styles from "./TransactionItem.module";

type TTransactionItem = { index?: number; item: TTransaction };

const TransactionItem = ({ index, item }: TTransactionItem) => {
  return (
    <View style={[styles_flex.row_center_between, styles.container]}>
      {/* LEFT */}
      <View style={[styles_flex.row_center, styles.left_content]}>
        <SketchBox as="Avatar" size={32} alt />
        <View style={styles.text_group}>
          <Text style={styles.account}>{item.account}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>

      {/* RIGHT */}
      <View style={styles.right_content}>
        <Text style={styles.amount(item.amount)}>$ {item.amount}</Text>
      </View>
    </View>
  );
};
export default React.memo(TransactionItem);
