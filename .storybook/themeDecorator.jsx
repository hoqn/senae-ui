import React from "react";
import { ThemeProvider } from "@emotion/react";
import WVProvider from "../src/core/provider";

import AppTheme from "./appTheme";

const ThemeDecorator = (storyFn) => (
  <WVProvider theme={AppTheme}>{storyFn()}</WVProvider>
);

export default ThemeDecorator;
