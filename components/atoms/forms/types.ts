import { PropsWithChildren } from "react";
import { KeyboardTypeOptions } from "react-native";

export const KEYBOARD_TYPE_MAP = {
  text: "default",
  search: "web-search",
  alphanumeric: "name-phone-pad",
  number: "numbers-and-punctuation",
  integer: "number-pad",
  decimal: "decimal-pad",
  email: "email-address",
  tel: "phone-pad",
  url: "url",
  username: "twitter",
  password: "visible-password", // secureTextEntry
} satisfies Record<string, KeyboardTypeOptions>;

export type InputType = keyof typeof KEYBOARD_TYPE_MAP;

export interface InputProps {
  type?: InputType;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
}

export interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: "solid" | "outline";
}

export interface ButtonGroupProps extends PropsWithChildren {
  variant?: "flex" | "grid";
}
