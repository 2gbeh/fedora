import React from "react";
import { View, Text } from "react-native";
import SketchBox from "@/components/SketchBox";
import AssetBox from "../AssetBox";
//
import styles from "./AccountCard.module";
import { IAccount } from "@/server/accounts/account.dto";
import { AccountPipe } from "@/server/accounts/account.pipe";

type IAccountCard = { index?: number; item: IAccount };

const AccountCard = ({ index, item }: IAccountCard) => {
  const accountPipe = AccountPipe.transform(item);
  //
  return (
    <View style={styles.container}>
      {/* LEFT */}
      <View style={styles.left_content}>
        <AssetBox as={accountPipe.avatar_f} size={45} radius={99} />
        <View style={styles.hgroup}>
          <Text style={styles.h1}>{accountPipe.name_f}</Text>
          <Text style={styles.p}>{accountPipe.name}</Text>
        </View>
      </View>

      {/* RIGHT */}
      <View>
        <SketchBox as="TabIcon" size={12} dark={!accountPipe.favorite} />
      </View>
    </View>
  );
};
export default React.memo(AccountCard);
