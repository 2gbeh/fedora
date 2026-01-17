import Link from "next/link";
//
import { ControlledForm } from "@/components/atoms/forms/ui/controlled-form";
import { ControlledInput } from "@/components/atoms/forms/ui/controlled-input";
import { ControlledPasswordInput } from "@/components/atoms/forms/ui/controlled-password-input";
import { SubmitButton } from "@/components/atoms/buttons/submit-button";
import { PATH } from "@/constants/PATH";
//
import { AuthLayout } from "@/components/layouts/auth-layout";
import { useLogin } from "@/components/species/auth/hooks/use-login";

export default function LoginPage() {
  const { form, submitting, onSubmit } = useLogin();

  return (
    <AuthLayout
      pageTitle="Log in"
      h1="Login to your account"
      p="Enter your email below to login to your account"
    >
      <ControlledForm
        onSubmit={form.handleSubmit(onSubmit)}
        disabled={submitting}
      >
        <ControlledInput
          control={form.control}
          name="email"
          label="Email"
          type="email"
          placeholder="Ex. example@domain.com"
        />
        <ControlledPasswordInput
          control={form.control}
          name="password"
          label="Password"
          labelRightSection={
            <Link
              href={PATH.forgotPassword}
              className="text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          }
        />
        <SubmitButton submitting={submitting}>Log in</SubmitButton>
      </ControlledForm>
    </AuthLayout>
  );
}
