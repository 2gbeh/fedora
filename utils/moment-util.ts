import moment from "moment-timezone";

type InputType = Date | string | null;

export const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MONTH_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const QUARTER = ["Q1", "Q2", "Q3", "Q4"];

const TZ = "Africa/Lagos";

const now = () => moment().tz(TZ);

const fmt = (format: string, dt?: InputType) =>
  moment(dt).tz(TZ).format(format);

// Sun, Jan 1, 1970 | 12:00 AM
const verbose = (dt?: InputType) => fmt("ddd, D MMM YYYY | h:mm A", dt);

// Sun, Jan 1, 1970
const dateStd = (dt?: InputType) => fmt("ddd, D MMM YYYY", dt);

// Sun, Jan 1
const dateShort = (dt?: InputType) => fmt("ddd, D MMM", dt);

// Jan 1
const dateShorter = (dt?: InputType) => fmt("D MMM", dt);

// 12:00 AM
const timeStd = (dt?: InputType) => fmt("h:mm A", dt);

export const momentUtil = {
  now,
  fmt,
  verbose,
  dateStd,
  dateShort,
  dateShorter,
  timeStd,
};
