import React from "react";

import { ButtonStyled, ButtonWrapper } from "./ButtonStyled";

const Index = ({
  color,
  disabled,
  type = "",
  content,
  onClick,
  icon,
  labelPosition,
  margin,
  position,
  maxHeight,
  basic,
  fluid,
  textAlign,
  floated,
  textColor,
  opacity,
  size,
  display,
  loading,
}: any) => {
  return (
    <ButtonWrapper
      margin={margin}
      display={display}
      position={position}
      maxHeight={maxHeight}
      textAlign={textAlign}
      opacity={opacity}
    >
      <ButtonStyled
        loading={loading}
        icon={icon}
        labelPosition={labelPosition}
        disabled={disabled}
        onClick={onClick}
        type={type}
        btncolor={color}
        content={content}
        basic={basic}
        fluid={fluid}
        textalign={textAlign}
        floated={floated}
        textcolor={textColor}
        size={size}
      />
    </ButtonWrapper>
  );
};

export default Index;
