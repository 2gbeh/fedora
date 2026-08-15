import type { ComponentProps } from "react";
import { Tabs, useRouter } from "expo-router";
import { BottomTabNavigationOptions } from "expo-router/build/react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
//
import { AppBar } from "@/components/organisms/app-bar";
import { FAB } from "@/components/organisms/fab";
import { COLOR } from "@/constants/COLOR";

type MaterialIconName = ComponentProps<typeof MaterialIcons>["name"];
const renderTabBarIcon = (focused: boolean, name?: MaterialIconName) => (
  <MaterialIcons
    name={name || "home"}
    size={24}
    color={focused ? COLOR.primary : COLOR.muted}
  />
);

const hiddenScreens = ["projects/create", "contacts/create"];

export default function TabLayout() {
  const router = useRouter();
  //
  return (
    <Tabs screenOptions={screenOptions}>
      {hiddenScreens.map((name) => (
        <Tabs.Screen name={name} options={{ href: null }} />
      ))}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          header: () => <AppBar />,
          tabBarIcon: ({ focused }) => renderTabBarIcon(focused),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Ledger",
          headerRight: () => <AppBar rightSection />,
          tabBarIcon: ({ focused }) =>
            renderTabBarIcon(focused, "account-balance-wallet"),
        }}
      />
      <Tabs.Screen
        name="fab"
        options={{
          tabBarButton: () => (
            <FAB action={() => router.push("/transaction/create")} tab />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          headerRight: () => <AppBar rightSection />,
          tabBarIcon: ({ focused }) => renderTabBarIcon(focused, "category"),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          headerRight: () => <AppBar rightSection />,
          tabBarIcon: ({ focused }) =>
            renderTabBarIcon(focused, "perm-contact-calendar"),
        }}
      />
    </Tabs>
  );
}

const screenOptions: BottomTabNavigationOptions = {
  headerStyle: {
    shadowOpacity: 0, // iOS
    elevation: 0, // Android
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    textTransform: "capitalize",
  },
  sceneStyle: { backgroundColor: "white" },
  tabBarActiveTintColor: "#111",
  tabBarInactiveTintColor: "#79747E",
  tabBarStyle: {
    backgroundColor: COLOR.white,
    borderTopWidth: 0,
    height: 64,
    elevation: 4, // Android shadow
    shadowOpacity: 0.1, // iOS shadow
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10.4,
    shadowColor: COLOR.black10,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "capitalize",
  },
};
