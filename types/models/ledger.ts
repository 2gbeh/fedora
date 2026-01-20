import { VisibilityEnum } from "../enums/ledger-enum";
import { BaseAuditModel } from "./base";

export interface LedgerModel extends BaseAuditModel {
  name: string;
  description?: string | null;
  visibility: VisibilityEnum;
}
