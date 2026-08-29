import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
//
import { AppLabel, InputWrapperLoading } from "./builder";
import { textStyles } from "@/styles/text-styles";
import { inputStyles, selectorStyles } from "../styles";
import { OptionType, OptionTypeOnChange } from "@/types";
import { SelectorProps } from "../types";

interface Props extends Omit<SelectorProps, "onChange"> {
  onChange?: OptionTypeOnChange;
}

const defaultData = { label: "-- Add New --", value: "_create" };

export const ListSelector = (props: Props) => {
  const data = props.data
    ? props.canCreate
      ? [defaultData, ...props.data]
      : props.data
    : props.canCreate
      ? [defaultData]
      : [];

  const onChange = (item: OptionType) => {
    props.onChange?.(item.value, item);
  };
  //
  return (
    <View style={inputStyles.field_container}>
      <AppLabel text={props.label} />
      <InputWrapperLoading loading={props.loading}>
        <Dropdown
          placeholder={props.loading ? "Please wait ..." : props.placeholder}
          labelField="label"
          valueField="value"
          data={data}
          value={props.value}
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
        />
      </InputWrapperLoading>
    </View>
  );
};
