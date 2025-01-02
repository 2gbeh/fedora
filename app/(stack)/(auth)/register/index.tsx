import { Pressable, ScrollView, View } from "react-native";
import { Button, Checkbox, Text } from "react-native-paper";
//
import FlexBox from "@/components/flex-box";
import Hyperlink from "@/components/hyperlink";
import {
  FilledTextField,
  FilledPasswordField,
} from "@/components/form-controls";
import { useAppSelector } from "@/store/store.config";
import { selectTheme } from "@/store/theme/theme.slice";
//
import {
  authStyles,
  RegisterSchemaType,
  useRegister,
  Header,
  Legend,
  Footer,
} from "@/features/auth";

export default function RegisterScreen() {
  const sx = authStyles(useAppSelector(selectTheme));
  const {
    control,
    checkboxStatus,
    toggleCheckboxStatus,
    handleSubmit,
    onSubmit,
    submitting,
  } = useRegister();
  console.log("🚀 ~ RegisterScreen");
  // RENDER
  return (
    <View style={sx.container}>
      <Header heading="Sign up" />
      <View style={sx.content}>
        <Legend
          title="Create account"
          subtitle="Enter your details below to continue"
        />
        <ScrollView style={{ flex: 1 }}>
          <View style={{ rowGap: 16, maxHeight: 400 }}>
            <FilledTextField<RegisterSchemaType>
              name="name"
              label="Name"
              placeholder="Enter name"
              control={control}
            />
            <FilledTextField<RegisterSchemaType>
              name="email"
              label="Email"
              placeholder="Email email"
              control={control}
            />
            <FilledPasswordField<RegisterSchemaType>
              name="password"
              label="Password"
              placeholder="Enter password"
              control={control}
            />
            <View>
              <FilledPasswordField<RegisterSchemaType>
                name="confirmPassword"
                label="Confirm password"
                placeholder="Re-type password"
                control={control}
              />
              <Pressable
                onPress={toggleCheckboxStatus}
                style={sx.checkboxWrapper}
              >
                <Checkbox status={checkboxStatus} {...sx.checkboxProps} />
                <Text variant="bodyMedium">
                  I agree to terms and conditions
                </Text>
              </Pressable>
            </View>
            <Button
              mode="contained"
              onPress={handleSubmit(onSubmit)}
              loading={submitting}
            >
              Register
            </Button>
            <Footer
              title="Already have an account?"
              subtitle="Log in"
              href="/login"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
