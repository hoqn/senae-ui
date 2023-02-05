import { css, Theme, useTheme } from "@emotion/react";
import React, { HTMLAttributes } from "react";
import { composedFill, pressableFill } from "../../lib/styles.util";
import { WTColor, type WTColorTypeComposed } from "src/theming/types/tcolor";
import WTheme from "src/theming/types/theme";
import { transparentize } from "polished";
import { typedStyle } from "../../lib/typo.util";

type ButtonVariant = "normal" | "primary" | "text" | "ghost";

export interface ButtonProps {
  variant: ButtonVariant;
  tint?: WTColorTypeComposed;
  label: string;
}

export default function Button({
  variant = "normal",
  tint,
  label = "",
  ...props
}: ButtonProps) {
  const buttonVariantStyle = ButtonVariantStyle[variant];

  return (
    <div
      {...props}
      data-wv={`button-${variant}`}
      css={(theme) => [
        ButtonCss(theme),
        pressableFill(),
        buttonVariantStyle(theme, tint),
        typedStyle(theme.type.label1),
      ]}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        {label}
      </div>
    </div>
  );
}

export const ButtonCss = (theme: Theme) => css`
  display: inline-block;
  padding: 6px 16px;
  border: 1px solid;
  border-radius: 4px;
  line-height: 24px;
  font-weight: 500;
  cursor: pointer;
`;

const ButtonVariantStyle: {
  [key in ButtonVariant]: (theme: WTheme, tint?: WTColorTypeComposed) => any;
} = {
  normal: (theme: WTheme, tint?: WTColorTypeComposed) => css`
    ${composedFill(theme.color.surface)}
    border-color: ${theme.color.surface.pressed};
  `,
  primary: (theme: WTheme, tint?: WTColorTypeComposed) => css`
    ${composedFill(tint ?? theme.color.primary)}
    border-color: ${tint?.pressed ?? theme.color.primary.pressed};
  `,
  ghost: (theme: WTheme, tint?: WTColorTypeComposed) => css`
    ${composedFill({
      base: "#00000000",
      hover: transparentize(0.875, tint?.base ?? theme.color.primary.base),
      pressed: transparentize(0.5, tint?.base ?? theme.color.primary.base),
      text: tint?.base ?? theme.color.primary.base,
      disabled: "#00000000",
      focused: tint?.hover ?? theme.color.primary.hover,
    })}
    border-color: ${tint?.hover ?? theme.color.primary.hover};
  `,
  text: (theme: WTheme, tint?: WTColorTypeComposed) => css`
    ${composedFill({
      base: "#00000000",
      hover: transparentize(0.95, tint?.hover ?? theme.color.neutral.hover),
      pressed: transparentize(
        0.875,
        tint?.pressed ?? theme.color.neutral.pressed
      ),
      text: tint?.base ?? theme.color.primary.base,
      disabled: "#00000000",
      focused: tint?.hover ?? theme.color.primary.hover,
    })}
    border-color: transparent;
  `,
};
