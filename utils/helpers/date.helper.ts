import { format } from "date-fns";
export type TDate = string | Date;

export class DateHelper {
  static appClock = (arg: TDate) => ({
    // 1 January
    date: format(arg, "d MMMM"),
    // 12:00 AM
    time: format(arg, "hh:mm a"),
  });

  static dateTimeWidget = (arg: TDate) => ({
    // 01 Jan, 1970
    date: format(arg, "dd MMM, yyyy"),
    // 12:00 AM
    time: format(arg, "hh:mm a"),
  });

  static userDateOfBirth = (arg: TDate) => format(arg, "dd/MM/yyyy");
}
