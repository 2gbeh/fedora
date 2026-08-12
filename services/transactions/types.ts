import { BaseDto, BasePK } from "../base/types";

export interface TransactionDto extends BaseDto {
  contactId: BasePK;
  transactionDate: string;
  walletId: BasePK;
  amount: number;
  narration: string;
  categoryIds?: BasePK[];
  isDraft?: boolean;
  isIncognito?: boolean;
  isTemp?: boolean;
  receipt?: string;
}

export type QueryTransactionDto = {};

export type CreateTransactionDto = {};

export type UpdateTransactionDto = {};
