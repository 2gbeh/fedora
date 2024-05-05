import { StyleSheet, Text, View } from "react-native";
import { Redirect, Tabs } from "expo-router";
import SketchBox from "@/components/SketchBox";
//
import COLOR from "@/constants/COLOR";
import { styles_flex } from "@/styles/Flex.module";

export default function DashboardLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLOR.text,
        tabBarInactiveTintColor: COLOR.text_muted,
        tabBarShowLabel: false,
        tabBarStyle: styles.menu_bar,
      }}
    >
      {[
        { name: "home/index", title: "Home" },
        { name: "creditors/index", title: "Creditors" },
        { name: "wallets/index", title: "Wallets" },
        { name: "accounts/index", title: "Accounts" },
      ].map(({ name, title }, i) => (
        <Tabs.Screen
          key={i}
          name={name}
          options={{
            title,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View style={styles.menu_item}>
                <SketchBox as="TabIcon" size={12} alt={!focused} />
                <Text style={{ color }}>{title}</Text>
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  menu_bar: {
    backgroundColor: COLOR.background,
    borderTopWidth: 1,
    borderTopColor: COLOR.border,
    minHeight: 60,
  },
  menu_item: { ...styles_flex.col_center_center, gap: 5 },
});
