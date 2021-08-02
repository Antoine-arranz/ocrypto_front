import React from "react";

import { WrapperStyled } from "./wrapperStyles";

const Wrapper = (props: WrapperI) => {
  return <WrapperStyled props={props}>{props.children}</WrapperStyled>;
};

export default Wrapper;

interface WrapperI {
  display?: string;
  position?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  textAlign?: string;
  verticalAlign?: string;
  float?: string;
  overflow?: string;
  margin?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  padding?: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  backgroundColor?: string;
  flexWrap?: string;
  children?: any;
}
