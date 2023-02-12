import styled from "@emotion/styled";
import colors from "../../theme";
import { Button } from "semantic-ui-react";

const applyColor = (props: any) => {
  switch (props.btncolor) {
    case "blue":
      return colors.mainButton;
    case "red":
      return colors.deleteButton;
    default:
      return colors.mainButton;
  }
};

const applyHoverColor = (props: any) => {
  switch (props.btncolor) {
    case "blue":
      return colors.mainButtonHover;
    case "red":
      return colors.deleteButtonHover;
    default:
      return colors.mainButtonHover;
  }
};

export const ButtonStyled: any = styled(Button)`
  &&& {
    text-align: ${(props) => props.textAlign};
    background-color: ${(props) => applyColor(props)};
    border-radius: 2em !important;
    color: #ffff;
    padding: ${(props) => props.padding};
  }
  &&&:hover {
    background-color: ${(props) => applyHoverColor(props)};
    border-radius: 2em !important;
    color: #ffff;
  }
`;

export const ButtonWrapper = styled.div(
  ({ margin, position, maxHeight, opacity, display }: any) => ({
    display: display || "flex",
    flexDirection: "row",
    maxHeight: maxHeight ? maxHeight : "none",
    justifyContent: position ? position : "center",
    margin,
    opacity: opacity,
  })
);
