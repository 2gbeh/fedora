import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
//
import { OptionType } from "@/types";
import { textStyles } from "@/styles/text-styles";
import { COLOR } from "@/constants/COLOR";
//
import { AppLabel } from "./app-label";
import { inputStyles } from "../styles";
import { InputProps } from "../types";

interface Props extends Omit<InputProps, "onChange"> {
  data?: OptionType[];
  onChange?: (item: OptionType) => void;
  searchable?: boolean;
  searchPlaceholder?: string;
}

export const ListSelector = (props: Props) => {
  const onChange = (item: OptionType) => {
    props.onChange?.(item);
  };
  //
  return (
    <View style={inputStyles.fieldContainer}>
      {props.label ? <AppLabel>{props.label}</AppLabel> : null}
      <Dropdown
        data={props.data || []}
        labelField="label"
        valueField="value"
        placeholder={props.placeholder}
        value={props.value}
        onChange={onChange}
        search={props.searchable}
        searchPlaceholder={props.searchPlaceholder}
        style={inputStyles.input}
        placeholderStyle={inputStyles.placeholder}
        selectedTextStyle={textStyles.input}
        containerStyle={{ maxHeight: 250 }}
        inputSearchStyle={[inputStyles.input, sx.searchInput]}
        itemContainerStyle={sx.itemContainerStyle}
        itemTextStyle={textStyles.input}
      />
    </View>
  );
};

const sx = StyleSheet.create({
  searchInput: {
    backgroundColor: COLOR.nil,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 0,
    margin: 0,
    // marginBottom: 0,
    paddingHorizontal: 8,
  },
  itemContainerStyle: {
    backgroundColor: COLOR.nil,
    height: 40,
    justifyContent: "center",
  },
});
