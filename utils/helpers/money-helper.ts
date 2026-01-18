export type MoneyHelperArgs = {
  conversionRate?: number;
  isPrototyping?: boolean;
};

export const CURRENCY = {
  NGN: "₦ ",
  USD: "$ ",
} as const;

export class MoneyHelper {
  private readonly _conversionRate: number;
  private readonly _isPrototyping: boolean;

  constructor({ conversionRate = 1420, isPrototyping = false }: MoneyHelperArgs = {}) {
    this._conversionRate = conversionRate;
    this._isPrototyping = isPrototyping;
  }

  sanitize(input: unknown): number {
    if (!input) return 0;
    const sanitized = String(input).split(".")[0]?.replaceAll(",", "") ?? "0";
    return Number(sanitized);
  }

  format(input: unknown): string {
    return this.sanitize(input).toLocaleString();
  }

  toNGN(input: unknown): string {
    if (this._isPrototyping) return this.toUSD(input);
    return CURRENCY.NGN + this.format(input);
  }

  toUSD(input: unknown): string {
    const ngnValue = this.sanitize(input);
    const usdValue = ngnValue > 0 ? ngnValue / this._conversionRate : 0;
    const [whole, decimal = "00"] = usdValue.toFixed(2).split(".");
    return `${CURRENCY.USD}${Number(whole).toLocaleString()}.${decimal}`;
  }
}