import { momentUtils } from "@/utils/moment-utils";
import { BaseDto } from "./types";

export class Base {
  constructor(private __: BaseDto) {}

  get createdAt() {
    return momentUtils.verbose(this.__.createdAt);
  }

  get updatedAt() {
    return momentUtils.verbose(this.__.updatedAt);
  }

  get deletedAt() {
    return momentUtils.verbose(this.__.deletedAt);
  }

  // ////////////////////////////////////////////////

  createdAtShort() {
    return momentUtils.dateShort(this.__.createdAt);
  }

  isDeleted() {
    return typeof this.__.deletedAt !== "undefined";
  }
}
