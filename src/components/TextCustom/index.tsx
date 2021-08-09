import React, { FunctionComponent } from 'react';
import { StyledText } from './textCustomStyled';

const TextCustom: FunctionComponent<TextCustomI> = (props) => {
  return <StyledText props={props}>{props.children}</StyledText>;
};

export default TextCustom;

interface TextCustomI {
  display?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  color?: string;
  maxWidth?: string;
  wordWrap?: string;
}
