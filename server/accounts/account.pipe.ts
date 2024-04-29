import { $, NAIRA, abbr, wrap } from "@/utils";
//
import { TAccount } from "./account.entity";

export class AccountPipe {
  static transform(account: TAccount) {
    return {
      ...account,
      name_f: wrap(account?.display_name || account.name, 25),
      initials: abbr(account.name),
    };
  }
}
