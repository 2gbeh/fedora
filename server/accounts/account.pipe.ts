import { abbr, wrap } from "@/utils";
import date from "@/utils/phpDateFormat";
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
      // created_at_f: date(account.created_at as string, "M j") as string,
    };
  }
}
