import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
//
interface IProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  info?: string;
  control: Control<T, any>;
}

export const FilledPasswordField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  info = "",
  control,
}: IProps<T>): JSX.Element => {
  const [hidePassword, setHidePassword] = useState(true);
  const toggleHidePassword = () => setHidePassword((prev) => !prev);
  console.log("🚀 ~ FilledPasswordField");
  // RENDER
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value },
        fieldState: { error, invalid },
      }) => (
        <View>
          <TextInput
            inputMode="email"
            label={label}
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry={hidePassword}
            autoCapitalize="none"
            right={
              <TextInput.Icon
                icon={hidePassword ? "eye" : "eye-off"}
                onPress={toggleHidePassword}
              />
            }
          />
          <HelperText type={invalid ? "error" : "info"}>
            {error?.message || info}
          </HelperText>
        </View>
      )}
    />
  );
};
