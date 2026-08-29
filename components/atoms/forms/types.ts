import { KeyboardTypeOptions } from "react-native";
import { OptionType } from "@/types";

export const KEYBOARD_TYPE_MAP = {
  text: "default",
  search: "web-search",
  alphanumeric: "name-phone-pad",
  number: "numbers-and-punctuation",
  integer: "number-pad", // otp
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
  onChange?: (value?: string) => void;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
}

export interface SelectorProps extends InputProps {
  data?: OptionType[];
  searchable?: boolean;
  searchPlaceholder?: string;
  canCreate?: boolean;
}