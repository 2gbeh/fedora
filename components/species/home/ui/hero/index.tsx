import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
//
import { COLOR } from "@/constants/COLOR";
import { TransactionsService } from "@/services/transactions";
import { flexStyles } from "@/styles/flex-styles";
//
import { heroStyles as sx } from "./styles";

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
      <View style={[flexStyles.rowCenterBetween, { gap: 16, marginTop: 8 }]}>
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
