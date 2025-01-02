import { useState } from "react";
import { mockApiCall } from "@/utils/mockApiCall";

export function useExample() {
  const [showAlert, setShowAlert] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  //
  const toggleShowAlert = () => setShowAlert((prev) => !prev);
  //
  async function handleSubmit() {
    setSubmitting(true);
    await mockApiCall();
    setSubmitting(false);
  }

  return {
    showAlert,
    toggleShowAlert,
    handleSubmit,
    submitting,
  };
}
