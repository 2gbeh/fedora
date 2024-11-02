import { useState } from "react";
import { PromiseHelper } from "@/utils/helpers/common/promise.helper";

export function useFoo() {
  const [submitting, setSubmitting] = useState(false);
  //
  const toggleSubmitting = () => setSubmitting((prev) => !prev);
  //
  async function handleSubmit(formData?: FormData) {
    if (!submitting) {
      setSubmitting(true);
      await PromiseHelper.mockApiCall();
      console.log("🚀 ~ useFoo ~ handleSubmit:", formData);
      setSubmitting(false);
    }
  }

  return {
    submitting,
    toggleSubmitting,
    handleSubmit,
  };
}
