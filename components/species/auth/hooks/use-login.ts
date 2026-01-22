import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserCredential } from "firebase/auth";
//
import { useToast } from "@/hooks/use-toast";
import { authService } from "@/services/auth-service";
import { firebaseUtil } from "@/lib/firebase/utils";
import { z, zodUtil } from "@/utils/zod-util";
import { PATH } from "@/constants/PATH";
import { MOCK } from "@/constants/MOCK";

const formSchema = z.object({
  email: zodUtil.email(),
  password: zodUtil.password(),
});

type FormSchemaType = z.infer<typeof formSchema>;

const defaultValues = MOCK.auth.formData
  ? {
      email: process.env.NEXT_PUBLIC_FIREBASE_USER_EMAIL,
      password: process.env.NEXT_PUBLIC_FIREBASE_USER_PASSWORD,
    }
  : {};

export function useLogin() {
  const router = useRouter();
  const toast = useToast();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  //
  const [submitting, setSubmitting] = useState(false);
  //
  async function onSubmit(formData: FormSchemaType) {
    // console.log("🚀 ~ onSubmit ~ formData:", formData);
    setSubmitting(true);

    authService
      .signIn(formData)
      .then((res: UserCredential) => {
        // console.log("🚀 ~ onSubmit ~ res:", res);
        toast.success("Log in successful");
        router.push(PATH.transactions);
      })
      .catch((err) => {
        const message = firebaseUtil.translateError(err);
        toast.error(message);
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  return {
    form,
    submitting,
    onSubmit,
  };
}
