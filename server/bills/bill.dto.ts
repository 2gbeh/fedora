import { IAccount } from "../accounts/account.dto";

export interface IBill {
  account: IAccount;
  bills: number;
  narration?: null | string;
}
