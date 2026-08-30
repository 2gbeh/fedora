import { momentUtils } from "@/utils/moment-utils";
import { Base } from "../base/model";
import { TransactionDto } from "./types";
import { COLOR } from "@/constants/COLOR";

export class Transaction extends Base {
  constructor(public _: TransactionDto) {
    super(_);
  }

  get amount() {
    return this._.amount.toLocaleString();
  }

  amountColor() {
    return { color: this._.amount < 0 ? COLOR.danger : COLOR.success };
  }

  get entryDate() {
    return momentUtils.dateShort(this._.entryDate);
  }
}
