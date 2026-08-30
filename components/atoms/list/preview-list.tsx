import { ReactNode } from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
//
import { MaterialIconName } from "@/types/react-types";
import { textStyles } from "@/styles/text-styles";
import { flexStyles } from "@/styles/flex-styles";
import { COLOR } from "@/constants/COLOR";

export interface PreviewListData {
  icon?: MaterialIconName;
  iconColor?: string;
  label?: ReactNode;
  labelColor?: string;
  value?: ReactNode;
  valueColor?: string;
  color?: string;
}

interface Props {
  title?: string;
  rightSection?: ReactNode;
  data?: PreviewListData[];
}
export const PreviewList = ({ title, rightSection, data = [] }: Props) => {
  const hasIcon = data.find((item) => item.icon);

  return (
    <View style={sx.container}>
      <View style={sx.header}>
        {title ? <Text style={sx.heading}>{title}</Text> : null}
        {rightSection}
      </View>
      <View style={sx.content}>
        {data.map((item, i) => (
          <View key={i} style={sx.item}>
            <View style={sx.item_left}>
              {item.icon ? (
                <MaterialIcons
                  name={item.icon}
                  color={item.iconColor || COLOR.icon}
                  size={18}
                />
              ) : hasIcon ? (
                <View style={{ width: 18 }} />
              ) : null}
              <Text style={sx.text(item.color || item.labelColor)}>
                {item.label}
              </Text>
            </View>
            <Text style={sx.text(item.color || item.valueColor)}>
              {item.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const sx = {
  _: {},
  container: {
    gap: 8,
  } as ViewStyle,
  header: {
    borderColor: COLOR.border,
    borderBottomWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    ...flexStyles.rowCenterBetween,
  } as ViewStyle,
  heading: {
    color: COLOR.primary,
    ...textStyles.title,
  } as TextStyle,
  content: {
    gap: 4,
  } as ViewStyle,
  item: {
    ...flexStyles.rowCenterBetween,
    paddingHorizontal: 16,
  } as ViewStyle,
  item_left: {
    ...flexStyles.rowCenter,
    gap: 8,
  } as ViewStyle,
  text: (color?: string) =>
    ({
      color: color || COLOR.secondary,
      ...textStyles.input,
    }) as TextStyle,
};
