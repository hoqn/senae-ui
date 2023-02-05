import { makeTColorTypeComposed, makeTColorTypeMultiLevel } from "./factory";
import type WTheme from "./types/theme";
import { WTTypography } from "./types/ttypo";
const defaultFontFamily = "Pretendard";

const typeCommon: Pick<WTTypography, "fontSizeUnit" | "lineHeightUnit"> = {
  fontSizeUnit: "rem",
  lineHeightUnit: "rem",
};

export const WThemeDefault: WTheme = {
  color: {
    primary: makeTColorTypeComposed("#2b70e0"),
    secondary: makeTColorTypeComposed("#2be08f"),

    window: makeTColorTypeComposed("#ffffff"),
    neutral: makeTColorTypeComposed("#5c5c5c"),
    line: makeTColorTypeMultiLevel(["#eaeaea", "#a2a2a2", "#8a8a8a"]),
    surface: makeTColorTypeComposed("#f2f2f2"),

    primaryContainer: makeTColorTypeComposed("#e1eaf7"),
    secondaryContainer: makeTColorTypeComposed("#e6fff4"),
    neutralContainer: makeTColorTypeComposed("#fafafa"),
  },

  setup: {
    fontSizeUnit: "rem",
    lineHeightUnit: "rem",
  },

  type: {
    display400: {
      fontFamily: defaultFontFamily,
      fontSize: 4.25,
      fontWeight: 600,
      lineHeight: 4.75,
      ...typeCommon,
    },
    display200: {
      fontFamily: defaultFontFamily,
      fontSize: 3.25,
      fontWeight: 700,
      lineHeight: 3.75,
      ...typeCommon,
    },
    display100: {
      fontFamily: defaultFontFamily,
      fontSize: 2.5,
      fontWeight: 700,
      lineHeight: 3.125,
      ...typeCommon,
    },
    headline400: {
      fontFamily: defaultFontFamily,
      fontSize: 2,
      fontWeight: 700,
      lineHeight: 2.375,
      ...typeCommon,
    },
    headline200: {
      fontFamily: defaultFontFamily,
      fontSize: 1.5,
      fontWeight: 700,
      lineHeight: 1.875,
      ...typeCommon,
    },
    headline100: {
      fontFamily: defaultFontFamily,
      fontSize: 1.25,
      fontWeight: 700,
      lineHeight: 1.5,
      ...typeCommon,
    },
    title1: {
      fontFamily: defaultFontFamily,
      fontSize: 1.125,
      fontWeight: 600,
      lineHeight: 1.25,
      ...typeCommon,
    },
    title2: {
      fontFamily: defaultFontFamily,
      fontSize: 1,
      fontWeight: 600,
      lineHeight: 1.25,
      ...typeCommon,
    },
    subtitle1: {
      fontFamily: defaultFontFamily,
      fontSize: 0.875,
      fontWeight: 600,
      lineHeight: 1.125,
      ...typeCommon,
    },
    subtitle2: {
      fontFamily: defaultFontFamily,
      fontSize: 0.75,
      fontWeight: 600,
      lineHeight: 1.125,
      ...typeCommon,
    },
    section1: {
      fontFamily: defaultFontFamily,
      fontSize: 1.375,
      fontWeight: 600,
      lineHeight: 1.625,
      ...typeCommon,
    },
    section2: {
      fontFamily: defaultFontFamily,
      fontSize: 1.125,
      fontWeight: 600,
      lineHeight: 1.375,
      ...typeCommon,
    },
    body1: {
      fontFamily: defaultFontFamily,
      fontSize: 1.125,
      fontWeight: 400,
      lineHeight: 1.375,
      ...typeCommon,
    },
    body2: {
      fontFamily: defaultFontFamily,
      fontSize: 1,
      fontWeight: 400,
      lineHeight: 1.25,
      ...typeCommon,
    },
    label1: {
      fontFamily: defaultFontFamily,
      fontSize: 1,
      fontWeight: 600,
      lineHeight: 1.25,
      ...typeCommon,
    },
    label2: {
      fontFamily: defaultFontFamily,
      fontSize: 0.75,
      fontWeight: 400,
      lineHeight: 1,
      ...typeCommon,
    },
  },
};
