import { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
//
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebase/config";
import { PATH } from "@/constants/PATH";
import { PROTOTYPING } from "@/constants/PROTOTYPING";

const formSchema = z.object({
  email: z.email("Invalid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character.",
    ),
});

type FormSchemaType = z.infer<typeof formSchema>;

const defaultValues = PROTOTYPING.auth.formData
  ? { email: "dehphantom@yahoo.com", password: "$Strongp@ssw0rd" }
  : { email: "", password: "" };

export function useDashboard() {
  const router = useRouter();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  //
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  //
  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  //
  async function onSubmit(formData: FormSchemaType) {
    console.log("🚀 ~ onSubmit ~ formData:", formData);

    signInWithEmailAndPassword(firebaseAuth, formData.email, formData.password)
      .then(() => {
        toast.success("Log in successful");
        router.push(PATH.dashboard);
      })
      .catch(() => {
        toast.error("Log in failed", {
          duration: Infinity,
          closeButton: true,
        });
      });
  }

  return {
    form,
    showPassword,
    submitted,
    setSubmitted,
    toggleShowPassword,
    onSubmit,
  };
}
