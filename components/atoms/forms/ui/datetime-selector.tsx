import { useState } from "react";
import { Platform, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
//
import { AppLabel } from "./app-label";
import { InputSelector } from "./input-selector";
import { inputStyles as sx } from "../styles";
import { InputProps } from "../types";
import { COLOR } from "@/constants/COLOR";

interface Props extends Omit<InputProps, "onChange"> {}

export const DateTimeSelector = (props: Props) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  if (Platform.OS === "web") {
    return (
      <View style={sx.fieldContainer}>
        {props.label ? <AppLabel>{props.label}</AppLabel> : null}
        <input
          type="date"
          // value={date.toISOString().split("T")[0]}
          // onChange={(e) => setDate(new Date(e.target.value))}
          style={{
            ...sx.input,
            border: `1px solid ${COLOR.border}`,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        />
      </View>
    );
  }

  return (
    <View style={sx.fieldContainer}>
      {props.label ? <AppLabel>{props.label}</AppLabel> : null}
      {show && (
        <DateTimePicker
          mode="date"
          value={date}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(event, selectedDate) => {
            setShow(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}
      {/*  onPress={() => setShow(true)} */}
      <InputSelector {...props} icon="event" />
    </View>
  );
};
