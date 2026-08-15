import { Base } from "../base/model";
import { WalletDto } from "./types";

export class Wallet extends Base {
  constructor(_: WalletDto) {
    super(_);
  }
}
