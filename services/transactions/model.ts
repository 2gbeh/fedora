import { Base } from "../base/model";
import { TransactionDto } from "./types";

export class Transaction extends Base {
  constructor(private _: TransactionDto) {
    super(_);
  }
}
