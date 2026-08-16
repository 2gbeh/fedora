import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
//
import { Avatar } from "@/components/atoms/avatar";
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";
//
import { appBarStyles as sx } from "./styles";

interface Props {
  menu?: boolean;
}

const iconProps = { size: 24, color: COLOR.secondary };

export const AppBar = ({ menu }: Props) => {
  if (menu) {
    return (
      <View style={sx.right}>
        <TouchableOpacity style={sx.iconContainer}>
          <MaterialIcons name="search" {...iconProps} />
        </TouchableOpacity>
        <TouchableOpacity style={sx.iconContainer}>
          <MaterialIcons name="more-vert" {...iconProps} />
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
          size={48}
          radius={16}
          relativePath
        />
        <View>
          <Text style={sx.greeting}>Welcome,</Text>
          <Text style={sx.username}>Emanuel</Text>
        </View>
      </View>
      <View style={sx.right}>
        <TouchableOpacity style={sx.iconContainer}>
          <MaterialIcons name="search" {...iconProps} />
        </TouchableOpacity>
        <TouchableOpacity style={sx.iconContainer}>
          <MaterialIcons name="bar-chart" {...iconProps} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
