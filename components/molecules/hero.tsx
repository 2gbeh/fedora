import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
//
import { TransactionsService } from "@/services/transactions";
import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex";
import { MaterialIcons } from "@expo/vector-icons";

export const Hero = () => {
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
      <View>
        <Text style={sx.label}>Total Income</Text>
        <Pressable
          onPress={() => setShowExpense((p) => !p)}
          style={{ ...flexStyles.rowCenter, gap: 8 }}
        >
          <Text
            style={[
              sx.value,
              {
                color: showExpense
                  ? COLOR.destructive
                  : COLOR.primaryForeground,
              },
            ]}
          >
            N{(showExpense ? expense : income).toLocaleString()}
          </Text>
          <MaterialIcons
            name={showExpense ? "visibility" : "visibility-off"}
            size={16}
            color={COLOR.muted}
          />
        </Pressable>
      </View>
      <View style={[flexStyles.rowCenterBetween, { gap: 8 }]}>
        <Pressable style={sx.btn}>
          <MaterialIcons name="trending-up" size={16} color={COLOR.muted} />
          <Text style={sx.btnText}>Income</Text>
        </Pressable>
        <Pressable style={[sx.btn, sx.btnSec]}>
          <MaterialIcons name="trending-down" size={16} color={COLOR.muted} />
          <Text style={sx.btnText}>Expense</Text>
        </Pressable>
      </View>
    </View>
  );
};

const sx = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.foreground,
    borderRadius: 16,
    padding: 16,
    gap: 16,
  },
  label: {
    color: COLOR.primaryForeground,
  },
  value: {
    color: COLOR.primaryForeground,
    fontSize: 32,
    fontWeight: "600",
  },
  btn: {
    backgroundColor: COLOR.chart2,
    borderRadius: 8,
    height: 40,
    ...flexStyles.rowCenterCenter,
    gap: 8,
    flex: 1,
  },
  btnSec: {
    backgroundColor: COLOR.primary,
  },
  btnText: {
    color: COLOR.primaryForeground,
  },
});
