export interface IWallet {
  logo?: null | string;
  account_name: string;
  display_name?: null | string;
  account_number?: null | string;
  transactions?: null | {
    total_credit: number;
    total_debit: number;
  };
}
