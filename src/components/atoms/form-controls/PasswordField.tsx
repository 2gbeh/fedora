import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
// LOCAL IMPORTS
import type { FormControlPropsType } from './common/types';

const PasswordField: React.FC<FormControlPropsType> = ({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled,
  // custom
  hasError,
  flat,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(prev => !prev);
  // RENDER
  return (
    <TextInput
      inputMode="email"
      // keyboardType="visible-password"
      label={label}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChangeText={onChange}
      secureTextEntry={!showPassword}
      editable={!disabled}
      autoCapitalize="none"
      error={hasError}
      mode={flat ? 'flat' : 'outlined'}
      right={
        <TextInput.Icon
          icon={showPassword ? 'eye-off' : 'eye'}
          onPress={toggleShowPassword}
        />
      }
    />
  );
};

export default React.memo(PasswordField);
