import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    darkBgColor: string;
    textColor: string;
    accentColor: string;
    bgOverviewColor: string;
  }
}
