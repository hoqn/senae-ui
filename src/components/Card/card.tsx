import { css } from "@emotion/react";
import { type HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export default function Card({ children, ...props }: CardProps) {
  return (
    <div
      css={(theme) => css`
        display: block;
        background-color: ${theme.color.window.base};
        border: 1px solid ${theme.color.line.l1};
        border-radius: 8px;
      `}
      {...props}
    >
      {children}
    </div>
  );
}
