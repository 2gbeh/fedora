import { COLOR } from "@/constants/COLOR";
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600" }}>{text}</Text>
      {action ? (
        <Pressable onPress={() => router.push(action.path)}>
          <Text style={{ color: COLOR.mutedForeground, fontWeight: "500" }}>
            {action.text || "See all"}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
};
