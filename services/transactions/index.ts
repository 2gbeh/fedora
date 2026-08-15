import { DEBUG } from "@/constants/DEBUG";
import { sleep } from "@/utils";

import mockData from "./data/mock.json";
import { TransactionDto } from "./types";

const Debug = DEBUG.transactions;

export class TransactionsService {
  static findAll() {}
  static findById() {}
  static async recent(): Promise<TransactionDto[]> {
    if (Debug.loader) {
      // await sleep();
      return mockData.slice(0, 10);
    }
    return [];
  }
  static async totaled(): Promise<{ income: number; expense: number }> {
    const res = { income: 0, expense: 0 };

    if (Debug.loader) {
      // await sleep();
      mockData.forEach(({ amount }) => {
        amount < 0 ? res.expense += amount : res.income += amount;
      });
    }

    return res;
  }
  // //////////////////////////////
  static create() {}
  static update() {}
  static delete() {}
}
