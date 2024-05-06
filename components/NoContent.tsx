import React from "react";
import { View, Text, StyleSheet, type ViewStyle } from "react-native";
//
import COLOR from "@/constants/COLOR";
import { styles_flex } from "@/styles/Flex.module";

const NoContent = ({ text, height }: { text: string; height: number }) => {
  return (
    <View style={styles.container(height)}>
      <Text style={styles.p}>{text}</Text>
    </View>
  );
};
export default React.memo(NoContent);

const styles = StyleSheet.create<ViewStyle | any>({
  container: (value: number = 0) => ({
    height: value,
    ...styles_flex.row_center_center,
  }),
  p: { color: COLOR.text_muted, fontSize: 16 },
});
