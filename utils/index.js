// import parse from "html-react-parser";
import parse from "./reactNativeHtmlParser";

// naira sign
export const NAIRA = "$";

// react html parser or rich-text escape string
export const __ = (x, esc = false) =>
  x ? (esc ? x.replaceAll(/(<([^>]+)>)/gi, "") : parse(x)) : "";

// number format
export const $ = (n) =>
  n ? Number((n / 1000).toString().replaceAll(",", "")).toLocaleString() : 0;

// cx = clsx
export const cx = (...classes) => classes.filter(Boolean).join(" ");

// debug in browser
export const dd = (...args) =>
  parse(`<pre>${JSON.stringify(args, null, 2)}</pre>`);

// int'l number format
export const kk = (n) =>
  Intl.NumberFormat("en", { notation: "compact" }).format(parseFloat(n)).toLowerCase();

// debug in terminal
export const log = (...args) => console.clear() && console.log(args);

// today's date in milliseconds(1693166015389) or ISO (1970-01-01T00:00:00.000Z)
export const now = (toJSON = false) =>
  toJSON ? new Date().toJSON() : Date.now();

// convert any to str
export const str = (x) =>
  x && typeof x === "object" ? JSON.stringify(x) : x?.toString();

// length of string, number or array
export const len = (x) =>
  x
    ? Array.isArray(x)
      ? x.length
      : ["string", "number"].includes(typeof x)
      ? x.toString().length
      : 0
    : 0;

// await zzz() - mock api request delay
export const zzz = (secs = 3) =>
  new Promise((resolve) => setTimeout(resolve, secs * 1000));

// random return value toggle
export const bool = (x, y) =>
  x && y ? (Math.random() < 0.5 ? x : y) : Math.random() < 0.5;

// random no. btw x, y both inclusive
export const rand = (x = 0, y = 9) =>
  Math.floor(Math.random() * (y - x + 1)) + x;

// mask string
export const mask = (x, top = 3, tip = 3) => {
  if (x) {
    let str = x.toString().trim();
    let pad = str.length - top - tip + 1;
    return `${x.slice(0, top)}${Array(pad).join("*")}${x.slice(tip * -1)}`;
  }
  return x;
};

// is defined or replace
export const isset = (...args) => {
  switch (args.length) {
    case 2:
      return args[0] ? args[1] : null;
    case 3:
      return args[0] ? args[1] : args[2];
    default:
      return args[0] ? args[0].toString().trim().length > 0 : false;
  }
};

// number formats
export const int = (x, format) => {
  let [arr, i, j, n] = [[], -1, -1, -1];
  switch (format) {
    case ".":
      res = x ? parseFloat(x.toString().replaceAll(",", "")) : "0.00";
      break;
    case ",":
      n = int(x, ".").toFixed(2);
      arr = n.toString().split(".");
      [i, j] = [arr[0], arr[1]];
      res = Number(i).toLocaleString();
      break;
    case ",.":
      n = int(x, ".").toFixed(2);
      arr = n.toString().split(".");
      [i, j] = [arr[0], arr[1]];
      res = Number(i).toLocaleString() + "." + j;
      break;
    case "k":
      res = Intl.NumberFormat("en", { notation: "compact" })
        .format(int(x))
        .toLowerCase();
      break;
    default:
      res = x ? parseInt(x.toString().replaceAll(",", "").split(".")[0]) : "0";
  }
  return res;
};

// entry date matches today date
export const isToday = (dt) =>
  new Date().toJSON().slice(0, 10) === dt.slice(0, 10);
