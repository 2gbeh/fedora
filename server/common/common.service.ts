import { $, NAIRA } from "@/utils";

export class CommonService {
  // 1992 & 1992.00 & 1,992 & N 1,992
  static numberFormat(n: number) {
    return {
      asInteger: n,
      asFloat: n.toFixed(2),
      asString: $(n),
      asMoney: NAIRA + " " + $(n),
    };
  }
}
