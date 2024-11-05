export class CurrencyHelper {
  static transform = (amount: number) => {
    return this.toDollars(amount);
  };

  static toDollars = (amount: number, rate = 1661.72) => {
    const converted = (amount / rate).toFixed(2);
    const formatted = converted
      ? Number(converted.toString().replaceAll(",", "")).toLocaleString()
      : "0.00";
    return "$ " + formatted;
  };

  static toEuros = (amount: number, rate = 1811.0) => {
    const converted = (amount / rate).toFixed(2);
    const formatted = converted
      ? Number(converted.toString().replaceAll(",", "")).toLocaleString()
      : "0.00";
    return "€ " + formatted;
  };

  static toPounds = (amount: number, rate = 2160.12) => {
    const converted = (amount / rate).toFixed(2);
    const formatted = converted
      ? Number(converted.toString().replaceAll(",", "")).toLocaleString()
      : "0.00";
    return "£ " + formatted;
  };
}
