import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { AuthLayout } from "@/components/species/auth/ui/auth-layout";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/shadcn/ui/input-otp";

export default function LoginWithPinPage() {
  return (
    <AuthLayout>
      <Card>
        <CardHeader>
          <CardTitle>Enter verification code</CardTitle>
          <CardDescription>
            We sent a 6-digit code to your email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="otp">Verification code</FieldLabel>
                <div className="flex-center-center">
                  <InputOTP maxLength={6} id="otp" required>
                    <InputOTPGroup className="gap-3 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <FieldDescription>
                  Enter the 6-digit code sent to your email.
                </FieldDescription>
              </Field>
              <FieldGroup>
                <Button type="submit">Verify</Button>
                <FieldDescription className="text-center">
                  Didn&apos;t receive the code? <a href="#">Resend</a>
                </FieldDescription>
              </FieldGroup>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
