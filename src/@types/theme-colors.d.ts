import "@emotion/react";
import type WTheme from "src/theming/types/theme";

declare module "@emotion/react" {
    export interface Theme extends WTheme { }
}
