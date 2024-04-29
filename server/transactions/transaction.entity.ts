import { TAccount } from "../accounts/account.entity";

export type TTransaction = {
  account: TAccount;
  amount: number;
  narration?: string;
  date: string;
  type: string;
};
