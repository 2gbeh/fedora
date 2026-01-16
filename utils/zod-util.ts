import { z } from "zod";
export { z } from "zod";

export const zodUtil = {
  email: z.email("Invalid email address."),
  strongPassword: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character.",
    ),
  generatedPassword: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
};

/**
z.string().nullish();
// Accepts: "hello", null, undefined ✅ More flexible 

z.string().nullable(); 
// Accepts: "hello", null ❌ Not undefined
*/

class ZodFacade {
  static text(options?: { minLen?: number; maxLen?: number }) {
    const { minLen = 2, maxLen = 50 } = options ?? {};
    return z.string().min(minLen).max(maxLen);
  }

  static description(options?: { minLen?: number; maxLen?: number }) {
    const { minLen = 3, maxLen = 160 } = options ?? {};
    return z.string().min(minLen).max(maxLen);
  }

  static email(options?: { message?: string }) {
    const { message = "Invalid email address" } = options ?? {};
    return z.string().email({ message });
  }

  static tel(options?: { message?: string }) {
    const { message = "Invalid telephone number" } = options ?? {};
    return z
      .string()
      .min(10, { message: "Phone number is too short" })
      .max(15, { message: "Phone number is too long" })
      .regex(/^\+?[0-9]+$/, { message });
  }

  static strongPassword(options?: {}) {
    return z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[a-z]/, { message: "Password must include a lowercase letter" })
      .regex(/[A-Z]/, { message: "Password must include an uppercase letter" })
      .regex(/[0-9]/, { message: "Password must include a number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Password must include a special character",
      });
  }

  static money(options?: { message?: string }) {
    const { message = "Invalid entry" } = options ?? {};
    return z.preprocess(
      (val) =>
        typeof val === "string" && val.trim() !== "" ? parseFloat(val) : 0,
      z.number().nonnegative(message),
    );
  }

  static select<T extends readonly { value: string; label: string }[]>(
    data: T,
  ) {
    const values = data.map((item) => item.value) as [
      T[number]["value"],
      ...T[number]["value"][],
    ];
    return z.enum(values);
  }

  static pastDate(options?: { message?: string }) {
    const { message = "Invalid date" } = options ?? {};
    return z.date().max(new Date(), { message });
  }

  static futureDate(options?: { message?: string }) {
    const { message = "Invalid date" } = options ?? {};
    return z.date().min(new Date(), { message });
  }

  static imageUrl(options?: {}) {
    return z
      .string()
      .url()
      .refine((url) => /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(url));
  }

  static imageFile(options?: { size?: number }) {
    const { size = 5 } = options ?? {};
    return z
      .instanceof(File)
      .refine((file) => file.size > 0, {
        message: "File is required",
      })
      .refine((file) => file.size <= size * 1024 * 1024, {
        message: "Invalid file size",
      })
      .refine((file) => file.type.startsWith("image/"), {
        message: "Invalid file type",
      });
  }

  static reactNativeFile(options?: { size?: number }) {
    const { size = 5 } = options ?? {};
    return z.object({
      uri: z.string().url(),
      type: z.string(),
      name: z.string(),
      size: z.number().max(size * 1024 * 1024),
    });
  }
}
