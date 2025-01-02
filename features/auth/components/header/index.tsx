import React from "react";
import { Text, View, StyleSheet } from "react-native";
//
import { typographyStyles } from "@/styles/typography.styles";
import { COLOR } from "@/constants/THEME";

interface IProps {
  heading: string;
}

const Header: React.FC<IProps> = ({ heading }) => {
  console.log("🚀 ~ Header");
  // RENDER
  return (
    <View style={sx.container}>
      <Text style={sx.label}>{heading}</Text>
    </View>
  );
};

export default React.memo(Header);

const sx = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "flex-end",
  },
  label: {
    ...typographyStyles.headlineLargeBold,
    color: COLOR.dark.onSurface,
    width: 160,
  },
});
