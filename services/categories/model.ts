import { Base } from "../base/model";
import { CategoryDto } from "./types";

export class Category extends Base {
  constructor(_: CategoryDto) {
    super(_);
  }
}
