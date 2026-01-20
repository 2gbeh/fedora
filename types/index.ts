export type ListType = string[];

export type SeriesType = number[];

export type DateType = Date | null;

export type DateStringType = Date | string | null;

export type FileType = File | null;

export type FileBlobType = File | Blob | null;

export type RecordType<T = unknown> = Record<string, T>;

export type NormalizedRecordType<T = unknown> = Record<number, T>;

export type EnumType = Record<string, string | number>;

export type OptionType<T = unknown> = {
  value: string;
  label: string;
  disabled?: boolean;
  item?: T;
};