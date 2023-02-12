import styled from '@emotion/styled';
import colors from '../../theme';

const selectColor = (color: any) => {
  //@ts-ignore
  return Object.keys(colors).includes(color) ? colors[color] : color;
};

export const SegmentStyled = styled.div(({ coreStyle, props }: any) => ({
  display: props.display,
  justifyContent: props.justifyContent,
  flexDirection: props.flexDirection,
  textAlign: props.textAlign || coreStyle.textalign,
  margin: props.margin || coreStyle.margin,
  height: props.height,
  width: props.width || coreStyle.width,
  maxWidth: props.maxWidth || coreStyle.maxWidth,
  padding: props.padding || coreStyle.padding,
  border: props.border || coreStyle.border,
  borderColor:
    selectColor(props.borderColor) || selectColor(coreStyle.borderColor),
  borderRadius: props.borderRadius || coreStyle.borderRadius,
  boxShadow: props.boxShadow || coreStyle.boxShadow,
  backgroundColor:
    selectColor(props.backgroundColor) ||
    selectColor(coreStyle.backgroundColor),
  '> *': {
    display: props.childrenDisplay || coreStyle.childrenDisplay,
    margin: props.childrenMargin || coreStyle.childrenMargin,
    verticalAlign:
      props.childrenVerticalAlign || coreStyle.childrenVerticalAlign,
    fontSize: props.childrenFontSize || coreStyle.childrenFontSize,
  },
}));
