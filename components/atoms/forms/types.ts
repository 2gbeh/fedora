import { KeyboardTypeOptions } from "react-native";

export const KEYBOARD_TYPE_MAP = {
  text: "default",
  search: "web-search",
  alphanumeric: "name-phone-pad",
  number: "number-pad",
  money: "decimal-pad",
  password: "visible-password",
  email: "email-address",
  tel: "phone-pad",
  url: "url",
  slug: "numbers-and-punctuation",
  username: "twitter",
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
}
