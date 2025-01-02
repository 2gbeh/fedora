import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";
import Tent from "@/components/tent";
import { AuthService } from "@/store/auth/auth.service";

export default function HomeScreen() {
  console.log("🚀 ~ HomeScreen");
  // RENDER
  return (
    <Tent>
      <View>
        HomeScreen
        <Button mode="contained" onPress={AuthService.signOut}>
          Log out
        </Button>
      </View>
    </Tent>
  );
}
