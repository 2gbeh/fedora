import { useState } from "react";
import { Platform, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
//
import { AppLabel } from "./builder";
import { InputAlias } from "./builder";
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
        <AppLabel text={props.label} />
        <input
          type="date"
          // value={date.toISOString().split("T")[0]}
          // onChange={(e) => setDate(new Date(e.target.value))}
          style={{
            ...sx.input,
            border: `1px solid ${COLOR.border}`,
            paddingLeft: 16,
            paddingRight: 16,
            width: "100%",
          }}
        />
      </View>
    );
  }

  return (
    <View style={sx.fieldContainer}>
      <AppLabel text={props.label} />
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
      <InputAlias {...props} icon="event" />
    </View>
  );
};
