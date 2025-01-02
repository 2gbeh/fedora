import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//
import { useDispatchNotice } from "@/components/dispatch-notice/hook";
import { z, ZodPipe } from "@/lib/zod/zod.pipe";
import { AuthService } from "@/store/auth/auth.service";
import { mockApiCall } from "@/utils/mockApiCall";
import { MOCK } from "@/constants/MOCK";

export function useLogin() {
  const { dispatchToast } = useDispatchNotice();
  const { control, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues,
  });
  const [submitting, setSubmitting] = useState(false);
  //
  const onSubmit: SubmitHandler<LoginSchemaType> = async (formData) => {
    setSubmitting(true);
    const res = await AuthService.signIn(formData);
    if (res?.error) {
      dispatchToast(res.error);
    } else {
      console.log("🚀 ~ onSubmit ~ res:", res);
    }
    setSubmitting(false);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    submitting,
  };
}

export type LoginSchemaType = z.infer<typeof LoginSchema>;

const LoginSchema = z.object({
  email: ZodPipe.email(),
  password: ZodPipe.generatedPassword(),
});

const defaultValues = MOCK.auth.formData
  ? {
      email: "dehphantom@yahoo.com",
      password: "RxyPeDhrD74SMNS",
    }
  : {
      email: "",
      password: "",
    };
