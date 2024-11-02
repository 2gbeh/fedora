export class ChartHelper {
  static getTotal(values: Array<{ value: number }>) {
    return values.reduce((T, item) => T + item.value, 0);
  }

  static getWidth(value: number, total: number) {
    return Math.floor((value * 100) / total) + "%";
  }
}
