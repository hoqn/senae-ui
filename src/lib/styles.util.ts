import { css } from "@emotion/react";
import { WTColorTypeComposed } from "src/theming/types/tcolor";

export const composedFill = (colors: WTColorTypeComposed) => css`
  background-color: ${colors.base};
  color: ${colors.text};
  &:hover {
    background-color: ${colors.hover};
  }
  &:active {
    background-color: ${colors.pressed};
  }
  &:disabled {
    background-color: ${colors.disabled};
  }
  &:focus {
    background-color: ${colors.focused};
  }
`;

export const pressableFill = () => css`
  transition: 0.05s ease-in;
`;
