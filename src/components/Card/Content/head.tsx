import { typedStyle } from "@/lib/typo.util";
import { css } from "@emotion/react";
import { HTMLAttributes } from "react";

export interface HeadProps extends HTMLAttributes<HTMLDivElement> {}

export function Head({ ...props }: HeadProps) {
  return (
    <div
      {...props}
      css={(theme) => css`
        box-sizing: content-box;
        padding: 16px 16px 8px 16px;
        border-bottom: 1px solid ${theme.color.line.l1};
      `}
    ></div>
  );
}

export interface HeadTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export function HeadTitle({ children, ...props }: HeadTitleProps) {
  return (
    <h2 {...props} css={(theme) => [typedStyle(theme.type.title1), css``]}>
      {children}
    </h2>
  );
}

export interface HeadSubtitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export function HeadSubtitle({ children, ...props }: HeadSubtitleProps) {
  return (
    <h4
      {...props}
      css={(theme) => [
        typedStyle(theme.type.subtitle1),
        css`
          margin-top: 4px;
        `,
      ]}
    >
      {children}
    </h4>
  );
}
