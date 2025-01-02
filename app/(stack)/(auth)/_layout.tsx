import { Stack } from "expo-router";
import { useAppSelector } from "@/store/store.config";
import { selectTheme } from "@/store/theme/theme.slice";
import { COLOR } from "@/constants/THEME";

export default function StackAuthLayout() {
  const theme = useAppSelector(selectTheme);
  console.log("🚀 ~ StackAuthLayout");
  // RENDER
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: COLOR[theme].surface },
      }}
    />
  );
}
