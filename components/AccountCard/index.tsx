import React from "react";
import { View, Text } from "react-native";
import SketchBox from "@/components/SketchBox";
//
import { IBill } from "@/server/bills/bill.dto";
import { BillPipe } from "@/server/bills/bill.pipe";
//
import styles from "./AccountCard.module";

type ICreditorCard = { index?: number; item: IBill };

const CreditorCard = ({ index, item }: ICreditorCard) => {
  const billPipe = BillPipe.transform(item);
  //
  return (
    <View style={styles.container()}>
      <SketchBox as="Avatar" />
      <View style={styles.hgroup}>
        <Text style={styles.h1}>{billPipe.account.name_f}</Text>
        <Text style={styles.p}>{billPipe.bills_f}</Text>
      </View>
    </View>
  );
};
export default React.memo(CreditorCard);
