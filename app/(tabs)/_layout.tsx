// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="home" size={24} color={focused ? "#111" : "#79747E"} />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="receipt-long" size={24} color={focused ? "#111" : "#79747E"} />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="folder" size={24} color={focused ? "#111" : "#79747E"} />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="contact-page" size={24} color={focused ? "#111" : "#79747E"} />
          ),
        }}
      />
    </Tabs>
  );
}