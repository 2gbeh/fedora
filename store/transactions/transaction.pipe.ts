import { truncate } from "lodash";
import { format as formatDate } from "date-fns";
//
import { TransactionType } from "./transaction.interface";
import { TransactionHelper as TH } from "./transaction.helper";

export class TransactionPipe {
  static transform(data: TransactionType) {
    const d = data;
    return {
      raw: data,
      avatar: TH.constructAvatarUrl(d.account?.avatar),
      displayName: d.account?.display_name || d.account.name,
      isDebit: d.amount < 0,
      amount: d.amount.toLocaleString(),
      narrationShort: truncate(d.narration),
      dateShort: formatDate(d.date, "MMM d"),
      uid: TH.constructUID(d),
    };
  }
}
