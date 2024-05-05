import React from "react";
import { View, Text } from "react-native";
import SketchBox from "../SketchBox";
import Logo from "../Logo";
//
import styles from "./AppBar.module";

const AppBar = ({ stack }: { stack?: string }) => {
  return stack ? (
    <View style={styles.container}>
      <SketchBox as="Back" size={18} alt />
      <Text style={styles.title}>{stack}</Text>
      <SketchBox as="Options" size={18} alt />
    </View>
  ) : (
    <View style={styles.container}>
      {/* LEFT */}
      <View style={styles.left_content}>
        <Logo />
        <View style={styles.hgroup}>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.username}>Sterling</Text>
        </View>
      </View>

      {/* RIGHT */}
      <View style={styles.right_content}>
        <SketchBox as="Search" size={18} alt />
        <SketchBox as="Notifications" size={18} alt />
      </View>
    </View>
  );
};
export default React.memo(AppBar);
