import type WTColorSet from "./tcolor";
import WTTypographySet from "./ttypo";

export default interface WTheme {
  color: WTColorSet;
  type: WTTypographySet;
  setup: {
    fontSizeUnit: "px" | "em" | "rem";
    lineHeightUnit: "px" | "em" | "rem";
  };
}
