import { IAccount } from "../accounts/account.dto";

export interface ITransaction {
  account: IAccount;
  amount: number;
  narration?: string;
  date: string;
  type: string;
}

export type readTransactionDto = {};

export type createTransactionDto = {};

export type updateTransactionDto = Partial<createTransactionDto>;
