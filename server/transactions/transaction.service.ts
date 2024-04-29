import { $, NAIRA, wrap } from "@/utils";
import date from "@/utils/phpDateFormat";
// 
import { CommonService } from "../common/common.service";
import { TTransaction } from "./transaction.entity";

export class TransactionService {
  constructor(private readonly transactions: TTransaction[]) {}
  //  1,992.00
  get grossIncome() {
    let cr = this.transactions.reduce(
      (T, transaction) =>
        T + Number(transaction.type === "CR" ? transaction.amount : 0),
      0
    );
    return CommonService.numberFormat(cr);
  }
  // $ 15.00
  get netIncome() {
    let total = this.transactions.reduce(
      (T, transaction) => T + Number(transaction.amount),
      0
    );
    return CommonService.numberFormat(total);
  }
  // $ -9.00
  get totalExpenses() {
    let cr = this.transactions.reduce(
      (T, transaction) =>
        T + Number(transaction.type === "DR" ? transaction.amount : 0),
      0
    );
    return CommonService.numberFormat(cr);
  }
}
