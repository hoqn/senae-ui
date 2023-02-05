import { css, Global, ThemeProvider } from "@emotion/react";
import React, { PropsWithChildren } from "react";
import { WThemeDefault } from "src/theming/default";
import WTheme from "@/theming/types/theme";
import ResetStyle from "./reset-style";

export interface WVProviderProps extends PropsWithChildren {
  theme: WTheme;
}

export default function WVProvider({
  children,
  theme = WThemeDefault,
}: WVProviderProps) {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
        `}
      />
      <ResetStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
