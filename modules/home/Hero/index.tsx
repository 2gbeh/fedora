import React from "react";
import { Text, View } from "react-native";
//
import SketchBox from "../../../components/SketchBox";
//
import { styles_flex } from "@/styles/Flex.module";
import styles from "./Hero.module";

const Hero = () => {
  return (
    <View style={styles.container}>
      {/* TOP */}
      <View style={[styles_flex.row_start_between, styles.top_content]}>
        {/* LEFT */}
        <View style={styles.top_left_content}>
          <View style={[styles_flex.row_center, styles.label_group]}>
            <SketchBox as="Credit" size={12} />
            <Text style={styles.label}>Gross Income</Text>
          </View>
          <Text style={styles.h1}>$ 1,992.00</Text>
        </View>
        {/* RIGHT */}
        <View style={[styles_flex.row_center, styles.top_right_content]}>
          <SketchBox as="Prev" size={12} />
          <SketchBox as="Next" size={12} />
        </View>
      </View>

      {/* BOTTOM */}
      <View style={[styles_flex.row_center_between, styles.bottom_content]}>
        {/* LEFT */}
        <View style={styles.bottom_left_content}>
          <View style={[styles_flex.row_center, styles.label_group]}>
            <SketchBox as="Debit" size={12} />
            <Text style={styles.label}>Total Expense</Text>
          </View>
          <Text style={styles.h2(-1)}>$ -9.00</Text>
        </View>
        {/* RIGHT */}
        <View style={styles.bottom_right_content}>
          <View style={[styles_flex.row_center, styles.label_group]}>
            <SketchBox as="Savings" size={12} />
            <Text style={styles.label}>Net Income</Text>
          </View>
          <Text style={styles.h2()}>$ 15.00</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(Hero);
