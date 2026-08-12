import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//
import { homeStyles as sx } from "@/components/species/home/styles";
import { useState } from "react";

export default function HomeScreen() {
  const [number, setNumber] = useState('');

  return (
    <SafeAreaView style={sx.safeArea}>
      <TextInput
        keyboardType="web-search"
        placeholder="Search transactions"
        value={number}
        onChangeText={setNumber}
        style={sx.input}
      />
      <View style={sx._}>
        <Text style={sx._}>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
}
