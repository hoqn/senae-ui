import React from "react";

import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { ButtonCss } from "../Button/button";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {}

export default function ButtonGroup({ children, ...props }: ButtonGroupProps) {
  return (
    <span
      css={css`
        display: inline-block;

        & > *[data-wv|="button"] {
          &:first-child {
            border-end-end-radius: 0;
            border-start-end-radius: 0;
          }
          &:last-child {
            border-start-start-radius: 0;
            border-end-start-radius: 0;
          }
          &:not(:first-child, :last-child) {
            border-radius: 0;
          }
          &:not(:last-child) {
            border-inline-end: none;
          }
        }
      `}
    >
      {children}
    </span>
  );
}
