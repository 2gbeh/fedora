import { $, NAIRA, abbr, wrap } from "@/utils";
//
import { IAccount } from "./account.dto";

export class AccountPipe {
  static transform(account: IAccount) {
    return {
      ...account,
      name_f: wrap(account?.display_name || account.name, 25),
      initials: abbr(account.name),
    };
  }
}
