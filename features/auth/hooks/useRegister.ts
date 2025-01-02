import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//
import { useDispatchNotice } from "@/components/dispatch-notice/hook";
import { z, ZodPipe } from "@/lib/zod/zod.pipe";
import { AuthService } from "@/store/auth/auth.service";
import { mockApiCall } from "@/utils/mockApiCall";
import { MOCK } from "@/constants/MOCK";

export function useRegister() {
  const { dispatchToast } = useDispatchNotice();
  const { control, handleSubmit } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues,
  });
  const [checkboxStatus, setCheckboxStatus] =
    useState<CheckboxStatusType>("unchecked");
  const [submitting, setSubmitting] = useState(false);
  //
  const toggleCheckboxStatus = () =>
    setCheckboxStatus((prev) => (prev === "checked" ? "unchecked" : "checked"));
  const onSubmit: SubmitHandler<RegisterSchemaType> = async (formData) => {
    setSubmitting(true);
    const res = await AuthService.createUser(formData);
    if (res?.error) {
      dispatchToast(res.error);
    } else {
      console.log("🚀 ~ onSubmit ~ res:", res);
    }
    setSubmitting(false);
  };

  return {
    control,
    checkboxStatus,
    toggleCheckboxStatus,
    handleSubmit,
    onSubmit,
    submitting,
  };
}

type CheckboxStatusType = "checked" | "unchecked" | "indeterminate";
export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

const RegisterSchema = z.object({
  name: ZodPipe.name(),
  email: ZodPipe.email(),
  password: ZodPipe.password(),
  confirmPassword: ZodPipe.password(),
});

const defaultValues = MOCK.auth.formData
  ? {
      name: "Emanuel",
      email: "dehphantom@yahoo.com",
      password: "RxyPeDhrD74SMNS",
      confirmPassword: "RxyPeDhrD74SMNS",
    }
  : {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
