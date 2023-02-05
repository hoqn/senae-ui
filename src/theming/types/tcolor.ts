export type WTColor = string;

export interface WTColorTypeComposed {
  base: WTColor;
  hover: WTColor;
  pressed: WTColor;
  disabled: WTColor;
  focused: WTColor;
  text: WTColor;
}

export interface WTColorTypeMultiLevel {
  l1: WTColor;
  l2: WTColor;
  l3: WTColor;
}

interface WTColorSetAccents {
  primary: WTColorTypeComposed;
  secondary: WTColorTypeComposed;
  neutral: WTColorTypeComposed;
}

interface WTColorSetFunctional {
  line: WTColorTypeMultiLevel;
}

interface WTColorSetContainer {
  primaryContainer: WTColorTypeComposed;
  secondaryContainer: WTColorTypeComposed;
  neutralContainer: WTColorTypeComposed;
  window: WTColorTypeComposed;
  surface: WTColorTypeComposed;
}

interface WTColorSetBase
  extends WTColorSetAccents,
    WTColorSetFunctional,
    WTColorSetContainer {}

export default interface WTColorSet extends WTColorSetBase {}
