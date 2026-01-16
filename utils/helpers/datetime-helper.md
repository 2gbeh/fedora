```ts
import moment from "moment-timezone";

type InputType = Date | string | null;

export const MONTH_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const QUARTER = [
  "Q1", "Q2", "Q3", "Q4"
];

export class DateTimeHelper {
  static transform = (format: string, dt?: InputType) =>
    moment(dt).tz("Africa/Lagos").format(format);

  static momentBrowserTimezone = (
    time?: string | Date | null,
    format?: string | null
  ) => {
    if (!time) {
      return moment().local();
    }

    const timeString = time instanceof Date ? time.toISOString() : time;

    return format
      ? moment.tz(timeString, format, "UTC").local()
      : moment.tz(timeString, "UTC").local();
  };

  /**
   * Formats date as '1 Jan 1970' or '01 Jan 1970'
   * @param dt - Input date
   * @param leadingZero - Whether to pad day with leading zero
   * @returns Formatted date string
   */
  static asStdDate = (dt?: InputType, leadingZero = false) =>
    this.transform(leadingZero ? "DD MMM YYYY" : "D MMM YYYY", dt);

  /**
   * Formats date as '1 January 1970'
   * @param dt - Input date
   * @returns Formatted date string
   */
  static asStdLongDate = (dt?: InputType) => this.transform("D MMMM YYYY", dt);

  /**
   * Formats time as '12:00 AM'
   * @param dt - Input date
   * @returns Formatted time string
   */
  static asStdTime = (dt?: InputType) => this.transform("hh:mm A", dt);

  /**
   * Formats date and time as '1 Jan 1970 | 12:00 AM'
   * @param dt - Input date
   * @returns Formatted date and time string
   */
  static asStdDateTime = (dt?: InputType) =>
    this.transform("D MMM YYYY | hh:mm A", dt);

  /**
   * Formats date as 'January 1970'
   * @param dt - Input date
   * @returns Formatted month and year string
   */
  static asMonthYear = (dt?: InputType) => this.transform("MMMM YYYY", dt);

  /**
   * Formats date range as '01 Jan 97 - 31 Dec 97'
   * @param startDt - Start date
   * @param endDt - End date
   * @returns Formatted date range string
   */
  static asDuration = (startDt?: InputType, endDt?: InputType) =>
    `${this.transform("DD MMM YY", startDt)} - ${this.transform("DD MMM YY", endDt)}`;

  /**
   * Formats time period as '1 Jan - 31 Dec 1970'
   * @param startDate - Start date
   * @param endDate - End date
   * @param monthFormat - Format for month display (default: 'D MMM')
   * @returns Formatted time period string
   */
  static timePeriod = (
    startDate?: InputType,
    endDate?: InputType,
    monthFormat = "D MMM"
  ) => {
    if (!startDate || !endDate) return "---";
    const startBPDate = moment(startDate);
    const endBPDate = moment(endDate);
    return `${startBPDate.format(monthFormat)} - ${endBPDate.format(`${monthFormat} YYYY`)}`;
  };

  /**
   * Formats day with ordinal suffix (1st, 2nd, 3rd, 4th, etc)
   * @param d - Day number or string
   * @returns Day with ordinal suffix
   */
  static formatDay(d: string | number): string {
    const day = Number(d);

    if (day >= 11 && day <= 13) return `${day}th`;

    switch (day % 10) {
      case 1: return `${day}st`;
      case 2: return `${day}nd`;
      case 3: return `${day}rd`;
      default: return `${day}th`;
    }
  }

  /**
   * Gets zero-based month index (0-11)
   * @param date - Input date string
   * @returns Month index (0-11)
   */
  static monthIndex(date: string) {
    return new Date(date).getMonth()
  };

  /**
   * Gets zero-based quarter index (0-3)
   * @param date - Input date string
   * @returns Quarter index (0-3)
   */
  static quarterIndex(date: string) {
    const q = new Date(date).getMonth()
    return Math.floor(q / 3)
  };

  /**
   * Gets array of last N years including current year
   * @param length - Number of years to include (default: 5)
   * @returns Array of year strings
   * @example
   * // Returns ["2021", "2022", "2023", "2024", "2025"]
   * DateTimeHelper.lastNthYears(5)
   */
  static lastNthYears(length = 5) {
    const thisYear = new Date().getFullYear();
    const startYear = thisYear - length + 1;
    return Array.from({ length }, (_, i) => startYear + i);
  }

  /**
   * Converts a Date object to YYYY-MM-DD format without timezone issues.
   * @param {Date} date - The date to convert
   * @returns {string} Date in YYYY-MM-DD format
   */
  static asDateOnlyNoUtc = (date?: InputType) => {
    if (!date) return null;
    return new Date(date).toLocaleDateString('en-CA');
  };

  /**
   * Gets the number of days in a given month
   * @param {InputType} [date] - Optional date. Defaults to current date if not provided
   * @returns {number} Number of days in the month (28-31)
   */
  static daysInMonth(date?: InputType) {
    return moment(date).daysInMonth();
  }

  /**
   * Gets the last date of a given month
   * @param {InputType} [date] - Optional date. Defaults to current date if not provided
   * @returns {string} Last date of the month in YYYY-MM-DD format
   */
  static lastDateOfMonth(date?: InputType) {
    return moment(date).endOf('month').format('YYYY-MM-DD');
  }
}
