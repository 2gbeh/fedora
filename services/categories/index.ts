import { sleep } from "@/utils";
import seed from "./data/seed.json";

export class CategoriesService {
  static async getListOptions() {
    await sleep();
    return seed.map((item, i) => ({
      label: item.name,
      value: String(i + 1),
    }));
  }

  static async getAll() {}
  static async getById() {}
  static async create() {}
  static async update() {}
  static async delete() {}
}
