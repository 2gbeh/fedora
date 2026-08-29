import { useState } from "react";
import { Platform, View } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
//
import { AppLabel } from "./builder";
import { InputAlias } from "./builder";
import { inputStyles } from "../styles";
import { InputProps } from "../types";
import { COLOR } from "@/constants/COLOR";

interface Props extends InputProps {}

export const DateSelector = (props: Props) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleChangeWeb = (
    ev: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    if (props.onChange) props.onChange(ev.target.value);
  };

  const handleChange = (ev: DateTimePickerEvent, date?: Date) => {
    setShow(Platform.OS === "ios"); // iOS stays open, Android closes

    if (ev.type === "set" && date) {
      setDate(date);
      if (props.onChange) {
        const dateStr = date.toISOString().slice(0, 10);
        props.onChange(dateStr);
      }
    }
  };

  if (Platform.OS === "web") {
    return (
      <View style={inputStyles.field_container}>
        <AppLabel text={props.label} />
        <input
          type="date"
          value={props.value}
          onChange={handleChangeWeb}
          style={sx.web_input}
        />
      </View>
    );
  }

  return (
    <View style={inputStyles.field_container}>
      <AppLabel text={props.label} />
      {show && (
        <DateTimePicker
          mode="date"
          value={date}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleChange}
        />
      )}
      <InputAlias
        icon="event"
        value={props.value}
        placeholder={props.placeholder}
        onClick={() => setShow(true)}
      />
    </View>
  );
};

const sx = {
  _: {},
  web_input: {
    border: `1px solid ${COLOR.border}`,
    paddingLeft: 16,
    paddingRight: 16,
    width: "90%",
    ...inputStyles.input,
  },
};
