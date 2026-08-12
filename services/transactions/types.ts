import { BaseDto } from "../base/types";

export interface TransactionDto extends BaseDto {
  receipt?: string;
  date: string;
  type: string;
  amount: number;
  narration: string;
  wallet: string;
  tags?: string[];
  isDraft?: boolean;
  isIncognito?: boolean;
  isTemp?: boolean;
}

export type QueryTransactionDto = {};

export type CreateTransactionDto = {};

export type UpdateTransactionDto = {};
