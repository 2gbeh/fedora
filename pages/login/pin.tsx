import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/shadcn/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/shadcn/ui/input-otp";
import { Button } from "@/components/shadcn/ui/button";
//
import { AuthLayout } from "@/components/layouts/auth-layout";

export default function LoginPinPage() {
  return (
    <AuthLayout
      pageTitle="Welcome back"
      h1="Enter verification code"
      p="We sent a 6-digit code to your email."
    >
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
    </AuthLayout>
  );
}
