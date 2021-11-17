import { omit, pick, reduce, kebabCase, trimStart } from "lodash";
import { css } from "styled-components";
import {
  cssPseudoElements,
  cssPseudoSelectors,
  CssStandardProperties,
  PseudoElementProps,
  PseudoSelectorProps,
  StyleProps,
} from "./stylesTypes";

export const dollarProps = (props: StyleProps) => {
  const standardProperties = omit(props, [
    ...cssPseudoSelectors,
    ...cssPseudoElements,
  ]) as CssStandardProperties;

  const pseudoSelectors = pick(
    props,
    cssPseudoSelectors
  ) as PseudoSelectorProps;

  const pseudoElements = pick(props, cssPseudoElements) as PseudoElementProps;

  return css`
    ${stylePropsToCss(standardProperties)}

    ${PseudoSelectorPropsToCss(pseudoSelectors)}

    ${PseudoElementPropsToCss(pseudoElements)}
  `;
};

const stylePropsToCss = (props: CssStandardProperties) =>
  reduce<CssStandardProperties, string>(
    props,
    (result, value, key) => {
      return result.concat(`${kebabCase(trimStart(key, "$"))}:${value};`);
    },
    ""
  );

const PseudoSelectorPropsToCss = (props: PseudoSelectorProps) =>
  reduce<PseudoSelectorProps, string>(
    props,
    (result, value, key) => {
      return result.concat(`${kebabCase(trimStart(key, "$"))}:${value};`);
    },
    ""
  );

const PseudoElementPropsToCss = (props: PseudoElementProps) =>
  reduce<PseudoElementProps, string>(
    props,
    (result, value, key) => {
      return result.concat(`${kebabCase(trimStart(key, "$"))}:${value};`);
    },
    ""
  );
