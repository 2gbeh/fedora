import React from "react";
import { View, Text } from "react-native";
//
import { virtualWalletStyles as s } from "./styles";
import {
  ArrowDownRightIcon,
  ArrowUpLeftIcon,
  ArrowUpRightIcon,
  CreditCardIcon,
} from "lucide-react-native";
import { COLOR } from "@/constants/THEME";

interface IProps {}

const VirtualWallet: React.FC<IProps> = ({}) => {
  const iconProps = { size: 16, color: COLOR.dark.onSurface };
  console.log("🚀 ~ VirtualWallet");
  // renders
  return (
    <View style={s.container}>
      <View style={s.item}>
        <View style={s.label_group}>
          <CreditCardIcon {...iconProps} />
          <Text style={s.label}>Balance</Text>
        </View>
        <Text style={s.balance}>480,560</Text>
      </View>
      <View style={s.bottom}>
        <View style={s.item}>
          <View style={s.label_group}>
            <ArrowDownRightIcon {...iconProps} />
            <Text style={s.label}>Income</Text>
          </View>
          <Text style={s.income}>800,000</Text>
        </View>
        <View style={s.item}>
          <View style={s.label_group}>
            <ArrowUpRightIcon {...iconProps} />
            <Text style={s.label}>Expense</Text>
          </View>
          <Text style={s.expense}>- 319,440</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(VirtualWallet);
