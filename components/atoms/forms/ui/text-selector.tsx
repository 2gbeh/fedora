import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
//
import { formStyles as sx } from "../styles";
import { InputProps } from "../types";
import { AppLabel } from "./app-label";

interface OptionType {
  label: string;
  value: string;
}

interface Props extends Omit<InputProps, "onChange"> {
  data?: OptionType[];
  onChange?: (item: OptionType) => void;
}

export const TextSelector = (props: Props) => {
  const onChange = (item: OptionType) => {
    props.onChange?.(item);
  };
  //
  return (
    <View style={sx.fieldContainer}>
      {props.label ? <AppLabel>{props.label}</AppLabel> : null}
      <Dropdown
        data={props.data || []}
        labelField="label"
        valueField="value"
        placeholder={props.placeholder}
        value={props.value}
        onChange={onChange}
        search
        searchPlaceholder="Search..."
        style={sx.input}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={textStyles.input}
        inputSearchStyle={[sx.input, styles.searchInput]}
        itemTextStyle={textStyles.input}
        itemContainerStyle={styles.itemContainer}
      />
      {/* <Picker
        selectedValue={props.value}
        onValueChange={props.onChange}
        style={sx.input}
        placeholder="suybjlj"
      >
        {props.data?.map((item) => (
          <Picker.Item label={item.name} value={item.value} />
        ))}
      </Picker> */}
    </View>
  );
};

import { COLOR } from "@/constants/COLOR";
import { textStyles } from "@/styles/text-styles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  placeholder: {
    color: COLOR.muted,
    ...textStyles.input,
  },
  searchInput: {
    backgroundColor: COLOR.nil,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 0,
    margin: 0,
    padding: 0,
    height: 40,
  },
  itemContainer: {
    borderRadius: 8,
    // maxHeight: 250,
  },
});
