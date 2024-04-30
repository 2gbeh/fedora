import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { Href, Link } from "expo-router";
import SketchBox from "@/components/SketchBox";
//
import { styles_flex } from "@/styles/Flex.module";
import styles from "./SectionHeading.module";

type TSectionHeading = {
  title: string;
  action?: { text: string; href?: string; handleClick?: () => void };
  styles_props?: Record<string, ViewStyle | any>;
};

const SectionHeading = ({ title, action, styles_props }: TSectionHeading) => {
  return (
    <View style={[styles_flex.row_end_between, styles_props?.container]}>
      <Text style={styles.title}>{title}</Text>
      <Link href={action?.href as Href<string>} style={styles_flex.row_center}>
        <Text style={styles.subtitle}>{action?.text}</Text>
        <SketchBox as="ChevronRight" size={12} alt />
      </Link>
    </View>
  );
};
export default React.memo(SectionHeading);
