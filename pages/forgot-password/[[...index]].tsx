import Link from "next/link";
//
import { Field, FieldGroup, FieldLabel } from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { PATH } from "@/constants/PATH";
//
import { AuthLayout } from "@/components/layouts/auth-layout";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      pageTitle="Forgot Password"
      h1="Login to your account"
      p="Enter your email below to login to your account"
    >
      <form>
        <FieldGroup>
          <Field className="gap-2">
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Ex. example@domain.com"
              required
            />
          </Field>
          <Field>
            <Button type="submit">Send</Button>
          </Field>
        </FieldGroup>
      </form>
    </AuthLayout>
  );
}
