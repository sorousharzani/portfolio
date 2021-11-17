import { StandardProperties } from "csstype";

export type CssStandardProperties = {
  [Key in keyof StandardProperties as `$${Key}`]?: StandardProperties[Key];
};

export const SPACING = 6;

export const cssPseudoElements = [
  "$after" as const,
  "$before" as const,
  "$placeholder" as const,
];

export const cssPseudoSelectors = [
  "$active" as const,
  "$checked" as const,
  "$current" as const,
  "$default" as const,
  "$disabled" as const,
  "$empty" as const,
  "$enabled" as const,
  "$first" as const,
  "$firstChild" as const,
  "$firstOfType" as const,
  "$focus" as const,
  "$hover" as const,
  "$lastChild" as const,
  "$lastOfType" as const,
  "$nthChild" as const,
  "$nthLastChild" as const,
  "$nthLastOfType" as const,
  "$nthOfType" as const,
];

export type CssPseudoSelectors = typeof cssPseudoSelectors[0];

export type CssPseudoElements = typeof cssPseudoElements[0];

export type PseudoSelectorProps = {
  [K in CssPseudoSelectors]?: CssStandardProperties;
};

export type PseudoElementProps = {
  [K in CssPseudoElements]?: CssStandardProperties;
};

export type StyleProps = CssStandardProperties &
  PseudoSelectorProps &
  PseudoElementProps;

export enum CssLengthUnit {
  PIXEL = "px",
  VIEWPORT_HEIGHT = "vh",
  VIEWPORT_WIDTH = "vw",
  PERCENT = "%",
}
