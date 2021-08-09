import styled from "@emotion/styled";
import colors from "../../theme";

export const ClickableText = styled.a(
  ({
    color,
    margin,
    padding,
    display,
    textalign,
    textOverflow,
    overflow,
    maxWidth,
  }: any) => ({
    cursor: "Pointer",
    color: color || colors.hyperlink,
    textDecoration: "underline",
    margin: margin,
    padding: padding,
    display: display,
    textAlign: textalign,
    ":hover": {
      color: color || colors.hyperlinkHover,
    },
    textOverflow: textOverflow,
    overflow: overflow,
    maxWidth: maxWidth,
  })
);
