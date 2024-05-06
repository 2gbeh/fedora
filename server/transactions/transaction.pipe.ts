import { $ } from "@/utils";
import date from "@/utils/phpDateFormat";
import { AccountPipe } from "../accounts/account.pipe";
import { ITransaction } from "./transaction.dto";

export class TransactionPipe {
  static transform(transaction: ITransaction) {
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
