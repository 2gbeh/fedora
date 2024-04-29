import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Href, Link } from "expo-router";
import SketchBox from "@/components/SketchBox";
//
import COLOR from "@/constants/COLOR";
import { styles_flex } from "@/styles/Flex.module";

type TSectionHeading = {
  title: string;
  action?: { text: string; href?: string; handleClick?: () => void };
};

const SectionHeading = ({ title, action }: TSectionHeading) => {
  return (
    <View style={styles_flex.row_end_between}>
      <Text style={styles.title}>{title}</Text>
      <Link
        href={action?.href as Href<string>}
        style={styles_flex.row_center}
      >
        <Text style={styles.subtitle}>{action?.text}</Text>
        <SketchBox as="ChevronRight" size={12} alt />
      </Link>
    </View>
  );
};
export default React.memo(SectionHeading);

const styles = StyleSheet.create({
  title: { color: COLOR.text, fontWeight: "bold", fontSize: 20 },
  subtitle: {
    color: COLOR.subtext,
    fontWeight: "600",
    fontSize: 14,
    marginRight: 10,
  }
});
