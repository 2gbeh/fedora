import { $ } from "@/utils";
import { AccountPipe } from "../accounts/account.pipe";
import { IBill } from "./bill.dto";

export class BillPipe {
  static transform(bill: IBill) {
    return {
      ...bill,
      account: AccountPipe.transform(bill.account),
      bills_f: `${$(bill.bills)} ${bill.bills > 1 ? "bills" : "bill"}`,
    };
  }
}
