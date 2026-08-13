import { Base } from "../base/model";
import { ContactDto } from "./types";

export class Contact extends Base {
  constructor(public _: ContactDto) {
    super(_);
  }
}
