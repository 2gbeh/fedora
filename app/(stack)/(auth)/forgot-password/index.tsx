import { View } from "react-native";
import { Button } from "react-native-paper";
//
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
  LoginSchemaType,
  useLogin,
  Header,
  Legend,
  Footer,
} from "@/features/auth";

export default function ForgotPasswordScreen() {
  const sx = authStyles(useAppSelector(selectTheme));
  const { control, handleSubmit, onSubmit, submitting } = useLogin();
  console.log("🚀 ~ ForgotPasswordScreen");
  // RENDER
  return (
    <View style={sx.container}>
      <Header heading="Forgot password" />
      <View style={sx.content}>
        <Legend
          title="Enter your account email"
          subtitle="Your password reset link will be sent to your email"
        />
        <FilledTextField<LoginSchemaType>
          name="email"
          label="Email"
          placeholder="Email email"
          control={control}
        />
        <Button
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          loading={submitting}
          icon="send"
        >
          Send
        </Button>
        <Footer
          title="Already have an account?"
          subtitle="Log in"
          href="/login"
        />
      </View>
    </View>
  );
}
