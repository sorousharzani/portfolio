import { StandardProperties } from "csstype";
import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { dollarProps } from "../Utils/Styles/stylesHelpers";
import { StyleProps } from "../Utils/Styles/stylesTypes";

export type BoxProps = HTMLAttributes<HTMLDivElement> & StyleProps;

export const Box = (props: BoxProps) => {
  return <StyledDiv $display="flex" $flexDirection="column" {...props} />;
};

const StyledDiv = styled.div<BoxProps>`
  ${dollarProps}
`;
