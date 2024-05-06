import { $, NAIRA, wrap } from "@/utils";
import { IWallet } from "./wallet.dto";

export class WalletPipe {
  static transform(wallet: IWallet) {
    return {
      ...wallet,
      logo_f: wallet?.logo
        ? `uploads_${wallet.logo.replaceAll("-", "_").slice(0, -4)}`
        : "images_box",
      account_name_f: wrap(wallet?.display_name || wallet.account_name, 25),
      account_number_f: wallet.account_number
        ? wallet.account_number.slice(-4)
        : "0000",
      transactions: {
        ...wallet.transactions,
        total_credit_f: $(wallet.transactions?.total_credit || 0),
        total_debit_f: $(wallet.transactions?.total_debit || 0),
      },
    };
  }
}
