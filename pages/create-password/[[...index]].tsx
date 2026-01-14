import Link from "next/link";
//
import { Field, FieldGroup, FieldLabel } from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { PATH } from "@/constants/PATH";
//
import { AuthLayout } from "@/components/layouts/auth-layout";

export default function CreatePasswordPage() {
  return (
    <AuthLayout
      pageTitle="Create Password"
      h1="Login to your account"
      p="Enter your email below to login to your account"
    >
      <form>
        <FieldGroup>
          <Field className="gap-2">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="**** ****"
              required
            />
          </Field>
          <Field className="gap-2">
            <FieldLabel htmlFor="passwordConfirmation">Confirm Password</FieldLabel>
            <Input
              type="password"
              id="passwordConfirmation"
              name="passwordConfirmation"
              placeholder="**** ****"
              required
            />
          </Field>
          <Field>
            <Button type="submit">Create</Button>
          </Field>
        </FieldGroup>
      </form>
    </AuthLayout>
  );
}
