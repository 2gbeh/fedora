import React from "react";
import { Text, View } from "react-native";
import { Href, Link } from "expo-router";
import SketchBox from "@/components/SketchBox";
//
import styles from "./SectionHeading.module";

type TSectionHeading = {
  title: string;
  action?: { text: string; path?: string; handleClick?: () => void };
  margin?: number[];
};

const SectionHeading = ({ title, action, margin }: TSectionHeading) => {
  return (
    <View style={styles.container(margin)}>
      <Text style={styles.title}>{title}</Text>
      <Link href={action?.path as Href<string>} style={styles.right_content}>
        <Text style={styles.icon_text}>{action?.text}</Text>
        <SketchBox as="ChevronRight" size={12} dark />
      </Link>
    </View>
  );
};
export default React.memo(SectionHeading);
