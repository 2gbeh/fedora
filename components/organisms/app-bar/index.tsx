import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { flexStyles } from "@/styles/flex";
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "@/components/atoms/avatar";
import { appBarStyles as sx } from "./styles";

interface Props {
  rightSection?: boolean;
}

export const AppBar = ({ rightSection }: Props) => {
  if (rightSection) {
    return (
      <View style={[flexStyles.rowCenterCenter, { gap: 8, marginRight: 16 }]}>
        <TouchableOpacity
          style={{
            // borderWidth: 1,
            width: 24,
            height: 24,
            ...flexStyles.rowCenterCenter,
          }}
        >
          <MaterialIcons name="search" size={18} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // borderWidth: 1,
            width: 24,
            height: 24,
            ...flexStyles.rowCenterCenter,
          }}
        >
          <MaterialIcons name="more-vert" size={18} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={sx.container}>
      <View style={sx.figure}>
        <Avatar
          src={require("@/assets/images/favicon.png")}
          alt={APP.name}
          relativePath
        />
        <View style={sx.figcaption}>
          <Text style={sx.text}>Hello,</Text>
          <Text style={sx.subtext}>Emanuel</Text>
        </View>
      </View>
      <View style={sx.rightSection}>
        <Pressable style={sx.iconContainer}>
          <MaterialIcons name="search" size={18} color={"#79747E"} />
        </Pressable>
        <Pressable style={sx.iconContainer}>
          <MaterialIcons name="bar-chart" size={18} color={"#79747E"} />
        </Pressable>
      </View>
    </View>
  );
};
