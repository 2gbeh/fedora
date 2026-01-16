export enum TransactionTypeEnum {
  INCOME = "Income",
  EXPENSE = "Expense",
}

export enum TransactionCategoryEnum {
  CAR = "Car",
  CASH = "Cash",
  CHURCH = "Church",
  HEALTH_WELLNESS = "Health & Wellness",
  GROCERIES = "Groceries",
  HOUSE = "House",
  INVESTMENT = "Investment",
  LOAN = "Loan",
  MISC = "Miscellaneous",
  SELF_CARE = "Self Care",
  SOCIAL = "Social",
  SUPPORT = "Support",
  TOILETRIES = "Toiletries",
  UTILITIES = "Utilities",
  WARDROBE = "Wardrobe",
}

enum WalletEnum {
  CASH = "Cash",
  FBN = "First Bank",
  GTB = "GTBank",
  OPAY = "OPay",
}

enum LedgerEnum {
  DEFAULT = "Default",
  SINGAPORE = "Singapore",
  HOUSE_PROJECT = "House Project",
  FIRST_FRUIT = "First Fruit",
  HOME_DECOR = "House Decor",
  CAR_MAINTENANCE = "Car Maintenance",
  KIDS_EDUCATION = "Kids Education",
}

enum AccountStatusEnum {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  SUSPENDED = "Suspended",
  DEACTIVATED = "Deactivated",
}

enum UserRoleEnum {
  SUPER_ADMIN = "Super Admin",
  ADMIN = "Admin",
  USER = "User",
  OWNER = "Owner",
  MANAGER = "Manager",
  EMPLOYEE = "Employee",
  CUSTOMER = "Customer",
}

export interface GeolocationValueObject {
  latitude: number;
  longitude: number;
  accuracy?: number;
  altitude?: number;
  altitudeAccuracy?: number;
  heading?: number;
  speed?: number;
}

export interface DeviceValueObject {
  ipAddress?: string;
  userAgent?: string;
  geolocation?: GeolocationValueObject;
  lastSeen?: string | null;
}