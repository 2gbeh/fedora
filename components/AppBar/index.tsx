import React from "react";
import { View, Text } from "react-native";
import SketchBox from "../SketchBox";
import Logo from "../Logo";
//
import { styles_flex } from "@/styles/Flex.module";
import styles from "./AppBar.module";

const AppBar = () => {
  return (
    <View style={[styles_flex.row_center_between, styles.container]}>
      {/* LEFT */}
      <View style={[styles_flex.row_center, styles.left_content]}>
        <Logo />
        <View style={styles.hgroup}>
          <Text style={styles.p}>Hello,</Text>
          <Text style={styles.h1}>Sterling</Text>
        </View>
      </View>

      {/* RIGHT */}
      <View style={[styles_flex.row_center, styles.right_content]}>
        <SketchBox as="Search" size={24} alt />
        <SketchBox as="Notifications" size={24} alt />
      </View>
    </View>
  );
};
export default React.memo(AppBar);
