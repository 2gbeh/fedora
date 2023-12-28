import ReactNativeHtmlParser from "react-native-html-parser";

export default function (html) {
  const reactNativeHtmlParser = new ReactNativeHtmlParser.DOMParser();
  return reactNativeHtmlParser.parseFromString(html, "text/html");
}
