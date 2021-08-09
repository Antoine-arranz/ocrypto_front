import styled from '@emotion/styled';
import colors from '../../theme';

const selectColor = (color: any) => {
  //@ts-ignore
  return Object.keys(colors).includes(color) ? colors[color] : color;
};

export const StyledText = styled.span(({ props }: any) => ({
  display: props.display,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  margin: props.margin,
  color: selectColor(props.color),
  maxWidth: props.maxWidth,
  wordWrap: props.wordWrap,
  lineHeight: 'normal',
}));
