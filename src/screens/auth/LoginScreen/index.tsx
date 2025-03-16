import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {useTheme} from 'react-native-paper';
import type {ThemeProp} from 'react-native-paper/lib/typescript/types';
// SHARED IMPORTS
import {RootStackScreenProps} from '@/navigators/RootStackNavigator/types';
import {TextField, PasswordField} from '@/components/atoms/form-controls';
import {ThemedButton} from '@/components/atoms/ThemedButton';
import CustomKeyboardAvoidingView from '@/components/atoms/CustomKeyboardAvoidingView';
import {useFormData} from '@/hooks/useFormData';
// LOCAL IMPORTS
import {Heading} from '@/components/organisms/auth';

function LoginScreen({
  navigation,
}: RootStackScreenProps<'Register'>): React.JSX.Element {
  const theme = useTheme();
  const sx = themedStyles(theme);
  const {handleSubmit, isSubmitting} = useFormData();
  // RENDER
  return (
    <ScrollView contentContainerStyle={sx().container}>
      <CustomKeyboardAvoidingView>
        <Heading headline="Log in" body="Welcome back" />
        <TextField label="Email or username" rightIcon="email" flat />
        <PasswordField label="Password" flat />
        <ThemedButton.Filled onClick={handleSubmit} isLoading={isSubmitting}>
          Log in
        </ThemedButton.Filled>
        <ThemedButton.Tonal onClick={() => navigation.navigate('Register')}>
          Register
        </ThemedButton.Tonal>
      </CustomKeyboardAvoidingView>
    </ScrollView>
  );
}

export default LoginScreen;

export function themedStyles(theme: ThemeProp) {
  type PropsType = {supportingText?: boolean};
  return (props?: PropsType) =>
    StyleSheet.create({
      _: {},
      container: {
        backgroundColor: theme.colors?.background,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
      },
    });
}
