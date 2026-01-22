import { slugify } from "@/utils";

export const NAIRA = "₦";
export const DOLLAR = "$";
export const ZERO = "0";
export const EMPTY_STRING = "";
export const HYPHENS = "---";
export const NOT_APPLICABLE = "N/A";
export const UNKNOWN = "Unknown";
//
export const CUR_DATE = new Date().toISOString().slice(0, 10);
export const FILE_SIZE = 1024 * 1024 * 20; // 20MB
export const IMAGE_FILE_SIZE = 1024 * 1024 * 5; // 5MB
export const IMAGE_MIME_TYPE = ["image/jpeg", "image/png"];
//
export const FilterMap = {
  ALL: { label: "All", value: slugify("All") },
} as const
;

export const LedgerNameMap = {
  DEFAULT: { label: "Default", value: slugify("default") },
} as const
;

export const LedgerVisibilityMap = {
  PUBLIC: { label: "Public", value: slugify("Public") },
  PRIVATE: { label: "Private", value: slugify("Private") },
  PROTECTED: { label: "Protected", value: slugify("Protected") },
} as const
;

export const TransactionFieldMap = {
  DATE: { label: "Date", value: slugify("Date") },
  TYPE: { label: "Type", value: slugify("Type") },
  AMOUNT: { label: "Amount", value: slugify("Amount") },
  CONTACT_NAME: { label: "Contact Name", value: slugify("Contact Name") },
} as const
;

export const TransactionTypeMap = {
  INCOME: { label: "Income", value: slugify("Income") },
  EXPENSE: { label: "Expense", value: slugify("Expense") },
} as const
;

export const TransactionTagMap = {
  DRAFT: { label: "Draft", value: slugify("Draft") },
  UNPLANNED: { label: "Unplanned", value: slugify("Unplanned") },
} as const
;

export const TransactionCategoryMap = {
  CAR: { label: "Car", value: slugify("Car") },
  CASH: { label: "Cash", value: slugify("Cash") },
  CHURCH: { label: "Church", value: slugify("Church") },
  HEALTH_WELLNESS: { label: "Health & Wellness", value: slugify("") },
  GROCERIES: { label: "Groceries", value: slugify("") },
  HOUSE: { label: "House", value: slugify("") },
  INVESTMENT: { label: "Investment", value: slugify("") },
  LOAN: { label: "Loan", value: slugify("") },
  MISC: { label: "Miscellaneous", value: slugify("") },
  SELF_CARE: { label: "Self Care", value: slugify("") },
  SOCIAL: { label: "Social", value: slugify("") },
  SUPPORT: { label: "Support", value: slugify("") },
  TOILETRIES: { label: "Toiletries", value: slugify("") },
  UTILITIES: { label: "Utilities", value: slugify("") },
  WARDROBE: { label: "Wardrobe", value: slugify("") },
} as const
;
