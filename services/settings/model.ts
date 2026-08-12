import { Base } from "../base/model";
import { SettingDto } from "./types";

export class Setting extends Base {
  constructor(_: SettingDto) {
    super(_);
  }
}
