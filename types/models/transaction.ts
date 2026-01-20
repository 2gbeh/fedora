import {
  TransactionCategoryEnum,
  TransactionTagEnum,
  TransactionTypeEnum,
} from "../enums/transaction-enum";
import { WalletEnum } from "../enums/wallet-enum";
import { BaseAuditModel } from "./base";

export interface TransactionModel extends BaseAuditModel {
  date: string;
  ledgerId: string;
  contactId: string;
  type: TransactionTypeEnum;
  amount: number;
  amountSplit?: AmountSplit[] | null;
  narration: string;
  categories: TransactionCategoryEnum[]; // church, utilities
  tags?: TransactionTagEnum[] | null; // draft, unplanned
  wallet?: WalletEnum | null;
  receiptId?: string | null;
}

interface AmountSplit {
  amount: number;
  narration: string;
}
