import Link from "next/link";
import { Controller } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react";
//
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { PATH } from "@/constants/PATH";
//
import { AuthLayout } from "@/components/layouts/auth-layout";
import { useLogin } from "@/components/species/auth/hooks/use-login";

export default function LoginPage() {
  const { form, showPassword, submitting, toggleShowPassword, onSubmit } =
    useLogin();

  return (
    <AuthLayout
      pageTitle="Log in"
      h1="Login to your account"
      p="Enter your email below to login to your account"
    >
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="gap-2">
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    {...field}
                    type="email"
                    id="email"
                    placeholder="Ex. example@domain.com"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="gap-2">
                  <div className="flex-center-between">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Link
                      href={PATH.forgotPassword}
                      className="text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="**** ****"
                    />
                    <button
                      className="absolute right-3 top-2.5 cursor-pointer text-muted-foreground"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? (
                        <EyeOffIcon size={16} />
                      ) : (
                        <EyeIcon size={16} />
                      )}
                    </button>
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Field>
              <Button type="submit">
                {submitting && <Spinner />}
                Log in
              </Button>
            </Field>
          </FieldGroup>
        </fieldset>
      </form>
    </AuthLayout>
  );
}
