import { css } from "@emotion/react";

export type WTTypographyUnit = "px" | "rem" | "em";
export type WTTypographyLineHeightUnit = "px" | "rem" | "em" | "%";

export interface WTTypography {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;

  fontSizeUnit: WTTypographyUnit;
  lineHeightUnit: WTTypographyLineHeightUnit;
}

export default interface WTTypographySet {
  display400: WTTypography;
  display200: WTTypography;
  display100: WTTypography;
  headline400: WTTypography;
  headline200: WTTypography;
  headline100: WTTypography;

  title1: WTTypography;
  title2: WTTypography;
  subtitle1: WTTypography;
  subtitle2: WTTypography;
  section1: WTTypography;
  section2: WTTypography;
  body1: WTTypography;
  body2: WTTypography;
  label1: WTTypography;
  label2: WTTypography;
}
