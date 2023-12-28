import { Pressable, useColorScheme, TouchableOpacity } from "react-native";
import { Link, Tabs, router } from "expo-router";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
//
import APP from "utils/constants/APP";

const iconProps = {
  size: 24,
  style: { marginBottom: -3 },
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: APP.color.brand,
        tabBarStyle: {
          backgroundColor: "black",
          borderRadius: 10,
          marginBottom: 10,
          padding: 5,
          marginHorizontal: 10,
        },
      }}
    >
      {[
        {
          name: "index",
          title: "Home",
          getIcon: (color: string) => (
            <AntDesign name="home" color={color} {...iconProps} />
          ),
        },
        {
          name: "accounts",
          title: "Accounts",
          getIcon: (color: string) => (
            <Feather name="users" color={color} {...iconProps} />
          ),
        },
        {
          name: "transactions/index",
          title: "",
          getIcon: (color: string) => (
            <AntDesign name="pluscircle" color={color} size={42} />
          ),
        },
        {
          name: "wallets",
          title: "Wallets",
          getIcon: (color: string) => (
            <Ionicons name="wallet-outline" color={color} {...iconProps} />
          ),
        },
        {
          name: "analytics",
          title: "Analytics",
          getIcon: (color: string) => (
            <Feather name="pie-chart" color={color} {...iconProps} />
          ),
        },
      ].map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => tab.getIcon(color),
          }}
        />
      ))}
    </Tabs>
  );
}
