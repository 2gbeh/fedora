import { sleep } from "@/utils";
import seed from "./data/seed.json";

export class WalletsService  {
  static async getListOptions() {
    await sleep();
    return seed.map((item, i) => ({
      label: item.name,
      value: String(i + 1),
    }));
  }
};
