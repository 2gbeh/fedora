import { abbr, wrap } from "@/utils";
import { IAccount } from "./account.dto";

export class AccountPipe {
  static transform(account: IAccount) {
    return {
      ...account,
      avatar_f: account?.avatar
        ? `uploads_${account.avatar.replaceAll("-", "_").slice(0, -4)}`
        : "images_box_dark",
      name_f: wrap(account?.display_name || account.name, 25),
      initials: abbr(account.name),
    };
  }
}
