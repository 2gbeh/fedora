export interface OptionType {
  label: string;
  value: string;
}

export type OptionTypeOnChange = (value: string, item?: OptionType) => void;

export type OptionsTypeOnChange = (value: string[], items?: OptionType[]) => void;

export type PositionType =
  | "static"
  | "relative"
  | "absolute"
  | "fixed"
  | "sticky"
  | undefined;
