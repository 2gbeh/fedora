import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import { MaterialIcons } from "@expo/vector-icons";
//
import { AppLabel, InputWrapperLoading } from "./builder";
import { textStyles } from "@/styles/text-styles";
import { inputStyles, selectorStyles } from "../styles";
import { flexStyles } from "@/styles/flex-styles";
import { OptionsTypeOnChange } from "@/types";
import { SelectorProps } from "../types";
import { COLOR } from "@/constants/COLOR";

interface Props extends Omit<SelectorProps, "value" | "onChange"> {
  value?: string[];
  onChange?: OptionsTypeOnChange;
}

const defaultData = { label: "-- Add New --", value: "_create" };

export const ListsSelector = (props: Props) => {
  const data = props.data
    ? props.canCreate
      ? [defaultData, ...props.data]
      : props.data
    : props.canCreate
      ? [defaultData]
      : [];

  const onChange = (items: string[]) => {
    props.onChange?.(items);
  };
  //
  return (
    <View style={inputStyles.field_container}>
      <AppLabel text={props.label} />
      <InputWrapperLoading loading={props.loading}>
        <MultiSelect
          placeholder={props.loading ? "Please wait ..." : props.placeholder}
          labelField="label"
          valueField="value"
          data={data}
          value={props.value ?? []}
          onChange={onChange}
          disable={props.disabled}
          search={props.searchable}
          searchPlaceholder={props.searchPlaceholder}
          style={inputStyles.input}
          placeholderStyle={inputStyles.placeholder}
          selectedTextStyle={textStyles.input}
          containerStyle={selectorStyles.container}
          inputSearchStyle={[inputStyles.input, selectorStyles.search_input]}
          itemContainerStyle={selectorStyles.item_container}
          itemTextStyle={textStyles.input}
          renderSelectedItem={(item, unSelect) => (
            <TouchableOpacity onPress={() => unSelect?.(item)} style={sx.chip}>
              <Text style={sx.chip_text}>{item.label}</Text>
              <MaterialIcons name="close" color={COLOR.secondary} />
            </TouchableOpacity>
          )}
        />
      </InputWrapperLoading>
    </View>
  );
};

const sx = StyleSheet.create({
  chip: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 8,
    marginHorizontal: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
    ...flexStyles.rowCenter,
    gap: 4,
  },
  chip_text: {
    color: COLOR.primary,
    ...textStyles.label,
  },
});
