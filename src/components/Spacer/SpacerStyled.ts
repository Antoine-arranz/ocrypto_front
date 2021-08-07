import styled from "@emotion/styled";

export const SpacerStyled = styled.div(({ height }: SpacerStyledProps) => ({
  height,
}));

interface SpacerStyledProps {
  height: string;
}
