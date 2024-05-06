import React from "react";
import { View, Text, Image } from "react-native";
import SketchBox from "../SketchBox";
import AssetBox from "../AssetBox";
//
import { IWallet } from "@/server/wallets/wallet.dto";
import { WalletPipe } from "@/server/wallets/wallet.pipe";
import { WalletService } from "@/server/wallets/wallet.service";
//
import ASSET from "@/constants/ASSET";
import styles from "./WalletCard.module";

type IWalletCard = { index?: number; item: IWallet };

const WalletCard = ({ index, item }: IWalletCard) => {
  const walletPipe = WalletPipe.transform(item);
  const balance = WalletService.getBalance(item);
  //
  return (
    <View style={styles.container}>
      <View style={styles.top_content}>
        <View style={styles.top_wrapper}>
          <View style={styles.top_left_content}>
            <Text style={styles.p}>Balance</Text>
            <Text style={styles.h1}>{balance.asMoney}</Text>
          </View>
          {/* LOGO */}
          <View style={styles.top_right_content}>
            <AssetBox as={walletPipe.logo_f} size={12} />
            <Text style={styles.h2}>{walletPipe.account_name_f}</Text>
          </View>
        </View>

        {/* CARD NUMBER */}
        <View style={styles.pin}>
          <Text style={styles.masked}>**** **** ****</Text>
          <Text style={styles.digits}>{walletPipe.account_number_f}</Text>
        </View>
      </View>

      {/* BOTTOM CONTENT */}
      <View style={styles.bottom_content}>
        <View style={styles.hgroup}>
          <Text style={styles.label}>CR</Text>
          <Text style={styles.value()}>
            {walletPipe.transactions.total_credit_f}
          </Text>
        </View>
        <View style={styles.hgroup}>
          <Text style={styles.label}>DR</Text>
          <Text style={styles.value(walletPipe.transactions.total_debit)}>
            {walletPipe.transactions.total_debit_f}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default React.memo(WalletCard);
