import { BaseAuditModel } from "./base";

export interface ContactModel extends BaseAuditModel {
  photoUrl?: string | null;
  displayName: string;
  phoneNumber?: string | null;
  mobileNumber?: string | null;
  bankName?: string | null;
  accountName?: string | null;
  accountNumber?: string | null;
}
