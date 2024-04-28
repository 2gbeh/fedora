import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
//
import SketchBox from "@/components/SketchBox";
import TransactionItem from "../TransactionItem";
//
import { mockTransactions } from "../HOME";
import { styles_flex } from "@/styles/Flex.module";
import styles from "./TransactionList.module";

const TransactionList = () => {
  return (
    <View style={styles.container}>
      <View style={[styles_flex.row_end_between, styles.heading]}>
        <Text style={styles.title}>Transactions</Text>
        <Link href={"/(dashboard)/transaction/create"} style={styles.subtitle}>
          See All
        </Link>
      </View>

      {/* LIST */}
      <View style={styles.wrapper}>
        {mockTransactions.map((e, i) => (
          <TransactionItem key={i} index={i} item={e} />
        ))}
      </View>
    </View>
  );
};
export default React.memo(TransactionList);
