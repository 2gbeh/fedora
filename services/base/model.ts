import { momentUtil } from "@/utils/moment-util";
import { BaseDto } from "./types";

export class Base {
  constructor(private __: BaseDto) {}

  get createdAt() {
    return momentUtil.verbose(this.__.createdAt);
  }

  get updatedAt() {
    return momentUtil.verbose(this.__.updatedAt);
  }

  get deletedAt() {
    return momentUtil.verbose(this.__.deletedAt);
  }

  // ////////////////////////////////////////////////

  createdAtShort() {
    return momentUtil.dateShort(this.__.createdAt);
  }

  isDeleted() {
    return typeof this.__.deletedAt !== 'undefined';
  }
}
