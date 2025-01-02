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

export default function LoginScreen() {
  const sx = authStyles(useAppSelector(selectTheme));
  const { control, handleSubmit, onSubmit, submitting } = useLogin();
  console.log("🚀 ~ LoginScreen");
  // RENDER
  return (
    <View style={sx.container}>
      <Header heading="Sign in" />
      <View style={sx.content}>
        <Legend
          title="Welcome back"
          subtitle="Enter your details below to continue"
        />
        <FilledTextField<LoginSchemaType>
          name="email"
          label="Email"
          placeholder="Enter email"
          control={control}
        />
        <FilledPasswordField<LoginSchemaType>
          name="password"
          label="Password"
          placeholder="Enter password"
          control={control}
        />
        <Hyperlink href="/forgot-password" right>
          Forgot password?
        </Hyperlink>
        <Button
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          loading={submitting}
        >
          Log in
        </Button>
        <Footer
          title="Don't have an account?"
          subtitle="Create account"
          href="/register"
        />
      </View>
    </View>
  );
}
