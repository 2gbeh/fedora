import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  TabView,
  SceneMap,
  TabBar,
  SceneRendererProps,
} from "react-native-tab-view";

const FirstRoute = ({ i }: { i: number }) => <></>;
const SecondRoute = () => <></>;

const renderScene = ({
  route,
}: SceneRendererProps & {
  route: {
    key: string;
    title: string;
  };
}) => {
  switch (route.key) {
    case "first":
      return <FirstRoute i={15} />;
    case "second":
      return <SecondRoute />;
    default:
      return null;
  }
};

export const SectionTabs = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "recent", title: "Recent" },
    { key: "favorite", title: "Favorite" },
  ]);
  //
  return (
    <TabView
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      commonOptions={{
        labelStyle: {
          fontFamily: FONT.medium,
          fontSize: 16,
          lineHeight: 24,
          letterSpacing: 0.12,
        },
      }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          activeColor={COLOR.primary}
          inactiveColor={COLOR.muted}
          style={{ backgroundColor: "transparent" }}
          tabStyle={{ margin: 0, padding: 0 }}
          indicatorStyle={styles.indicator}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  indicator: {
    backgroundColor: COLOR.secondary,
    // height: 4,
    // width: 24,
    // marginLeft: 42,
  },
  label: {
    fontSize: 27,
    fontWeight: "600",
    textTransform: "none",
  },
  scene: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
    padding: 32,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#000",
    marginRight: 32,
  },
  name: {
    fontSize: 25,
    marginBottom: 20,
  },
  phone: {
    fontSize: 22,
    color: "#888",
  },
});
