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
  headerRight?: ReactNode;
  data?: PreviewListData[];
  inset?: boolean;
}
export const PreviewList = ({ title, headerRight, inset, data = [] }: Props) => {
  const hasIcon = data.find((item) => item.icon);

  const renderList = data.map((item, i) => (
    <View key={i} style={sx.item}>
      <View style={sx.item_left}>
        {item.icon ? (
          <MaterialIcons
            name={item.icon}
            color={item.iconColor || COLOR.secondary}
            size={18}
          />
        ) : hasIcon ? (
          <View style={{ width: 18 }} />
        ) : null}
        <Text style={sx.text(item.color || item.labelColor)}>{item.label}</Text>
      </View>
      <Text style={sx.text(item.color || item.valueColor || COLOR.primary)}>
        {item.value}
      </Text>
    </View>
  ));

  return (
    <View style={sx.container}>
      <View style={sx.header}>
        {title ? <Text style={sx.heading}>{title}</Text> : null}
        {headerRight}
      </View>
      {inset ? <View style={sx.content}>{renderList}</View> : renderList}
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
    backgroundColor: COLOR.background,
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 4,
    gap: 8,
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
