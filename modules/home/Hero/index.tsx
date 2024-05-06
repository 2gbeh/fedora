import React from "react";
import { Text, View } from "react-native";
import SketchBox from "@/components/SketchBox";
//
import styles from "./Hero.module";
import fakeTransactions from "@/data/fake-transactions";
import { TransactionService } from "@/server/transactions/transaction.service";

const Hero = () => {
  const transactionService = new TransactionService(fakeTransactions);
  //
  return (
    <View style={styles.container}>
      {/* TOP */}
      <View style={styles.top_content}>
        {/* LEFT */}
        <View style={styles.top_left_content}>
          <View style={styles.hgroup}>
            <SketchBox as="Credit" size={12} />
            <Text style={styles.p}>Gross Income</Text>
          </View>
          <Text style={styles.h1}>
            {transactionService.grossIncome.asMoney}
          </Text>
        </View>
        {/* RIGHT */}
        <View style={styles.top_right_content}>
          <SketchBox as="Prev" size={12} />
          <SketchBox as="Next" size={12} />
        </View>
      </View>

      {/* BOTTOM */}
      <View style={styles.bottom_content}>
        {/* LEFT */}
        <View style={styles.bottom_left_content}>
          <View style={styles.hgroup}>
            <SketchBox as="Debit" size={12} />
            <Text style={styles.p}>Total Expenses</Text>
          </View>
          <Text style={styles.h2(-1)}>
            {transactionService.totalExpenses.asMoney}
          </Text>
        </View>
        {/* RIGHT */}
        <View style={styles.bottom_right_content}>
          <View style={styles.hgroup}>
            <SketchBox as="Savings" size={12} />
            <Text style={styles.p}>Net Income</Text>
          </View>
          <Text style={styles.h2()}>
            {transactionService.netIncome.asMoney}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(Hero);
