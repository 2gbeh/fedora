import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex";
import { MaterialIcons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

interface Props {
  text: string;
  action?: { text?: string; path: Href };
}

export const SectionHeader = ({ text, action }: Props) => {
  const router = useRouter();

  return (
    <View
      style={{
        ...flexStyles.rowCenterBetween,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600" }}>{text}</Text>
      {action ? (
        <Pressable
          onPress={() => router.push(action.path)}
          style={{ ...flexStyles.rowCenter, gap: 2 }}
        >
          <Text style={{ color: COLOR.mutedForeground, fontWeight: "500" }}>
            {action.text || "See all"}
          </Text>
          <MaterialIcons name="chevron-right" size={18} color={COLOR.primary} />
        </Pressable>
      ) : null}
    </View>
  );
};
