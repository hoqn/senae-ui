import { darken, getContrast, transparentize } from "polished";
import { WThemeDefault } from "./default";
import {
  WTColorTypeMultiLevel,
  type WTColor,
  type WTColorTypeComposed,
} from "./types/tcolor";
import type WTheme from "./types/theme";

export function makeTheme(source: Partial<WTheme>) {
  const theme: WTheme = {
    ...WThemeDefault,
  };

  return theme;
}

export function makeTColorTypePressable(source: WTColor): WTColorTypeComposed {
  return {
    base: source,
    hover: darken(0.05, source),
    pressed: darken(0.125, source),
    disabled: transparentize(0.5, source),
    focused: darken(0.25, source),
    text: getContrast(source, "#000000") > 5 ? "#000000" : "#ffffff",
  };
}
export function makeTColorTypeComposed(source: WTColor): WTColorTypeComposed {
  return makeTColorTypePressable(source);
}

export function makeTColorTypeMultiLevel(
  source: Array<WTColor>
): WTColorTypeMultiLevel {
  return {
    l1: source[0],
    l2: source[1],
    l3: source[2],
  };
}
