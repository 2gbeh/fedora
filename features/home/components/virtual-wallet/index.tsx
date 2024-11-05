import React from "react";
import { View, Text } from "react-native";
import {
  CreditCardIcon,
  ArrowDownRightIcon,
  ArrowUpRightIcon,
} from "lucide-react-native";
//
import { CurrencyHelper } from "@/utils/helpers/currency.helper";
import { COLOR } from "@/constants/THEME";
//
import { virtualWalletStyles as s } from "./styles";

interface IProps {}

const VirtualWallet: React.FC<IProps> = ({}) => {
  const iconProps = { size: 18, color: COLOR.muted };
  console.log("🚀 ~ VirtualWallet");
  // renders
  return (
    <View style={s.container}>
      <View style={s.top}>
        <View style={s.item}>
          <View style={s.label_group}>
            <CreditCardIcon {...iconProps} />
            <Text style={s.label}>Balance</Text>
          </View>
          <Text style={s.balance}>{CurrencyHelper.transform(480560)}</Text>
        </View>
      </View>
      <View style={s.bottom}>
        <View style={s.item}>
          <View style={s.label_group}>
            <ArrowDownRightIcon {...iconProps} />
            <Text style={s.label}>Income</Text>
          </View>
          <Text style={s.income}>{CurrencyHelper.transform(800000)}</Text>
        </View>
        <View style={[s.item, { alignItems: "flex-end" }]}>
          <View style={s.label_group}>
            <ArrowUpRightIcon {...iconProps} />
            <Text style={s.label}>Expense</Text>
          </View>
          <Text style={s.expense}>- {CurrencyHelper.transform(319440)}</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(VirtualWallet);
