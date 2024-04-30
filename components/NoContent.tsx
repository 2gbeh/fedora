import React from "react";
import { View, Text, StyleSheet, type DimensionValue } from "react-native";
//
import COLOR from "@/constants/COLOR";
import { styles_flex } from "@/styles/Flex.module";

type TNoContent = { text: string; height: number };

const NoContent = ({ text, height }: TNoContent) => {
  return (
    <View style={[styles_flex.row_center_center, { height: height as DimensionValue }]}>
      <Text style={{ color: COLOR.text_muted, fontSize: 16 }}>{text}</Text>
    </View>
  );
};
export default React.memo(NoContent);
