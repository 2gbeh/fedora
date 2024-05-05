import { TStyles } from "@/types/common-native.type";

export default class ComputedStyles {
  static margin(margin?: number[]): TStyles {
    if (margin) {
      switch (margin.length) {
        case 4: {
          const [marginTop, marginRight, marginBottom, marginLeft] = margin;
          return { marginTop, marginRight, marginBottom, marginLeft };
        }
        case 3: {
          const [marginTop, marginHorizontal, marginBottom] = margin;
          return { marginTop, marginHorizontal, marginBottom };
        }
        case 2: {
          const [marginVertical, marginHorizontal] = margin;
          return { marginVertical, marginHorizontal };
        }
        default: {
          const [marginAll, ...rest] = margin;
          return { margin: marginAll };
        }
      }
    }
    //
    return {};
  }
}
