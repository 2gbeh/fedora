import { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
//
import { flexStyles } from "@/styles/flex";
import { TransactionsService } from "@/services/transactions";
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";

export const Hero = () => {
  const [maskBalance, setMaskBalance] = useState(false);
  const [showExpense, setShowExpense] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    fetchTotalIncome();
  }, []);

  const fetchTotalIncome = async () => {
    const total = await TransactionsService.totaled();
    setIncome(total.income);
    setExpense(total.expense);
  };

  return (
    <View style={sx.container}>
      <View style={{ gap: 8 }}>
        <Text style={sx.label}>Total {showExpense ? "Expense" : "Income"}</Text>
        <Pressable
          onPress={() => setMaskBalance((p) => !p)}
          style={{ ...flexStyles.rowCenter, gap: 8 }}
        >
          <Text
            style={[
              sx.value,
              {
                color: showExpense ? COLOR.danger : COLOR.white,
              },
            ]}
          >
            {maskBalance ? (
              "******"
            ) : (
              <>N{(showExpense ? expense : income).toLocaleString()}</>
            )}
          </Text>
          <MaterialIcons
            name={maskBalance ? "visibility" : "visibility-off"}
            size={16}
            color={COLOR.muted}
          />
        </Pressable>
      </View>
      <View style={[flexStyles.rowCenterBetween, { gap: 8 }]}>
        <TouchableOpacity onPress={() => setShowExpense(false)} style={sx.btn}>
          <MaterialIcons name="trending-up" size={16} color={COLOR.success} />
          <Text style={sx.btnText}>Income</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowExpense(true)}
          style={[sx.btn, sx.btnSec]}
        >
          <MaterialIcons name="trending-down" size={16} color={COLOR.danger} />
          <Text style={sx.btnText}>Expense</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const sx = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.primary,
    borderRadius: 28,
    padding: 28,
    gap: 16,
  },
  label: {
    color: COLOR.muted,
    fontFamily: FONT.regular,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  value: {
    color: COLOR.white,
    fontFamily: FONT.medium,
    fontSize: 32,
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  btn: {
    backgroundColor: COLOR.successContainer,
    borderRadius: 116,
    height: 40,
    ...flexStyles.rowCenterCenter,
    gap: 8,
    flex: 1,
  },
  btnSec: {
    backgroundColor: COLOR.dangerContainer,
  },
  btnText: {
    color: COLOR.primary,
    fontFamily: FONT.regular,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
});
