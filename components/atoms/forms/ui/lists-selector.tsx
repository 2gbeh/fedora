import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
//
import { OptionsTypeOnChange, OptionType } from "@/types";
import { textStyles } from "@/styles/text-styles";
//
import { AppLabel, InputWrapperLoading } from "./builder";
import { inputStyles, selectorStyles } from "../styles";
import { InputProps } from "../types";
import { MaterialIcons } from "@expo/vector-icons";
import { COLOR } from "@/constants/COLOR";
import { flexStyles } from "@/styles/flex-styles";

interface Props extends Omit<InputProps, "value" | "onChange"> {
  data?: OptionType[];
  value?: string[];
  onChange?: OptionsTypeOnChange;
  searchable?: boolean;
  searchPlaceholder?: string;
  canCreate?: boolean;
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
    <View style={inputStyles.fieldContainer}>
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
          inputSearchStyle={[inputStyles.input, selectorStyles.searchInput]}
          itemContainerStyle={selectorStyles.itemContainer}
          itemTextStyle={textStyles.input}
          renderSelectedItem={(item, unSelect) => (
            <TouchableOpacity onPress={() => unSelect?.(item)} style={sx.chip}>
              <Text style={sx.chipText}>{item.label}</Text>
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
    marginVertical: 8,
    marginHorizontal: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
    ...flexStyles.rowCenter,
    gap: 4,
  },
  chipText: {
    color: COLOR.primary,
    ...textStyles.label,
  },
});
