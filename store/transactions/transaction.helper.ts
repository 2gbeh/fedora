import { TransactionType } from "./transaction.interface";

export class TransactionHelper {
  static constructUID(item: TransactionType) {
    let name = item.account.name.toLowerCase().replaceAll(" ", "-");
    let date = item.date
      .replaceAll(" ", "")
      .replaceAll("-", "")
      .replaceAll(":", "");
    //
    return name + "-" + date;
  }

  static constructAvatarUrl = (avatar?: string) =>
    avatar
      ? `https://github.com/2gbeh/react-native-playground/blob/pokemon/assets/uploads/${avatar}?raw=true`
      : null;

  static computeTotals(data: TransactionType[]) {
    const totals = { credit: 0, debit: 0, net: 0 };
    data.map(({ amount }) => {
      totals.net += amount;
      if (amount < 0) totals.debit += amount;
      else totals.credit += amount;
    });
    return {
      ...totals,
      creditAsStr: totals.credit.toLocaleString(),
      debitAsStr: totals.debit.toLocaleString(),
      netAsStr: totals.net.toLocaleString(),
    };
  }
}
