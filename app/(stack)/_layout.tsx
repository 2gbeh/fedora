import { Stack } from "expo-router";
import Loader from "@/components/atoms/loader";
import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function StackLayout() {
  const { verifying } = useAuthGuard();
  console.log("🚀 ~ StackLayout");
  // RENDER
  return verifying ? (
    <Loader />
  ) : (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
