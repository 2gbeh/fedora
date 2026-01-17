type MoneyHelperConfig = {
  conversionRate?: number;
  isPrototyping?: boolean;
};

const CURRENCY = {
  NGN: "₦ ",
  USD: "$ ",
} as const;

export class MoneyHelper {
  private readonly conversionRate: number;
  private readonly isPrototyping: boolean;

  constructor({ conversionRate = 1420, isPrototyping = false }: MoneyHelperConfig = {}) {
    this.conversionRate = conversionRate;
    this.isPrototyping = isPrototyping;
  }

  toNumber(input: unknown): number {
    if (!input) return 0;
    const sanitized = String(input).split(".")[0]?.replaceAll(",", "") ?? "0";
    return Number(sanitized);
  }

  toCSV(input: unknown): string {
    return this.toNumber(input).toLocaleString();
  }

  toNGN(input: unknown): string {
    return CURRENCY.NGN + this.toCSV(input);
  }

  toUSD(input: unknown): string {
    const ngnValue = this.toNumber(input);
    const usdValue = ngnValue > 0 ? ngnValue / this.conversionRate : 0;
    const [whole, decimal = "00"] = usdValue.toFixed(2).split(".");
    return `${CURRENCY.USD}${Number(whole).toLocaleString()}.${decimal}`;
  }
}