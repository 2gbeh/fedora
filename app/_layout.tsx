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
  name: string;
  title?: string;
  icon?: MaterialIconName;
}

const tabs: TabConfig[] = [
  { name: "index" },
  { name: "contacts", icon: "perm-contact-calendar" },
  { name: "transactions", icon: "account-balance-wallet" },
  { name: "settings", icon: "settings" },
];

export default function TabLayout() {
  const router = useRouter();
  //
  return (
    <Tabs screenOptions={screenOptions}>
      {tabs.map(({ name, ...item }) => {
        const isIndex = name === "index";
        const title = isIndex ? "Home" : item.title || name;
        //
        return (
          <Tabs.Screen
            name={name}
            options={{
              title,
              headerTitle: title,
              ...renderHeader(isIndex),
              tabBarIcon: ({ focused }) => (
                <MaterialIcons
                  name={item.icon || "home"}
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
