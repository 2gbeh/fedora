import type { ComponentProps } from "react";
import { Tabs, useRouter } from "expo-router";
import { BottomTabNavigationOptions } from "expo-router/build/react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
//
import { AppBar } from "@/components/organisms/app-bar";
import { FAB } from "@/components/organisms/fab";
import { TouchableOpacity, View } from "react-native";
import { flexStyles } from "@/styles/flex";

type MaterialIconName = ComponentProps<typeof MaterialIcons>["name"];
const renderTabBarIcon = (focused: boolean, name?: MaterialIconName) => (
  <MaterialIcons
    name={name || "home"}
    size={24}
    color={focused ? "#111" : "#79747E"}
  />
);
const renderHeaderRight = () => (
  <View style={[flexStyles.rowCenterCenter, { gap: 8, marginRight: 16 }]}>
    <TouchableOpacity
      style={{
        // borderWidth: 1,
        width: 24,
        height: 24,
        ...flexStyles.rowCenterCenter,
      }}
    >
      <MaterialIcons name="search" size={18} />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        // borderWidth: 1,
        width: 24,
        height: 24,
        ...flexStyles.rowCenterCenter,
      }}
    >
      <MaterialIcons name="more-vert" size={18} />
    </TouchableOpacity>
  </View>
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
          title: "Transactions",
          headerRight: renderHeaderRight,
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
          headerRight: renderHeaderRight,
          tabBarIcon: ({ focused }) => renderTabBarIcon(focused, "category"),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          headerRight: renderHeaderRight,
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
