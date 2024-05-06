import { CommonService } from "../common/common.service";
import { IWallet } from "./wallet.dto";

export class WalletService {
  static getBalance(wallet: IWallet) {
    let bal = wallet?.transactions
      ? wallet.transactions.total_credit + wallet.transactions.total_debit
      : 0;
    return CommonService.numberFormat(bal);
  }
}
