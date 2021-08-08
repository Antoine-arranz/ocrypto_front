import React from "react";
import { ClickableText } from "./ClickableTextStyled";

const Index = ({
  color,
  children,
  onClick,
  href,
  target,
  margin,
  padding,
  display,
  textalign,
  textOverflow,
  overflow,
  maxWidth,
}: any) => {
  return (
    <ClickableText
      color={color}
      onClick={onClick}
      href={href}
      target={target}
      margin={margin}
      padding={padding}
      display={display}
      textalign={textalign}
      textOverflow={textOverflow}
      overflow={overflow}
      maxWidth={maxWidth}
    >
      {children}
    </ClickableText>
  );
};

export default Index;
