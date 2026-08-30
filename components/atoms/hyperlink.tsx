import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
//
import { flexStyles } from "@/styles/flex-styles";
import { textStyles } from "@/styles/text-styles";
import { COLOR } from "@/constants/COLOR";

interface Props {
  text: string;
  withIcon?: boolean;
  onClick?: () => void;
}

export const Hyperlink = ({ text, withIcon, onClick }: Props) => {
  return (
    <View style={sx.container}>
      <TouchableOpacity onPress={onClick} style={sx.wrapper}>
        <Text style={sx.text}>{text}</Text>
        {withIcon ? (
          <MaterialIcons name="link" size={18} color={COLOR.link} />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

const sx = StyleSheet.create({
  _: {},
  container: {
    // borderWidth: 1,
    flexDirection: "row",
  },
  wrapper: {
    // borderWidth: 1,
    ...flexStyles.rowCenter,
    gap: 4,
  },
  text: {
    color: COLOR.link,
    ...textStyles.input,
  },
});
