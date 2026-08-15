import type { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";
import { Tabs, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { BottomTabNavigationOptions } from "expo-router/build/react-navigation/bottom-tabs";
//
import { AppBar } from "@/components/organisms/app-bar";
import { flexStyles } from "@/styles/flex";

type MaterialIconName = ComponentProps<typeof MaterialIcons>["name"];

interface TabConfig {
  pathname: string;
  title?: string;
  tabTitle?: string;
  tabIcon?: MaterialIconName;
  hide?: boolean;
}

const tabs: TabConfig[] = [
  { pathname: "index" },
  // {
  //   pathname: "transactions",
  //   tabTitle: "Transactions",
  //   tabIcon: "account-balance-wallet",
  // },
  // {
  //   pathname: "transactions/create",
  //   title: "Add Transaction",
  //   tabTitle: "Add",
  //   tabIcon: "add-circle",
  // },
  { pathname: "projects", tabIcon: "category" },
  { pathname: "projects/create", hide: true },
  { pathname: "transactions", hide: true },
  { pathname: "transactions/create", tabTitle: "Add", tabIcon: "add-circle" },
  { pathname: "contacts", tabIcon: "perm-contact-calendar" },
  { pathname: "contacts/create", hide: true },
  { pathname: "transactions/wallets", hide: true },
  { pathname: "transactions/categories", hide: true },
  { pathname: "settings", tabIcon: "settings" },
  { pathname: "analytics", hide: true },
];

export default function TabLayout() {
  const router = useRouter();
  //
  return (
    <Tabs screenOptions={screenOptions}>
      {tabs.map(({ pathname, ...item }) => {
        const isIndex = pathname === "index";
        const title = isIndex ? "Home" : item.tabTitle || pathname;
        const headerTitle = isIndex
          ? "Fedora"
          : item.title || item.tabTitle || pathname;
        //
        return (
          <Tabs.Screen
            name={pathname}
            options={{
              title,
              headerTitle,
              ...(item.hide ? { href: null } : {}),
              ...renderHeader(isIndex),
              tabBarIcon: ({ focused }) => (
                <MaterialIcons
                  name={item.tabIcon || "home"}
                  color={focused ? "#111" : "#79747E"}
                  size={24}
                />
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
}

const renderHeader = (isIndex?: boolean) =>
  isIndex
    ? { header: () => <AppBar /> }
    : {
        headerRight: () => (
          <TouchableOpacity
            style={{
              marginRight: 8,
              // borderWidth: 1,
              width: 24,
              height: 24,
              ...flexStyles.rowCenterCenter,
            }}
          >
            <MaterialIcons name="more-vert" size={18} />
          </TouchableOpacity>
        ),
      };

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
    backgroundColor: "#FFFBFE",
    height: 64,
    borderTopWidth: 0,
    // elevation: 3,
    elevation: 0, // Android shadow
    shadowOpacity: 0, // iOS shadow
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "capitalize",
  },
};
