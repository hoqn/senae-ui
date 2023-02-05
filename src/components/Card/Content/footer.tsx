import { typedStyle } from "@/lib/typo.util";
import { css } from "@emotion/react";
import { HTMLAttributes, PropsWithChildren } from "react";

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export function Footer({ children, ...props }: FooterProps) {
  return (
    <div
      {...props}
      css={(theme) => [
        typedStyle(theme.type.body2),
        css`
          padding: 8px 16px 16px 16px;
          border-top: 1px solid ${theme.color.line.l1};
        `,
      ]}
    >
      {children}
    </div>
  );
}

export interface FooterInnerGroupProps extends PropsWithChildren {
  left?: boolean;
  right?: boolean;
  start?: boolean;
  end?: boolean;
}

export function FooterInnerGroup({
  children,
  left,
  right,
  start,
  end,
}: FooterInnerGroupProps) {
  return (
    <span
      css={[
        left &&
          css`
            float: left;
          `,
        right &&
          css`
            float: right;
          `,
        start &&
          css`
            float: inline-start;
          `,
        end &&
          css`
            float: inline-end;
          `,
      ]}
    >
      {children}
    </span>
  );
}
