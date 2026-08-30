import { Tabs, useRouter } from "expo-router";
import { BottomTabNavigationOptions } from "expo-router/build/react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
//
import { AppBar } from "@/components/organisms/app-bar";
import { FAB } from "@/components/organisms/fab";
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";
import { MaterialIconName } from "@/types/react-types";

const ignoreScreens = ["projects/create", "contacts/create"];

export default function TabLayout() {
  const router = useRouter();
  //
  return (
    <Tabs screenOptions={screenOptions}>
      {ignoreScreens.map((name) => (
        <Tabs.Screen key={name} name={name} options={{ href: null }} />
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
        name="ledger"
        options={{
          title: "Ledger",
          headerRight: () => <AppBar menu />,
          tabBarIcon: ({ focused }) =>
            renderTabBarIcon(focused, "account-balance-wallet"),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarButton: () => (
            <FAB action={() => router.push("/transactions/create")} tab />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          headerRight: () => <AppBar menu />,
          tabBarIcon: ({ focused }) => renderTabBarIcon(focused, "category"),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          headerRight: () => <AppBar menu />,
          tabBarIcon: ({ focused }) =>
            renderTabBarIcon(focused, "perm-contact-calendar"),
        }}
      />
    </Tabs>
  );
}

const renderTabBarIcon = (focused: boolean, name?: MaterialIconName) => (
  <MaterialIcons
    name={name || "home"}
    size={24}
    color={focused ? COLOR.primary : COLOR.muted}
  />
);

const screenOptions: BottomTabNavigationOptions = {
  headerStyle: {
    borderWidth: 0,
    shadowOpacity: 0, // iOS
    elevation: 0, // Android
  },
  headerTitleStyle: {
    fontFamily: FONT.medium,
    fontSize: 18,
  },
  sceneStyle: {
    backgroundColor: COLOR.white,
  },
  tabBarActiveTintColor: COLOR.primary,
  tabBarInactiveTintColor: COLOR.muted,
  tabBarStyle: {
    backgroundColor: COLOR.white,
    borderTopWidth: 0,
    height: 64,
    elevation: 4,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10.4,
    shadowColor: COLOR.black10,
  },
  tabBarLabelStyle: {
    fontFamily: FONT.regular,
    fontSize: 12,
  },
};
