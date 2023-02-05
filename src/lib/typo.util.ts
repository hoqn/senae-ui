import { css } from "@emotion/react";
import WTheme from "src/theming/types/theme";
import { WTTypography } from "src/theming/types/ttypo";

export const typedStyle = (source: WTTypography) =>
  css({
    fontFamily: `${source.fontFamily}`,
    fontWeight: `${source.fontWeight}`,
    fontSize: `${source.fontSize}${source.fontSizeUnit}`,
    lineHeight: `${source.lineHeight}${source.lineHeightUnit}`,
  });
