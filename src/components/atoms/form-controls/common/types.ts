export type FormControlPropsType = {
  label: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  // custom
  hasError?: boolean;
  flat?: Boolean;
};

export type FormControlKeyboardType =
  | 'text'
  | 'number'
  | 'decimal'
  | 'search'
  | 'email'
  | 'tel'
  | 'url'
  | 'chat';