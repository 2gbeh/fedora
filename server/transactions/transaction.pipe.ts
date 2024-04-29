import { $, NAIRA, wrap } from "@/utils";
import date from "@/utils/phpDateFormat";
// 
import { AccountPipe } from "../accounts/account.pipe";
import { TTransaction } from "./transaction.entity";

export class TransactionPipe {
  static transform(transaction: TTransaction) {
    return {
      ...transaction,
      account: AccountPipe.transform(transaction.account),
      amount_f: $(transaction.amount),
      narration_f:
        transaction?.narration ||
        `${transaction.amount > -1 ? "credit" : "debit"} alert`,
      date_f: date(transaction.date, "M j") as string,
    };
  }
}
