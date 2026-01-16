import { toast } from "sonner";

type Params = string | { message: string; description?: string };

export function useToast() {
  const success = (params: Params) => {
    if (typeof params === "string") {
      toast.success(params);
    } else {
      const { message, description } = params;
      toast.success(message, { description });
    }
  };

  const error = (params: Params) => {
    const duration = 5000;
    if (typeof params === "string") {
      toast.error(params, { duration });
    } else {
      const { message, description } = params;
      toast.error(message, { description, duration });
    }
  };

  return { success, error };
}
