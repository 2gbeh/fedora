import { Pressable, StyleSheet, Text, View } from "react-native";
import { Href, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
//
import { flexStyles } from "@/styles/flex";
import { COLOR } from "@/constants/COLOR";
import { FONT } from "@/constants/FONT";

interface Props {
  label: string;
  action?: {
    label?: string;
    path: Href;
  };
}

export const SectionHeader = ({ label, action }: Props) => {
  const router = useRouter();

  return (
    <View style={sx.container}>
      <Text style={sx.text}>{label}</Text>
      {action ? (
        <Pressable onPress={() => router.push(action.path)} style={sx.right}>
          <Text style={sx.subtext}>{action.label || "See all"}</Text>
          <MaterialIcons name="chevron-right" size={18} color={COLOR.secondary} />
        </Pressable>
      ) : null}
    </View>
  );
};

const sx = StyleSheet.create({
  _: {},
  container: {
    ...flexStyles.rowCenterBetween,
  },
  text: {
    color: COLOR.primary,
    fontFamily: FONT.medium,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  subtext: {
    color: COLOR.secondary,
    fontFamily: FONT.regular,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.12,
  },
  right: {
    ...flexStyles.rowCenter,
    gap: 2,
  },
});
