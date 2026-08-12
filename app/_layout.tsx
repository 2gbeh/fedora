import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#111",
        tabBarInactiveTintColor: "#79747E",
        tabBarStyle: {
          backgroundColor: "#FFFBFE",
          height: 64,
          elevation: 3,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/images/tabIcons/home.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#111" : "#79747E",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/images/tabIcons/explore.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#111" : "#79747E",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/images/tabIcons/explore.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#111" : "#79747E",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/images/tabIcons/explore.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#111" : "#79747E",
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}