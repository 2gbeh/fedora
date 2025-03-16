import React, {PropsWithChildren} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

const CustomKeyboardAvoidingView: React.FC<PropsWithChildren> = ({
  children,
}) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{rowGap: 16}}>
    {children}
  </KeyboardAvoidingView>
);

export default React.memo(CustomKeyboardAvoidingView);
