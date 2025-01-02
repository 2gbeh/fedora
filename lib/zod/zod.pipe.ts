import { z } from "zod";
export { z } from "zod";

export class ZodPipe {
  // Yu Li
  static name = (label = "Name", minLength = 2) =>
    z
      .string({
        required_error: `${label} is a required field.`,
      })
      // .trim()
      .min(1, `${label} is a required field.`)
      .min(minLength, `${label} must be at least ${minLength} char(s) long.`)
      .regex(
        /^[a-z A-Z-]+$/i,
        `${label} should contain only letters, spaces or hyphens.`
      );

  // hi@fb.io
  static email = (label = "Email") =>
    z
      .string({
        required_error: `${label} is a required field.`,
      })
      // .trim()
      .email({ message: `Enter a valid email address.` })
      .min(8, `${label} must be at least 8 char(s) long.`);

  // _Strongp@ssw0rd
  static password = (label = "Password") =>
    z
      .string({
        required_error: `${label} is a required field.`,
      })
      // .trim()
      .min(8, `${label} must be at least 8 char(s) long.`)
      .regex(/[0-9]/, `${label} must contain at least a number.`)
      .regex(/[A-Z]/, `${label} must contain at least a capital letter`)
      .regex(
        /[^0-9a-zA-Z]/,
        `${label} must contain at least a special character.`
      );

  // RxyPeDhrD74SMNS
  static generatedPassword = (label = "Password") =>
    z
      .string({
        required_error: `${label} is a required field.`,
      })
      // .trim()
      .min(8, `${label} must be at least 8 char(s) long.`)
      .regex(/[0-9]/, `${label} must contain at least a number.`)
      .regex(/[A-Z]/, `${label} must contain at least a capital letter`)
      
}
