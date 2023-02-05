import { typedStyle } from "@/lib/typo.util";
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";

export interface BodyProps extends HTMLAttributes<HTMLDivElement> {}

export function Body({ children, ...props }: BodyProps) {
  return (
    <div
      css={(theme) => [
        typedStyle(theme.type.body2),
        css`
          padding: 16px;
        `,
      ]}
      data-wv="cardbody"
    >
      {children}
    </div>
  );
}
